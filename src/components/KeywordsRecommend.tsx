import { useState } from "react";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { generateClient } from 'aws-amplify/api';
import { generateKeywordForSite } from "@/graphql/queries";

const client = generateClient();

type ExternalKeyord = {
	keyword: string
	competition: string
	search_volume: number
}

export function KeywordsRecommend() {
	const [recomendedKeywords, setrecomendedKeywords] = useState<ExternalKeyord[]>([]);
	const [loading, setLoading] = useState(false)

	async function generateKeywords() {
		try {
			setLoading(true);

			const generatedKeywords = await client.graphql({
				query: generateKeywordForSite,
			});

			const recommendations = JSON.parse(generatedKeywords.data.generateKeywordForSite) as ExternalKeyord[];
			setrecomendedKeywords(recommendations)

			setLoading(false);
		} catch (err) {
			console.log("Error generate keyword:", err)
		}
	}

	return (
		<div className="px-2 py-8 mx-10 border-2">
			<div className="grid gap-8">
				<div className="grid gap-4">
					<h1 className="text-3xl text-nowrap font-bold">Recomendação Externa</h1>
					<p className="text-gray-500 dark:text-gray-400">Clique no botão "recomendar" para gerar recomendações.</p>
				</div>
				<div className="grid gap-4">
					<Button onClick={generateKeywords}>Recomendar</Button>
				</div>
				<div className="border rounded-lg overflow-hidden">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Keyword</TableHead>
								<TableHead>Nível de uso</TableHead>
								<TableHead>Valume de busca</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{
								loading ? <TableSkeleton /> :
									recomendedKeywords.map(({ keyword, competition, search_volume }, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{keyword}</TableCell>
											<TableCell>{competition}</TableCell>
											<TableCell>{search_volume}</TableCell>
										</TableRow>
									))
							}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
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