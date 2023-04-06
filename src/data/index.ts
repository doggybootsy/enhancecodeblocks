import { useCallback, useLayoutEffect, useState } from "react";

type settings = {
  autoCollapse: boolean,
  maxHeight: number,
  previewHeight: number,
  maxBytes: number,
  maxFileBytes: number,
  instantCollapse: boolean
};

const listeners = new Map<string, Set<() => void>>();

export function useData<key extends keyof settings>(key: key, presetValue: settings[key]): [
  settings[key],
  (value: settings[key]) => void
] {
  const [ state, setState ] = useState(() => getData(key, presetValue));

  const updateState = useCallback((state: settings[key]) => {
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
      setState(() => getData(key, presetValue));
    };
    
    set.add(forceUpdate);
    return () => void set?.delete(forceUpdate);
  }, [ ]);

  return [
    state, 
    updateState
  ];
}

export function getData<key extends keyof settings>(key: key, presetValue: settings[key]): settings[key] {
  return BdApi.Data.load("ECBlocks", key) ?? presetValue;
};

export function setData<key extends keyof settings>(key: key, newValue: settings[key]) {
  return BdApi.Data.save("ECBlocks", key, newValue);
};