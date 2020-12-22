export interface TriviaAppState {
  currentRound: number;
  currentQuestion: number;
  teams: TriviaTeam[];
}

export const INITIAL_TRIVIA_APP_STATE: TriviaAppState = {
  currentRound: 0,
  currentQuestion: 0,
  teams: [],
};

export interface TriviaQuestion {
  question: string;
  answer: string;
  notes?: string;
  category: string;
}

export interface TriviaRound {
  name: string;
  questions: TriviaQuestion[];
}

export interface TriviaGame {
  id: string;
  rounds: TriviaRound[];
}

export interface TriviaTeam {
  id: string;
  name: string;
  members: string[];
  charity: string;
  location: string;
}
