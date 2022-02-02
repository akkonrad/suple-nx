
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Supplement {
    _id?: Nullable<string>;
    Name?: Nullable<string>;
    Description?: Nullable<string>;
}

export interface IQuery {
    getAllSupplements(): Nullable<Nullable<Supplement>[]> | Promise<Nullable<Nullable<Supplement>[]>>;
    getSupplementById(id?: Nullable<string>): Nullable<Supplement> | Promise<Nullable<Supplement>>;
}

type Nullable<T> = T | null;
