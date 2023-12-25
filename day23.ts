// https://typehero.dev/challenge/day-23

// tests
import { Expect, Equal } from "type-testing";

type test_move1_actual = Connect4<NewGame, 0>;
//   ^?
type test_move1_expected = {
  board: [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
  ];
  state: "🔴";
};
type test_move1 = Expect<Equal<test_move1_actual, test_move1_expected>>;

type test_move2_actual = Connect4<test_move1_actual, 0>;
//   ^?
type test_move2_expected = {
  board: [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🔴", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
  ];
  state: "🟡";
};
type test_move2 = Expect<Equal<test_move2_actual, test_move2_expected>>;

type test_move3_actual = Connect4<test_move2_actual, 0>;
//   ^?
type test_move3_expected = {
  board: [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🔴", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
  ];
  state: "🔴";
};
type test_move3 = Expect<Equal<test_move3_actual, test_move3_expected>>;

type test_move4_actual = Connect4<test_move3_actual, 1>;
//   ^?
type test_move4_expected = {
  board: [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🔴", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "🔴", "  ", "  ", "  ", "  ", "  "],
  ];
  state: "🟡";
};
type test_move4 = Expect<Equal<test_move4_actual, test_move4_expected>>;

type test_move5_actual = Connect4<test_move4_actual, 2>;
//   ^?
type test_move5_expected = {
  board: [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🔴", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "🔴", "🟡", "  ", "  ", "  ", "  "],
  ];
  state: "🔴";
};
type test_move5 = Expect<Equal<test_move5_actual, test_move5_expected>>;

type test_move6_actual = Connect4<test_move5_actual, 1>;
//   ^?
type test_move6_expected = {
  board: [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🔴", "🔴", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "🔴", "🟡", "  ", "  ", "  ", "  "],
  ];
  state: "🟡";
};
type test_move6 = Expect<Equal<test_move6_actual, test_move6_expected>>;

type test_red_win_actual = Connect4<
  {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '🔴', '🔴', '  ', '  ', '  ', '  '],
      ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  ']
    ];
    state: '🔴';
  },
  3
>;

type test_red_win_expected = {
  board: [
    ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
    ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
    ['🔴', '🔴', '🔴', '🔴', '  ', '  ', '  '],
    ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  ']
  ];
  state: '🔴 Won';
};

type test_red_win = Expect<Equal<test_red_win_actual, test_red_win_expected>>;

type test_yellow_win_actual = Connect4<
  {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '  ', '🔴', '🔴', '  ', '  ', '  '],
      ['🟡', '  ', '🟡', '🟡', '  ', '  ', '  ']
    ];
    state: '🟡';
  },
  1
>;

type test_yellow_win_expected = {
  board: [
    ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
    ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
    ['🔴', '  ', '🔴', '🔴', '  ', '  ', '  '],
    ['🟡', '🟡', '🟡', '🟡', '  ', '  ', '  ']
  ];
  state: '🟡 Won';
};

type test_yellow_win = Expect<
  Equal<test_yellow_win_actual, test_yellow_win_expected>
>;

type test_diagonal_yellow_win_actual = Connect4<
  {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '🟡', '🔴', '  ', '  ', '  '],
      ['🔴', '🟡', '🔴', '🔴', '  ', '  ', '  '],
      ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  ']
    ];
    state: '🟡';
  },
  3
>;

type test_diagonal_yellow_win_expected = {
  board: [
    ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '🟡', '  ', '  ', '  '],
    ['  ', '  ', '🟡', '🔴', '  ', '  ', '  '],
    ['🔴', '🟡', '🔴', '🔴', '  ', '  ', '  '],
    ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  ']
  ];
  state: '🟡 Won';
};

type test_diagonal_yellow_win = Expect<
  Equal<test_diagonal_yellow_win_actual, test_diagonal_yellow_win_expected>
>;

type test_draw_actual = Connect4<
  {
    board: [
      ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '  '],
      ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
      ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
      ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
      ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
      ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴']
    ];
    state: '🟡';
  },
  6
>;

type test_draw_expected = {
  board: [
    ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
    ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
    ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
    ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
    ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
    ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴']
  ];
  state: 'Draw';
};

type test_draw = Expect<Equal<test_draw_actual, test_draw_expected>>;


// solution
type Connect4Chips = "🔴" | "🟡";
type Connect4EmptyCell = "  ";
type Connect4Cell = Connect4Chips | Connect4EmptyCell;
type Connect4EndState = "🔴 Won" | "🟡 Won" | "Draw";
type Connect4State = Connect4Chips | Connect4EndState;
type Connect4Board = Connect4Cell[][];
type Connect4Game = {
  board: Connect4Board;
  state: Connect4State;
};

type EmptyBoard = [
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
];

type NewGame = {
  board: EmptyBoard;
  state: "🟡";
};

type AddChip<
  Row extends Connect4Cell[],
  Chip extends Connect4State,
  Position extends number,
> = Row extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G]
  ? Position extends 0
    ? Row[Position] extends Connect4Chips
      ? Row
      : [Chip, B, C, D, E, F, G]
    : Position extends 1
      ? Row[Position] extends Connect4Chips
        ? Row
        : [A, Chip, C, D, E, F, G]
      : Position extends 2
        ? Row[Position] extends Connect4Chips
          ? Row
          : [A, B, Chip, D, E, F, G]
        : Position extends 3
          ? Row[Position] extends Connect4Chips
            ? Row
            : [A, B, C, Chip, E, F, G]
          : Position extends 4
            ? Row[Position] extends Connect4Chips
              ? Row
              : [A, B, C, D, Chip, F, G]
            : Position extends 5
              ? Row[Position] extends Connect4Chips
                ? Row
                : [A, B, C, D, E, Chip, G]
              : Position extends 6
                ? Row[Position] extends Connect4Chips
                  ? Row
                  : [A, B, C, D, E, F, Chip]
                : never
  : never;

type IsPositionEmpty<
  Row extends Connect4Cell[],
  Position extends number,
> = Row[Position] extends Connect4EmptyCell ? true : false;

type MakeTurn<
  Board extends Connect4Board,
  Chip extends Connect4State,
  Position extends number,
  NewBoard extends any[] = [],
  Setted extends boolean = false,
> = Board extends [...infer F extends Connect4Cell[][], infer L extends Connect4Cell[]]
  ? IsPositionEmpty<L, Position> extends true
    ? MakeTurn<
        F,
        Chip,
        Position,
        [Setted extends false ? AddChip<L, Chip, Position> : L, ...NewBoard],
        true
      >
    : MakeTurn<F, Chip, Position, [L, ...NewBoard], false>
  : NewBoard;

type Check4ChipsInRow<
  Row extends Connect4Cell[],
  Chip extends Connect4State,
  Counter extends any[] = [],
> = Counter["length"] extends 4
  ? true
  : Row extends [infer F, ...infer R extends Connect4Cell[]]
    ? F extends Chip
      ? Check4ChipsInRow<R, Chip, [...Counter, 0]>
      : Check4ChipsInRow<R, Chip, []>
    : false;

type CheckHorizontal<Board extends Connect4Board, Chip extends Connect4State> = Board extends [
  infer F extends Connect4Cell[],
  ...infer L extends Connect4Board,
]
  ? Check4ChipsInRow<F, Chip> extends true
    ? true
    : CheckHorizontal<L, Chip>
  : false;

type CheckVertical<
  Board extends Connect4Board,
  Chip extends Connect4State,
  Index extends any[] = [],
> = Index["length"] extends 7
  ? false
  : Check4ChipsInRow<{ [K in keyof Board]: Board[K][Index["length"]] }, Chip> extends true
    ? true
    : CheckVertical<Board, Chip, [...Index, 0]>;

type CheckTRBLDiagonal<Board extends Connect4Board, Chip extends Connect4State> = Board extends [
  infer First extends Connect4Cell[],
  infer Second extends Connect4Cell[],
  infer Third extends Connect4Cell[],
  infer Fourth extends Connect4Cell[],
  ...infer Rest extends Connect4Board,
]
  ? CheckTRBLDiagonalAux<[First, Second, Third, Fourth], Chip> extends true
    ? true
    : CheckTRBLDiagonal<[Second, Third, Fourth, ...Rest], Chip>
  : false;

type CheckTRBLDiagonalAux<
  Board extends Connect4Board,
  Chip extends Connect4State,
  FirstI extends any[] = [0, 0, 0],
  SecondI extends any[] = [0, 0],
  ThirdI extends any[] = [0],
  FourthI extends any[] = [],
> = Board extends [
  infer First extends Connect4Cell[],
  infer Second extends Connect4Cell[],
  infer Third extends Connect4Cell[],
  infer Fourth extends Connect4Cell[],
]
  ? FirstI["length"] extends 8
    ? false
    : Check4ChipsInRow<
          [
            First[FirstI["length"]],
            Second[SecondI["length"]],
            Third[ThirdI["length"]],
            Fourth[FourthI["length"]],
          ],
          Chip
        > extends true
      ? true
      : CheckTRBLDiagonalAux<
          Board,
          Chip,
          [...FirstI, 0],
          [...SecondI, 0],
          [...ThirdI, 0],
          [...FourthI, 0]
        >
  : false;

type CheckTLBRDiagonal<Board extends Connect4Board, Chip extends Connect4State> =
Board extends [infer First extends Connect4Cell[], infer Second extends Connect4Cell[], infer Third extends Connect4Cell[], infer Fourth extends Connect4Cell[], ...infer Rest extends Connect4Board]
  ? CheckTLBRDiagonalAux<[First, Second, Third, Fourth], Chip> extends true
    ? true
    : CheckTLBRDiagonal<[Second, Third, Fourth, ...Rest], Chip>
  : false
;

type CheckTLBRDiagonalAux<Board extends Connect4Board, Chip extends Connect4State, FirstI extends any[] = [], SecondI extends any[] = [0], ThirdI extends any[] = [0,0], FourthI extends any[] = [0,0,0] > =
Board extends [infer First extends Connect4Cell[], infer Second extends Connect4Cell[], infer Third extends Connect4Cell[], infer Fourth extends Connect4Cell[]]
  ? FourthI['length'] extends 8
    ? false
    : Check4ChipsInRow<[First[FirstI['length']], Second[SecondI['length']], Third[ThirdI['length']], Fourth[FourthI['length']]], Chip> extends true
      ? true
      : CheckTRBLDiagonalAux<Board, Chip, [...FirstI, 0], [...SecondI, 0], [...ThirdI, 0], [...FourthI, 0]>
    : false
;

type CheckWinnerState<Board extends Connect4Board, Chip extends Connect4State> = CheckHorizontal<
  Board,
  Chip
> extends false
  ? CheckVertical<Board, Chip> extends false
    ? CheckTRBLDiagonal<Board, Chip> extends false
      ? CheckTLBRDiagonal<Board, Chip> extends false
        ? false
        : true
      : true
    : true
  : true;

type IsBoardFilled<Board extends Connect4Board> = Board extends [
  infer F extends Connect4Cell[],
  ...infer L extends Connect4Board,
]
  ? IsRowFilled<F> extends false
    ? false
    : IsBoardFilled<L>
  : true;

type IsRowFilled<Row extends Connect4Cell[]> = Row extends [
  infer F,
  ...infer L extends Connect4Cell[],
]
  ? F extends Connect4EmptyCell
    ? false
    : IsRowFilled<L>
  : true;

type Connect4<G extends Connect4Game, P extends number> = {
  board: MakeTurn<G["board"], G["state"], P>;
  state: IsBoardFilled<MakeTurn<G["board"], G["state"], P>> extends true
           ? "Draw"
           : CheckWinnerState<MakeTurn<G["board"], G["state"], P>, G["state"]> extends true
             ? `${G["state"]} Won`
             : G["state"] extends "🟡"
               ? "🔴"
               : "🟡";
};
