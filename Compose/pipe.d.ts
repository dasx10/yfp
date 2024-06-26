import Lambda from "../Types/Lambda";

export default function pipe<Return, A, B>(values: readonly [
  (x: A) => B,
  (x: B) => Return,
]): Lambda<Return, A>

export default function pipe<Return, A, B, C>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => T,
  (x: T) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => T,
  (x: T) => U,
  (x: U) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => T,
  (x: T) => U,
  (x: U) => V,
  (x: V) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => T,
  (x: T) => U,
  (x: U) => V,
  (x: V) => W,
  (x: W) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => T,
  (x: T) => U,
  (x: U) => V,
  (x: V) => W,
  (x: W) => X,
  (x: X) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => T,
  (x: T) => U,
  (x: U) => V,
  (x: V) => W,
  (x: W) => X,
  (x: X) => Y,
  (x: Y) => Return,
]): Lambda<Return, A>;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(values: readonly [
  (x: A) => B,
  (x: B) => C,
  (x: C) => D,
  (x: D) => E,
  (x: E) => F,
  (x: F) => G,
  (x: G) => H,
  (x: H) => I,
  (x: I) => J,
  (x: J) => K,
  (x: K) => L,
  (x: L) => M,
  (x: M) => N,
  (x: N) => O,
  (x: O) => P,
  (x: P) => Q,
  (x: Q) => R,
  (x: R) => S,
  (x: S) => T,
  (x: T) => U,
  (x: U) => V,
  (x: V) => W,
  (x: W) => X,
  (x: X) => Y,
  (x: Y) => Z,
  (x: Z) => Return,
]): Lambda<Return, A>;
