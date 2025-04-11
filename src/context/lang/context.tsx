import { useContext, createContext } from "react";

export const LangStateContext = createContext<any| undefined>({lang: "it"});
export const LangDispatchContext = createContext<any| undefined>({
  set: () => { },
  toggle: () => { }
});

/**
 * Lang State Managment
 * @returns state
 */
export const useLangState = () => {
  const context = useContext(LangStateContext);
  if (context === undefined) {
    throw new Error("useLangState must be used within a LangProvider");
  }
  return context;
};

/**
 * Lang Action Managment
 * @returns Actions
 */
export const useLangDispatch = () => {
  const context = useContext(LangDispatchContext);
  if (context === undefined) {
    throw new Error("useLangDispatch must be used within a LangProvider");
  }
  return context;
};
