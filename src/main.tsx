import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import ErrorBoundary from "./app/ErrorBoundary/ErrorBoundary.tsx";
import { Loading } from "@shared/ui/Loading/Loading.tsx";

const App = lazy(() => import("./app/App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
);
