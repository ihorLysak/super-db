import { actions } from "./details.slice";
import { getHeroDetails, changeHero } from "./actions";

const allActions = { ...actions, getHeroDetails, changeHero };

export { allActions as actions };
export { reducer } from "./details.slice";
