// https://typehero.dev/challenge/day-21

// tests
import { Equal, Expect } from 'type-testing';

type test_move1_actual = TicTacToe<NewGame, 'top-center'>;
//   ^?
type test_move1_expected = {
  board: [
    [ '  ', '❌', '  ' ],
    [ '  ', '  ', '  ' ],
    [ '  ', '  ', '  ' ]
  ];
  state: '⭕';
};
type test_move1 = Expect<Equal<test_move1_actual, test_move1_expected>>;

type test_move2_actual = TicTacToe<test_move1_actual, 'top-left'>;
//   ^?
type test_move2_expected = {
  board: [
    ['⭕', '❌', '  '], 
    ['  ', '  ', '  '], 
    ['  ', '  ', '  ']];
  state: '❌';
}
type test_move2 = Expect<Equal<test_move2_actual, test_move2_expected>>;

type test_move3_actual = TicTacToe<test_move2_actual, 'middle-center'>;
//   ^?
type test_move3_expected = {
  board: [
    [ '⭕', '❌', '  ' ],
    [ '  ', '❌', '  ' ],
    [ '  ', '  ', '  ' ]
  ];
  state: '⭕';
};
type test_move3 = Expect<Equal<test_move3_actual, test_move3_expected>>;

type test_move4_actual = TicTacToe<test_move3_actual, 'bottom-left'>;
//   ^?
type test_move4_expected = {
  board: [
    [ '⭕', '❌', '  ' ],
    [ '  ', '❌', '  ' ],
    [ '⭕', '  ', '  ' ]
  ];
  state: '❌';
};
type test_move4 = Expect<Equal<test_move4_actual, test_move4_expected>>;


type test_x_win_actual = TicTacToe<test_move4_actual, 'bottom-center'>;
//   ^?
type test_x_win_expected = {
  board: [
    [ '⭕', '❌', '  ' ],
    [ '  ', '❌', '  ' ],
    [ '⭕', '❌', '  ' ]
  ];
  state: '❌ Won';
};
type test_x_win = Expect<Equal<test_x_win_actual, test_x_win_expected>>;

type type_move5_actual = TicTacToe<test_move4_actual, 'bottom-right'>;
//   ^?
type type_move5_expected = {
  board: [
    [ '⭕', '❌', '  ' ],
    [ '  ', '❌', '  ' ],
    [ '⭕', '  ', '❌' ]
  ];
  state: '⭕';
};
type test_move5 = Expect<Equal<type_move5_actual, type_move5_expected>>;

type test_o_win_actual = TicTacToe<type_move5_actual, 'middle-left'>;
//   ^?
type test_o_win_expected = {
  board: [
    [ '⭕', '❌', '  ' ],
    [ '⭕', '❌', '  ' ],
    [ '⭕', '  ', '❌' ]
  ];
  state: '⭕ Won';
};

// invalid move don't change the board and state
type test_invalid_actual = TicTacToe<test_move1_actual, 'top-center'>;
//   ^?
type test_invalid_expected = {
  board: [
    [ '  ', '❌', '  ' ],
    [ '  ', '  ', '  ' ],
    [ '  ', '  ', '  ' ]
  ];
  state: '⭕';
};
type test_invalid = Expect<Equal<test_invalid_actual, test_invalid_expected>>;

type test_before_draw = {
  board: [
    ['⭕', '❌', '⭕'], 
    ['⭕', '❌', '❌'], 
    ['❌', '⭕', '  ']];
  state: '⭕';
}
type test_draw_actual = TicTacToe<test_before_draw, 'bottom-right'>;
//   ^?
type test_draw_expected = {
  board: [
    ['⭕', '❌', '⭕'], 
    ['⭕', '❌', '❌'], 
    ['❌', '⭕', '⭕']];
  state: 'Draw';
}
type test_draw = Expect<Equal<test_draw_actual, test_draw_expected>>;


// solution
type TicTacToeChip = '❌' | '⭕';
type TicTacToeEndState = '❌ Won' | '⭕ Won' | 'Draw';
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = '  '
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = 'top' | 'middle' | 'bottom';
type TicTacToeXPositions = 'left' | 'center' | 'right';
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;
type TicTacToeBoard = TicTacToeCell[][];
type TicTacToeGame = {
  board: TicTacToeBoard;
  state: TicTacToeState;
};

type EmptyBoard = [
  ['  ', '  ', '  '], 
  ['  ', '  ', '  '], 
  ['  ', '  ', '  ']
];

type NewGame = {
  board: EmptyBoard;
  state: '❌';
};

type IsValidTurn<Board extends TicTacToeBoard, Position extends TicTacToePositions> =
  Position extends 'top-left'
      ? Board[0][0] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'top-center'
      ? Board[0][1] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'top-right'
      ? Board[0][2] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'middle-left'
      ? Board[1][0] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'middle-center'
      ? Board[1][1] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'middle-right'
      ? Board[1][2] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'bottom-left'
      ? Board[2][0] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'bottom-center'
      ? Board[2][1] extends TicTacToeEmptyCell
        ? true : false
  : Position extends 'bottom-right'
      ? Board[2][2] extends TicTacToeEmptyCell
        ? true : false
  : false
;

type MakeTurn<Board extends TicTacToeBoard, Chip extends TicTacToeState, Position extends TicTacToePositions> =
  Position extends 'top-left'
  ? [...{
      [K in keyof Board]: K extends "0" ? Board[K] extends [infer F, ...infer R] ? [Chip, ...R] : Board[K] : Board[K]
    }]
  : Position extends 'top-center'
  ? [...{
      [K in keyof Board]: K extends "0" ? Board[K] extends [infer F, infer M, infer R] ? [F, Chip, R] : Board[K] : Board[K]
    }]
  : Position extends 'top-right'
  ? [...{
      [K in keyof Board]: K extends "0" ? Board[K] extends [...infer F, infer R] ? [...F, Chip] : Board[K] : Board[K]
    }]
  : Position extends 'middle-left'
  ? [...{
      [K in keyof Board]: K extends "1" ? Board[K] extends [infer F, ...infer R] ? [Chip, ...R] : Board[K] : Board[K]
    }]
  : Position extends 'middle-center'
  ? [...{
      [K in keyof Board]: K extends "1" ? Board[K] extends [infer F, infer M, infer R] ? [F, Chip, R] : Board[K] : Board[K]
    }]
  : Position extends 'middle-right'
  ? [...{
      [K in keyof Board]: K extends "1" ? Board[K] extends [...infer F, infer R] ? [...F, Chip] : Board[K] : Board[K]
    }]
  : Position extends 'bottom-left'
  ? [...{
      [K in keyof Board]: K extends "2" ? Board[K] extends [infer F, ...infer R] ? [Chip, ...R] : Board[K] : Board[K]
    }]
  : Position extends 'bottom-center'
  ? [...{
      [K in keyof Board]: K extends "2" ? Board[K] extends [infer F, infer M, infer R] ? [F, Chip, R] : Board[K] : Board[K]
    }]
  : Position extends 'bottom-right'
  ? [...{
      [K in keyof Board]: K extends "2" ? Board[K] extends [...infer F, infer R] ? [...F, Chip] : Board[K] : Board[K]
    }]
  : never;


type CheckWinner<Board extends TicTacToeBoard, Chip extends TicTacToeState> =
  _CheckWinner<{[K in keyof Board]: Board[K][0]}, Chip> extends TicTacToeEndState
    ? _CheckWinner<{[K in keyof Board]: Board[K][0]}, Chip>
    : _CheckWinner<{[K in keyof Board]: Board[K][1]}, Chip> extends TicTacToeEndState
      ? _CheckWinner<{[K in keyof Board]: Board[K][1]}, Chip>
      : _CheckWinner<{[K in keyof Board]: Board[K][2]}, Chip> extends TicTacToeEndState
        ? _CheckWinner<{[K in keyof Board]: Board[K][2]}, Chip>
        : _CheckWinner<Board[0], Chip> extends TicTacToeEndState
          ? _CheckWinner<Board[0], Chip>
          : _CheckWinner<Board[1], Chip> extends TicTacToeEndState
            ? _CheckWinner<Board[1], Chip>
            : _CheckWinner<Board[2], Chip> extends TicTacToeEndState
              ? _CheckWinner<Board[2], Chip>
              : false;

type _CheckWinner<Row extends any[], Chip extends TicTacToeState> =
  Row extends [infer F, infer M, infer L]
    ? F extends Chip
      ? M extends Chip
        ? L extends Chip
          ? `${Chip} Won`
          : false
        : false
      : false
    : false;

type HasEmptyCell<Board extends TicTacToeBoard, Chip extends TicTacToeEmptyCell> =
  _CheckEmptyCell<{[K in keyof Board]: Board[K][0]}, Chip> extends true
    ? true
    : _CheckEmptyCell<{[K in keyof Board]: Board[K][1]}, Chip> extends true
      ? true
      : _CheckEmptyCell<{[K in keyof Board]: Board[K][2]}, Chip> extends true
        ? true
        : _CheckEmptyCell<Board[0], Chip> extends true
          ? true
          : _CheckEmptyCell<Board[1], Chip> extends true
            ? true
            : _CheckEmptyCell<Board[2], Chip> extends true
              ? true
              : false;

type _CheckEmptyCell<Row extends any[], Chip extends TicTacToeEmptyCell> =
  Row extends [infer F, infer M, infer L]
    ? F extends Chip
     ? true
     : M extends Chip
       ? true
       : L extends Chip
         ? true
         : false
    : false;

type NextTurn<Board extends TicTacToeBoard, Chip extends TicTacToeState> =
  CheckWinner<Board, Chip> extends infer Winner extends TicTacToeEndState
    ? Winner
    : HasEmptyCell<Board, '  '> extends true
      ? Chip extends '❌'
        ? '⭕'
        : '❌'
      : 'Draw';

type TicTacToe<G extends TicTacToeGame, P extends TicTacToePositions> =
  IsValidTurn<G['board'], P> extends true
    ? {
      board: MakeTurn<G['board'], G['state'], P>,
      state: NextTurn<MakeTurn<G['board'], G['state'], P>, G['state']>
    }
    : {
      board: G['board'],
      state: G['state']
    };
