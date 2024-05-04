/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createKeyword = /* GraphQL */ `mutation CreateKeyword(
  $input: CreateKeywordInput!
  $condition: ModelKeywordConditionInput
) {
  createKeyword(input: $input, condition: $condition) {
    id
    nome
    nivel_de_uso
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateKeywordMutationVariables,
  APITypes.CreateKeywordMutation
>;
export const updateKeyword = /* GraphQL */ `mutation UpdateKeyword(
  $input: UpdateKeywordInput!
  $condition: ModelKeywordConditionInput
) {
  updateKeyword(input: $input, condition: $condition) {
    id
    nome
    nivel_de_uso
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateKeywordMutationVariables,
  APITypes.UpdateKeywordMutation
>;
export const deleteKeyword = /* GraphQL */ `mutation DeleteKeyword(
  $input: DeleteKeywordInput!
  $condition: ModelKeywordConditionInput
) {
  deleteKeyword(input: $input, condition: $condition) {
    id
    nome
    nivel_de_uso
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteKeywordMutationVariables,
  APITypes.DeleteKeywordMutation
>;
export const createRelatorioExclusao = /* GraphQL */ `mutation CreateRelatorioExclusao(
  $input: CreateRelatorioExclusaoInput!
  $condition: ModelRelatorioExclusaoConditionInput
) {
  createRelatorioExclusao(input: $input, condition: $condition) {
    id
    keyword
    motivo_de_exclusao
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRelatorioExclusaoMutationVariables,
  APITypes.CreateRelatorioExclusaoMutation
>;
export const updateRelatorioExclusao = /* GraphQL */ `mutation UpdateRelatorioExclusao(
  $input: UpdateRelatorioExclusaoInput!
  $condition: ModelRelatorioExclusaoConditionInput
) {
  updateRelatorioExclusao(input: $input, condition: $condition) {
    id
    keyword
    motivo_de_exclusao
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRelatorioExclusaoMutationVariables,
  APITypes.UpdateRelatorioExclusaoMutation
>;
export const deleteRelatorioExclusao = /* GraphQL */ `mutation DeleteRelatorioExclusao(
  $input: DeleteRelatorioExclusaoInput!
  $condition: ModelRelatorioExclusaoConditionInput
) {
  deleteRelatorioExclusao(input: $input, condition: $condition) {
    id
    keyword
    motivo_de_exclusao
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRelatorioExclusaoMutationVariables,
  APITypes.DeleteRelatorioExclusaoMutation
>;
