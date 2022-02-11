
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface SupplementInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export interface Supplement {
    id?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export interface IQuery {
    getAllSupplements(): Nullable<Nullable<Supplement>[]> | Promise<Nullable<Nullable<Supplement>[]>>;
    getSupplementById(id?: Nullable<string>): Nullable<Supplement> | Promise<Nullable<Supplement>>;
}

export interface IMutation {
    createSupplement(input?: Nullable<SupplementInput>): Nullable<Supplement> | Promise<Nullable<Supplement>>;
}

type Nullable<T> = T | null;
