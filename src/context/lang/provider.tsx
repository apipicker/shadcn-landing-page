/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useReducer } from "react";
import * as action from "./action";
import { Reducer } from "./reducer";
import { LangStateContext, LangDispatchContext } from "./context";
import { IT } from "./file/it";
export const dispatch = (setState: any) => (type: any, value: any) => {
  setState({ type, value });
};


export const LangProvider = ({ children }: any) => {
  const data = localStorage.getItem('lang');
  let lang = IT;
  if (data) {
    lang = JSON.parse(data) || IT;
  }
  const [state, setState] = useReducer(Reducer, lang);
  const actions = React.useMemo(
    () => ({
      set: action.handleSet(dispatch(setState)),
      toggle: action.handleToggle(dispatch(setState)),
    }),
    [setState]
  );
  return (<LangDispatchContext.Provider value={actions}>
    <LangStateContext.Provider value={useMemo(() => state, [state])}>
      {children}
    </LangStateContext.Provider>
  </LangDispatchContext.Provider>
  );
};
