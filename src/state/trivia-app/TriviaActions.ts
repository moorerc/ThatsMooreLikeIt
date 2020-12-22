import { TypedAction } from "redoodle";

export const APP_PREFIX = "thats-moore-like-it // trivia //";

const loadTeams = TypedAction.defineWithoutPayload(
  `${APP_PREFIX}  // loadTeams`
)();

export const TrivaAppActions = {
  loadTeams,
};
