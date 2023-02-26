import { useState, useLayoutEffect, useReducer } from "react";

export function useForceUpdate(): () => void {
  const [, forceUpdate ] = useReducer((state) => state + 1, 0);

  return forceUpdate;
};

export function useStateDeps<T>(initialState: T | (() => T), deps: React.DependencyList): [ T, (v: T) => void ] {
  const [ state, setState ] = useState(initialState);

  useLayoutEffect(() => setState(initialState), deps);

  return [ state, setState ];
};
