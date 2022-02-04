
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Supplement {
    _id?: Nullable<string>;
    Name?: Nullable<string>;
    Description?: Nullable<string>;
}

export abstract class IQuery {
    abstract getAllSupplements(): Nullable<Nullable<Supplement>[]> | Promise<Nullable<Nullable<Supplement>[]>>;

    abstract getSupplementById(id?: Nullable<string>): Nullable<Supplement> | Promise<Nullable<Supplement>>;
}

type Nullable<T> = T | null;
