import React, { createContext, useContext, useLayoutEffect } from "react";
import type { InterpreterFrom } from "xstate";
import { useInterpret } from "@xstate/react";

// Machines
import { callMachine } from "../xstate/callMachine";

// set true to open the xstate visualizer
const showVisualizer = false;
if (showVisualizer) {
  import("@xstate/inspect").then(({ inspect }) => {
    inspect({ iframe: false });
  });
}

export const GlobalContext = createContext({
  callService: {} as InterpreterFrom<typeof callMachine>,
});

export const GlobalStateProvider: React.FC<{
  children: React.ReactNode;
}> = ({ meteorContext, meteorMethods, children }) => {
  const callService = useInterpret(callMachine, { devTools: false });

  useLayoutEffect(() => {
    callService.start();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        callService,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
