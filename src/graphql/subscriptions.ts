/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateKeyword = /* GraphQL */ `subscription OnCreateKeyword(
  $filter: ModelSubscriptionKeywordFilterInput
  $owner: String
) {
  onCreateKeyword(filter: $filter, owner: $owner) {
    id
    nome
    nivel_de_uso
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateKeywordSubscriptionVariables,
  APITypes.OnCreateKeywordSubscription
>;
export const onUpdateKeyword = /* GraphQL */ `subscription OnUpdateKeyword(
  $filter: ModelSubscriptionKeywordFilterInput
  $owner: String
) {
  onUpdateKeyword(filter: $filter, owner: $owner) {
    id
    nome
    nivel_de_uso
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateKeywordSubscriptionVariables,
  APITypes.OnUpdateKeywordSubscription
>;
export const onDeleteKeyword = /* GraphQL */ `subscription OnDeleteKeyword(
  $filter: ModelSubscriptionKeywordFilterInput
  $owner: String
) {
  onDeleteKeyword(filter: $filter, owner: $owner) {
    id
    nome
    nivel_de_uso
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteKeywordSubscriptionVariables,
  APITypes.OnDeleteKeywordSubscription
>;
export const onCreateRelatorioExclusao = /* GraphQL */ `subscription OnCreateRelatorioExclusao(
  $filter: ModelSubscriptionRelatorioExclusaoFilterInput
) {
  onCreateRelatorioExclusao(filter: $filter) {
    id
    keyword
    motivo_de_exclusao
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRelatorioExclusaoSubscriptionVariables,
  APITypes.OnCreateRelatorioExclusaoSubscription
>;
export const onUpdateRelatorioExclusao = /* GraphQL */ `subscription OnUpdateRelatorioExclusao(
  $filter: ModelSubscriptionRelatorioExclusaoFilterInput
) {
  onUpdateRelatorioExclusao(filter: $filter) {
    id
    keyword
    motivo_de_exclusao
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRelatorioExclusaoSubscriptionVariables,
  APITypes.OnUpdateRelatorioExclusaoSubscription
>;
export const onDeleteRelatorioExclusao = /* GraphQL */ `subscription OnDeleteRelatorioExclusao(
  $filter: ModelSubscriptionRelatorioExclusaoFilterInput
) {
  onDeleteRelatorioExclusao(filter: $filter) {
    id
    keyword
    motivo_de_exclusao
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRelatorioExclusaoSubscriptionVariables,
  APITypes.OnDeleteRelatorioExclusaoSubscription
>;
