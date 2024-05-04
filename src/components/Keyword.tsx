import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { generateClient } from 'aws-amplify/api'

import {
  type CreateKeywordInput,
  type keyword,
  type CreateRelatorioExclusaoInput,
} from "@/API";

import {
  createKeyword,
  updateKeyword,
  deleteKeyword,
  createRelatorioExclusao,
} from "@/graphql/mutations";
import { listKeywords } from "@/graphql/queries";
import { useToast } from "@/components/ui/use-toast"

const keywordInitialState: CreateKeywordInput = {
  nome: '',
  nivel_de_uso: 'baixo',
}

const relatorioExclusaodInitialState: CreateRelatorioExclusaoInput = {
  keyword: '',
  motivo_de_exclusao: ''
}

const client = generateClient({
  authMode: 'userPool'
});

export function Keyword() {
  const [loading, setLoading] = useState(true)
  const [formState, setFormState] = useState<CreateKeywordInput>(keywordInitialState);
  const [keywords, setKeywords] = useState<keyword[] | CreateKeywordInput[]>([]);
  const [relatorioExclusao, setRelatorioExclusao] = useState<CreateRelatorioExclusaoInput>(relatorioExclusaodInitialState);

  const { toast } = useToast();

  useEffect(() => {
    fetchKeywords();
  }, []);

  async function fetchKeywords() {
    try {
      const keywordsData = await client.graphql({
        query: listKeywords,
      });

      setLoading(false);

      const keywords = keywordsData.data.listKeywords.items;
      setKeywords(keywords);
    } catch (err) {
      console.log("erro ao buscar keywords");
    }
  }

  async function addKeyword() {
    try {
      if (!formState.nome || !formState.nivel_de_uso) return;
      const keyword = { ...formState };

      setFormState(keywordInitialState);

      const { data } = await client.graphql({
        query: createKeyword,
        variables: {
          input: keyword,
        },
      });

      setKeywords([...keywords, data.createKeyword]);

    } catch (err) {
      console.log("erro ao criar keyword:", err);
    }
  }

  async function addRelatorioExclusao(keyword: string, motivo_de_exclusao: string) {
    try {
      await client.graphql({
        query: createRelatorioExclusao,
        variables: {
          input: {
            keyword,
            motivo_de_exclusao
          }
        }
      })

    } catch (err) {
      console.log("erro ao criar relatorio de exclusao");
    }
  }
  
  async function editKeyword(id: string) {
    try {
      const { data } = await client.graphql({
        query: updateKeyword,
        variables: {
          input: {
            id: id,
            nome: formState.nome,
            nivel_de_uso: formState.nivel_de_uso
          }
        }
      })

      const keywordsUpdated = keywords.filter((keyword) => {
        return keyword.id !== data.updateKeyword.id
      })

      setKeywords([...keywordsUpdated, data.updateKeyword ])

    } catch(err) {
      console.log('Erro ao tentar editar');
    }
  }

  async function funcDeleteKeyword(id: string) {
    try {
      const { data } = await client.graphql({
        query: deleteKeyword,
        variables: {
          input: {
            id: id,
          }
        }
      })

      await addRelatorioExclusao(data.deleteKeyword.nome, relatorioExclusao.motivo_de_exclusao!)

      setKeywords(prevKeywords => {
        return prevKeywords.filter(keyword => keyword.id !== id);
      });

      setFormState(keywordInitialState)
    } catch (err) {
      console.log("erro ao deletar keyword");
    }
  }

  return (
    <div className="px-2 py-8 mx-10 border-2">
      <div className="grid gap-8">
        <div className="grid gap-4">
          <h1 className="text-3xl text-nowrap font-bold">Adicionar Palavra-chave</h1>
          <p className="text-gray-500 dark:text-gray-400">Insira uma palavra-chave e o seu nível de uso.</p>
        </div>
        <div className="grid gap-4">
          <div className="grid sm:grid-cols-[1fr_auto] gap-4">
            <div className="grid gap-2">
              <Label htmlFor="keyword">Keyword</Label>
              <Input
                onChange={(event) =>
                  setFormState({ ...formState, nome: event.target.value })
                }
                value={formState.nome}
                placeholder="Nome da keyword"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="usage-level">Nível de Uso</Label>
              <select onChange={(event) =>
                setFormState({ ...formState, nivel_de_uso: event.target.value })
              }>
                <option value="baixo">Baixo</option>
                <option value="médio">Médio</option>
                <option value="alto">Alto</option>
              </select>
            </div>
          </div>
          <Button onClick={() => {
            addKeyword();
            if (!formState.nome || !formState.nivel_de_uso) return;
            toast({
              description: "Criado com sucesso.",
            })
          }
          }>Adicionar</Button>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Keyword</TableHead>
                <TableHead>Nível de uso</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? <TableSkeleton /> : keywords.map(({ id, nome, nivel_de_uso }, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{nome}</TableCell>
                  <TableCell>{nivel_de_uso}</TableCell>

                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setFormState({ nome, nivel_de_uso, id})} size="icon" variant="ghost">
                          <PencilIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Keyword</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid sm:grid-cols-[1fr_auto] gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="keyword">Keyword</Label>
                              <Input
                                defaultValue={nome}
                                onChange={(event) =>
                                  setFormState({ ...formState, nome: event.target.value })
                                }
                                placeholder="Nome da keyword"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="usage-level">Nível de Uso</Label>
                              <select onChange={(event) =>
                                setFormState({ ...formState, nivel_de_uso: event.target.value })
                              }>
                                <option defaultValue={nivel_de_uso} disabled>{nivel_de_uso}</option>
                                <option value="baixo">Baixo</option>
                                <option value="médio">Médio</option>
                                <option value="alto">Alto</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button onClick={() => {
                              editKeyword(id!);
                              toast({
                                description: "Editado com sucesso.",
                              })
                            }
                            }
                            >Salvar</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>

                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setRelatorioExclusao(relatorioExclusaodInitialState)} size="icon" variant="ghost">
                          <Trash2Icon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Exluir Keyword</DialogTitle>
                          <DialogDescription>
                            Por favor informe o motivo da exclusão.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Textarea
                              placeholder="Digite o motivo da exclusão."

                              className="col-span-6"
                              onChange={(event) => {
                                setRelatorioExclusao({...relatorioExclusao, motivo_de_exclusao: event.target.value});
                              }}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button onClick={() => {
                              funcDeleteKeyword(id!);
                              toast({
                                description: "Excluído com sucesso.",
                              })
                            }
                            }
                            >Excluir</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

// <PencilIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors" />

function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

function Trash2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}

export function TableSkeleton() {

  return (
    <>
      {
        Array.from({ length: 5 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <Skeleton className="h-4 w-full rounded-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-full rounded-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-full rounded-full" />
            </TableCell>
          </TableRow>
        )
        )
      }
    </>
  )
}
