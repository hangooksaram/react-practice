import { createBrowserRouter } from "react-router-dom";
import ReducerCounter from "./practices/useReducer/ReducerCounter";
export const router = createBrowserRouter([
  { path: "/useReducer", Component: ReducerCounter },
]);
