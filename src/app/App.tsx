import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
// import { Main } from "@pages/Main";
// import { About } from "@pages/About";
// import { NothingFound } from "@pages/NothingFound";
import { Header } from "@widgets/Header";
// import { Categories } from "@pages/Categories";
// import { Collection } from "@pages/Collection";
import { Footer } from "@widgets/Footer";
import { Loading } from "@shared/ui/Loading/Loading";

const Main = lazy(() => import("../pages/Main/index"));
const About = lazy(() => import("../pages/About/index"));
const NothingFound = lazy(() => import("../pages/NothingFound/index"));
const Categories = lazy(() => import("../pages/Categories/index"));
const Collection = lazy(() => import("../pages/Collection/index"));

function App() {
  return (
    <div className="max-w-[1400px] overflow-hidden">
      <div className="flex min-h-screen flex-col">
        <BrowserRouter>
          <Header />
          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <Main />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loading />}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/categories"
                element={
                  <Suspense fallback={<Loading />}>
                    <Categories />
                  </Suspense>
                }
              />
              <Route
                path="/collection"
                element={
                  <Suspense fallback={<Loading />}>
                    <Collection />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loading />}>
                    <NothingFound />
                  </Suspense>
                }
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
