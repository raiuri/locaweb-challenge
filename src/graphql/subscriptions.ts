/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateKeyword = /* GraphQL */ `subscription OnCreateKeyword($filter: ModelSubscriptionKeywordFilterInput) {
  onCreateKeyword(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateKeywordSubscriptionVariables,
  APITypes.OnCreateKeywordSubscription
>;
export const onUpdateKeyword = /* GraphQL */ `subscription OnUpdateKeyword($filter: ModelSubscriptionKeywordFilterInput) {
  onUpdateKeyword(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateKeywordSubscriptionVariables,
  APITypes.OnUpdateKeywordSubscription
>;
export const onDeleteKeyword = /* GraphQL */ `subscription OnDeleteKeyword($filter: ModelSubscriptionKeywordFilterInput) {
  onDeleteKeyword(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteKeywordSubscriptionVariables,
  APITypes.OnDeleteKeywordSubscription
>;
