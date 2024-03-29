import { createBrowserRouter } from "react-router-dom";
import UseReudcerPage from "./practices/useReducer/page";
import UseMemoPage from "./practices/useMemo/page";
import UseEffectPage from "./practices/useEffect/page";
import UseCallbackPage from "./practices/useCallback/page";

export const router = createBrowserRouter([
  { path: "/useReducer", Component: UseReudcerPage },
  { path: "/useMemo", Component: UseMemoPage },
  { path: "/useEffect", Component: UseEffectPage },
  { path: "/useCallback", Component: UseCallbackPage },
]);
