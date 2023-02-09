import { useCallback, useLayoutEffect, useState } from "react";

const listeners = new Map<string, Set<() => void>>();
export function useData<type extends any>(key: string, presetValue: type): [
  type,
  (value: type) => void
] {
  const [ state, setState ] = useState(() => getData(key, presetValue));

  const updateState = useCallback((state: type) => {
    setState(state);
    setData(key, state);

    let set = listeners.get(key);
    if (!set) set = new Set();
    
    for (const listener of set) listener();
  }, [ state ]);

  useLayoutEffect(() => {
    let set = listeners.get(key);
    if (!set) listeners.set(key, set = new Set());

    function forceUpdate() {
      setState(() => getData(key, presetValue))
    };
    
    set.add(forceUpdate);
    return () => void set?.delete(forceUpdate);
  }, []);

  return [
    state, 
    updateState
  ]
}

export function getData<type extends any>(key: string, presetValue: type): type {
  return BdApi.Data.load("ECBlocks", key) ?? presetValue;
};

export function setData(key: string, newValue: any) {
  return BdApi.Data.save("ECBlocks", key, newValue);
};