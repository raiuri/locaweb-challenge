/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getKeyword = /* GraphQL */ `query GetKeyword($id: ID!) {
  getKeyword(id: $id) {
    id
    nome
    nivel_de_uso
    ativo
    motivo_de_exclusao
    createdAt
    updatedAt
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
      ativo
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
  APITypes.ListKeywordsQueryVariables,
  APITypes.ListKeywordsQuery
>;
