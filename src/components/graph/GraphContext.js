import React, { useReducer, useRef } from "react";
import {
  GraphDispatchContext,
  GraphNextIdContext,
  GraphStateContext,
} from "../../hooks/graph/contexts/graphContexts";
import { GraphReducer } from "../../hooks/graph/graphReducer";
import { tasksList } from "../../utils/graph/constants";

function GraphProvider({ children }) {
  const [state, dispatch] = useReducer(GraphReducer, tasksList);
  const nextId = useRef(4);

  return (
    <GraphStateContext.Provider value={state}>
      <GraphDispatchContext.Provider value={dispatch}>
        <GraphNextIdContext.Provider value={nextId}>
          {children}
        </GraphNextIdContext.Provider>
      </GraphDispatchContext.Provider>
    </GraphStateContext.Provider>
  );
}

export default GraphProvider;
