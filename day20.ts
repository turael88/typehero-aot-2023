// https://typehero.dev/challenge/day-20

// tests
import { Equal, Expect } from "type-testing";

type test_0_actual = ToAsciiArt<"   * : * Merry * : *   \n  Christmas  ">;
//   ^?
type test_0_expected = [
  "░░░░░#░░░█▄░▄█ █▀▀ █▀█ █▀█ █ █ ░░░#░░░░░",
  "░░░#░░░#░█ ▀ █ █▀▀ ██▀ ██▀ ▀█▀ ░#░░░#░░░",
  "░░░░░#░░░▀ ░░▀ ▀▀▀ ▀ ▀ ▀ ▀ ░▀ ░░░░#░░░░░",
  "░░█▀▀ █ █ █▀█ █ █▀▀ ▀█▀ █▄░▄█ █▀█ █▀▀ ░░",
  "░░█ ░░█▀█ ██▀ █ ▀▀█ ░█ ░█ ▀ █ █▀█ ▀▀█ ░░",
  "░░▀▀▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀ ░▀ ░▀ ░░▀ ▀ ▀ ▀▀▀ ░░",
];
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;

type test_1_actual = ToAsciiArt<"  Happy new  \n  * : * : * Year * : * : *  ">;
//   ^?
type test_1_expected = [
        "░░█ █ █▀█ █▀█ █▀█ █ █ ░█▄░█ █▀▀ █ ░░█ ░░",
        "░░█▀█ █▀█ █▀▀ █▀▀ ▀█▀ ░█ ▀█ █▀▀ █▄▀▄█ ░░",
        "░░▀ ▀ ▀ ▀ ▀ ░░▀ ░░░▀ ░░▀ ░▀ ▀▀▀ ▀ ░ ▀ ░░",
        "░░░░#░░░#░░░█ █ █▀▀ █▀█ █▀█ ░░░#░░░#░░░░",
        "░░#░░░#░░░#░▀█▀ █▀▀ █▀█ ██▀ ░#░░░#░░░#░░",
        "░░░░#░░░#░░░░▀ ░▀▀▀ ▀ ▀ ▀ ▀ ░░░#░░░#░░░░",
];
type test_1 = Expect<Equal<test_1_actual, test_1_expected>>;

type test_2_actual = ToAsciiArt<"  * : * : * : * : * : * \n  Trash  \n  * : * : * : * : * : * ">;
//   ^?
type test_2_expected = [
  "░░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░",
  "░░▀█▀ █▀█ █▀█ █▀▀ █ █ ░░",
  "░░░█ ░██▀ █▀█ ▀▀█ █▀█ ░░",
  "░░░▀ ░▀ ▀ ▀ ▀ ▀▀▀ ▀ ▀ ░░",
  "░░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░",
];
type test_2 = Expect<Equal<test_2_actual, test_2_expected>>;

type test_3_actual = ToAsciiArt<"  : * : * : * : * : * : * : \n  Ecyrbe  \n  : * : * : * : * : * : * : ">;
//   ^?
type test_3_expected = [
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░█▀▀ █▀▀ █ █ █▀█ █▀▄ █▀▀ ░░",
  "░░█▀▀ █ ░░▀█▀ ██▀ █▀▄ █▀▀ ░░",
  "░░▀▀▀ ▀▀▀ ░▀ ░▀ ▀ ▀▀  ▀▀▀ ░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
];
type test_3 = Expect<Equal<test_3_actual, test_3_expected>>;


// solution
type Letters = {
    A: [
      '█▀█ ',
      '█▀█ ',
      '▀ ▀ ',
    ],
    B: [
      '█▀▄ ',
      '█▀▄ ',
      '▀▀  '
    ],
    C: [
      '█▀▀ ',
      '█ ░░',
      '▀▀▀ '
    ],
    E: [
      '█▀▀ ',
      '█▀▀ ',
      '▀▀▀ '
    ],
    H: [
      '█ █ ',
      '█▀█ ',
      '▀ ▀ '
    ],
    I: [
      '█ ',
      '█ ',
      '▀ '
    ],
    M: [
      '█▄░▄█ ',
      '█ ▀ █ ',
      '▀ ░░▀ '
    ],
    N: [
      '█▄░█ ',
      '█ ▀█ ',
      '▀ ░▀ '
    ],
    P: [
      '█▀█ ',
      '█▀▀ ',
      '▀ ░░'
    ],
    R: [
      '█▀█ ',
      '██▀ ',
      '▀ ▀ '
    ],
    S: [
      '█▀▀ ',
      '▀▀█ ',
      '▀▀▀ '
    ],
    T: [
      '▀█▀ ',
      '░█ ░',
      '░▀ ░'
    ],
    Y: [
      '█ █ ',
      '▀█▀ ',
      '░▀ ░'
    ],
    W: [
      '█ ░░█ ',
      '█▄▀▄█ ',
      '▀ ░ ▀ '
    ],
    ' ': [
      '░',
      '░',
      '░'
    ],
    ':': [
      '#',
      '░',
      '#'
    ],
    '*': [
      '░',
      '#',
      '░'
    ],
  };
  
type Join<T extends any[], Res extends string = ''> =
  T extends [infer F extends string, ...infer R]
    ? Join<R, `${Res}${F}`>
    : `${Res}`;
  
type _Convert<T extends string, I extends number> =
  T extends `${infer F extends keyof Letters}${infer R}`
    ? [Letters[F][I], ..._Convert<R, I>]
    : [];
  
type Convert<T extends string> = [
    Join<_Convert<T, 0>>,
    Join<_Convert<T, 1>>,
    Join<_Convert<T, 2>>
  ];
  
type ToAsciiArt<T extends string, Sep extends string = '\n'> =
  T extends `${infer F}${Sep}${infer R}`
    ? [...Convert<Uppercase<F>>, ...ToAsciiArt<R>]
    : [...Convert<Uppercase<T>>];
