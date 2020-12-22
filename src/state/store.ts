import { combineReducers } from "redoodle";
import { createStore, Store } from "redux";
import { triviaAppReducer } from "./trivia-app/TriviaAppReducer";
import {
  TriviaAppState,
  INITIAL_TRIVIA_APP_STATE,
} from "./trivia-app/TriviaAppState";

export interface GlobalState {
  triviaAppState: TriviaAppState;
}

export function createInitialGlobalState(): GlobalState {
  return {
    triviaAppState: INITIAL_TRIVIA_APP_STATE,
  };
}

const rootReducer = combineReducers({
  triviaAppState: triviaAppReducer,
});

export const store: Store<GlobalState> = createStore(
  rootReducer as any,
  createInitialGlobalState()
);
