import { useState, useLayoutEffect, useReducer, useMemo } from "react";

export function useForceUpdate(): () => void {
  const [, forceUpdate ] = useReducer((state) => state + 1, 0);

  return forceUpdate;
};

export function useStateDeps<T>(initialState: T | (() => T), deps: React.DependencyList): [ T, (v: T) => void ] {
  const [ state, setState ] = useState(initialState);

  useLayoutEffect(() => setState(initialState), deps);

  return [ state, setState ];
};

const intl = BdApi.Webpack.getModule(m => m.Messages) as {
  Messages: Record<string, string>
};
export function useMessages() {
  return intl.Messages;
};
