import { TypedReducer } from "redoodle";
import { INITIAL_TRIVIA_APP_STATE, TriviaAppState } from "./TriviaAppState";
import { TrivaAppActions } from "./TriviaActions";

const getInitialState = (): UnifiedRoutesToolState => INITIAL_TRIVIA_APP_STATE;

export const triviaAppReducer = TypedReducer.builder<TriviaAppState>()
  .withDefaultHandler((_state) => getInitialState())
  .withHandler(
    TrivaAppActions.loadTeams.TYPE,
    (state) => {...state, { transportationMode }}
  )
  .build();
