/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateKeywordInput = {
  id?: string | null,
  nome: string,
  nivel_de_uso: string,
};

export type ModelKeywordConditionInput = {
  nome?: ModelStringInput | null,
  nivel_de_uso?: ModelStringInput | null,
  and?: Array< ModelKeywordConditionInput | null > | null,
  or?: Array< ModelKeywordConditionInput | null > | null,
  not?: ModelKeywordConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type keyword = {
  __typename: "keyword",
  id: string,
  nome: string,
  nivel_de_uso: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateKeywordInput = {
  id: string,
  nome?: string | null,
  nivel_de_uso?: string | null,
};

export type DeleteKeywordInput = {
  id: string,
};

export type CreateRelatorioExclusaoInput = {
  id?: string | null,
  keyword: string,
  motivo_de_exclusao?: string | null,
};

export type ModelRelatorioExclusaoConditionInput = {
  keyword?: ModelStringInput | null,
  motivo_de_exclusao?: ModelStringInput | null,
  and?: Array< ModelRelatorioExclusaoConditionInput | null > | null,
  or?: Array< ModelRelatorioExclusaoConditionInput | null > | null,
  not?: ModelRelatorioExclusaoConditionInput | null,
};

export type relatorioExclusao = {
  __typename: "relatorioExclusao",
  id: string,
  keyword: string,
  motivo_de_exclusao?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRelatorioExclusaoInput = {
  id: string,
  keyword?: string | null,
  motivo_de_exclusao?: string | null,
};

export type DeleteRelatorioExclusaoInput = {
  id: string,
};

export type ModelKeywordFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  nivel_de_uso?: ModelStringInput | null,
  and?: Array< ModelKeywordFilterInput | null > | null,
  or?: Array< ModelKeywordFilterInput | null > | null,
  not?: ModelKeywordFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelKeywordConnection = {
  __typename: "ModelKeywordConnection",
  items:  Array<keyword | null >,
  nextToken?: string | null,
};

export type ModelRelatorioExclusaoFilterInput = {
  id?: ModelIDInput | null,
  keyword?: ModelStringInput | null,
  motivo_de_exclusao?: ModelStringInput | null,
  and?: Array< ModelRelatorioExclusaoFilterInput | null > | null,
  or?: Array< ModelRelatorioExclusaoFilterInput | null > | null,
  not?: ModelRelatorioExclusaoFilterInput | null,
};

export type ModelRelatorioExclusaoConnection = {
  __typename: "ModelRelatorioExclusaoConnection",
  items:  Array<relatorioExclusao | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionKeywordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  nivel_de_uso?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionKeywordFilterInput | null > | null,
  or?: Array< ModelSubscriptionKeywordFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRelatorioExclusaoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  keyword?: ModelSubscriptionStringInput | null,
  motivo_de_exclusao?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRelatorioExclusaoFilterInput | null > | null,
  or?: Array< ModelSubscriptionRelatorioExclusaoFilterInput | null > | null,
};

export type CreateKeywordMutationVariables = {
  input: CreateKeywordInput,
  condition?: ModelKeywordConditionInput | null,
};

export type CreateKeywordMutation = {
  createKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateKeywordMutationVariables = {
  input: UpdateKeywordInput,
  condition?: ModelKeywordConditionInput | null,
};

export type UpdateKeywordMutation = {
  updateKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteKeywordMutationVariables = {
  input: DeleteKeywordInput,
  condition?: ModelKeywordConditionInput | null,
};

export type DeleteKeywordMutation = {
  deleteKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateRelatorioExclusaoMutationVariables = {
  input: CreateRelatorioExclusaoInput,
  condition?: ModelRelatorioExclusaoConditionInput | null,
};

export type CreateRelatorioExclusaoMutation = {
  createRelatorioExclusao?:  {
    __typename: "relatorioExclusao",
    id: string,
    keyword: string,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRelatorioExclusaoMutationVariables = {
  input: UpdateRelatorioExclusaoInput,
  condition?: ModelRelatorioExclusaoConditionInput | null,
};

export type UpdateRelatorioExclusaoMutation = {
  updateRelatorioExclusao?:  {
    __typename: "relatorioExclusao",
    id: string,
    keyword: string,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRelatorioExclusaoMutationVariables = {
  input: DeleteRelatorioExclusaoInput,
  condition?: ModelRelatorioExclusaoConditionInput | null,
};

export type DeleteRelatorioExclusaoMutation = {
  deleteRelatorioExclusao?:  {
    __typename: "relatorioExclusao",
    id: string,
    keyword: string,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GenerateKeywordForSiteQueryVariables = {
};

export type GenerateKeywordForSiteQuery = {
  generateKeywordForSite: string,
};

export type GetKeywordQueryVariables = {
  id: string,
};

export type GetKeywordQuery = {
  getKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListKeywordsQueryVariables = {
  filter?: ModelKeywordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKeywordsQuery = {
  listKeywords?:  {
    __typename: "ModelKeywordConnection",
    items:  Array< {
      __typename: "keyword",
      id: string,
      nome: string,
      nivel_de_uso: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelatorioExclusaoQueryVariables = {
  id: string,
};

export type GetRelatorioExclusaoQuery = {
  getRelatorioExclusao?:  {
    __typename: "relatorioExclusao",
    id: string,
    keyword: string,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRelatorioExclusaosQueryVariables = {
  filter?: ModelRelatorioExclusaoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelatorioExclusaosQuery = {
  listRelatorioExclusaos?:  {
    __typename: "ModelRelatorioExclusaoConnection",
    items:  Array< {
      __typename: "relatorioExclusao",
      id: string,
      keyword: string,
      motivo_de_exclusao?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateKeywordSubscriptionVariables = {
  filter?: ModelSubscriptionKeywordFilterInput | null,
  owner?: string | null,
};

export type OnCreateKeywordSubscription = {
  onCreateKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateKeywordSubscriptionVariables = {
  filter?: ModelSubscriptionKeywordFilterInput | null,
  owner?: string | null,
};

export type OnUpdateKeywordSubscription = {
  onUpdateKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteKeywordSubscriptionVariables = {
  filter?: ModelSubscriptionKeywordFilterInput | null,
  owner?: string | null,
};

export type OnDeleteKeywordSubscription = {
  onDeleteKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateRelatorioExclusaoSubscriptionVariables = {
  filter?: ModelSubscriptionRelatorioExclusaoFilterInput | null,
};

export type OnCreateRelatorioExclusaoSubscription = {
  onCreateRelatorioExclusao?:  {
    __typename: "relatorioExclusao",
    id: string,
    keyword: string,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRelatorioExclusaoSubscriptionVariables = {
  filter?: ModelSubscriptionRelatorioExclusaoFilterInput | null,
};

export type OnUpdateRelatorioExclusaoSubscription = {
  onUpdateRelatorioExclusao?:  {
    __typename: "relatorioExclusao",
    id: string,
    keyword: string,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRelatorioExclusaoSubscriptionVariables = {
  filter?: ModelSubscriptionRelatorioExclusaoFilterInput | null,
};

export type OnDeleteRelatorioExclusaoSubscription = {
  onDeleteRelatorioExclusao?:  {
    __typename: "relatorioExclusao",
    id: string,
    keyword: string,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
