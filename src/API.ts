/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateKeywordInput = {
  id?: string | null,
  nome: string,
  nivel_de_uso: string,
  ativo?: boolean | null,
  motivo_de_exclusao?: string | null,
};

export type ModelKeywordConditionInput = {
  nome?: ModelStringInput | null,
  nivel_de_uso?: ModelStringInput | null,
  ativo?: ModelBooleanInput | null,
  motivo_de_exclusao?: ModelStringInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type keyword = {
  __typename: "keyword",
  id: string,
  nome: string,
  nivel_de_uso: string,
  ativo?: boolean | null,
  motivo_de_exclusao?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateKeywordInput = {
  id: string,
  nome?: string | null,
  nivel_de_uso?: string | null,
  ativo?: boolean | null,
  motivo_de_exclusao?: string | null,
};

export type DeleteKeywordInput = {
  id: string,
};

export type ModelKeywordFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  nivel_de_uso?: ModelStringInput | null,
  ativo?: ModelBooleanInput | null,
  motivo_de_exclusao?: ModelStringInput | null,
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

export type ModelSubscriptionKeywordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  nivel_de_uso?: ModelSubscriptionStringInput | null,
  ativo?: ModelSubscriptionBooleanInput | null,
  motivo_de_exclusao?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
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
    ativo?: boolean | null,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
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
    ativo?: boolean | null,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
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
    ativo?: boolean | null,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    ativo?: boolean | null,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
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
      ativo?: boolean | null,
      motivo_de_exclusao?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateKeywordSubscriptionVariables = {
  filter?: ModelSubscriptionKeywordFilterInput | null,
};

export type OnCreateKeywordSubscription = {
  onCreateKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    ativo?: boolean | null,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateKeywordSubscriptionVariables = {
  filter?: ModelSubscriptionKeywordFilterInput | null,
};

export type OnUpdateKeywordSubscription = {
  onUpdateKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    ativo?: boolean | null,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteKeywordSubscriptionVariables = {
  filter?: ModelSubscriptionKeywordFilterInput | null,
};

export type OnDeleteKeywordSubscription = {
  onDeleteKeyword?:  {
    __typename: "keyword",
    id: string,
    nome: string,
    nivel_de_uso: string,
    ativo?: boolean | null,
    motivo_de_exclusao?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
