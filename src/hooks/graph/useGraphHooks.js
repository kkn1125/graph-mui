import { useContext } from "react";
import {
  GraphDispatchContext,
  GraphNextIdContext,
  GraphStateContext,
} from "./contexts/graphContexts";

function useGraphState() {
  return useContext(GraphStateContext);
}

function useGraphDispatch() {
  return useContext(GraphDispatchContext);
}

function useGraphNextId() {
  return useContext(GraphNextIdContext);
}

export { useGraphState, useGraphDispatch, useGraphNextId };
