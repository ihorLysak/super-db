import { actions } from "./feed.slice";
import { getAllHeroes } from "./actions";

const allActions = { ...actions, getAllHeroes };

export { allActions as actions };
export { reducer } from "./feed.slice";
