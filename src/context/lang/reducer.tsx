import { EN } from "./file/en";
import { IT } from "./file/it";
import * as Types from "./types";
export type Lang = "en" | "it";

export const Reducer = (state: any, action: any): any => {
  let $return: any = { ...state };
  switch (action?.type) {
    case Types.SET_LANG: {
      $return = {
        ...action?.value === "en" ? EN : IT,
      };
      break
    }
    case Types.TOGGLE_LANG: {
      $return = {
        ...state?.lang === "it" ? EN : IT,
      }
      break
    }

    default:
      throw new Error(`Loading Unhandled action type: ${action?.type}`);
  }
  localStorage.setItem('lang',JSON.stringify($return));
  return $return;
};
