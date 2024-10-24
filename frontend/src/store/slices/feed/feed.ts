import { actions } from "./feed.slice";
import { getAllHeroes, createHero, deleteHero } from "./actions";

const allActions = { ...actions, getAllHeroes, createHero, deleteHero };

export { allActions as actions };
export { reducer } from "./feed.slice";
