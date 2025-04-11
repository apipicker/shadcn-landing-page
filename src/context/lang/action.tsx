import { Lang } from "./reducer";
import * as Types from "./types";

export const handleSet = (dispatch: any) => (lang:Lang) => {
  return dispatch(Types.SET_LANG, lang);
};
export const handleToggle = (dispatch: any) => () => {
  return dispatch(Types.TOGGLE_LANG);
};
