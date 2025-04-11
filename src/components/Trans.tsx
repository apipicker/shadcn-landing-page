import { useLangState } from "@/context/lang/context";
import React, { useMemo } from "react";
const getNestedValue = (obj: any, path: string): string | undefined => {
  return path.split('.').reduce((acc, key) => {
    return acc !== undefined && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);
};
interface TransProps {
  children: string;
  isHtml?: boolean;
}

export const Trans: React.FC<TransProps> = React.memo(({ children, isHtml }) => {
  const state = useLangState();
  const translatedText = useMemo(() => {
    return getNestedValue(state, children) || children; // اگر ترجمه وجود نداشت، children برگردانده میشود
  }, [children, state]);
  if (isHtml && typeof translatedText === 'string') {
    return <span dangerouslySetInnerHTML={{ __html: translatedText }} />;
  }
  return <>{translatedText}</>;
});

Trans.displayName = 'Trans';