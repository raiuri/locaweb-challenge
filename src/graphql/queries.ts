/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const generateKeywordForSite = /* GraphQL */ `query GenerateKeywordForSite {
  generateKeywordForSite
}
` as GeneratedQuery<
  APITypes.GenerateKeywordForSiteQueryVariables,
  APITypes.GenerateKeywordForSiteQuery
>;
export const getKeyword = /* GraphQL */ `query GetKeyword($id: ID!) {
  getKeyword(id: $id) {
    id
    nome
    nivel_de_uso
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetKeywordQueryVariables,
  APITypes.GetKeywordQuery
>;
export const listKeywords = /* GraphQL */ `query ListKeywords(
  $filter: ModelKeywordFilterInput
  $limit: Int
  $nextToken: String
) {
  listKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nome
      nivel_de_uso
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListKeywordsQueryVariables,
  APITypes.ListKeywordsQuery
>;
export const getRelatorioExclusao = /* GraphQL */ `query GetRelatorioExclusao($id: ID!) {
  getRelatorioExclusao(id: $id) {
    id
    keyword
    motivo_de_exclusao
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRelatorioExclusaoQueryVariables,
  APITypes.GetRelatorioExclusaoQuery
>;
export const listRelatorioExclusaos = /* GraphQL */ `query ListRelatorioExclusaos(
  $filter: ModelRelatorioExclusaoFilterInput
  $limit: Int
  $nextToken: String
) {
  listRelatorioExclusaos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      keyword
      motivo_de_exclusao
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelatorioExclusaosQueryVariables,
  APITypes.ListRelatorioExclusaosQuery
>;
