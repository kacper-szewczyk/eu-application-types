
export type Nullable<T> = null | T;
export type DeepNullable<T> = {
  [K in keyof T]: Nullable<DeepNullable<T[K]>>;
}; 