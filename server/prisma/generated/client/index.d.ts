
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model hour_entry
 * 
 */
export type hour_entry = $Result.DefaultSelection<Prisma.$hour_entryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DriverSignature: {
  SIGNED_TO_GO: 'SIGNED_TO_GO',
  SIGNED_TO_RETURN: 'SIGNED_TO_RETURN',
  BETWEEN: 'BETWEEN',
  NOT_SIGNED: 'NOT_SIGNED'
};

export type DriverSignature = (typeof DriverSignature)[keyof typeof DriverSignature]


export const HourEntryStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type HourEntryStatus = (typeof HourEntryStatus)[keyof typeof HourEntryStatus]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type DriverSignature = $Enums.DriverSignature

export const DriverSignature: typeof $Enums.DriverSignature

export type HourEntryStatus = $Enums.HourEntryStatus

export const HourEntryStatus: typeof $Enums.HourEntryStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hour_entry`: Exposes CRUD operations for the **hour_entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hour_entries
    * const hour_entries = await prisma.hour_entry.findMany()
    * ```
    */
  get hour_entry(): Prisma.hour_entryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Site: 'Site',
    project: 'project',
    hour_entry: 'hour_entry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "site" | "project" | "hour_entry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      hour_entry: {
        payload: Prisma.$hour_entryPayload<ExtArgs>
        fields: Prisma.hour_entryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hour_entryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hour_entryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>
          }
          findFirst: {
            args: Prisma.hour_entryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hour_entryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>
          }
          findMany: {
            args: Prisma.hour_entryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>[]
          }
          create: {
            args: Prisma.hour_entryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>
          }
          createMany: {
            args: Prisma.hour_entryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hour_entryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>[]
          }
          delete: {
            args: Prisma.hour_entryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>
          }
          update: {
            args: Prisma.hour_entryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>
          }
          deleteMany: {
            args: Prisma.hour_entryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hour_entryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hour_entryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>[]
          }
          upsert: {
            args: Prisma.hour_entryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_entryPayload>
          }
          aggregate: {
            args: Prisma.Hour_entryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHour_entry>
          }
          groupBy: {
            args: Prisma.hour_entryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hour_entryGroupByOutputType>[]
          }
          count: {
            args: Prisma.hour_entryCountArgs<ExtArgs>
            result: $Utils.Optional<Hour_entryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    site?: SiteOmit
    project?: projectOmit
    hour_entry?: hour_entryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hourEntries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hourEntries?: boolean | UserCountOutputTypeCountHourEntriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHourEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hour_entryWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    hourEntries: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hourEntries?: boolean | VehicleCountOutputTypeCountHourEntriesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountHourEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hour_entryWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    projects: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | SiteCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    hourEntries: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hourEntries?: boolean | ProjectCountOutputTypeCountHourEntriesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountHourEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hour_entryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updateAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updateAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    createdAt: number
    updateAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdAt: Date
    updateAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
    role?: boolean
    hourEntries?: boolean | User$hourEntriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "createdAt" | "updateAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hourEntries?: boolean | User$hourEntriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hourEntries: Prisma.$hour_entryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      password: string
      createdAt: Date
      updateAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hourEntries<T extends User$hourEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$hourEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hourEntries
   */
  export type User$hourEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    where?: hour_entryWhereInput
    orderBy?: hour_entryOrderByWithRelationInput | hour_entryOrderByWithRelationInput[]
    cursor?: hour_entryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hour_entryScalarFieldEnum | Hour_entryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    id: number | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    plate: string | null
    brand: string | null
    model: string | null
    active: boolean | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    plate: string | null
    brand: string | null
    model: string | null
    active: boolean | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    plate: number
    brand: number
    model: number
    active: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    active?: true
    createdAt?: true
    updateAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    active?: true
    createdAt?: true
    updateAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    active?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: number
    plate: string
    brand: string
    model: string
    active: boolean
    createdAt: Date
    updateAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
    hourEntries?: boolean | Vehicle$hourEntriesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plate" | "brand" | "model" | "active" | "createdAt" | "updateAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hourEntries?: boolean | Vehicle$hourEntriesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      hourEntries: Prisma.$hour_entryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plate: string
      brand: string
      model: string
      active: boolean
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hourEntries<T extends Vehicle$hourEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$hourEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'Int'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly active: FieldRef<"Vehicle", 'Boolean'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updateAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.hourEntries
   */
  export type Vehicle$hourEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    where?: hour_entryWhereInput
    orderBy?: hour_entryOrderByWithRelationInput | hour_entryOrderByWithRelationInput[]
    cursor?: hour_entryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hour_entryScalarFieldEnum | Hour_entryScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteSumAggregateOutputType = {
    id: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SiteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    active: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    id?: true
  }

  export type SiteSumAggregateInputType = {
    id?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    active?: true
    createdAt?: true
    updateAt?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    active?: true
    createdAt?: true
    updateAt?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    active?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: number
    name: string
    description: string | null
    active: boolean
    createdAt: Date
    updateAt: Date
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
    projects?: boolean | Site$projectsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "active" | "createdAt" | "updateAt", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Site$projectsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      projects: Prisma.$projectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      active: boolean
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Site$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Site$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'Int'>
    readonly name: FieldRef<"Site", 'String'>
    readonly description: FieldRef<"Site", 'String'>
    readonly active: FieldRef<"Site", 'Boolean'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updateAt: FieldRef<"Site", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.projects
   */
  export type Site$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    siteId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    siteId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    projectNumber: string | null
    tittle: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updateAt: Date | null
    siteId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    projectNumber: string | null
    tittle: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updateAt: Date | null
    siteId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    projectNumber: number
    tittle: number
    description: number
    active: number
    createdAt: number
    updateAt: number
    siteId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    siteId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    siteId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    projectNumber?: true
    tittle?: true
    description?: true
    active?: true
    createdAt?: true
    updateAt?: true
    siteId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    projectNumber?: true
    tittle?: true
    description?: true
    active?: true
    createdAt?: true
    updateAt?: true
    siteId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    projectNumber?: true
    tittle?: true
    description?: true
    active?: true
    createdAt?: true
    updateAt?: true
    siteId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    projectNumber: string
    tittle: string | null
    description: string | null
    active: boolean
    createdAt: Date
    updateAt: Date
    siteId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectNumber?: boolean
    tittle?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    hourEntries?: boolean | project$hourEntriesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectNumber?: boolean
    tittle?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectNumber?: boolean
    tittle?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    id?: boolean
    projectNumber?: boolean
    tittle?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updateAt?: boolean
    siteId?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectNumber" | "tittle" | "description" | "active" | "createdAt" | "updateAt" | "siteId", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    hourEntries?: boolean | project$hourEntriesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type projectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      hourEntries: Prisma.$hour_entryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectNumber: string
      tittle: string | null
      description: string | null
      active: boolean
      createdAt: Date
      updateAt: Date
      siteId: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hourEntries<T extends project$hourEntriesArgs<ExtArgs> = {}>(args?: Subset<T, project$hourEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly projectNumber: FieldRef<"project", 'String'>
    readonly tittle: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly active: FieldRef<"project", 'Boolean'>
    readonly createdAt: FieldRef<"project", 'DateTime'>
    readonly updateAt: FieldRef<"project", 'DateTime'>
    readonly siteId: FieldRef<"project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.hourEntries
   */
  export type project$hourEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    where?: hour_entryWhereInput
    orderBy?: hour_entryOrderByWithRelationInput | hour_entryOrderByWithRelationInput[]
    cursor?: hour_entryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hour_entryScalarFieldEnum | Hour_entryScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model hour_entry
   */

  export type AggregateHour_entry = {
    _count: Hour_entryCountAggregateOutputType | null
    _avg: Hour_entryAvgAggregateOutputType | null
    _sum: Hour_entrySumAggregateOutputType | null
    _min: Hour_entryMinAggregateOutputType | null
    _max: Hour_entryMaxAggregateOutputType | null
  }

  export type Hour_entryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    vehicleId: number | null
    projectId: number | null
    normalHours: Decimal | null
    extra50Hours: Decimal | null
    night50Hours: Decimal | null
    extra100Hours: Decimal | null
    approvedId: number | null
  }

  export type Hour_entrySumAggregateOutputType = {
    id: number | null
    userId: number | null
    vehicleId: number | null
    projectId: number | null
    normalHours: Decimal | null
    extra50Hours: Decimal | null
    night50Hours: Decimal | null
    extra100Hours: Decimal | null
    approvedId: number | null
  }

  export type Hour_entryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    vehicleId: number | null
    projectId: number | null
    workDate: Date | null
    startTime: Date | null
    endTime: Date | null
    normalHours: Decimal | null
    extra50Hours: Decimal | null
    night50Hours: Decimal | null
    extra100Hours: Decimal | null
    tenHourMeal: boolean | null
    launchWork: boolean | null
    pernoctation: boolean | null
    dailyMeal: boolean | null
    isHoliday: boolean | null
    driverSignature: $Enums.DriverSignature | null
    taskDetails: string | null
    status: $Enums.HourEntryStatus | null
    approvedId: number | null
    approvedDate: Date | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type Hour_entryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    vehicleId: number | null
    projectId: number | null
    workDate: Date | null
    startTime: Date | null
    endTime: Date | null
    normalHours: Decimal | null
    extra50Hours: Decimal | null
    night50Hours: Decimal | null
    extra100Hours: Decimal | null
    tenHourMeal: boolean | null
    launchWork: boolean | null
    pernoctation: boolean | null
    dailyMeal: boolean | null
    isHoliday: boolean | null
    driverSignature: $Enums.DriverSignature | null
    taskDetails: string | null
    status: $Enums.HourEntryStatus | null
    approvedId: number | null
    approvedDate: Date | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type Hour_entryCountAggregateOutputType = {
    id: number
    userId: number
    vehicleId: number
    projectId: number
    workDate: number
    startTime: number
    endTime: number
    normalHours: number
    extra50Hours: number
    night50Hours: number
    extra100Hours: number
    tenHourMeal: number
    launchWork: number
    pernoctation: number
    dailyMeal: number
    isHoliday: number
    driverSignature: number
    taskDetails: number
    status: number
    approvedId: number
    approvedDate: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type Hour_entryAvgAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    projectId?: true
    normalHours?: true
    extra50Hours?: true
    night50Hours?: true
    extra100Hours?: true
    approvedId?: true
  }

  export type Hour_entrySumAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    projectId?: true
    normalHours?: true
    extra50Hours?: true
    night50Hours?: true
    extra100Hours?: true
    approvedId?: true
  }

  export type Hour_entryMinAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    projectId?: true
    workDate?: true
    startTime?: true
    endTime?: true
    normalHours?: true
    extra50Hours?: true
    night50Hours?: true
    extra100Hours?: true
    tenHourMeal?: true
    launchWork?: true
    pernoctation?: true
    dailyMeal?: true
    isHoliday?: true
    driverSignature?: true
    taskDetails?: true
    status?: true
    approvedId?: true
    approvedDate?: true
    createdAt?: true
    updateAt?: true
  }

  export type Hour_entryMaxAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    projectId?: true
    workDate?: true
    startTime?: true
    endTime?: true
    normalHours?: true
    extra50Hours?: true
    night50Hours?: true
    extra100Hours?: true
    tenHourMeal?: true
    launchWork?: true
    pernoctation?: true
    dailyMeal?: true
    isHoliday?: true
    driverSignature?: true
    taskDetails?: true
    status?: true
    approvedId?: true
    approvedDate?: true
    createdAt?: true
    updateAt?: true
  }

  export type Hour_entryCountAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    projectId?: true
    workDate?: true
    startTime?: true
    endTime?: true
    normalHours?: true
    extra50Hours?: true
    night50Hours?: true
    extra100Hours?: true
    tenHourMeal?: true
    launchWork?: true
    pernoctation?: true
    dailyMeal?: true
    isHoliday?: true
    driverSignature?: true
    taskDetails?: true
    status?: true
    approvedId?: true
    approvedDate?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type Hour_entryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hour_entry to aggregate.
     */
    where?: hour_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_entries to fetch.
     */
    orderBy?: hour_entryOrderByWithRelationInput | hour_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hour_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hour_entries
    **/
    _count?: true | Hour_entryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hour_entryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hour_entrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hour_entryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hour_entryMaxAggregateInputType
  }

  export type GetHour_entryAggregateType<T extends Hour_entryAggregateArgs> = {
        [P in keyof T & keyof AggregateHour_entry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHour_entry[P]>
      : GetScalarType<T[P], AggregateHour_entry[P]>
  }




  export type hour_entryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hour_entryWhereInput
    orderBy?: hour_entryOrderByWithAggregationInput | hour_entryOrderByWithAggregationInput[]
    by: Hour_entryScalarFieldEnum[] | Hour_entryScalarFieldEnum
    having?: hour_entryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hour_entryCountAggregateInputType | true
    _avg?: Hour_entryAvgAggregateInputType
    _sum?: Hour_entrySumAggregateInputType
    _min?: Hour_entryMinAggregateInputType
    _max?: Hour_entryMaxAggregateInputType
  }

  export type Hour_entryGroupByOutputType = {
    id: number
    userId: number
    vehicleId: number
    projectId: number
    workDate: Date
    startTime: Date
    endTime: Date
    normalHours: Decimal
    extra50Hours: Decimal
    night50Hours: Decimal
    extra100Hours: Decimal
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails: string | null
    status: $Enums.HourEntryStatus
    approvedId: number | null
    approvedDate: Date | null
    createdAt: Date
    updateAt: Date
    _count: Hour_entryCountAggregateOutputType | null
    _avg: Hour_entryAvgAggregateOutputType | null
    _sum: Hour_entrySumAggregateOutputType | null
    _min: Hour_entryMinAggregateOutputType | null
    _max: Hour_entryMaxAggregateOutputType | null
  }

  type GetHour_entryGroupByPayload<T extends hour_entryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hour_entryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hour_entryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hour_entryGroupByOutputType[P]>
            : GetScalarType<T[P], Hour_entryGroupByOutputType[P]>
        }
      >
    >


  export type hour_entrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    projectId?: boolean
    workDate?: boolean
    startTime?: boolean
    endTime?: boolean
    normalHours?: boolean
    extra50Hours?: boolean
    night50Hours?: boolean
    extra100Hours?: boolean
    tenHourMeal?: boolean
    launchWork?: boolean
    pernoctation?: boolean
    dailyMeal?: boolean
    isHoliday?: boolean
    driverSignature?: boolean
    taskDetails?: boolean
    status?: boolean
    approvedId?: boolean
    approvedDate?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hour_entry"]>

  export type hour_entrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    projectId?: boolean
    workDate?: boolean
    startTime?: boolean
    endTime?: boolean
    normalHours?: boolean
    extra50Hours?: boolean
    night50Hours?: boolean
    extra100Hours?: boolean
    tenHourMeal?: boolean
    launchWork?: boolean
    pernoctation?: boolean
    dailyMeal?: boolean
    isHoliday?: boolean
    driverSignature?: boolean
    taskDetails?: boolean
    status?: boolean
    approvedId?: boolean
    approvedDate?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hour_entry"]>

  export type hour_entrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    projectId?: boolean
    workDate?: boolean
    startTime?: boolean
    endTime?: boolean
    normalHours?: boolean
    extra50Hours?: boolean
    night50Hours?: boolean
    extra100Hours?: boolean
    tenHourMeal?: boolean
    launchWork?: boolean
    pernoctation?: boolean
    dailyMeal?: boolean
    isHoliday?: boolean
    driverSignature?: boolean
    taskDetails?: boolean
    status?: boolean
    approvedId?: boolean
    approvedDate?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hour_entry"]>

  export type hour_entrySelectScalar = {
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    projectId?: boolean
    workDate?: boolean
    startTime?: boolean
    endTime?: boolean
    normalHours?: boolean
    extra50Hours?: boolean
    night50Hours?: boolean
    extra100Hours?: boolean
    tenHourMeal?: boolean
    launchWork?: boolean
    pernoctation?: boolean
    dailyMeal?: boolean
    isHoliday?: boolean
    driverSignature?: boolean
    taskDetails?: boolean
    status?: boolean
    approvedId?: boolean
    approvedDate?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type hour_entryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vehicleId" | "projectId" | "workDate" | "startTime" | "endTime" | "normalHours" | "extra50Hours" | "night50Hours" | "extra100Hours" | "tenHourMeal" | "launchWork" | "pernoctation" | "dailyMeal" | "isHoliday" | "driverSignature" | "taskDetails" | "status" | "approvedId" | "approvedDate" | "createdAt" | "updateAt", ExtArgs["result"]["hour_entry"]>
  export type hour_entryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type hour_entryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type hour_entryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $hour_entryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hour_entry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      vehicleId: number
      projectId: number
      workDate: Date
      startTime: Date
      endTime: Date
      normalHours: Prisma.Decimal
      extra50Hours: Prisma.Decimal
      night50Hours: Prisma.Decimal
      extra100Hours: Prisma.Decimal
      tenHourMeal: boolean
      launchWork: boolean
      pernoctation: boolean
      dailyMeal: boolean
      isHoliday: boolean
      driverSignature: $Enums.DriverSignature
      taskDetails: string | null
      status: $Enums.HourEntryStatus
      approvedId: number | null
      approvedDate: Date | null
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["hour_entry"]>
    composites: {}
  }

  type hour_entryGetPayload<S extends boolean | null | undefined | hour_entryDefaultArgs> = $Result.GetResult<Prisma.$hour_entryPayload, S>

  type hour_entryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hour_entryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hour_entryCountAggregateInputType | true
    }

  export interface hour_entryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hour_entry'], meta: { name: 'hour_entry' } }
    /**
     * Find zero or one Hour_entry that matches the filter.
     * @param {hour_entryFindUniqueArgs} args - Arguments to find a Hour_entry
     * @example
     * // Get one Hour_entry
     * const hour_entry = await prisma.hour_entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hour_entryFindUniqueArgs>(args: SelectSubset<T, hour_entryFindUniqueArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hour_entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hour_entryFindUniqueOrThrowArgs} args - Arguments to find a Hour_entry
     * @example
     * // Get one Hour_entry
     * const hour_entry = await prisma.hour_entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hour_entryFindUniqueOrThrowArgs>(args: SelectSubset<T, hour_entryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hour_entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_entryFindFirstArgs} args - Arguments to find a Hour_entry
     * @example
     * // Get one Hour_entry
     * const hour_entry = await prisma.hour_entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hour_entryFindFirstArgs>(args?: SelectSubset<T, hour_entryFindFirstArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hour_entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_entryFindFirstOrThrowArgs} args - Arguments to find a Hour_entry
     * @example
     * // Get one Hour_entry
     * const hour_entry = await prisma.hour_entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hour_entryFindFirstOrThrowArgs>(args?: SelectSubset<T, hour_entryFindFirstOrThrowArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hour_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_entryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hour_entries
     * const hour_entries = await prisma.hour_entry.findMany()
     * 
     * // Get first 10 Hour_entries
     * const hour_entries = await prisma.hour_entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hour_entryWithIdOnly = await prisma.hour_entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hour_entryFindManyArgs>(args?: SelectSubset<T, hour_entryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hour_entry.
     * @param {hour_entryCreateArgs} args - Arguments to create a Hour_entry.
     * @example
     * // Create one Hour_entry
     * const Hour_entry = await prisma.hour_entry.create({
     *   data: {
     *     // ... data to create a Hour_entry
     *   }
     * })
     * 
     */
    create<T extends hour_entryCreateArgs>(args: SelectSubset<T, hour_entryCreateArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hour_entries.
     * @param {hour_entryCreateManyArgs} args - Arguments to create many Hour_entries.
     * @example
     * // Create many Hour_entries
     * const hour_entry = await prisma.hour_entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hour_entryCreateManyArgs>(args?: SelectSubset<T, hour_entryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hour_entries and returns the data saved in the database.
     * @param {hour_entryCreateManyAndReturnArgs} args - Arguments to create many Hour_entries.
     * @example
     * // Create many Hour_entries
     * const hour_entry = await prisma.hour_entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hour_entries and only return the `id`
     * const hour_entryWithIdOnly = await prisma.hour_entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hour_entryCreateManyAndReturnArgs>(args?: SelectSubset<T, hour_entryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hour_entry.
     * @param {hour_entryDeleteArgs} args - Arguments to delete one Hour_entry.
     * @example
     * // Delete one Hour_entry
     * const Hour_entry = await prisma.hour_entry.delete({
     *   where: {
     *     // ... filter to delete one Hour_entry
     *   }
     * })
     * 
     */
    delete<T extends hour_entryDeleteArgs>(args: SelectSubset<T, hour_entryDeleteArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hour_entry.
     * @param {hour_entryUpdateArgs} args - Arguments to update one Hour_entry.
     * @example
     * // Update one Hour_entry
     * const hour_entry = await prisma.hour_entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hour_entryUpdateArgs>(args: SelectSubset<T, hour_entryUpdateArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hour_entries.
     * @param {hour_entryDeleteManyArgs} args - Arguments to filter Hour_entries to delete.
     * @example
     * // Delete a few Hour_entries
     * const { count } = await prisma.hour_entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hour_entryDeleteManyArgs>(args?: SelectSubset<T, hour_entryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hour_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_entryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hour_entries
     * const hour_entry = await prisma.hour_entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hour_entryUpdateManyArgs>(args: SelectSubset<T, hour_entryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hour_entries and returns the data updated in the database.
     * @param {hour_entryUpdateManyAndReturnArgs} args - Arguments to update many Hour_entries.
     * @example
     * // Update many Hour_entries
     * const hour_entry = await prisma.hour_entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hour_entries and only return the `id`
     * const hour_entryWithIdOnly = await prisma.hour_entry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hour_entryUpdateManyAndReturnArgs>(args: SelectSubset<T, hour_entryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hour_entry.
     * @param {hour_entryUpsertArgs} args - Arguments to update or create a Hour_entry.
     * @example
     * // Update or create a Hour_entry
     * const hour_entry = await prisma.hour_entry.upsert({
     *   create: {
     *     // ... data to create a Hour_entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hour_entry we want to update
     *   }
     * })
     */
    upsert<T extends hour_entryUpsertArgs>(args: SelectSubset<T, hour_entryUpsertArgs<ExtArgs>>): Prisma__hour_entryClient<$Result.GetResult<Prisma.$hour_entryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hour_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_entryCountArgs} args - Arguments to filter Hour_entries to count.
     * @example
     * // Count the number of Hour_entries
     * const count = await prisma.hour_entry.count({
     *   where: {
     *     // ... the filter for the Hour_entries we want to count
     *   }
     * })
    **/
    count<T extends hour_entryCountArgs>(
      args?: Subset<T, hour_entryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hour_entryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hour_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hour_entryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hour_entryAggregateArgs>(args: Subset<T, Hour_entryAggregateArgs>): Prisma.PrismaPromise<GetHour_entryAggregateType<T>>

    /**
     * Group by Hour_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_entryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hour_entryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hour_entryGroupByArgs['orderBy'] }
        : { orderBy?: hour_entryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hour_entryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHour_entryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hour_entry model
   */
  readonly fields: hour_entryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hour_entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hour_entryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hour_entry model
   */
  interface hour_entryFieldRefs {
    readonly id: FieldRef<"hour_entry", 'Int'>
    readonly userId: FieldRef<"hour_entry", 'Int'>
    readonly vehicleId: FieldRef<"hour_entry", 'Int'>
    readonly projectId: FieldRef<"hour_entry", 'Int'>
    readonly workDate: FieldRef<"hour_entry", 'DateTime'>
    readonly startTime: FieldRef<"hour_entry", 'DateTime'>
    readonly endTime: FieldRef<"hour_entry", 'DateTime'>
    readonly normalHours: FieldRef<"hour_entry", 'Decimal'>
    readonly extra50Hours: FieldRef<"hour_entry", 'Decimal'>
    readonly night50Hours: FieldRef<"hour_entry", 'Decimal'>
    readonly extra100Hours: FieldRef<"hour_entry", 'Decimal'>
    readonly tenHourMeal: FieldRef<"hour_entry", 'Boolean'>
    readonly launchWork: FieldRef<"hour_entry", 'Boolean'>
    readonly pernoctation: FieldRef<"hour_entry", 'Boolean'>
    readonly dailyMeal: FieldRef<"hour_entry", 'Boolean'>
    readonly isHoliday: FieldRef<"hour_entry", 'Boolean'>
    readonly driverSignature: FieldRef<"hour_entry", 'DriverSignature'>
    readonly taskDetails: FieldRef<"hour_entry", 'String'>
    readonly status: FieldRef<"hour_entry", 'HourEntryStatus'>
    readonly approvedId: FieldRef<"hour_entry", 'Int'>
    readonly approvedDate: FieldRef<"hour_entry", 'DateTime'>
    readonly createdAt: FieldRef<"hour_entry", 'DateTime'>
    readonly updateAt: FieldRef<"hour_entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hour_entry findUnique
   */
  export type hour_entryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * Filter, which hour_entry to fetch.
     */
    where: hour_entryWhereUniqueInput
  }

  /**
   * hour_entry findUniqueOrThrow
   */
  export type hour_entryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * Filter, which hour_entry to fetch.
     */
    where: hour_entryWhereUniqueInput
  }

  /**
   * hour_entry findFirst
   */
  export type hour_entryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * Filter, which hour_entry to fetch.
     */
    where?: hour_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_entries to fetch.
     */
    orderBy?: hour_entryOrderByWithRelationInput | hour_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hour_entries.
     */
    cursor?: hour_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hour_entries.
     */
    distinct?: Hour_entryScalarFieldEnum | Hour_entryScalarFieldEnum[]
  }

  /**
   * hour_entry findFirstOrThrow
   */
  export type hour_entryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * Filter, which hour_entry to fetch.
     */
    where?: hour_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_entries to fetch.
     */
    orderBy?: hour_entryOrderByWithRelationInput | hour_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hour_entries.
     */
    cursor?: hour_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hour_entries.
     */
    distinct?: Hour_entryScalarFieldEnum | Hour_entryScalarFieldEnum[]
  }

  /**
   * hour_entry findMany
   */
  export type hour_entryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * Filter, which hour_entries to fetch.
     */
    where?: hour_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_entries to fetch.
     */
    orderBy?: hour_entryOrderByWithRelationInput | hour_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hour_entries.
     */
    cursor?: hour_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hour_entries.
     */
    distinct?: Hour_entryScalarFieldEnum | Hour_entryScalarFieldEnum[]
  }

  /**
   * hour_entry create
   */
  export type hour_entryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * The data needed to create a hour_entry.
     */
    data: XOR<hour_entryCreateInput, hour_entryUncheckedCreateInput>
  }

  /**
   * hour_entry createMany
   */
  export type hour_entryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hour_entries.
     */
    data: hour_entryCreateManyInput | hour_entryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hour_entry createManyAndReturn
   */
  export type hour_entryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * The data used to create many hour_entries.
     */
    data: hour_entryCreateManyInput | hour_entryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hour_entry update
   */
  export type hour_entryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * The data needed to update a hour_entry.
     */
    data: XOR<hour_entryUpdateInput, hour_entryUncheckedUpdateInput>
    /**
     * Choose, which hour_entry to update.
     */
    where: hour_entryWhereUniqueInput
  }

  /**
   * hour_entry updateMany
   */
  export type hour_entryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hour_entries.
     */
    data: XOR<hour_entryUpdateManyMutationInput, hour_entryUncheckedUpdateManyInput>
    /**
     * Filter which hour_entries to update
     */
    where?: hour_entryWhereInput
    /**
     * Limit how many hour_entries to update.
     */
    limit?: number
  }

  /**
   * hour_entry updateManyAndReturn
   */
  export type hour_entryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * The data used to update hour_entries.
     */
    data: XOR<hour_entryUpdateManyMutationInput, hour_entryUncheckedUpdateManyInput>
    /**
     * Filter which hour_entries to update
     */
    where?: hour_entryWhereInput
    /**
     * Limit how many hour_entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hour_entry upsert
   */
  export type hour_entryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * The filter to search for the hour_entry to update in case it exists.
     */
    where: hour_entryWhereUniqueInput
    /**
     * In case the hour_entry found by the `where` argument doesn't exist, create a new hour_entry with this data.
     */
    create: XOR<hour_entryCreateInput, hour_entryUncheckedCreateInput>
    /**
     * In case the hour_entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hour_entryUpdateInput, hour_entryUncheckedUpdateInput>
  }

  /**
   * hour_entry delete
   */
  export type hour_entryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
    /**
     * Filter which hour_entry to delete.
     */
    where: hour_entryWhereUniqueInput
  }

  /**
   * hour_entry deleteMany
   */
  export type hour_entryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hour_entries to delete
     */
    where?: hour_entryWhereInput
    /**
     * Limit how many hour_entries to delete.
     */
    limit?: number
  }

  /**
   * hour_entry without action
   */
  export type hour_entryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_entry
     */
    select?: hour_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_entry
     */
    omit?: hour_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_entryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    plate: 'plate',
    brand: 'brand',
    model: 'model',
    active: 'active',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    active: 'active',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    projectNumber: 'projectNumber',
    tittle: 'tittle',
    description: 'description',
    active: 'active',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    siteId: 'siteId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const Hour_entryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vehicleId: 'vehicleId',
    projectId: 'projectId',
    workDate: 'workDate',
    startTime: 'startTime',
    endTime: 'endTime',
    normalHours: 'normalHours',
    extra50Hours: 'extra50Hours',
    night50Hours: 'night50Hours',
    extra100Hours: 'extra100Hours',
    tenHourMeal: 'tenHourMeal',
    launchWork: 'launchWork',
    pernoctation: 'pernoctation',
    dailyMeal: 'dailyMeal',
    isHoliday: 'isHoliday',
    driverSignature: 'driverSignature',
    taskDetails: 'taskDetails',
    status: 'status',
    approvedId: 'approvedId',
    approvedDate: 'approvedDate',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type Hour_entryScalarFieldEnum = (typeof Hour_entryScalarFieldEnum)[keyof typeof Hour_entryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DriverSignature'
   */
  export type EnumDriverSignatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverSignature'>
    


  /**
   * Reference to a field of type 'DriverSignature[]'
   */
  export type ListEnumDriverSignatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverSignature[]'>
    


  /**
   * Reference to a field of type 'HourEntryStatus'
   */
  export type EnumHourEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HourEntryStatus'>
    


  /**
   * Reference to a field of type 'HourEntryStatus[]'
   */
  export type ListEnumHourEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HourEntryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    hourEntries?: Hour_entryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
    hourEntries?: hour_entryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    hourEntries?: Hour_entryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    plate?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    active?: BoolFilter<"Vehicle"> | boolean
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updateAt?: DateTimeFilter<"Vehicle"> | Date | string
    hourEntries?: Hour_entryListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    hourEntries?: hour_entryOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    plate?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    active?: BoolFilter<"Vehicle"> | boolean
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updateAt?: DateTimeFilter<"Vehicle"> | Date | string
    hourEntries?: Hour_entryListRelationFilter
  }, "id" | "plate">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle"> | number
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    active?: BoolWithAggregatesFilter<"Vehicle"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: IntFilter<"Site"> | number
    name?: StringFilter<"Site"> | string
    description?: StringNullableFilter<"Site"> | string | null
    active?: BoolFilter<"Site"> | boolean
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updateAt?: DateTimeFilter<"Site"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    projects?: projectOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    description?: StringNullableFilter<"Site"> | string | null
    active?: BoolFilter<"Site"> | boolean
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updateAt?: DateTimeFilter<"Site"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Site"> | number
    name?: StringWithAggregatesFilter<"Site"> | string
    description?: StringNullableWithAggregatesFilter<"Site"> | string | null
    active?: BoolWithAggregatesFilter<"Site"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    projectNumber?: StringFilter<"project"> | string
    tittle?: StringNullableFilter<"project"> | string | null
    description?: StringNullableFilter<"project"> | string | null
    active?: BoolFilter<"project"> | boolean
    createdAt?: DateTimeFilter<"project"> | Date | string
    updateAt?: DateTimeFilter<"project"> | Date | string
    siteId?: IntFilter<"project"> | number
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    hourEntries?: Hour_entryListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    projectNumber?: SortOrder
    tittle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    siteId?: SortOrder
    site?: SiteOrderByWithRelationInput
    hourEntries?: hour_entryOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectNumber?: string
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    tittle?: StringNullableFilter<"project"> | string | null
    description?: StringNullableFilter<"project"> | string | null
    active?: BoolFilter<"project"> | boolean
    createdAt?: DateTimeFilter<"project"> | Date | string
    updateAt?: DateTimeFilter<"project"> | Date | string
    siteId?: IntFilter<"project"> | number
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    hourEntries?: Hour_entryListRelationFilter
  }, "id" | "projectNumber">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    projectNumber?: SortOrder
    tittle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    siteId?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    projectNumber?: StringWithAggregatesFilter<"project"> | string
    tittle?: StringNullableWithAggregatesFilter<"project"> | string | null
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    active?: BoolWithAggregatesFilter<"project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    siteId?: IntWithAggregatesFilter<"project"> | number
  }

  export type hour_entryWhereInput = {
    AND?: hour_entryWhereInput | hour_entryWhereInput[]
    OR?: hour_entryWhereInput[]
    NOT?: hour_entryWhereInput | hour_entryWhereInput[]
    id?: IntFilter<"hour_entry"> | number
    userId?: IntFilter<"hour_entry"> | number
    vehicleId?: IntFilter<"hour_entry"> | number
    projectId?: IntFilter<"hour_entry"> | number
    workDate?: DateTimeFilter<"hour_entry"> | Date | string
    startTime?: DateTimeFilter<"hour_entry"> | Date | string
    endTime?: DateTimeFilter<"hour_entry"> | Date | string
    normalHours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFilter<"hour_entry"> | boolean
    launchWork?: BoolFilter<"hour_entry"> | boolean
    pernoctation?: BoolFilter<"hour_entry"> | boolean
    dailyMeal?: BoolFilter<"hour_entry"> | boolean
    isHoliday?: BoolFilter<"hour_entry"> | boolean
    driverSignature?: EnumDriverSignatureFilter<"hour_entry"> | $Enums.DriverSignature
    taskDetails?: StringNullableFilter<"hour_entry"> | string | null
    status?: EnumHourEntryStatusFilter<"hour_entry"> | $Enums.HourEntryStatus
    approvedId?: IntNullableFilter<"hour_entry"> | number | null
    approvedDate?: DateTimeNullableFilter<"hour_entry"> | Date | string | null
    createdAt?: DateTimeFilter<"hour_entry"> | Date | string
    updateAt?: DateTimeFilter<"hour_entry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type hour_entryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    projectId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    normalHours?: SortOrder
    extra50Hours?: SortOrder
    night50Hours?: SortOrder
    extra100Hours?: SortOrder
    tenHourMeal?: SortOrder
    launchWork?: SortOrder
    pernoctation?: SortOrder
    dailyMeal?: SortOrder
    isHoliday?: SortOrder
    driverSignature?: SortOrder
    taskDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedId?: SortOrderInput | SortOrder
    approvedDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
  }

  export type hour_entryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hour_entryWhereInput | hour_entryWhereInput[]
    OR?: hour_entryWhereInput[]
    NOT?: hour_entryWhereInput | hour_entryWhereInput[]
    userId?: IntFilter<"hour_entry"> | number
    vehicleId?: IntFilter<"hour_entry"> | number
    projectId?: IntFilter<"hour_entry"> | number
    workDate?: DateTimeFilter<"hour_entry"> | Date | string
    startTime?: DateTimeFilter<"hour_entry"> | Date | string
    endTime?: DateTimeFilter<"hour_entry"> | Date | string
    normalHours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFilter<"hour_entry"> | boolean
    launchWork?: BoolFilter<"hour_entry"> | boolean
    pernoctation?: BoolFilter<"hour_entry"> | boolean
    dailyMeal?: BoolFilter<"hour_entry"> | boolean
    isHoliday?: BoolFilter<"hour_entry"> | boolean
    driverSignature?: EnumDriverSignatureFilter<"hour_entry"> | $Enums.DriverSignature
    taskDetails?: StringNullableFilter<"hour_entry"> | string | null
    status?: EnumHourEntryStatusFilter<"hour_entry"> | $Enums.HourEntryStatus
    approvedId?: IntNullableFilter<"hour_entry"> | number | null
    approvedDate?: DateTimeNullableFilter<"hour_entry"> | Date | string | null
    createdAt?: DateTimeFilter<"hour_entry"> | Date | string
    updateAt?: DateTimeFilter<"hour_entry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type hour_entryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    projectId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    normalHours?: SortOrder
    extra50Hours?: SortOrder
    night50Hours?: SortOrder
    extra100Hours?: SortOrder
    tenHourMeal?: SortOrder
    launchWork?: SortOrder
    pernoctation?: SortOrder
    dailyMeal?: SortOrder
    isHoliday?: SortOrder
    driverSignature?: SortOrder
    taskDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedId?: SortOrderInput | SortOrder
    approvedDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: hour_entryCountOrderByAggregateInput
    _avg?: hour_entryAvgOrderByAggregateInput
    _max?: hour_entryMaxOrderByAggregateInput
    _min?: hour_entryMinOrderByAggregateInput
    _sum?: hour_entrySumOrderByAggregateInput
  }

  export type hour_entryScalarWhereWithAggregatesInput = {
    AND?: hour_entryScalarWhereWithAggregatesInput | hour_entryScalarWhereWithAggregatesInput[]
    OR?: hour_entryScalarWhereWithAggregatesInput[]
    NOT?: hour_entryScalarWhereWithAggregatesInput | hour_entryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hour_entry"> | number
    userId?: IntWithAggregatesFilter<"hour_entry"> | number
    vehicleId?: IntWithAggregatesFilter<"hour_entry"> | number
    projectId?: IntWithAggregatesFilter<"hour_entry"> | number
    workDate?: DateTimeWithAggregatesFilter<"hour_entry"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"hour_entry"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"hour_entry"> | Date | string
    normalHours?: DecimalWithAggregatesFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalWithAggregatesFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalWithAggregatesFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalWithAggregatesFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolWithAggregatesFilter<"hour_entry"> | boolean
    launchWork?: BoolWithAggregatesFilter<"hour_entry"> | boolean
    pernoctation?: BoolWithAggregatesFilter<"hour_entry"> | boolean
    dailyMeal?: BoolWithAggregatesFilter<"hour_entry"> | boolean
    isHoliday?: BoolWithAggregatesFilter<"hour_entry"> | boolean
    driverSignature?: EnumDriverSignatureWithAggregatesFilter<"hour_entry"> | $Enums.DriverSignature
    taskDetails?: StringNullableWithAggregatesFilter<"hour_entry"> | string | null
    status?: EnumHourEntryStatusWithAggregatesFilter<"hour_entry"> | $Enums.HourEntryStatus
    approvedId?: IntNullableWithAggregatesFilter<"hour_entry"> | number | null
    approvedDate?: DateTimeNullableWithAggregatesFilter<"hour_entry"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"hour_entry"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"hour_entry"> | Date | string
  }

  export type UserCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt: Date | string
    role?: $Enums.Role
    hourEntries?: hour_entryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt: Date | string
    role?: $Enums.Role
    hourEntries?: hour_entryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hourEntries?: hour_entryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hourEntries?: hour_entryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type VehicleCreateInput = {
    plate: string
    brand: string
    model: string
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    hourEntries?: hour_entryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    plate: string
    brand: string
    model: string
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    hourEntries?: hour_entryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourEntries?: hour_entryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourEntries?: hour_entryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: number
    plate: string
    brand: string
    model: string
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateInput = {
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    projects?: projectCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    projects?: projectUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type SiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateInput = {
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    site: SiteCreateNestedOneWithoutProjectsInput
    hourEntries?: hour_entryCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: number
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    siteId: number
    hourEntries?: hour_entryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutProjectsNestedInput
    hourEntries?: hour_entryUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: IntFieldUpdateOperationsInput | number
    hourEntries?: hour_entryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: number
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    siteId: number
  }

  export type projectUpdateManyMutationInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: IntFieldUpdateOperationsInput | number
  }

  export type hour_entryCreateInput = {
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
    user: UserCreateNestedOneWithoutHourEntriesInput
    vehicle: VehicleCreateNestedOneWithoutHourEntriesInput
    project: projectCreateNestedOneWithoutHourEntriesInput
  }

  export type hour_entryUncheckedCreateInput = {
    id?: number
    userId: number
    vehicleId: number
    projectId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryUpdateInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHourEntriesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutHourEntriesNestedInput
    project?: projectUpdateOneRequiredWithoutHourEntriesNestedInput
  }

  export type hour_entryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryCreateManyInput = {
    id?: number
    userId: number
    vehicleId: number
    projectId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryUpdateManyMutationInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type Hour_entryListRelationFilter = {
    every?: hour_entryWhereInput
    some?: hour_entryWhereInput
    none?: hour_entryWhereInput
  }

  export type hour_entryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    projectNumber?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    siteId?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    projectNumber?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    siteId?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    projectNumber?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    siteId?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumDriverSignatureFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverSignature | EnumDriverSignatureFieldRefInput<$PrismaModel>
    in?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverSignatureFilter<$PrismaModel> | $Enums.DriverSignature
  }

  export type EnumHourEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HourEntryStatus | EnumHourEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHourEntryStatusFilter<$PrismaModel> | $Enums.HourEntryStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type hour_entryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    projectId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    normalHours?: SortOrder
    extra50Hours?: SortOrder
    night50Hours?: SortOrder
    extra100Hours?: SortOrder
    tenHourMeal?: SortOrder
    launchWork?: SortOrder
    pernoctation?: SortOrder
    dailyMeal?: SortOrder
    isHoliday?: SortOrder
    driverSignature?: SortOrder
    taskDetails?: SortOrder
    status?: SortOrder
    approvedId?: SortOrder
    approvedDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type hour_entryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    projectId?: SortOrder
    normalHours?: SortOrder
    extra50Hours?: SortOrder
    night50Hours?: SortOrder
    extra100Hours?: SortOrder
    approvedId?: SortOrder
  }

  export type hour_entryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    projectId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    normalHours?: SortOrder
    extra50Hours?: SortOrder
    night50Hours?: SortOrder
    extra100Hours?: SortOrder
    tenHourMeal?: SortOrder
    launchWork?: SortOrder
    pernoctation?: SortOrder
    dailyMeal?: SortOrder
    isHoliday?: SortOrder
    driverSignature?: SortOrder
    taskDetails?: SortOrder
    status?: SortOrder
    approvedId?: SortOrder
    approvedDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type hour_entryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    projectId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    normalHours?: SortOrder
    extra50Hours?: SortOrder
    night50Hours?: SortOrder
    extra100Hours?: SortOrder
    tenHourMeal?: SortOrder
    launchWork?: SortOrder
    pernoctation?: SortOrder
    dailyMeal?: SortOrder
    isHoliday?: SortOrder
    driverSignature?: SortOrder
    taskDetails?: SortOrder
    status?: SortOrder
    approvedId?: SortOrder
    approvedDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type hour_entrySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    projectId?: SortOrder
    normalHours?: SortOrder
    extra50Hours?: SortOrder
    night50Hours?: SortOrder
    extra100Hours?: SortOrder
    approvedId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumDriverSignatureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverSignature | EnumDriverSignatureFieldRefInput<$PrismaModel>
    in?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverSignatureWithAggregatesFilter<$PrismaModel> | $Enums.DriverSignature
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverSignatureFilter<$PrismaModel>
    _max?: NestedEnumDriverSignatureFilter<$PrismaModel>
  }

  export type EnumHourEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HourEntryStatus | EnumHourEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHourEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.HourEntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHourEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumHourEntryStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type hour_entryCreateNestedManyWithoutUserInput = {
    create?: XOR<hour_entryCreateWithoutUserInput, hour_entryUncheckedCreateWithoutUserInput> | hour_entryCreateWithoutUserInput[] | hour_entryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutUserInput | hour_entryCreateOrConnectWithoutUserInput[]
    createMany?: hour_entryCreateManyUserInputEnvelope
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
  }

  export type hour_entryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<hour_entryCreateWithoutUserInput, hour_entryUncheckedCreateWithoutUserInput> | hour_entryCreateWithoutUserInput[] | hour_entryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutUserInput | hour_entryCreateOrConnectWithoutUserInput[]
    createMany?: hour_entryCreateManyUserInputEnvelope
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type hour_entryUpdateManyWithoutUserNestedInput = {
    create?: XOR<hour_entryCreateWithoutUserInput, hour_entryUncheckedCreateWithoutUserInput> | hour_entryCreateWithoutUserInput[] | hour_entryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutUserInput | hour_entryCreateOrConnectWithoutUserInput[]
    upsert?: hour_entryUpsertWithWhereUniqueWithoutUserInput | hour_entryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: hour_entryCreateManyUserInputEnvelope
    set?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    disconnect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    delete?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    update?: hour_entryUpdateWithWhereUniqueWithoutUserInput | hour_entryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: hour_entryUpdateManyWithWhereWithoutUserInput | hour_entryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type hour_entryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<hour_entryCreateWithoutUserInput, hour_entryUncheckedCreateWithoutUserInput> | hour_entryCreateWithoutUserInput[] | hour_entryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutUserInput | hour_entryCreateOrConnectWithoutUserInput[]
    upsert?: hour_entryUpsertWithWhereUniqueWithoutUserInput | hour_entryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: hour_entryCreateManyUserInputEnvelope
    set?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    disconnect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    delete?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    update?: hour_entryUpdateWithWhereUniqueWithoutUserInput | hour_entryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: hour_entryUpdateManyWithWhereWithoutUserInput | hour_entryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
  }

  export type hour_entryCreateNestedManyWithoutVehicleInput = {
    create?: XOR<hour_entryCreateWithoutVehicleInput, hour_entryUncheckedCreateWithoutVehicleInput> | hour_entryCreateWithoutVehicleInput[] | hour_entryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutVehicleInput | hour_entryCreateOrConnectWithoutVehicleInput[]
    createMany?: hour_entryCreateManyVehicleInputEnvelope
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
  }

  export type hour_entryUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<hour_entryCreateWithoutVehicleInput, hour_entryUncheckedCreateWithoutVehicleInput> | hour_entryCreateWithoutVehicleInput[] | hour_entryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutVehicleInput | hour_entryCreateOrConnectWithoutVehicleInput[]
    createMany?: hour_entryCreateManyVehicleInputEnvelope
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type hour_entryUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<hour_entryCreateWithoutVehicleInput, hour_entryUncheckedCreateWithoutVehicleInput> | hour_entryCreateWithoutVehicleInput[] | hour_entryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutVehicleInput | hour_entryCreateOrConnectWithoutVehicleInput[]
    upsert?: hour_entryUpsertWithWhereUniqueWithoutVehicleInput | hour_entryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: hour_entryCreateManyVehicleInputEnvelope
    set?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    disconnect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    delete?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    update?: hour_entryUpdateWithWhereUniqueWithoutVehicleInput | hour_entryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: hour_entryUpdateManyWithWhereWithoutVehicleInput | hour_entryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
  }

  export type hour_entryUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<hour_entryCreateWithoutVehicleInput, hour_entryUncheckedCreateWithoutVehicleInput> | hour_entryCreateWithoutVehicleInput[] | hour_entryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutVehicleInput | hour_entryCreateOrConnectWithoutVehicleInput[]
    upsert?: hour_entryUpsertWithWhereUniqueWithoutVehicleInput | hour_entryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: hour_entryCreateManyVehicleInputEnvelope
    set?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    disconnect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    delete?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    update?: hour_entryUpdateWithWhereUniqueWithoutVehicleInput | hour_entryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: hour_entryUpdateManyWithWhereWithoutVehicleInput | hour_entryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
  }

  export type projectCreateNestedManyWithoutSiteInput = {
    create?: XOR<projectCreateWithoutSiteInput, projectUncheckedCreateWithoutSiteInput> | projectCreateWithoutSiteInput[] | projectUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: projectCreateOrConnectWithoutSiteInput | projectCreateOrConnectWithoutSiteInput[]
    createMany?: projectCreateManySiteInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<projectCreateWithoutSiteInput, projectUncheckedCreateWithoutSiteInput> | projectCreateWithoutSiteInput[] | projectUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: projectCreateOrConnectWithoutSiteInput | projectCreateOrConnectWithoutSiteInput[]
    createMany?: projectCreateManySiteInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type projectUpdateManyWithoutSiteNestedInput = {
    create?: XOR<projectCreateWithoutSiteInput, projectUncheckedCreateWithoutSiteInput> | projectCreateWithoutSiteInput[] | projectUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: projectCreateOrConnectWithoutSiteInput | projectCreateOrConnectWithoutSiteInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutSiteInput | projectUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: projectCreateManySiteInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutSiteInput | projectUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: projectUpdateManyWithWhereWithoutSiteInput | projectUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<projectCreateWithoutSiteInput, projectUncheckedCreateWithoutSiteInput> | projectCreateWithoutSiteInput[] | projectUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: projectCreateOrConnectWithoutSiteInput | projectCreateOrConnectWithoutSiteInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutSiteInput | projectUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: projectCreateManySiteInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutSiteInput | projectUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: projectUpdateManyWithWhereWithoutSiteInput | projectUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutProjectsInput = {
    create?: XOR<SiteCreateWithoutProjectsInput, SiteUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutProjectsInput
    connect?: SiteWhereUniqueInput
  }

  export type hour_entryCreateNestedManyWithoutProjectInput = {
    create?: XOR<hour_entryCreateWithoutProjectInput, hour_entryUncheckedCreateWithoutProjectInput> | hour_entryCreateWithoutProjectInput[] | hour_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutProjectInput | hour_entryCreateOrConnectWithoutProjectInput[]
    createMany?: hour_entryCreateManyProjectInputEnvelope
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
  }

  export type hour_entryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<hour_entryCreateWithoutProjectInput, hour_entryUncheckedCreateWithoutProjectInput> | hour_entryCreateWithoutProjectInput[] | hour_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutProjectInput | hour_entryCreateOrConnectWithoutProjectInput[]
    createMany?: hour_entryCreateManyProjectInputEnvelope
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
  }

  export type SiteUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<SiteCreateWithoutProjectsInput, SiteUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutProjectsInput
    upsert?: SiteUpsertWithoutProjectsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutProjectsInput, SiteUpdateWithoutProjectsInput>, SiteUncheckedUpdateWithoutProjectsInput>
  }

  export type hour_entryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<hour_entryCreateWithoutProjectInput, hour_entryUncheckedCreateWithoutProjectInput> | hour_entryCreateWithoutProjectInput[] | hour_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutProjectInput | hour_entryCreateOrConnectWithoutProjectInput[]
    upsert?: hour_entryUpsertWithWhereUniqueWithoutProjectInput | hour_entryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: hour_entryCreateManyProjectInputEnvelope
    set?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    disconnect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    delete?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    update?: hour_entryUpdateWithWhereUniqueWithoutProjectInput | hour_entryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: hour_entryUpdateManyWithWhereWithoutProjectInput | hour_entryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
  }

  export type hour_entryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<hour_entryCreateWithoutProjectInput, hour_entryUncheckedCreateWithoutProjectInput> | hour_entryCreateWithoutProjectInput[] | hour_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: hour_entryCreateOrConnectWithoutProjectInput | hour_entryCreateOrConnectWithoutProjectInput[]
    upsert?: hour_entryUpsertWithWhereUniqueWithoutProjectInput | hour_entryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: hour_entryCreateManyProjectInputEnvelope
    set?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    disconnect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    delete?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    connect?: hour_entryWhereUniqueInput | hour_entryWhereUniqueInput[]
    update?: hour_entryUpdateWithWhereUniqueWithoutProjectInput | hour_entryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: hour_entryUpdateManyWithWhereWithoutProjectInput | hour_entryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHourEntriesInput = {
    create?: XOR<UserCreateWithoutHourEntriesInput, UserUncheckedCreateWithoutHourEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHourEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutHourEntriesInput = {
    create?: XOR<VehicleCreateWithoutHourEntriesInput, VehicleUncheckedCreateWithoutHourEntriesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutHourEntriesInput
    connect?: VehicleWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutHourEntriesInput = {
    create?: XOR<projectCreateWithoutHourEntriesInput, projectUncheckedCreateWithoutHourEntriesInput>
    connectOrCreate?: projectCreateOrConnectWithoutHourEntriesInput
    connect?: projectWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumDriverSignatureFieldUpdateOperationsInput = {
    set?: $Enums.DriverSignature
  }

  export type EnumHourEntryStatusFieldUpdateOperationsInput = {
    set?: $Enums.HourEntryStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutHourEntriesNestedInput = {
    create?: XOR<UserCreateWithoutHourEntriesInput, UserUncheckedCreateWithoutHourEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHourEntriesInput
    upsert?: UserUpsertWithoutHourEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHourEntriesInput, UserUpdateWithoutHourEntriesInput>, UserUncheckedUpdateWithoutHourEntriesInput>
  }

  export type VehicleUpdateOneRequiredWithoutHourEntriesNestedInput = {
    create?: XOR<VehicleCreateWithoutHourEntriesInput, VehicleUncheckedCreateWithoutHourEntriesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutHourEntriesInput
    upsert?: VehicleUpsertWithoutHourEntriesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutHourEntriesInput, VehicleUpdateWithoutHourEntriesInput>, VehicleUncheckedUpdateWithoutHourEntriesInput>
  }

  export type projectUpdateOneRequiredWithoutHourEntriesNestedInput = {
    create?: XOR<projectCreateWithoutHourEntriesInput, projectUncheckedCreateWithoutHourEntriesInput>
    connectOrCreate?: projectCreateOrConnectWithoutHourEntriesInput
    upsert?: projectUpsertWithoutHourEntriesInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutHourEntriesInput, projectUpdateWithoutHourEntriesInput>, projectUncheckedUpdateWithoutHourEntriesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumDriverSignatureFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverSignature | EnumDriverSignatureFieldRefInput<$PrismaModel>
    in?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverSignatureFilter<$PrismaModel> | $Enums.DriverSignature
  }

  export type NestedEnumHourEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HourEntryStatus | EnumHourEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHourEntryStatusFilter<$PrismaModel> | $Enums.HourEntryStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumDriverSignatureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverSignature | EnumDriverSignatureFieldRefInput<$PrismaModel>
    in?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverSignature[] | ListEnumDriverSignatureFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverSignatureWithAggregatesFilter<$PrismaModel> | $Enums.DriverSignature
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverSignatureFilter<$PrismaModel>
    _max?: NestedEnumDriverSignatureFilter<$PrismaModel>
  }

  export type NestedEnumHourEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HourEntryStatus | EnumHourEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HourEntryStatus[] | ListEnumHourEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHourEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.HourEntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHourEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumHourEntryStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type hour_entryCreateWithoutUserInput = {
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
    vehicle: VehicleCreateNestedOneWithoutHourEntriesInput
    project: projectCreateNestedOneWithoutHourEntriesInput
  }

  export type hour_entryUncheckedCreateWithoutUserInput = {
    id?: number
    vehicleId: number
    projectId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryCreateOrConnectWithoutUserInput = {
    where: hour_entryWhereUniqueInput
    create: XOR<hour_entryCreateWithoutUserInput, hour_entryUncheckedCreateWithoutUserInput>
  }

  export type hour_entryCreateManyUserInputEnvelope = {
    data: hour_entryCreateManyUserInput | hour_entryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type hour_entryUpsertWithWhereUniqueWithoutUserInput = {
    where: hour_entryWhereUniqueInput
    update: XOR<hour_entryUpdateWithoutUserInput, hour_entryUncheckedUpdateWithoutUserInput>
    create: XOR<hour_entryCreateWithoutUserInput, hour_entryUncheckedCreateWithoutUserInput>
  }

  export type hour_entryUpdateWithWhereUniqueWithoutUserInput = {
    where: hour_entryWhereUniqueInput
    data: XOR<hour_entryUpdateWithoutUserInput, hour_entryUncheckedUpdateWithoutUserInput>
  }

  export type hour_entryUpdateManyWithWhereWithoutUserInput = {
    where: hour_entryScalarWhereInput
    data: XOR<hour_entryUpdateManyMutationInput, hour_entryUncheckedUpdateManyWithoutUserInput>
  }

  export type hour_entryScalarWhereInput = {
    AND?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
    OR?: hour_entryScalarWhereInput[]
    NOT?: hour_entryScalarWhereInput | hour_entryScalarWhereInput[]
    id?: IntFilter<"hour_entry"> | number
    userId?: IntFilter<"hour_entry"> | number
    vehicleId?: IntFilter<"hour_entry"> | number
    projectId?: IntFilter<"hour_entry"> | number
    workDate?: DateTimeFilter<"hour_entry"> | Date | string
    startTime?: DateTimeFilter<"hour_entry"> | Date | string
    endTime?: DateTimeFilter<"hour_entry"> | Date | string
    normalHours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFilter<"hour_entry"> | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFilter<"hour_entry"> | boolean
    launchWork?: BoolFilter<"hour_entry"> | boolean
    pernoctation?: BoolFilter<"hour_entry"> | boolean
    dailyMeal?: BoolFilter<"hour_entry"> | boolean
    isHoliday?: BoolFilter<"hour_entry"> | boolean
    driverSignature?: EnumDriverSignatureFilter<"hour_entry"> | $Enums.DriverSignature
    taskDetails?: StringNullableFilter<"hour_entry"> | string | null
    status?: EnumHourEntryStatusFilter<"hour_entry"> | $Enums.HourEntryStatus
    approvedId?: IntNullableFilter<"hour_entry"> | number | null
    approvedDate?: DateTimeNullableFilter<"hour_entry"> | Date | string | null
    createdAt?: DateTimeFilter<"hour_entry"> | Date | string
    updateAt?: DateTimeFilter<"hour_entry"> | Date | string
  }

  export type hour_entryCreateWithoutVehicleInput = {
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
    user: UserCreateNestedOneWithoutHourEntriesInput
    project: projectCreateNestedOneWithoutHourEntriesInput
  }

  export type hour_entryUncheckedCreateWithoutVehicleInput = {
    id?: number
    userId: number
    projectId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryCreateOrConnectWithoutVehicleInput = {
    where: hour_entryWhereUniqueInput
    create: XOR<hour_entryCreateWithoutVehicleInput, hour_entryUncheckedCreateWithoutVehicleInput>
  }

  export type hour_entryCreateManyVehicleInputEnvelope = {
    data: hour_entryCreateManyVehicleInput | hour_entryCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type hour_entryUpsertWithWhereUniqueWithoutVehicleInput = {
    where: hour_entryWhereUniqueInput
    update: XOR<hour_entryUpdateWithoutVehicleInput, hour_entryUncheckedUpdateWithoutVehicleInput>
    create: XOR<hour_entryCreateWithoutVehicleInput, hour_entryUncheckedCreateWithoutVehicleInput>
  }

  export type hour_entryUpdateWithWhereUniqueWithoutVehicleInput = {
    where: hour_entryWhereUniqueInput
    data: XOR<hour_entryUpdateWithoutVehicleInput, hour_entryUncheckedUpdateWithoutVehicleInput>
  }

  export type hour_entryUpdateManyWithWhereWithoutVehicleInput = {
    where: hour_entryScalarWhereInput
    data: XOR<hour_entryUpdateManyMutationInput, hour_entryUncheckedUpdateManyWithoutVehicleInput>
  }

  export type projectCreateWithoutSiteInput = {
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    hourEntries?: hour_entryCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutSiteInput = {
    id?: number
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    hourEntries?: hour_entryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutSiteInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutSiteInput, projectUncheckedCreateWithoutSiteInput>
  }

  export type projectCreateManySiteInputEnvelope = {
    data: projectCreateManySiteInput | projectCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithWhereUniqueWithoutSiteInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutSiteInput, projectUncheckedUpdateWithoutSiteInput>
    create: XOR<projectCreateWithoutSiteInput, projectUncheckedCreateWithoutSiteInput>
  }

  export type projectUpdateWithWhereUniqueWithoutSiteInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutSiteInput, projectUncheckedUpdateWithoutSiteInput>
  }

  export type projectUpdateManyWithWhereWithoutSiteInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutSiteInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    id?: IntFilter<"project"> | number
    projectNumber?: StringFilter<"project"> | string
    tittle?: StringNullableFilter<"project"> | string | null
    description?: StringNullableFilter<"project"> | string | null
    active?: BoolFilter<"project"> | boolean
    createdAt?: DateTimeFilter<"project"> | Date | string
    updateAt?: DateTimeFilter<"project"> | Date | string
    siteId?: IntFilter<"project"> | number
  }

  export type SiteCreateWithoutProjectsInput = {
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type SiteUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type SiteCreateOrConnectWithoutProjectsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutProjectsInput, SiteUncheckedCreateWithoutProjectsInput>
  }

  export type hour_entryCreateWithoutProjectInput = {
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
    user: UserCreateNestedOneWithoutHourEntriesInput
    vehicle: VehicleCreateNestedOneWithoutHourEntriesInput
  }

  export type hour_entryUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    vehicleId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryCreateOrConnectWithoutProjectInput = {
    where: hour_entryWhereUniqueInput
    create: XOR<hour_entryCreateWithoutProjectInput, hour_entryUncheckedCreateWithoutProjectInput>
  }

  export type hour_entryCreateManyProjectInputEnvelope = {
    data: hour_entryCreateManyProjectInput | hour_entryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithoutProjectsInput = {
    update: XOR<SiteUpdateWithoutProjectsInput, SiteUncheckedUpdateWithoutProjectsInput>
    create: XOR<SiteCreateWithoutProjectsInput, SiteUncheckedCreateWithoutProjectsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutProjectsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutProjectsInput, SiteUncheckedUpdateWithoutProjectsInput>
  }

  export type SiteUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryUpsertWithWhereUniqueWithoutProjectInput = {
    where: hour_entryWhereUniqueInput
    update: XOR<hour_entryUpdateWithoutProjectInput, hour_entryUncheckedUpdateWithoutProjectInput>
    create: XOR<hour_entryCreateWithoutProjectInput, hour_entryUncheckedCreateWithoutProjectInput>
  }

  export type hour_entryUpdateWithWhereUniqueWithoutProjectInput = {
    where: hour_entryWhereUniqueInput
    data: XOR<hour_entryUpdateWithoutProjectInput, hour_entryUncheckedUpdateWithoutProjectInput>
  }

  export type hour_entryUpdateManyWithWhereWithoutProjectInput = {
    where: hour_entryScalarWhereInput
    data: XOR<hour_entryUpdateManyMutationInput, hour_entryUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutHourEntriesInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt: Date | string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutHourEntriesInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt: Date | string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutHourEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHourEntriesInput, UserUncheckedCreateWithoutHourEntriesInput>
  }

  export type VehicleCreateWithoutHourEntriesInput = {
    plate: string
    brand: string
    model: string
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type VehicleUncheckedCreateWithoutHourEntriesInput = {
    id?: number
    plate: string
    brand: string
    model: string
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type VehicleCreateOrConnectWithoutHourEntriesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutHourEntriesInput, VehicleUncheckedCreateWithoutHourEntriesInput>
  }

  export type projectCreateWithoutHourEntriesInput = {
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    site: SiteCreateNestedOneWithoutProjectsInput
  }

  export type projectUncheckedCreateWithoutHourEntriesInput = {
    id?: number
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
    siteId: number
  }

  export type projectCreateOrConnectWithoutHourEntriesInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutHourEntriesInput, projectUncheckedCreateWithoutHourEntriesInput>
  }

  export type UserUpsertWithoutHourEntriesInput = {
    update: XOR<UserUpdateWithoutHourEntriesInput, UserUncheckedUpdateWithoutHourEntriesInput>
    create: XOR<UserCreateWithoutHourEntriesInput, UserUncheckedCreateWithoutHourEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHourEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHourEntriesInput, UserUncheckedUpdateWithoutHourEntriesInput>
  }

  export type UserUpdateWithoutHourEntriesInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutHourEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type VehicleUpsertWithoutHourEntriesInput = {
    update: XOR<VehicleUpdateWithoutHourEntriesInput, VehicleUncheckedUpdateWithoutHourEntriesInput>
    create: XOR<VehicleCreateWithoutHourEntriesInput, VehicleUncheckedCreateWithoutHourEntriesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutHourEntriesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutHourEntriesInput, VehicleUncheckedUpdateWithoutHourEntriesInput>
  }

  export type VehicleUpdateWithoutHourEntriesInput = {
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateWithoutHourEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUpsertWithoutHourEntriesInput = {
    update: XOR<projectUpdateWithoutHourEntriesInput, projectUncheckedUpdateWithoutHourEntriesInput>
    create: XOR<projectCreateWithoutHourEntriesInput, projectUncheckedCreateWithoutHourEntriesInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutHourEntriesInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutHourEntriesInput, projectUncheckedUpdateWithoutHourEntriesInput>
  }

  export type projectUpdateWithoutHourEntriesInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectUncheckedUpdateWithoutHourEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: IntFieldUpdateOperationsInput | number
  }

  export type hour_entryCreateManyUserInput = {
    id?: number
    vehicleId: number
    projectId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryUpdateWithoutUserInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutHourEntriesNestedInput
    project?: projectUpdateOneRequiredWithoutHourEntriesNestedInput
  }

  export type hour_entryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryCreateManyVehicleInput = {
    id?: number
    userId: number
    projectId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryUpdateWithoutVehicleInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHourEntriesNestedInput
    project?: projectUpdateOneRequiredWithoutHourEntriesNestedInput
  }

  export type hour_entryUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateManySiteInput = {
    id?: number
    projectNumber: string
    tittle?: string | null
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type projectUpdateWithoutSiteInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourEntries?: hour_entryUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourEntries?: hour_entryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryCreateManyProjectInput = {
    id?: number
    userId: number
    vehicleId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    normalHours?: Decimal | DecimalJsLike | number | string
    extra50Hours?: Decimal | DecimalJsLike | number | string
    night50Hours?: Decimal | DecimalJsLike | number | string
    extra100Hours?: Decimal | DecimalJsLike | number | string
    tenHourMeal: boolean
    launchWork: boolean
    pernoctation: boolean
    dailyMeal: boolean
    isHoliday: boolean
    driverSignature: $Enums.DriverSignature
    taskDetails?: string | null
    status?: $Enums.HourEntryStatus
    approvedId?: number | null
    approvedDate?: Date | string | null
    createdAt?: Date | string
    updateAt: Date | string
  }

  export type hour_entryUpdateWithoutProjectInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHourEntriesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutHourEntriesNestedInput
  }

  export type hour_entryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hour_entryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    normalHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    night50Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra100Hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tenHourMeal?: BoolFieldUpdateOperationsInput | boolean
    launchWork?: BoolFieldUpdateOperationsInput | boolean
    pernoctation?: BoolFieldUpdateOperationsInput | boolean
    dailyMeal?: BoolFieldUpdateOperationsInput | boolean
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    driverSignature?: EnumDriverSignatureFieldUpdateOperationsInput | $Enums.DriverSignature
    taskDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHourEntryStatusFieldUpdateOperationsInput | $Enums.HourEntryStatus
    approvedId?: NullableIntFieldUpdateOperationsInput | number | null
    approvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}