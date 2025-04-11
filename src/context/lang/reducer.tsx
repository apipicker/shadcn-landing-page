import { EN } from "./file/en";
import { IT } from "./file/it";
import * as Types from "./types";
export type Lang = "en" | "it";

export const Reducer = (state: any, action: any): any => {
  switch (action?.type) {
    case Types.SET_LANG: {
      return {
        ...action?.value==="en"?EN:IT,
      };
    }
    case Types.TOGGLE_LANG: {
      return {
        ...state?.lang === "it" ? EN:IT,
      }
    }

    default:
      throw new Error(`Loading Unhandled action type: ${action?.type}`);
  }
};
