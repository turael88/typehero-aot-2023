// https://typehero.dev/challenge/day-17

// tests
import { Expect, Equal } from 'type-testing';

type test_0_actual = WhoWins<'👊🏻', '🖐🏾'>;
//   ^?
type test_0_expected = 'win';
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = WhoWins<'👊🏻', '✌🏽'>;
//   ^?
type test_1_expected = 'lose';
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = WhoWins<'👊🏻', '👊🏻'>;
//   ^?
type test_2_expected = 'draw';
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;

type test_3_actual = WhoWins<'🖐🏾', '👊🏻'>;
//   ^?
type test_3_expected = 'lose';
type test_3 = Expect<Equal<test_3_expected, test_3_actual>>;

type test_4_actual = WhoWins<'🖐🏾', '✌🏽'>;
//   ^?
type test_4_expected = 'win';
type test_4 = Expect<Equal<test_4_expected, test_4_actual>>;

type test_5_actual = WhoWins<'🖐🏾', '🖐🏾'>;
//   ^?
type test_5_expected = 'draw';
type test_5 = Expect<Equal<test_5_expected, test_5_actual>>;

type test_6_actual = WhoWins<'✌🏽', '👊🏻'>;
//   ^?
type test_6_expected = 'win';
type test_6 = Expect<Equal<test_6_expected, test_6_actual>>;

type test_7_actual = WhoWins<'✌🏽', '✌🏽'>;
//   ^?
type test_7_expected = 'draw';
type test_7 = Expect<Equal<test_7_expected, test_7_actual>>;

type test_8_actual = WhoWins<'✌🏽', '🖐🏾'>;
//   ^?
type test_8_expected = 'lose';
type test_8 = Expect<Equal<test_8_expected, test_8_actual>>;


// solution
type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

type WhoWins<Opponent extends RockPaperScissors, Player extends RockPaperScissors> =
  Opponent extends '👊🏻'
	? Player extends '👊🏻'
	  ? 'draw'
		: Player extends '🖐🏾'
		  ? 'win'
			: Player extends '✌🏽'
			  ? 'lose'
				: never
  : Opponent extends '🖐🏾'
	  ? Player extends '👊🏻'
		  ? 'lose'
			: Player extends '🖐🏾'
			  ? 'draw'
				: Player extends '✌🏽'
				  ? 'win'
					: never
  : Opponent extends '✌🏽'
	  ? Player extends '👊🏻'
	    ? 'win'
		  : Player extends '🖐🏾'
		    ? 'lose'
			  : Player extends '✌🏽'
			    ? 'draw'
				  : never
  : never;
