import { AppSyncResolverEvent } from "aws-lambda";

export interface IArguments {}

export type Event = AppSyncResolverEvent<IArguments>