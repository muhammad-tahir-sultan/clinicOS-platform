
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
 * Model Clinic
 * 
 */
export type Clinic = $Result.DefaultSelection<Prisma.$ClinicPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model VisitLog
 * 
 */
export type VisitLog = $Result.DefaultSelection<Prisma.$VisitLogPayload>
/**
 * Model RevenueRecord
 * 
 */
export type RevenueRecord = $Result.DefaultSelection<Prisma.$RevenueRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  CLINIC_ADMIN: 'CLINIC_ADMIN',
  DOCTOR: 'DOCTOR',
  RECEPTIONIST: 'RECEPTIONIST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SubscriptionPlan: {
  BASIC: 'BASIC',
  PRO: 'PRO',
  ENTERPRISE: 'ENTERPRISE'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  EXPIRED: 'EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clinics
 * const clinics = await prisma.clinic.findMany()
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
   * // Fetch zero or more Clinics
   * const clinics = await prisma.clinic.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clinic`: Exposes CRUD operations for the **Clinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinic.findMany()
    * ```
    */
  get clinic(): Prisma.ClinicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitLog`: Exposes CRUD operations for the **VisitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitLogs
    * const visitLogs = await prisma.visitLog.findMany()
    * ```
    */
  get visitLog(): Prisma.VisitLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revenueRecord`: Exposes CRUD operations for the **RevenueRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevenueRecords
    * const revenueRecords = await prisma.revenueRecord.findMany()
    * ```
    */
  get revenueRecord(): Prisma.RevenueRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
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
    Clinic: 'Clinic',
    Subscription: 'Subscription',
    User: 'User',
    Patient: 'Patient',
    Appointment: 'Appointment',
    VisitLog: 'VisitLog',
    RevenueRecord: 'RevenueRecord'
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
      modelProps: "clinic" | "subscription" | "user" | "patient" | "appointment" | "visitLog" | "revenueRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Clinic: {
        payload: Prisma.$ClinicPayload<ExtArgs>
        fields: Prisma.ClinicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findFirst: {
            args: Prisma.ClinicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findMany: {
            args: Prisma.ClinicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          create: {
            args: Prisma.ClinicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          createMany: {
            args: Prisma.ClinicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          delete: {
            args: Prisma.ClinicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          update: {
            args: Prisma.ClinicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          deleteMany: {
            args: Prisma.ClinicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          upsert: {
            args: Prisma.ClinicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinic>
          }
          groupBy: {
            args: Prisma.ClinicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
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
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      VisitLog: {
        payload: Prisma.$VisitLogPayload<ExtArgs>
        fields: Prisma.VisitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          findFirst: {
            args: Prisma.VisitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          findMany: {
            args: Prisma.VisitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>[]
          }
          create: {
            args: Prisma.VisitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          createMany: {
            args: Prisma.VisitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>[]
          }
          delete: {
            args: Prisma.VisitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          update: {
            args: Prisma.VisitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          deleteMany: {
            args: Prisma.VisitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>[]
          }
          upsert: {
            args: Prisma.VisitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          aggregate: {
            args: Prisma.VisitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitLog>
          }
          groupBy: {
            args: Prisma.VisitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitLogCountArgs<ExtArgs>
            result: $Utils.Optional<VisitLogCountAggregateOutputType> | number
          }
        }
      }
      RevenueRecord: {
        payload: Prisma.$RevenueRecordPayload<ExtArgs>
        fields: Prisma.RevenueRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevenueRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevenueRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>
          }
          findFirst: {
            args: Prisma.RevenueRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevenueRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>
          }
          findMany: {
            args: Prisma.RevenueRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>[]
          }
          create: {
            args: Prisma.RevenueRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>
          }
          createMany: {
            args: Prisma.RevenueRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevenueRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>[]
          }
          delete: {
            args: Prisma.RevenueRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>
          }
          update: {
            args: Prisma.RevenueRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>
          }
          deleteMany: {
            args: Prisma.RevenueRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevenueRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevenueRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>[]
          }
          upsert: {
            args: Prisma.RevenueRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueRecordPayload>
          }
          aggregate: {
            args: Prisma.RevenueRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevenueRecord>
          }
          groupBy: {
            args: Prisma.RevenueRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevenueRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevenueRecordCountArgs<ExtArgs>
            result: $Utils.Optional<RevenueRecordCountAggregateOutputType> | number
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
    clinic?: ClinicOmit
    subscription?: SubscriptionOmit
    user?: UserOmit
    patient?: PatientOmit
    appointment?: AppointmentOmit
    visitLog?: VisitLogOmit
    revenueRecord?: RevenueRecordOmit
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
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    users: number
    patients: number
    appointments: number
    visitLogs: number
    revenues: number
  }

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ClinicCountOutputTypeCountUsersArgs
    patients?: boolean | ClinicCountOutputTypeCountPatientsArgs
    appointments?: boolean | ClinicCountOutputTypeCountAppointmentsArgs
    visitLogs?: boolean | ClinicCountOutputTypeCountVisitLogsArgs
    revenues?: boolean | ClinicCountOutputTypeCountRevenuesArgs
  }

  // Custom InputTypes
  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountVisitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitLogWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountRevenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueRecordWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
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
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    visitLogs: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    visitLogs?: boolean | PatientCountOutputTypeCountVisitLogsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountVisitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  export type ClinicMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    address: string | null
    logo: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    address: string | null
    logo: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    phone: number
    address: number
    logo: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClinicMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    logo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    logo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    logo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinic to aggregate.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinics
    **/
    _count?: true | ClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicMaxAggregateInputType
  }

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>
  }




  export type ClinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicWhereInput
    orderBy?: ClinicOrderByWithAggregationInput | ClinicOrderByWithAggregationInput[]
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum
    having?: ClinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicCountAggregateInputType | true
    _min?: ClinicMinAggregateInputType
    _max?: ClinicMaxAggregateInputType
  }

  export type ClinicGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string
    phone: string | null
    address: string | null
    logo: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  type GetClinicGroupByPayload<T extends ClinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
        }
      >
    >


  export type ClinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | Clinic$subscriptionArgs<ExtArgs>
    users?: boolean | Clinic$usersArgs<ExtArgs>
    patients?: boolean | Clinic$patientsArgs<ExtArgs>
    appointments?: boolean | Clinic$appointmentsArgs<ExtArgs>
    visitLogs?: boolean | Clinic$visitLogsArgs<ExtArgs>
    revenues?: boolean | Clinic$revenuesArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClinicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "phone" | "address" | "logo" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["clinic"]>
  export type ClinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | Clinic$subscriptionArgs<ExtArgs>
    users?: boolean | Clinic$usersArgs<ExtArgs>
    patients?: boolean | Clinic$patientsArgs<ExtArgs>
    appointments?: boolean | Clinic$appointmentsArgs<ExtArgs>
    visitLogs?: boolean | Clinic$visitLogsArgs<ExtArgs>
    revenues?: boolean | Clinic$revenuesArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClinicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinic"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      visitLogs: Prisma.$VisitLogPayload<ExtArgs>[]
      revenues: Prisma.$RevenueRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string
      phone: string | null
      address: string | null
      logo: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clinic"]>
    composites: {}
  }

  type ClinicGetPayload<S extends boolean | null | undefined | ClinicDefaultArgs> = $Result.GetResult<Prisma.$ClinicPayload, S>

  type ClinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicCountAggregateInputType | true
    }

  export interface ClinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinic'], meta: { name: 'Clinic' } }
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {ClinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicFindUniqueArgs>(args: SelectSubset<T, ClinicFindUniqueArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicFindFirstArgs>(args?: SelectSubset<T, ClinicFindFirstArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicFindManyArgs>(args?: SelectSubset<T, ClinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinic.
     * @param {ClinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     * 
     */
    create<T extends ClinicCreateArgs>(args: SelectSubset<T, ClinicCreateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinics.
     * @param {ClinicCreateManyArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicCreateManyArgs>(args?: SelectSubset<T, ClinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinics and returns the data saved in the database.
     * @param {ClinicCreateManyAndReturnArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clinic.
     * @param {ClinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     * 
     */
    delete<T extends ClinicDeleteArgs>(args: SelectSubset<T, ClinicDeleteArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinic.
     * @param {ClinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicUpdateArgs>(args: SelectSubset<T, ClinicUpdateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinics.
     * @param {ClinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicDeleteManyArgs>(args?: SelectSubset<T, ClinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicUpdateManyArgs>(args: SelectSubset<T, ClinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics and returns the data updated in the database.
     * @param {ClinicUpdateManyAndReturnArgs} args - Arguments to update many Clinics.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClinicUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clinic.
     * @param {ClinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     */
    upsert<T extends ClinicUpsertArgs>(args: SelectSubset<T, ClinicUpsertArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends ClinicCountArgs>(
      args?: Subset<T, ClinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicAggregateArgs>(args: Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicGroupByArgs} args - Group by arguments.
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
      T extends ClinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicGroupByArgs['orderBy'] }
        : { orderBy?: ClinicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinic model
   */
  readonly fields: ClinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends Clinic$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Clinic$usersArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends Clinic$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Clinic$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitLogs<T extends Clinic$visitLogsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$visitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    revenues<T extends Clinic$revenuesArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Clinic model
   */
  interface ClinicFieldRefs {
    readonly id: FieldRef<"Clinic", 'String'>
    readonly name: FieldRef<"Clinic", 'String'>
    readonly slug: FieldRef<"Clinic", 'String'>
    readonly email: FieldRef<"Clinic", 'String'>
    readonly phone: FieldRef<"Clinic", 'String'>
    readonly address: FieldRef<"Clinic", 'String'>
    readonly logo: FieldRef<"Clinic", 'String'>
    readonly isActive: FieldRef<"Clinic", 'Boolean'>
    readonly createdAt: FieldRef<"Clinic", 'DateTime'>
    readonly updatedAt: FieldRef<"Clinic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clinic findUnique
   */
  export type ClinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findUniqueOrThrow
   */
  export type ClinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findFirst
   */
  export type ClinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findFirstOrThrow
   */
  export type ClinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findMany
   */
  export type ClinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic create
   */
  export type ClinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinic.
     */
    data: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
  }

  /**
   * Clinic createMany
   */
  export type ClinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic createManyAndReturn
   */
  export type ClinicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic update
   */
  export type ClinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinic.
     */
    data: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
    /**
     * Choose, which Clinic to update.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic updateMany
   */
  export type ClinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinic updateManyAndReturn
   */
  export type ClinicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinic upsert
   */
  export type ClinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinic to update in case it exists.
     */
    where: ClinicWhereUniqueInput
    /**
     * In case the Clinic found by the `where` argument doesn't exist, create a new Clinic with this data.
     */
    create: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
    /**
     * In case the Clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
  }

  /**
   * Clinic delete
   */
  export type ClinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter which Clinic to delete.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic deleteMany
   */
  export type ClinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinics to delete
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to delete.
     */
    limit?: number
  }

  /**
   * Clinic.subscription
   */
  export type Clinic$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Clinic.users
   */
  export type Clinic$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Clinic.patients
   */
  export type Clinic$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Clinic.appointments
   */
  export type Clinic$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Clinic.visitLogs
   */
  export type Clinic$visitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    where?: VisitLogWhereInput
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    cursor?: VisitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * Clinic.revenues
   */
  export type Clinic$revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    where?: RevenueRecordWhereInput
    orderBy?: RevenueRecordOrderByWithRelationInput | RevenueRecordOrderByWithRelationInput[]
    cursor?: RevenueRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevenueRecordScalarFieldEnum | RevenueRecordScalarFieldEnum[]
  }

  /**
   * Clinic without action
   */
  export type ClinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    maxDoctors: number | null
    maxStaff: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    maxDoctors: number | null
    maxStaff: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    clinicId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    maxDoctors: number | null
    maxStaff: number | null
    startDate: Date | null
    expiryDate: Date | null
    billingCycle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    clinicId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    maxDoctors: number | null
    maxStaff: number | null
    startDate: Date | null
    expiryDate: Date | null
    billingCycle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    clinicId: number
    plan: number
    status: number
    maxDoctors: number
    maxStaff: number
    startDate: number
    expiryDate: number
    billingCycle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    maxDoctors?: true
    maxStaff?: true
  }

  export type SubscriptionSumAggregateInputType = {
    maxDoctors?: true
    maxStaff?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    clinicId?: true
    plan?: true
    status?: true
    maxDoctors?: true
    maxStaff?: true
    startDate?: true
    expiryDate?: true
    billingCycle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    clinicId?: true
    plan?: true
    status?: true
    maxDoctors?: true
    maxStaff?: true
    startDate?: true
    expiryDate?: true
    billingCycle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    clinicId?: true
    plan?: true
    status?: true
    maxDoctors?: true
    maxStaff?: true
    startDate?: true
    expiryDate?: true
    billingCycle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    clinicId: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    maxDoctors: number
    maxStaff: number
    startDate: Date
    expiryDate: Date
    billingCycle: string
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    plan?: boolean
    status?: boolean
    maxDoctors?: boolean
    maxStaff?: boolean
    startDate?: boolean
    expiryDate?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    plan?: boolean
    status?: boolean
    maxDoctors?: boolean
    maxStaff?: boolean
    startDate?: boolean
    expiryDate?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    plan?: boolean
    status?: boolean
    maxDoctors?: boolean
    maxStaff?: boolean
    startDate?: boolean
    expiryDate?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    clinicId?: boolean
    plan?: boolean
    status?: boolean
    maxDoctors?: boolean
    maxStaff?: boolean
    startDate?: boolean
    expiryDate?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "plan" | "status" | "maxDoctors" | "maxStaff" | "startDate" | "expiryDate" | "billingCycle" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicId: string
      plan: $Enums.SubscriptionPlan
      status: $Enums.SubscriptionStatus
      maxDoctors: number
      maxStaff: number
      startDate: Date
      expiryDate: Date
      billingCycle: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly clinicId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'SubscriptionPlan'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly maxDoctors: FieldRef<"Subscription", 'Int'>
    readonly maxStaff: FieldRef<"Subscription", 'Int'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly expiryDate: FieldRef<"Subscription", 'DateTime'>
    readonly billingCycle: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clinicId: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    phone: string | null
    specialization: string | null
    isActive: boolean | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clinicId: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    phone: string | null
    specialization: string | null
    isActive: boolean | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clinicId: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    phone: number
    specialization: number
    isActive: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clinicId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    phone?: true
    specialization?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clinicId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    phone?: true
    specialization?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clinicId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    phone?: true
    specialization?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clinicId: string | null
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    phone: string | null
    specialization: string | null
    isActive: boolean
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    clinicId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    specialization?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    specialization?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    specialization?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clinicId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    phone?: boolean
    specialization?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "email" | "password" | "firstName" | "lastName" | "role" | "phone" | "specialization" | "isActive" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs> | null
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicId: string | null
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.Role
      phone: string | null
      specialization: string | null
      isActive: boolean
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
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
    clinic<T extends User$clinicArgs<ExtArgs> = {}>(args?: Subset<T, User$clinicArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly clinicId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly specialization: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.clinic
   */
  export type User$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    where?: ClinicWhereInput
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
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
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    clinicId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    address: string | null
    bloodGroup: string | null
    allergies: string | null
    medicalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    clinicId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    address: string | null
    bloodGroup: string | null
    allergies: string | null
    medicalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    clinicId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dateOfBirth: number
    gender: number
    address: number
    bloodGroup: number
    allergies: number
    medicalNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    clinicId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    bloodGroup?: true
    allergies?: true
    medicalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    clinicId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    bloodGroup?: true
    allergies?: true
    medicalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    clinicId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    bloodGroup?: true
    allergies?: true
    medicalNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    clinicId: string
    firstName: string
    lastName: string
    email: string | null
    phone: string
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    address: string | null
    bloodGroup: string | null
    allergies: string | null
    medicalNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    visitLogs?: boolean | Patient$visitLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    clinicId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "firstName" | "lastName" | "email" | "phone" | "dateOfBirth" | "gender" | "address" | "bloodGroup" | "allergies" | "medicalNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    visitLogs?: boolean | Patient$visitLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      visitLogs: Prisma.$VisitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicId: string
      firstName: string
      lastName: string
      email: string | null
      phone: string
      dateOfBirth: Date | null
      gender: $Enums.Gender | null
      address: string | null
      bloodGroup: string | null
      allergies: string | null
      medicalNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitLogs<T extends Patient$visitLogsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$visitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly clinicId: FieldRef<"Patient", 'String'>
    readonly firstName: FieldRef<"Patient", 'String'>
    readonly lastName: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'Gender'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly bloodGroup: FieldRef<"Patient", 'String'>
    readonly allergies: FieldRef<"Patient", 'String'>
    readonly medicalNotes: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.visitLogs
   */
  export type Patient$visitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    where?: VisitLogWhereInput
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    cursor?: VisitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    fee: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    fee: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    clinicId: string | null
    patientId: string | null
    doctorId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.AppointmentStatus | null
    reason: string | null
    notes: string | null
    fee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    clinicId: string | null
    patientId: string | null
    doctorId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.AppointmentStatus | null
    reason: string | null
    notes: string | null
    fee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    clinicId: number
    patientId: number
    doctorId: number
    date: number
    startTime: number
    endTime: number
    status: number
    reason: number
    notes: number
    fee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    fee?: true
  }

  export type AppointmentSumAggregateInputType = {
    fee?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    clinicId?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    reason?: true
    notes?: true
    fee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    clinicId?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    reason?: true
    notes?: true
    fee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    clinicId?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    reason?: true
    notes?: true
    fee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    clinicId: string
    patientId: string
    doctorId: string
    date: Date
    startTime: string
    endTime: string
    status: $Enums.AppointmentStatus
    reason: string | null
    notes: string | null
    fee: number | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reason?: boolean
    notes?: boolean
    fee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reason?: boolean
    notes?: boolean
    fee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reason?: boolean
    notes?: boolean
    fee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reason?: boolean
    notes?: boolean
    fee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "patientId" | "doctorId" | "date" | "startTime" | "endTime" | "status" | "reason" | "notes" | "fee" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicId: string
      patientId: string
      doctorId: string
      date: Date
      startTime: string
      endTime: string
      status: $Enums.AppointmentStatus
      reason: string | null
      notes: string | null
      fee: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly clinicId: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly startTime: FieldRef<"Appointment", 'String'>
    readonly endTime: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly fee: FieldRef<"Appointment", 'Float'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model VisitLog
   */

  export type AggregateVisitLog = {
    _count: VisitLogCountAggregateOutputType | null
    _min: VisitLogMinAggregateOutputType | null
    _max: VisitLogMaxAggregateOutputType | null
  }

  export type VisitLogMinAggregateOutputType = {
    id: string | null
    clinicId: string | null
    patientId: string | null
    diagnosis: string | null
    treatment: string | null
    prescription: string | null
    notes: string | null
    visitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitLogMaxAggregateOutputType = {
    id: string | null
    clinicId: string | null
    patientId: string | null
    diagnosis: string | null
    treatment: string | null
    prescription: string | null
    notes: string | null
    visitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitLogCountAggregateOutputType = {
    id: number
    clinicId: number
    patientId: number
    diagnosis: number
    treatment: number
    prescription: number
    vitals: number
    notes: number
    visitDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitLogMinAggregateInputType = {
    id?: true
    clinicId?: true
    patientId?: true
    diagnosis?: true
    treatment?: true
    prescription?: true
    notes?: true
    visitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitLogMaxAggregateInputType = {
    id?: true
    clinicId?: true
    patientId?: true
    diagnosis?: true
    treatment?: true
    prescription?: true
    notes?: true
    visitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitLogCountAggregateInputType = {
    id?: true
    clinicId?: true
    patientId?: true
    diagnosis?: true
    treatment?: true
    prescription?: true
    vitals?: true
    notes?: true
    visitDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitLog to aggregate.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitLogs
    **/
    _count?: true | VisitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitLogMaxAggregateInputType
  }

  export type GetVisitLogAggregateType<T extends VisitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitLog[P]>
      : GetScalarType<T[P], AggregateVisitLog[P]>
  }




  export type VisitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitLogWhereInput
    orderBy?: VisitLogOrderByWithAggregationInput | VisitLogOrderByWithAggregationInput[]
    by: VisitLogScalarFieldEnum[] | VisitLogScalarFieldEnum
    having?: VisitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitLogCountAggregateInputType | true
    _min?: VisitLogMinAggregateInputType
    _max?: VisitLogMaxAggregateInputType
  }

  export type VisitLogGroupByOutputType = {
    id: string
    clinicId: string
    patientId: string
    diagnosis: string | null
    treatment: string | null
    prescription: string | null
    vitals: JsonValue | null
    notes: string | null
    visitDate: Date
    createdAt: Date
    updatedAt: Date
    _count: VisitLogCountAggregateOutputType | null
    _min: VisitLogMinAggregateOutputType | null
    _max: VisitLogMaxAggregateOutputType | null
  }

  type GetVisitLogGroupByPayload<T extends VisitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitLogGroupByOutputType[P]>
            : GetScalarType<T[P], VisitLogGroupByOutputType[P]>
        }
      >
    >


  export type VisitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    diagnosis?: boolean
    treatment?: boolean
    prescription?: boolean
    vitals?: boolean
    notes?: boolean
    visitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitLog"]>

  export type VisitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    diagnosis?: boolean
    treatment?: boolean
    prescription?: boolean
    vitals?: boolean
    notes?: boolean
    visitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitLog"]>

  export type VisitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    diagnosis?: boolean
    treatment?: boolean
    prescription?: boolean
    vitals?: boolean
    notes?: boolean
    visitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitLog"]>

  export type VisitLogSelectScalar = {
    id?: boolean
    clinicId?: boolean
    patientId?: boolean
    diagnosis?: boolean
    treatment?: boolean
    prescription?: boolean
    vitals?: boolean
    notes?: boolean
    visitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "patientId" | "diagnosis" | "treatment" | "prescription" | "vitals" | "notes" | "visitDate" | "createdAt" | "updatedAt", ExtArgs["result"]["visitLog"]>
  export type VisitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VisitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VisitLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $VisitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitLog"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicId: string
      patientId: string
      diagnosis: string | null
      treatment: string | null
      prescription: string | null
      vitals: Prisma.JsonValue | null
      notes: string | null
      visitDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visitLog"]>
    composites: {}
  }

  type VisitLogGetPayload<S extends boolean | null | undefined | VisitLogDefaultArgs> = $Result.GetResult<Prisma.$VisitLogPayload, S>

  type VisitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitLogCountAggregateInputType | true
    }

  export interface VisitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitLog'], meta: { name: 'VisitLog' } }
    /**
     * Find zero or one VisitLog that matches the filter.
     * @param {VisitLogFindUniqueArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitLogFindUniqueArgs>(args: SelectSubset<T, VisitLogFindUniqueArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitLogFindUniqueOrThrowArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogFindFirstArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitLogFindFirstArgs>(args?: SelectSubset<T, VisitLogFindFirstArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogFindFirstOrThrowArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitLogs
     * const visitLogs = await prisma.visitLog.findMany()
     * 
     * // Get first 10 VisitLogs
     * const visitLogs = await prisma.visitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitLogWithIdOnly = await prisma.visitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitLogFindManyArgs>(args?: SelectSubset<T, VisitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitLog.
     * @param {VisitLogCreateArgs} args - Arguments to create a VisitLog.
     * @example
     * // Create one VisitLog
     * const VisitLog = await prisma.visitLog.create({
     *   data: {
     *     // ... data to create a VisitLog
     *   }
     * })
     * 
     */
    create<T extends VisitLogCreateArgs>(args: SelectSubset<T, VisitLogCreateArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitLogs.
     * @param {VisitLogCreateManyArgs} args - Arguments to create many VisitLogs.
     * @example
     * // Create many VisitLogs
     * const visitLog = await prisma.visitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitLogCreateManyArgs>(args?: SelectSubset<T, VisitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitLogs and returns the data saved in the database.
     * @param {VisitLogCreateManyAndReturnArgs} args - Arguments to create many VisitLogs.
     * @example
     * // Create many VisitLogs
     * const visitLog = await prisma.visitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitLogs and only return the `id`
     * const visitLogWithIdOnly = await prisma.visitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitLog.
     * @param {VisitLogDeleteArgs} args - Arguments to delete one VisitLog.
     * @example
     * // Delete one VisitLog
     * const VisitLog = await prisma.visitLog.delete({
     *   where: {
     *     // ... filter to delete one VisitLog
     *   }
     * })
     * 
     */
    delete<T extends VisitLogDeleteArgs>(args: SelectSubset<T, VisitLogDeleteArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitLog.
     * @param {VisitLogUpdateArgs} args - Arguments to update one VisitLog.
     * @example
     * // Update one VisitLog
     * const visitLog = await prisma.visitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitLogUpdateArgs>(args: SelectSubset<T, VisitLogUpdateArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitLogs.
     * @param {VisitLogDeleteManyArgs} args - Arguments to filter VisitLogs to delete.
     * @example
     * // Delete a few VisitLogs
     * const { count } = await prisma.visitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitLogDeleteManyArgs>(args?: SelectSubset<T, VisitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitLogs
     * const visitLog = await prisma.visitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitLogUpdateManyArgs>(args: SelectSubset<T, VisitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitLogs and returns the data updated in the database.
     * @param {VisitLogUpdateManyAndReturnArgs} args - Arguments to update many VisitLogs.
     * @example
     * // Update many VisitLogs
     * const visitLog = await prisma.visitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitLogs and only return the `id`
     * const visitLogWithIdOnly = await prisma.visitLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitLog.
     * @param {VisitLogUpsertArgs} args - Arguments to update or create a VisitLog.
     * @example
     * // Update or create a VisitLog
     * const visitLog = await prisma.visitLog.upsert({
     *   create: {
     *     // ... data to create a VisitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitLog we want to update
     *   }
     * })
     */
    upsert<T extends VisitLogUpsertArgs>(args: SelectSubset<T, VisitLogUpsertArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogCountArgs} args - Arguments to filter VisitLogs to count.
     * @example
     * // Count the number of VisitLogs
     * const count = await prisma.visitLog.count({
     *   where: {
     *     // ... the filter for the VisitLogs we want to count
     *   }
     * })
    **/
    count<T extends VisitLogCountArgs>(
      args?: Subset<T, VisitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitLogAggregateArgs>(args: Subset<T, VisitLogAggregateArgs>): Prisma.PrismaPromise<GetVisitLogAggregateType<T>>

    /**
     * Group by VisitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogGroupByArgs} args - Group by arguments.
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
      T extends VisitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitLogGroupByArgs['orderBy'] }
        : { orderBy?: VisitLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitLog model
   */
  readonly fields: VisitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VisitLog model
   */
  interface VisitLogFieldRefs {
    readonly id: FieldRef<"VisitLog", 'String'>
    readonly clinicId: FieldRef<"VisitLog", 'String'>
    readonly patientId: FieldRef<"VisitLog", 'String'>
    readonly diagnosis: FieldRef<"VisitLog", 'String'>
    readonly treatment: FieldRef<"VisitLog", 'String'>
    readonly prescription: FieldRef<"VisitLog", 'String'>
    readonly vitals: FieldRef<"VisitLog", 'Json'>
    readonly notes: FieldRef<"VisitLog", 'String'>
    readonly visitDate: FieldRef<"VisitLog", 'DateTime'>
    readonly createdAt: FieldRef<"VisitLog", 'DateTime'>
    readonly updatedAt: FieldRef<"VisitLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisitLog findUnique
   */
  export type VisitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog findUniqueOrThrow
   */
  export type VisitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog findFirst
   */
  export type VisitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitLogs.
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitLogs.
     */
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * VisitLog findFirstOrThrow
   */
  export type VisitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitLogs.
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitLogs.
     */
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * VisitLog findMany
   */
  export type VisitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLogs to fetch.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitLogs.
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * VisitLog create
   */
  export type VisitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitLog.
     */
    data: XOR<VisitLogCreateInput, VisitLogUncheckedCreateInput>
  }

  /**
   * VisitLog createMany
   */
  export type VisitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitLogs.
     */
    data: VisitLogCreateManyInput | VisitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitLog createManyAndReturn
   */
  export type VisitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * The data used to create many VisitLogs.
     */
    data: VisitLogCreateManyInput | VisitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitLog update
   */
  export type VisitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitLog.
     */
    data: XOR<VisitLogUpdateInput, VisitLogUncheckedUpdateInput>
    /**
     * Choose, which VisitLog to update.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog updateMany
   */
  export type VisitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitLogs.
     */
    data: XOR<VisitLogUpdateManyMutationInput, VisitLogUncheckedUpdateManyInput>
    /**
     * Filter which VisitLogs to update
     */
    where?: VisitLogWhereInput
    /**
     * Limit how many VisitLogs to update.
     */
    limit?: number
  }

  /**
   * VisitLog updateManyAndReturn
   */
  export type VisitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * The data used to update VisitLogs.
     */
    data: XOR<VisitLogUpdateManyMutationInput, VisitLogUncheckedUpdateManyInput>
    /**
     * Filter which VisitLogs to update
     */
    where?: VisitLogWhereInput
    /**
     * Limit how many VisitLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitLog upsert
   */
  export type VisitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitLog to update in case it exists.
     */
    where: VisitLogWhereUniqueInput
    /**
     * In case the VisitLog found by the `where` argument doesn't exist, create a new VisitLog with this data.
     */
    create: XOR<VisitLogCreateInput, VisitLogUncheckedCreateInput>
    /**
     * In case the VisitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitLogUpdateInput, VisitLogUncheckedUpdateInput>
  }

  /**
   * VisitLog delete
   */
  export type VisitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter which VisitLog to delete.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog deleteMany
   */
  export type VisitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitLogs to delete
     */
    where?: VisitLogWhereInput
    /**
     * Limit how many VisitLogs to delete.
     */
    limit?: number
  }

  /**
   * VisitLog without action
   */
  export type VisitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
  }


  /**
   * Model RevenueRecord
   */

  export type AggregateRevenueRecord = {
    _count: RevenueRecordCountAggregateOutputType | null
    _avg: RevenueRecordAvgAggregateOutputType | null
    _sum: RevenueRecordSumAggregateOutputType | null
    _min: RevenueRecordMinAggregateOutputType | null
    _max: RevenueRecordMaxAggregateOutputType | null
  }

  export type RevenueRecordAvgAggregateOutputType = {
    amount: number | null
  }

  export type RevenueRecordSumAggregateOutputType = {
    amount: number | null
  }

  export type RevenueRecordMinAggregateOutputType = {
    id: string | null
    clinicId: string | null
    category: string | null
    amount: number | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RevenueRecordMaxAggregateOutputType = {
    id: string | null
    clinicId: string | null
    category: string | null
    amount: number | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RevenueRecordCountAggregateOutputType = {
    id: number
    clinicId: number
    category: number
    amount: number
    description: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RevenueRecordAvgAggregateInputType = {
    amount?: true
  }

  export type RevenueRecordSumAggregateInputType = {
    amount?: true
  }

  export type RevenueRecordMinAggregateInputType = {
    id?: true
    clinicId?: true
    category?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RevenueRecordMaxAggregateInputType = {
    id?: true
    clinicId?: true
    category?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RevenueRecordCountAggregateInputType = {
    id?: true
    clinicId?: true
    category?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RevenueRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenueRecord to aggregate.
     */
    where?: RevenueRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueRecords to fetch.
     */
    orderBy?: RevenueRecordOrderByWithRelationInput | RevenueRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevenueRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevenueRecords
    **/
    _count?: true | RevenueRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevenueRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevenueRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevenueRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevenueRecordMaxAggregateInputType
  }

  export type GetRevenueRecordAggregateType<T extends RevenueRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRevenueRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevenueRecord[P]>
      : GetScalarType<T[P], AggregateRevenueRecord[P]>
  }




  export type RevenueRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueRecordWhereInput
    orderBy?: RevenueRecordOrderByWithAggregationInput | RevenueRecordOrderByWithAggregationInput[]
    by: RevenueRecordScalarFieldEnum[] | RevenueRecordScalarFieldEnum
    having?: RevenueRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevenueRecordCountAggregateInputType | true
    _avg?: RevenueRecordAvgAggregateInputType
    _sum?: RevenueRecordSumAggregateInputType
    _min?: RevenueRecordMinAggregateInputType
    _max?: RevenueRecordMaxAggregateInputType
  }

  export type RevenueRecordGroupByOutputType = {
    id: string
    clinicId: string
    category: string
    amount: number
    description: string | null
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: RevenueRecordCountAggregateOutputType | null
    _avg: RevenueRecordAvgAggregateOutputType | null
    _sum: RevenueRecordSumAggregateOutputType | null
    _min: RevenueRecordMinAggregateOutputType | null
    _max: RevenueRecordMaxAggregateOutputType | null
  }

  type GetRevenueRecordGroupByPayload<T extends RevenueRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevenueRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevenueRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevenueRecordGroupByOutputType[P]>
            : GetScalarType<T[P], RevenueRecordGroupByOutputType[P]>
        }
      >
    >


  export type RevenueRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueRecord"]>

  export type RevenueRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueRecord"]>

  export type RevenueRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueRecord"]>

  export type RevenueRecordSelectScalar = {
    id?: boolean
    clinicId?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RevenueRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "category" | "amount" | "description" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["revenueRecord"]>
  export type RevenueRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }
  export type RevenueRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }
  export type RevenueRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }

  export type $RevenueRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevenueRecord"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicId: string
      category: string
      amount: number
      description: string | null
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["revenueRecord"]>
    composites: {}
  }

  type RevenueRecordGetPayload<S extends boolean | null | undefined | RevenueRecordDefaultArgs> = $Result.GetResult<Prisma.$RevenueRecordPayload, S>

  type RevenueRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevenueRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevenueRecordCountAggregateInputType | true
    }

  export interface RevenueRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevenueRecord'], meta: { name: 'RevenueRecord' } }
    /**
     * Find zero or one RevenueRecord that matches the filter.
     * @param {RevenueRecordFindUniqueArgs} args - Arguments to find a RevenueRecord
     * @example
     * // Get one RevenueRecord
     * const revenueRecord = await prisma.revenueRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevenueRecordFindUniqueArgs>(args: SelectSubset<T, RevenueRecordFindUniqueArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevenueRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevenueRecordFindUniqueOrThrowArgs} args - Arguments to find a RevenueRecord
     * @example
     * // Get one RevenueRecord
     * const revenueRecord = await prisma.revenueRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevenueRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RevenueRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenueRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueRecordFindFirstArgs} args - Arguments to find a RevenueRecord
     * @example
     * // Get one RevenueRecord
     * const revenueRecord = await prisma.revenueRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevenueRecordFindFirstArgs>(args?: SelectSubset<T, RevenueRecordFindFirstArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenueRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueRecordFindFirstOrThrowArgs} args - Arguments to find a RevenueRecord
     * @example
     * // Get one RevenueRecord
     * const revenueRecord = await prisma.revenueRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevenueRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RevenueRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevenueRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevenueRecords
     * const revenueRecords = await prisma.revenueRecord.findMany()
     * 
     * // Get first 10 RevenueRecords
     * const revenueRecords = await prisma.revenueRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revenueRecordWithIdOnly = await prisma.revenueRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevenueRecordFindManyArgs>(args?: SelectSubset<T, RevenueRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevenueRecord.
     * @param {RevenueRecordCreateArgs} args - Arguments to create a RevenueRecord.
     * @example
     * // Create one RevenueRecord
     * const RevenueRecord = await prisma.revenueRecord.create({
     *   data: {
     *     // ... data to create a RevenueRecord
     *   }
     * })
     * 
     */
    create<T extends RevenueRecordCreateArgs>(args: SelectSubset<T, RevenueRecordCreateArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevenueRecords.
     * @param {RevenueRecordCreateManyArgs} args - Arguments to create many RevenueRecords.
     * @example
     * // Create many RevenueRecords
     * const revenueRecord = await prisma.revenueRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevenueRecordCreateManyArgs>(args?: SelectSubset<T, RevenueRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevenueRecords and returns the data saved in the database.
     * @param {RevenueRecordCreateManyAndReturnArgs} args - Arguments to create many RevenueRecords.
     * @example
     * // Create many RevenueRecords
     * const revenueRecord = await prisma.revenueRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevenueRecords and only return the `id`
     * const revenueRecordWithIdOnly = await prisma.revenueRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevenueRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, RevenueRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevenueRecord.
     * @param {RevenueRecordDeleteArgs} args - Arguments to delete one RevenueRecord.
     * @example
     * // Delete one RevenueRecord
     * const RevenueRecord = await prisma.revenueRecord.delete({
     *   where: {
     *     // ... filter to delete one RevenueRecord
     *   }
     * })
     * 
     */
    delete<T extends RevenueRecordDeleteArgs>(args: SelectSubset<T, RevenueRecordDeleteArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevenueRecord.
     * @param {RevenueRecordUpdateArgs} args - Arguments to update one RevenueRecord.
     * @example
     * // Update one RevenueRecord
     * const revenueRecord = await prisma.revenueRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevenueRecordUpdateArgs>(args: SelectSubset<T, RevenueRecordUpdateArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevenueRecords.
     * @param {RevenueRecordDeleteManyArgs} args - Arguments to filter RevenueRecords to delete.
     * @example
     * // Delete a few RevenueRecords
     * const { count } = await prisma.revenueRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevenueRecordDeleteManyArgs>(args?: SelectSubset<T, RevenueRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenueRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevenueRecords
     * const revenueRecord = await prisma.revenueRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevenueRecordUpdateManyArgs>(args: SelectSubset<T, RevenueRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenueRecords and returns the data updated in the database.
     * @param {RevenueRecordUpdateManyAndReturnArgs} args - Arguments to update many RevenueRecords.
     * @example
     * // Update many RevenueRecords
     * const revenueRecord = await prisma.revenueRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevenueRecords and only return the `id`
     * const revenueRecordWithIdOnly = await prisma.revenueRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends RevenueRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, RevenueRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevenueRecord.
     * @param {RevenueRecordUpsertArgs} args - Arguments to update or create a RevenueRecord.
     * @example
     * // Update or create a RevenueRecord
     * const revenueRecord = await prisma.revenueRecord.upsert({
     *   create: {
     *     // ... data to create a RevenueRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevenueRecord we want to update
     *   }
     * })
     */
    upsert<T extends RevenueRecordUpsertArgs>(args: SelectSubset<T, RevenueRecordUpsertArgs<ExtArgs>>): Prisma__RevenueRecordClient<$Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevenueRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueRecordCountArgs} args - Arguments to filter RevenueRecords to count.
     * @example
     * // Count the number of RevenueRecords
     * const count = await prisma.revenueRecord.count({
     *   where: {
     *     // ... the filter for the RevenueRecords we want to count
     *   }
     * })
    **/
    count<T extends RevenueRecordCountArgs>(
      args?: Subset<T, RevenueRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevenueRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevenueRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevenueRecordAggregateArgs>(args: Subset<T, RevenueRecordAggregateArgs>): Prisma.PrismaPromise<GetRevenueRecordAggregateType<T>>

    /**
     * Group by RevenueRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueRecordGroupByArgs} args - Group by arguments.
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
      T extends RevenueRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevenueRecordGroupByArgs['orderBy'] }
        : { orderBy?: RevenueRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RevenueRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevenueRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevenueRecord model
   */
  readonly fields: RevenueRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevenueRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevenueRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RevenueRecord model
   */
  interface RevenueRecordFieldRefs {
    readonly id: FieldRef<"RevenueRecord", 'String'>
    readonly clinicId: FieldRef<"RevenueRecord", 'String'>
    readonly category: FieldRef<"RevenueRecord", 'String'>
    readonly amount: FieldRef<"RevenueRecord", 'Float'>
    readonly description: FieldRef<"RevenueRecord", 'String'>
    readonly date: FieldRef<"RevenueRecord", 'DateTime'>
    readonly createdAt: FieldRef<"RevenueRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"RevenueRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RevenueRecord findUnique
   */
  export type RevenueRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * Filter, which RevenueRecord to fetch.
     */
    where: RevenueRecordWhereUniqueInput
  }

  /**
   * RevenueRecord findUniqueOrThrow
   */
  export type RevenueRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * Filter, which RevenueRecord to fetch.
     */
    where: RevenueRecordWhereUniqueInput
  }

  /**
   * RevenueRecord findFirst
   */
  export type RevenueRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * Filter, which RevenueRecord to fetch.
     */
    where?: RevenueRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueRecords to fetch.
     */
    orderBy?: RevenueRecordOrderByWithRelationInput | RevenueRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenueRecords.
     */
    cursor?: RevenueRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenueRecords.
     */
    distinct?: RevenueRecordScalarFieldEnum | RevenueRecordScalarFieldEnum[]
  }

  /**
   * RevenueRecord findFirstOrThrow
   */
  export type RevenueRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * Filter, which RevenueRecord to fetch.
     */
    where?: RevenueRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueRecords to fetch.
     */
    orderBy?: RevenueRecordOrderByWithRelationInput | RevenueRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenueRecords.
     */
    cursor?: RevenueRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenueRecords.
     */
    distinct?: RevenueRecordScalarFieldEnum | RevenueRecordScalarFieldEnum[]
  }

  /**
   * RevenueRecord findMany
   */
  export type RevenueRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * Filter, which RevenueRecords to fetch.
     */
    where?: RevenueRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueRecords to fetch.
     */
    orderBy?: RevenueRecordOrderByWithRelationInput | RevenueRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevenueRecords.
     */
    cursor?: RevenueRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueRecords.
     */
    skip?: number
    distinct?: RevenueRecordScalarFieldEnum | RevenueRecordScalarFieldEnum[]
  }

  /**
   * RevenueRecord create
   */
  export type RevenueRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a RevenueRecord.
     */
    data: XOR<RevenueRecordCreateInput, RevenueRecordUncheckedCreateInput>
  }

  /**
   * RevenueRecord createMany
   */
  export type RevenueRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevenueRecords.
     */
    data: RevenueRecordCreateManyInput | RevenueRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevenueRecord createManyAndReturn
   */
  export type RevenueRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * The data used to create many RevenueRecords.
     */
    data: RevenueRecordCreateManyInput | RevenueRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenueRecord update
   */
  export type RevenueRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a RevenueRecord.
     */
    data: XOR<RevenueRecordUpdateInput, RevenueRecordUncheckedUpdateInput>
    /**
     * Choose, which RevenueRecord to update.
     */
    where: RevenueRecordWhereUniqueInput
  }

  /**
   * RevenueRecord updateMany
   */
  export type RevenueRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevenueRecords.
     */
    data: XOR<RevenueRecordUpdateManyMutationInput, RevenueRecordUncheckedUpdateManyInput>
    /**
     * Filter which RevenueRecords to update
     */
    where?: RevenueRecordWhereInput
    /**
     * Limit how many RevenueRecords to update.
     */
    limit?: number
  }

  /**
   * RevenueRecord updateManyAndReturn
   */
  export type RevenueRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * The data used to update RevenueRecords.
     */
    data: XOR<RevenueRecordUpdateManyMutationInput, RevenueRecordUncheckedUpdateManyInput>
    /**
     * Filter which RevenueRecords to update
     */
    where?: RevenueRecordWhereInput
    /**
     * Limit how many RevenueRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenueRecord upsert
   */
  export type RevenueRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the RevenueRecord to update in case it exists.
     */
    where: RevenueRecordWhereUniqueInput
    /**
     * In case the RevenueRecord found by the `where` argument doesn't exist, create a new RevenueRecord with this data.
     */
    create: XOR<RevenueRecordCreateInput, RevenueRecordUncheckedCreateInput>
    /**
     * In case the RevenueRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevenueRecordUpdateInput, RevenueRecordUncheckedUpdateInput>
  }

  /**
   * RevenueRecord delete
   */
  export type RevenueRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
    /**
     * Filter which RevenueRecord to delete.
     */
    where: RevenueRecordWhereUniqueInput
  }

  /**
   * RevenueRecord deleteMany
   */
  export type RevenueRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenueRecords to delete
     */
    where?: RevenueRecordWhereInput
    /**
     * Limit how many RevenueRecords to delete.
     */
    limit?: number
  }

  /**
   * RevenueRecord without action
   */
  export type RevenueRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueRecord
     */
    select?: RevenueRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueRecord
     */
    omit?: RevenueRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueRecordInclude<ExtArgs> | null
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


  export const ClinicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    address: 'address',
    logo: 'logo',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    plan: 'plan',
    status: 'status',
    maxDoctors: 'maxDoctors',
    maxStaff: 'maxStaff',
    startDate: 'startDate',
    expiryDate: 'expiryDate',
    billingCycle: 'billingCycle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    phone: 'phone',
    specialization: 'specialization',
    isActive: 'isActive',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    address: 'address',
    bloodGroup: 'bloodGroup',
    allergies: 'allergies',
    medicalNotes: 'medicalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    patientId: 'patientId',
    doctorId: 'doctorId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    reason: 'reason',
    notes: 'notes',
    fee: 'fee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const VisitLogScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    patientId: 'patientId',
    diagnosis: 'diagnosis',
    treatment: 'treatment',
    prescription: 'prescription',
    vitals: 'vitals',
    notes: 'notes',
    visitDate: 'visitDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitLogScalarFieldEnum = (typeof VisitLogScalarFieldEnum)[keyof typeof VisitLogScalarFieldEnum]


  export const RevenueRecordScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    category: 'category',
    amount: 'amount',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RevenueRecordScalarFieldEnum = (typeof RevenueRecordScalarFieldEnum)[keyof typeof RevenueRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type ClinicWhereInput = {
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    id?: StringFilter<"Clinic"> | string
    name?: StringFilter<"Clinic"> | string
    slug?: StringFilter<"Clinic"> | string
    email?: StringFilter<"Clinic"> | string
    phone?: StringNullableFilter<"Clinic"> | string | null
    address?: StringNullableFilter<"Clinic"> | string | null
    logo?: StringNullableFilter<"Clinic"> | string | null
    isActive?: BoolFilter<"Clinic"> | boolean
    createdAt?: DateTimeFilter<"Clinic"> | Date | string
    updatedAt?: DateTimeFilter<"Clinic"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    users?: UserListRelationFilter
    patients?: PatientListRelationFilter
    appointments?: AppointmentListRelationFilter
    visitLogs?: VisitLogListRelationFilter
    revenues?: RevenueRecordListRelationFilter
  }

  export type ClinicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    visitLogs?: VisitLogOrderByRelationAggregateInput
    revenues?: RevenueRecordOrderByRelationAggregateInput
  }

  export type ClinicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    name?: StringFilter<"Clinic"> | string
    email?: StringFilter<"Clinic"> | string
    phone?: StringNullableFilter<"Clinic"> | string | null
    address?: StringNullableFilter<"Clinic"> | string | null
    logo?: StringNullableFilter<"Clinic"> | string | null
    isActive?: BoolFilter<"Clinic"> | boolean
    createdAt?: DateTimeFilter<"Clinic"> | Date | string
    updatedAt?: DateTimeFilter<"Clinic"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    users?: UserListRelationFilter
    patients?: PatientListRelationFilter
    appointments?: AppointmentListRelationFilter
    visitLogs?: VisitLogListRelationFilter
    revenues?: RevenueRecordListRelationFilter
  }, "id" | "slug">

  export type ClinicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClinicCountOrderByAggregateInput
    _max?: ClinicMaxOrderByAggregateInput
    _min?: ClinicMinOrderByAggregateInput
  }

  export type ClinicScalarWhereWithAggregatesInput = {
    AND?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    OR?: ClinicScalarWhereWithAggregatesInput[]
    NOT?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clinic"> | string
    name?: StringWithAggregatesFilter<"Clinic"> | string
    slug?: StringWithAggregatesFilter<"Clinic"> | string
    email?: StringWithAggregatesFilter<"Clinic"> | string
    phone?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    address?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    isActive?: BoolWithAggregatesFilter<"Clinic"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    clinicId?: StringFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    maxDoctors?: IntFilter<"Subscription"> | number
    maxStaff?: IntFilter<"Subscription"> | number
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    expiryDate?: DateTimeFilter<"Subscription"> | Date | string
    billingCycle?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    maxDoctors?: SortOrder
    maxStaff?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clinicId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    maxDoctors?: IntFilter<"Subscription"> | number
    maxStaff?: IntFilter<"Subscription"> | number
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    expiryDate?: DateTimeFilter<"Subscription"> | Date | string
    billingCycle?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
  }, "id" | "clinicId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    maxDoctors?: SortOrder
    maxStaff?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    clinicId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    maxDoctors?: IntWithAggregatesFilter<"Subscription"> | number
    maxStaff?: IntWithAggregatesFilter<"Subscription"> | number
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    billingCycle?: StringWithAggregatesFilter<"Subscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clinicId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    specialization?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    appointments?: AppointmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    clinicId?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    specialization?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    appointments?: AppointmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clinicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    clinicId?: StringFilter<"Patient"> | string
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    phone?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null
    address?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableFilter<"Patient"> | string | null
    medicalNotes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    appointments?: AppointmentListRelationFilter
    visitLogs?: VisitLogListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    medicalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    visitLogs?: VisitLogOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    clinicId?: StringFilter<"Patient"> | string
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    phone?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null
    address?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableFilter<"Patient"> | string | null
    medicalNotes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    appointments?: AppointmentListRelationFilter
    visitLogs?: VisitLogListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    medicalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    clinicId?: StringWithAggregatesFilter<"Patient"> | string
    firstName?: StringWithAggregatesFilter<"Patient"> | string
    lastName?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    phone?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Patient"> | $Enums.Gender | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    bloodGroup?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    allergies?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    medicalNotes?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    clinicId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    fee?: FloatNullableFilter<"Appointment"> | number | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    fee?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    clinicId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    fee?: FloatNullableFilter<"Appointment"> | number | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    fee?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    clinicId?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    startTime?: StringWithAggregatesFilter<"Appointment"> | string
    endTime?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    fee?: FloatNullableWithAggregatesFilter<"Appointment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type VisitLogWhereInput = {
    AND?: VisitLogWhereInput | VisitLogWhereInput[]
    OR?: VisitLogWhereInput[]
    NOT?: VisitLogWhereInput | VisitLogWhereInput[]
    id?: StringFilter<"VisitLog"> | string
    clinicId?: StringFilter<"VisitLog"> | string
    patientId?: StringFilter<"VisitLog"> | string
    diagnosis?: StringNullableFilter<"VisitLog"> | string | null
    treatment?: StringNullableFilter<"VisitLog"> | string | null
    prescription?: StringNullableFilter<"VisitLog"> | string | null
    vitals?: JsonNullableFilter<"VisitLog">
    notes?: StringNullableFilter<"VisitLog"> | string | null
    visitDate?: DateTimeFilter<"VisitLog"> | Date | string
    createdAt?: DateTimeFilter<"VisitLog"> | Date | string
    updatedAt?: DateTimeFilter<"VisitLog"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type VisitLogOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    treatment?: SortOrderInput | SortOrder
    prescription?: SortOrderInput | SortOrder
    vitals?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    visitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type VisitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisitLogWhereInput | VisitLogWhereInput[]
    OR?: VisitLogWhereInput[]
    NOT?: VisitLogWhereInput | VisitLogWhereInput[]
    clinicId?: StringFilter<"VisitLog"> | string
    patientId?: StringFilter<"VisitLog"> | string
    diagnosis?: StringNullableFilter<"VisitLog"> | string | null
    treatment?: StringNullableFilter<"VisitLog"> | string | null
    prescription?: StringNullableFilter<"VisitLog"> | string | null
    vitals?: JsonNullableFilter<"VisitLog">
    notes?: StringNullableFilter<"VisitLog"> | string | null
    visitDate?: DateTimeFilter<"VisitLog"> | Date | string
    createdAt?: DateTimeFilter<"VisitLog"> | Date | string
    updatedAt?: DateTimeFilter<"VisitLog"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type VisitLogOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    treatment?: SortOrderInput | SortOrder
    prescription?: SortOrderInput | SortOrder
    vitals?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    visitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitLogCountOrderByAggregateInput
    _max?: VisitLogMaxOrderByAggregateInput
    _min?: VisitLogMinOrderByAggregateInput
  }

  export type VisitLogScalarWhereWithAggregatesInput = {
    AND?: VisitLogScalarWhereWithAggregatesInput | VisitLogScalarWhereWithAggregatesInput[]
    OR?: VisitLogScalarWhereWithAggregatesInput[]
    NOT?: VisitLogScalarWhereWithAggregatesInput | VisitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisitLog"> | string
    clinicId?: StringWithAggregatesFilter<"VisitLog"> | string
    patientId?: StringWithAggregatesFilter<"VisitLog"> | string
    diagnosis?: StringNullableWithAggregatesFilter<"VisitLog"> | string | null
    treatment?: StringNullableWithAggregatesFilter<"VisitLog"> | string | null
    prescription?: StringNullableWithAggregatesFilter<"VisitLog"> | string | null
    vitals?: JsonNullableWithAggregatesFilter<"VisitLog">
    notes?: StringNullableWithAggregatesFilter<"VisitLog"> | string | null
    visitDate?: DateTimeWithAggregatesFilter<"VisitLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VisitLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisitLog"> | Date | string
  }

  export type RevenueRecordWhereInput = {
    AND?: RevenueRecordWhereInput | RevenueRecordWhereInput[]
    OR?: RevenueRecordWhereInput[]
    NOT?: RevenueRecordWhereInput | RevenueRecordWhereInput[]
    id?: StringFilter<"RevenueRecord"> | string
    clinicId?: StringFilter<"RevenueRecord"> | string
    category?: StringFilter<"RevenueRecord"> | string
    amount?: FloatFilter<"RevenueRecord"> | number
    description?: StringNullableFilter<"RevenueRecord"> | string | null
    date?: DateTimeFilter<"RevenueRecord"> | Date | string
    createdAt?: DateTimeFilter<"RevenueRecord"> | Date | string
    updatedAt?: DateTimeFilter<"RevenueRecord"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
  }

  export type RevenueRecordOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
  }

  export type RevenueRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RevenueRecordWhereInput | RevenueRecordWhereInput[]
    OR?: RevenueRecordWhereInput[]
    NOT?: RevenueRecordWhereInput | RevenueRecordWhereInput[]
    clinicId?: StringFilter<"RevenueRecord"> | string
    category?: StringFilter<"RevenueRecord"> | string
    amount?: FloatFilter<"RevenueRecord"> | number
    description?: StringNullableFilter<"RevenueRecord"> | string | null
    date?: DateTimeFilter<"RevenueRecord"> | Date | string
    createdAt?: DateTimeFilter<"RevenueRecord"> | Date | string
    updatedAt?: DateTimeFilter<"RevenueRecord"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
  }, "id">

  export type RevenueRecordOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RevenueRecordCountOrderByAggregateInput
    _avg?: RevenueRecordAvgOrderByAggregateInput
    _max?: RevenueRecordMaxOrderByAggregateInput
    _min?: RevenueRecordMinOrderByAggregateInput
    _sum?: RevenueRecordSumOrderByAggregateInput
  }

  export type RevenueRecordScalarWhereWithAggregatesInput = {
    AND?: RevenueRecordScalarWhereWithAggregatesInput | RevenueRecordScalarWhereWithAggregatesInput[]
    OR?: RevenueRecordScalarWhereWithAggregatesInput[]
    NOT?: RevenueRecordScalarWhereWithAggregatesInput | RevenueRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RevenueRecord"> | string
    clinicId?: StringWithAggregatesFilter<"RevenueRecord"> | string
    category?: StringWithAggregatesFilter<"RevenueRecord"> | string
    amount?: FloatWithAggregatesFilter<"RevenueRecord"> | number
    description?: StringNullableWithAggregatesFilter<"RevenueRecord"> | string | null
    date?: DateTimeWithAggregatesFilter<"RevenueRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RevenueRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RevenueRecord"> | Date | string
  }

  export type ClinicCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    appointments?: AppointmentCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicCreateManyInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan?: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    maxDoctors?: number
    maxStaff?: number
    startDate?: Date | string
    expiryDate: Date | string
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    clinicId: string
    plan?: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    maxDoctors?: number
    maxStaff?: number
    startDate?: Date | string
    expiryDate: Date | string
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    maxDoctors?: IntFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    maxDoctors?: IntFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    clinicId: string
    plan?: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    maxDoctors?: number
    maxStaff?: number
    startDate?: Date | string
    expiryDate: Date | string
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    maxDoctors?: IntFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    maxDoctors?: IntFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic?: ClinicCreateNestedOneWithoutUsersInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clinicId?: string | null
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clinicId?: string | null
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutPatientsInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    visitLogs?: VisitLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    clinicId: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutPatientsNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    visitLogs?: VisitLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    clinicId: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    clinicId: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    clinicId: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitLogCreateInput = {
    id?: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutVisitLogsInput
    patient: PatientCreateNestedOneWithoutVisitLogsInput
  }

  export type VisitLogUncheckedCreateInput = {
    id?: string
    clinicId: string
    patientId: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutVisitLogsNestedInput
    patient?: PatientUpdateOneRequiredWithoutVisitLogsNestedInput
  }

  export type VisitLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitLogCreateManyInput = {
    id?: string
    clinicId: string
    patientId: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueRecordCreateInput = {
    id?: string
    category: string
    amount: number
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutRevenuesInput
  }

  export type RevenueRecordUncheckedCreateInput = {
    id?: string
    clinicId: string
    category: string
    amount: number
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevenueRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutRevenuesNestedInput
  }

  export type RevenueRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueRecordCreateManyInput = {
    id?: string
    clinicId: string
    category: string
    amount: number
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevenueRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type VisitLogListRelationFilter = {
    every?: VisitLogWhereInput
    some?: VisitLogWhereInput
    none?: VisitLogWhereInput
  }

  export type RevenueRecordListRelationFilter = {
    every?: RevenueRecordWhereInput
    some?: RevenueRecordWhereInput
    none?: RevenueRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevenueRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClinicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type ClinicScalarRelationFilter = {
    is?: ClinicWhereInput
    isNot?: ClinicWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    maxDoctors?: SortOrder
    maxStaff?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    maxDoctors?: SortOrder
    maxStaff?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    maxDoctors?: SortOrder
    maxStaff?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    maxDoctors?: SortOrder
    maxStaff?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    maxDoctors?: SortOrder
    maxStaff?: SortOrder
  }

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ClinicNullableScalarRelationFilter = {
    is?: ClinicWhereInput | null
    isNot?: ClinicWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    specialization?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    specialization?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    specialization?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    bloodGroup?: SortOrder
    allergies?: SortOrder
    medicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    bloodGroup?: SortOrder
    allergies?: SortOrder
    medicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    bloodGroup?: SortOrder
    allergies?: SortOrder
    medicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    fee?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    fee?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VisitLogCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    prescription?: SortOrder
    vitals?: SortOrder
    notes?: SortOrder
    visitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    prescription?: SortOrder
    notes?: SortOrder
    visitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitLogMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    patientId?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    prescription?: SortOrder
    notes?: SortOrder
    visitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RevenueRecordCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RevenueRecordAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RevenueRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RevenueRecordMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RevenueRecordSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SubscriptionCreateNestedOneWithoutClinicInput = {
    create?: XOR<SubscriptionCreateWithoutClinicInput, SubscriptionUncheckedCreateWithoutClinicInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClinicInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutClinicInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutClinicInput = {
    create?: XOR<AppointmentCreateWithoutClinicInput, AppointmentUncheckedCreateWithoutClinicInput> | AppointmentCreateWithoutClinicInput[] | AppointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClinicInput | AppointmentCreateOrConnectWithoutClinicInput[]
    createMany?: AppointmentCreateManyClinicInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VisitLogCreateNestedManyWithoutClinicInput = {
    create?: XOR<VisitLogCreateWithoutClinicInput, VisitLogUncheckedCreateWithoutClinicInput> | VisitLogCreateWithoutClinicInput[] | VisitLogUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutClinicInput | VisitLogCreateOrConnectWithoutClinicInput[]
    createMany?: VisitLogCreateManyClinicInputEnvelope
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
  }

  export type RevenueRecordCreateNestedManyWithoutClinicInput = {
    create?: XOR<RevenueRecordCreateWithoutClinicInput, RevenueRecordUncheckedCreateWithoutClinicInput> | RevenueRecordCreateWithoutClinicInput[] | RevenueRecordUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: RevenueRecordCreateOrConnectWithoutClinicInput | RevenueRecordCreateOrConnectWithoutClinicInput[]
    createMany?: RevenueRecordCreateManyClinicInputEnvelope
    connect?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutClinicInput = {
    create?: XOR<SubscriptionCreateWithoutClinicInput, SubscriptionUncheckedCreateWithoutClinicInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClinicInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<AppointmentCreateWithoutClinicInput, AppointmentUncheckedCreateWithoutClinicInput> | AppointmentCreateWithoutClinicInput[] | AppointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClinicInput | AppointmentCreateOrConnectWithoutClinicInput[]
    createMany?: AppointmentCreateManyClinicInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VisitLogUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<VisitLogCreateWithoutClinicInput, VisitLogUncheckedCreateWithoutClinicInput> | VisitLogCreateWithoutClinicInput[] | VisitLogUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutClinicInput | VisitLogCreateOrConnectWithoutClinicInput[]
    createMany?: VisitLogCreateManyClinicInputEnvelope
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
  }

  export type RevenueRecordUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<RevenueRecordCreateWithoutClinicInput, RevenueRecordUncheckedCreateWithoutClinicInput> | RevenueRecordCreateWithoutClinicInput[] | RevenueRecordUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: RevenueRecordCreateOrConnectWithoutClinicInput | RevenueRecordCreateOrConnectWithoutClinicInput[]
    createMany?: RevenueRecordCreateManyClinicInputEnvelope
    connect?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionUpdateOneWithoutClinicNestedInput = {
    create?: XOR<SubscriptionCreateWithoutClinicInput, SubscriptionUncheckedCreateWithoutClinicInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClinicInput
    upsert?: SubscriptionUpsertWithoutClinicInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutClinicInput, SubscriptionUpdateWithoutClinicInput>, SubscriptionUncheckedUpdateWithoutClinicInput>
  }

  export type UserUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutClinicInput | PatientUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutClinicInput | PatientUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutClinicInput | PatientUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutClinicNestedInput = {
    create?: XOR<AppointmentCreateWithoutClinicInput, AppointmentUncheckedCreateWithoutClinicInput> | AppointmentCreateWithoutClinicInput[] | AppointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClinicInput | AppointmentCreateOrConnectWithoutClinicInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClinicInput | AppointmentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: AppointmentCreateManyClinicInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClinicInput | AppointmentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClinicInput | AppointmentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VisitLogUpdateManyWithoutClinicNestedInput = {
    create?: XOR<VisitLogCreateWithoutClinicInput, VisitLogUncheckedCreateWithoutClinicInput> | VisitLogCreateWithoutClinicInput[] | VisitLogUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutClinicInput | VisitLogCreateOrConnectWithoutClinicInput[]
    upsert?: VisitLogUpsertWithWhereUniqueWithoutClinicInput | VisitLogUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: VisitLogCreateManyClinicInputEnvelope
    set?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    disconnect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    delete?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    update?: VisitLogUpdateWithWhereUniqueWithoutClinicInput | VisitLogUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: VisitLogUpdateManyWithWhereWithoutClinicInput | VisitLogUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
  }

  export type RevenueRecordUpdateManyWithoutClinicNestedInput = {
    create?: XOR<RevenueRecordCreateWithoutClinicInput, RevenueRecordUncheckedCreateWithoutClinicInput> | RevenueRecordCreateWithoutClinicInput[] | RevenueRecordUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: RevenueRecordCreateOrConnectWithoutClinicInput | RevenueRecordCreateOrConnectWithoutClinicInput[]
    upsert?: RevenueRecordUpsertWithWhereUniqueWithoutClinicInput | RevenueRecordUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: RevenueRecordCreateManyClinicInputEnvelope
    set?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    disconnect?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    delete?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    connect?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    update?: RevenueRecordUpdateWithWhereUniqueWithoutClinicInput | RevenueRecordUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: RevenueRecordUpdateManyWithWhereWithoutClinicInput | RevenueRecordUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: RevenueRecordScalarWhereInput | RevenueRecordScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutClinicNestedInput = {
    create?: XOR<SubscriptionCreateWithoutClinicInput, SubscriptionUncheckedCreateWithoutClinicInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClinicInput
    upsert?: SubscriptionUpsertWithoutClinicInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutClinicInput, SubscriptionUpdateWithoutClinicInput>, SubscriptionUncheckedUpdateWithoutClinicInput>
  }

  export type UserUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutClinicInput | PatientUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutClinicInput | PatientUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutClinicInput | PatientUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<AppointmentCreateWithoutClinicInput, AppointmentUncheckedCreateWithoutClinicInput> | AppointmentCreateWithoutClinicInput[] | AppointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClinicInput | AppointmentCreateOrConnectWithoutClinicInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClinicInput | AppointmentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: AppointmentCreateManyClinicInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClinicInput | AppointmentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClinicInput | AppointmentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VisitLogUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<VisitLogCreateWithoutClinicInput, VisitLogUncheckedCreateWithoutClinicInput> | VisitLogCreateWithoutClinicInput[] | VisitLogUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutClinicInput | VisitLogCreateOrConnectWithoutClinicInput[]
    upsert?: VisitLogUpsertWithWhereUniqueWithoutClinicInput | VisitLogUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: VisitLogCreateManyClinicInputEnvelope
    set?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    disconnect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    delete?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    update?: VisitLogUpdateWithWhereUniqueWithoutClinicInput | VisitLogUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: VisitLogUpdateManyWithWhereWithoutClinicInput | VisitLogUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
  }

  export type RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<RevenueRecordCreateWithoutClinicInput, RevenueRecordUncheckedCreateWithoutClinicInput> | RevenueRecordCreateWithoutClinicInput[] | RevenueRecordUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: RevenueRecordCreateOrConnectWithoutClinicInput | RevenueRecordCreateOrConnectWithoutClinicInput[]
    upsert?: RevenueRecordUpsertWithWhereUniqueWithoutClinicInput | RevenueRecordUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: RevenueRecordCreateManyClinicInputEnvelope
    set?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    disconnect?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    delete?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    connect?: RevenueRecordWhereUniqueInput | RevenueRecordWhereUniqueInput[]
    update?: RevenueRecordUpdateWithWhereUniqueWithoutClinicInput | RevenueRecordUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: RevenueRecordUpdateManyWithWhereWithoutClinicInput | RevenueRecordUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: RevenueRecordScalarWhereInput | RevenueRecordScalarWhereInput[]
  }

  export type ClinicCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<ClinicCreateWithoutSubscriptionInput, ClinicUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutSubscriptionInput
    connect?: ClinicWhereUniqueInput
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClinicUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<ClinicCreateWithoutSubscriptionInput, ClinicUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutSubscriptionInput
    upsert?: ClinicUpsertWithoutSubscriptionInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutSubscriptionInput, ClinicUpdateWithoutSubscriptionInput>, ClinicUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ClinicCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutUsersInput
    connect?: ClinicWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ClinicUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutUsersInput
    upsert?: ClinicUpsertWithoutUsersInput
    disconnect?: ClinicWhereInput | boolean
    delete?: ClinicWhereInput | boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutUsersInput, ClinicUpdateWithoutUsersInput>, ClinicUncheckedUpdateWithoutUsersInput>
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ClinicCreateNestedOneWithoutPatientsInput = {
    create?: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientsInput
    connect?: ClinicWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VisitLogCreateNestedManyWithoutPatientInput = {
    create?: XOR<VisitLogCreateWithoutPatientInput, VisitLogUncheckedCreateWithoutPatientInput> | VisitLogCreateWithoutPatientInput[] | VisitLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutPatientInput | VisitLogCreateOrConnectWithoutPatientInput[]
    createMany?: VisitLogCreateManyPatientInputEnvelope
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VisitLogUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<VisitLogCreateWithoutPatientInput, VisitLogUncheckedCreateWithoutPatientInput> | VisitLogCreateWithoutPatientInput[] | VisitLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutPatientInput | VisitLogCreateOrConnectWithoutPatientInput[]
    createMany?: VisitLogCreateManyPatientInputEnvelope
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type ClinicUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientsInput
    upsert?: ClinicUpsertWithoutPatientsInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutPatientsInput, ClinicUpdateWithoutPatientsInput>, ClinicUncheckedUpdateWithoutPatientsInput>
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VisitLogUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VisitLogCreateWithoutPatientInput, VisitLogUncheckedCreateWithoutPatientInput> | VisitLogCreateWithoutPatientInput[] | VisitLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutPatientInput | VisitLogCreateOrConnectWithoutPatientInput[]
    upsert?: VisitLogUpsertWithWhereUniqueWithoutPatientInput | VisitLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VisitLogCreateManyPatientInputEnvelope
    set?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    disconnect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    delete?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    update?: VisitLogUpdateWithWhereUniqueWithoutPatientInput | VisitLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VisitLogUpdateManyWithWhereWithoutPatientInput | VisitLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VisitLogUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VisitLogCreateWithoutPatientInput, VisitLogUncheckedCreateWithoutPatientInput> | VisitLogCreateWithoutPatientInput[] | VisitLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutPatientInput | VisitLogCreateOrConnectWithoutPatientInput[]
    upsert?: VisitLogUpsertWithWhereUniqueWithoutPatientInput | VisitLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VisitLogCreateManyPatientInputEnvelope
    set?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    disconnect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    delete?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    update?: VisitLogUpdateWithWhereUniqueWithoutPatientInput | VisitLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VisitLogUpdateManyWithWhereWithoutPatientInput | VisitLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
  }

  export type ClinicCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ClinicCreateWithoutAppointmentsInput, ClinicUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutAppointmentsInput
    connect?: ClinicWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClinicUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ClinicCreateWithoutAppointmentsInput, ClinicUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutAppointmentsInput
    upsert?: ClinicUpsertWithoutAppointmentsInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutAppointmentsInput, ClinicUpdateWithoutAppointmentsInput>, ClinicUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ClinicCreateNestedOneWithoutVisitLogsInput = {
    create?: XOR<ClinicCreateWithoutVisitLogsInput, ClinicUncheckedCreateWithoutVisitLogsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutVisitLogsInput
    connect?: ClinicWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutVisitLogsInput = {
    create?: XOR<PatientCreateWithoutVisitLogsInput, PatientUncheckedCreateWithoutVisitLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitLogsInput
    connect?: PatientWhereUniqueInput
  }

  export type ClinicUpdateOneRequiredWithoutVisitLogsNestedInput = {
    create?: XOR<ClinicCreateWithoutVisitLogsInput, ClinicUncheckedCreateWithoutVisitLogsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutVisitLogsInput
    upsert?: ClinicUpsertWithoutVisitLogsInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutVisitLogsInput, ClinicUpdateWithoutVisitLogsInput>, ClinicUncheckedUpdateWithoutVisitLogsInput>
  }

  export type PatientUpdateOneRequiredWithoutVisitLogsNestedInput = {
    create?: XOR<PatientCreateWithoutVisitLogsInput, PatientUncheckedCreateWithoutVisitLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitLogsInput
    upsert?: PatientUpsertWithoutVisitLogsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutVisitLogsInput, PatientUpdateWithoutVisitLogsInput>, PatientUncheckedUpdateWithoutVisitLogsInput>
  }

  export type ClinicCreateNestedOneWithoutRevenuesInput = {
    create?: XOR<ClinicCreateWithoutRevenuesInput, ClinicUncheckedCreateWithoutRevenuesInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutRevenuesInput
    connect?: ClinicWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClinicUpdateOneRequiredWithoutRevenuesNestedInput = {
    create?: XOR<ClinicCreateWithoutRevenuesInput, ClinicUncheckedCreateWithoutRevenuesInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutRevenuesInput
    upsert?: ClinicUpsertWithoutRevenuesInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutRevenuesInput, ClinicUpdateWithoutRevenuesInput>, ClinicUncheckedUpdateWithoutRevenuesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
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

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
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

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SubscriptionCreateWithoutClinicInput = {
    id?: string
    plan?: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    maxDoctors?: number
    maxStaff?: number
    startDate?: Date | string
    expiryDate: Date | string
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutClinicInput = {
    id?: string
    plan?: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    maxDoctors?: number
    maxStaff?: number
    startDate?: Date | string
    expiryDate: Date | string
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutClinicInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutClinicInput, SubscriptionUncheckedCreateWithoutClinicInput>
  }

  export type UserCreateWithoutClinicInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutClinicInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutClinicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserCreateManyClinicInputEnvelope = {
    data: UserCreateManyClinicInput | UserCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutClinicInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    visitLogs?: VisitLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutClinicInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutClinicInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
  }

  export type PatientCreateManyClinicInputEnvelope = {
    data: PatientCreateManyClinicInput | PatientCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutClinicInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutClinicInput = {
    id?: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutClinicInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutClinicInput, AppointmentUncheckedCreateWithoutClinicInput>
  }

  export type AppointmentCreateManyClinicInputEnvelope = {
    data: AppointmentCreateManyClinicInput | AppointmentCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type VisitLogCreateWithoutClinicInput = {
    id?: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutVisitLogsInput
  }

  export type VisitLogUncheckedCreateWithoutClinicInput = {
    id?: string
    patientId: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitLogCreateOrConnectWithoutClinicInput = {
    where: VisitLogWhereUniqueInput
    create: XOR<VisitLogCreateWithoutClinicInput, VisitLogUncheckedCreateWithoutClinicInput>
  }

  export type VisitLogCreateManyClinicInputEnvelope = {
    data: VisitLogCreateManyClinicInput | VisitLogCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type RevenueRecordCreateWithoutClinicInput = {
    id?: string
    category: string
    amount: number
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevenueRecordUncheckedCreateWithoutClinicInput = {
    id?: string
    category: string
    amount: number
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevenueRecordCreateOrConnectWithoutClinicInput = {
    where: RevenueRecordWhereUniqueInput
    create: XOR<RevenueRecordCreateWithoutClinicInput, RevenueRecordUncheckedCreateWithoutClinicInput>
  }

  export type RevenueRecordCreateManyClinicInputEnvelope = {
    data: RevenueRecordCreateManyClinicInput | RevenueRecordCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutClinicInput = {
    update: XOR<SubscriptionUpdateWithoutClinicInput, SubscriptionUncheckedUpdateWithoutClinicInput>
    create: XOR<SubscriptionCreateWithoutClinicInput, SubscriptionUncheckedCreateWithoutClinicInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutClinicInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutClinicInput, SubscriptionUncheckedUpdateWithoutClinicInput>
  }

  export type SubscriptionUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    maxDoctors?: IntFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    maxDoctors?: IntFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
  }

  export type UserUpdateManyWithWhereWithoutClinicInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClinicInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clinicId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    specialization?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutClinicInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutClinicInput, PatientUncheckedUpdateWithoutClinicInput>
    create: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutClinicInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutClinicInput, PatientUncheckedUpdateWithoutClinicInput>
  }

  export type PatientUpdateManyWithWhereWithoutClinicInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutClinicInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    clinicId?: StringFilter<"Patient"> | string
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    phone?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null
    address?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableFilter<"Patient"> | string | null
    medicalNotes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutClinicInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutClinicInput, AppointmentUncheckedUpdateWithoutClinicInput>
    create: XOR<AppointmentCreateWithoutClinicInput, AppointmentUncheckedCreateWithoutClinicInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutClinicInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutClinicInput, AppointmentUncheckedUpdateWithoutClinicInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutClinicInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutClinicInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    clinicId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    fee?: FloatNullableFilter<"Appointment"> | number | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type VisitLogUpsertWithWhereUniqueWithoutClinicInput = {
    where: VisitLogWhereUniqueInput
    update: XOR<VisitLogUpdateWithoutClinicInput, VisitLogUncheckedUpdateWithoutClinicInput>
    create: XOR<VisitLogCreateWithoutClinicInput, VisitLogUncheckedCreateWithoutClinicInput>
  }

  export type VisitLogUpdateWithWhereUniqueWithoutClinicInput = {
    where: VisitLogWhereUniqueInput
    data: XOR<VisitLogUpdateWithoutClinicInput, VisitLogUncheckedUpdateWithoutClinicInput>
  }

  export type VisitLogUpdateManyWithWhereWithoutClinicInput = {
    where: VisitLogScalarWhereInput
    data: XOR<VisitLogUpdateManyMutationInput, VisitLogUncheckedUpdateManyWithoutClinicInput>
  }

  export type VisitLogScalarWhereInput = {
    AND?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
    OR?: VisitLogScalarWhereInput[]
    NOT?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
    id?: StringFilter<"VisitLog"> | string
    clinicId?: StringFilter<"VisitLog"> | string
    patientId?: StringFilter<"VisitLog"> | string
    diagnosis?: StringNullableFilter<"VisitLog"> | string | null
    treatment?: StringNullableFilter<"VisitLog"> | string | null
    prescription?: StringNullableFilter<"VisitLog"> | string | null
    vitals?: JsonNullableFilter<"VisitLog">
    notes?: StringNullableFilter<"VisitLog"> | string | null
    visitDate?: DateTimeFilter<"VisitLog"> | Date | string
    createdAt?: DateTimeFilter<"VisitLog"> | Date | string
    updatedAt?: DateTimeFilter<"VisitLog"> | Date | string
  }

  export type RevenueRecordUpsertWithWhereUniqueWithoutClinicInput = {
    where: RevenueRecordWhereUniqueInput
    update: XOR<RevenueRecordUpdateWithoutClinicInput, RevenueRecordUncheckedUpdateWithoutClinicInput>
    create: XOR<RevenueRecordCreateWithoutClinicInput, RevenueRecordUncheckedCreateWithoutClinicInput>
  }

  export type RevenueRecordUpdateWithWhereUniqueWithoutClinicInput = {
    where: RevenueRecordWhereUniqueInput
    data: XOR<RevenueRecordUpdateWithoutClinicInput, RevenueRecordUncheckedUpdateWithoutClinicInput>
  }

  export type RevenueRecordUpdateManyWithWhereWithoutClinicInput = {
    where: RevenueRecordScalarWhereInput
    data: XOR<RevenueRecordUpdateManyMutationInput, RevenueRecordUncheckedUpdateManyWithoutClinicInput>
  }

  export type RevenueRecordScalarWhereInput = {
    AND?: RevenueRecordScalarWhereInput | RevenueRecordScalarWhereInput[]
    OR?: RevenueRecordScalarWhereInput[]
    NOT?: RevenueRecordScalarWhereInput | RevenueRecordScalarWhereInput[]
    id?: StringFilter<"RevenueRecord"> | string
    clinicId?: StringFilter<"RevenueRecord"> | string
    category?: StringFilter<"RevenueRecord"> | string
    amount?: FloatFilter<"RevenueRecord"> | number
    description?: StringNullableFilter<"RevenueRecord"> | string | null
    date?: DateTimeFilter<"RevenueRecord"> | Date | string
    createdAt?: DateTimeFilter<"RevenueRecord"> | Date | string
    updatedAt?: DateTimeFilter<"RevenueRecord"> | Date | string
  }

  export type ClinicCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    appointments?: AppointmentCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutSubscriptionInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutSubscriptionInput, ClinicUncheckedCreateWithoutSubscriptionInput>
  }

  export type ClinicUpsertWithoutSubscriptionInput = {
    update: XOR<ClinicUpdateWithoutSubscriptionInput, ClinicUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<ClinicCreateWithoutSubscriptionInput, ClinicUncheckedCreateWithoutSubscriptionInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutSubscriptionInput, ClinicUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ClinicUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    appointments?: AppointmentCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutUsersInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    clinicId: string
    patientId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ClinicUpsertWithoutUsersInput = {
    update: XOR<ClinicUpdateWithoutUsersInput, ClinicUncheckedUpdateWithoutUsersInput>
    create: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutUsersInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutUsersInput, ClinicUncheckedUpdateWithoutUsersInput>
  }

  export type ClinicUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type ClinicCreateWithoutPatientsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
    appointments?: AppointmentCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutPatientsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAppointmentsInput
    doctor: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    clinicId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type VisitLogCreateWithoutPatientInput = {
    id?: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutVisitLogsInput
  }

  export type VisitLogUncheckedCreateWithoutPatientInput = {
    id?: string
    clinicId: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitLogCreateOrConnectWithoutPatientInput = {
    where: VisitLogWhereUniqueInput
    create: XOR<VisitLogCreateWithoutPatientInput, VisitLogUncheckedCreateWithoutPatientInput>
  }

  export type VisitLogCreateManyPatientInputEnvelope = {
    data: VisitLogCreateManyPatientInput | VisitLogCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ClinicUpsertWithoutPatientsInput = {
    update: XOR<ClinicUpdateWithoutPatientsInput, ClinicUncheckedUpdateWithoutPatientsInput>
    create: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutPatientsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutPatientsInput, ClinicUncheckedUpdateWithoutPatientsInput>
  }

  export type ClinicUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type VisitLogUpsertWithWhereUniqueWithoutPatientInput = {
    where: VisitLogWhereUniqueInput
    update: XOR<VisitLogUpdateWithoutPatientInput, VisitLogUncheckedUpdateWithoutPatientInput>
    create: XOR<VisitLogCreateWithoutPatientInput, VisitLogUncheckedCreateWithoutPatientInput>
  }

  export type VisitLogUpdateWithWhereUniqueWithoutPatientInput = {
    where: VisitLogWhereUniqueInput
    data: XOR<VisitLogUpdateWithoutPatientInput, VisitLogUncheckedUpdateWithoutPatientInput>
  }

  export type VisitLogUpdateManyWithWhereWithoutPatientInput = {
    where: VisitLogScalarWhereInput
    data: XOR<VisitLogUpdateManyMutationInput, VisitLogUncheckedUpdateManyWithoutPatientInput>
  }

  export type ClinicCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutAppointmentsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutAppointmentsInput, ClinicUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientCreateWithoutAppointmentsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutPatientsInput
    visitLogs?: VisitLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    clinicId: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic?: ClinicCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    clinicId?: string | null
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type ClinicUpsertWithoutAppointmentsInput = {
    update: XOR<ClinicUpdateWithoutAppointmentsInput, ClinicUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ClinicCreateWithoutAppointmentsInput, ClinicUncheckedCreateWithoutAppointmentsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutAppointmentsInput, ClinicUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ClinicUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutPatientsNestedInput
    visitLogs?: VisitLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitLogs?: VisitLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicCreateWithoutVisitLogsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    appointments?: AppointmentCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutVisitLogsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClinicInput
    revenues?: RevenueRecordUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutVisitLogsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutVisitLogsInput, ClinicUncheckedCreateWithoutVisitLogsInput>
  }

  export type PatientCreateWithoutVisitLogsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutPatientsInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutVisitLogsInput = {
    id?: string
    clinicId: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutVisitLogsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutVisitLogsInput, PatientUncheckedCreateWithoutVisitLogsInput>
  }

  export type ClinicUpsertWithoutVisitLogsInput = {
    update: XOR<ClinicUpdateWithoutVisitLogsInput, ClinicUncheckedUpdateWithoutVisitLogsInput>
    create: XOR<ClinicCreateWithoutVisitLogsInput, ClinicUncheckedCreateWithoutVisitLogsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutVisitLogsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutVisitLogsInput, ClinicUncheckedUpdateWithoutVisitLogsInput>
  }

  export type ClinicUpdateWithoutVisitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutVisitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClinicNestedInput
    revenues?: RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type PatientUpsertWithoutVisitLogsInput = {
    update: XOR<PatientUpdateWithoutVisitLogsInput, PatientUncheckedUpdateWithoutVisitLogsInput>
    create: XOR<PatientCreateWithoutVisitLogsInput, PatientUncheckedCreateWithoutVisitLogsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutVisitLogsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutVisitLogsInput, PatientUncheckedUpdateWithoutVisitLogsInput>
  }

  export type PatientUpdateWithoutVisitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutPatientsNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutVisitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ClinicCreateWithoutRevenuesInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    appointments?: AppointmentCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutRevenuesInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClinicInput
    visitLogs?: VisitLogUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutRevenuesInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutRevenuesInput, ClinicUncheckedCreateWithoutRevenuesInput>
  }

  export type ClinicUpsertWithoutRevenuesInput = {
    update: XOR<ClinicUpdateWithoutRevenuesInput, ClinicUncheckedUpdateWithoutRevenuesInput>
    create: XOR<ClinicCreateWithoutRevenuesInput, ClinicUncheckedCreateWithoutRevenuesInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutRevenuesInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutRevenuesInput, ClinicUncheckedUpdateWithoutRevenuesInput>
  }

  export type ClinicUpdateWithoutRevenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutRevenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClinicNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type UserCreateManyClinicInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    phone?: string | null
    specialization?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateManyClinicInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    bloodGroup?: string | null
    allergies?: string | null
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyClinicInput = {
    id?: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitLogCreateManyClinicInput = {
    id?: string
    patientId: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevenueRecordCreateManyClinicInput = {
    id?: string
    category: string
    amount: number
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    visitLogs?: VisitLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    visitLogs?: VisitLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitLogUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutVisitLogsNestedInput
  }

  export type VisitLogUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitLogUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueRecordUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueRecordUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueRecordUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    clinicId: string
    patientId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    clinicId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    reason?: string | null
    notes?: string | null
    fee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitLogCreateManyPatientInput = {
    id?: string
    clinicId: string
    diagnosis?: string | null
    treatment?: string | null
    prescription?: string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    visitDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitLogUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutVisitLogsNestedInput
  }

  export type VisitLogUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitLogUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    prescription?: NullableStringFieldUpdateOperationsInput | string | null
    vitals?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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