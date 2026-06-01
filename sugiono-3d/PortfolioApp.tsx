"use client";

import { Suspense, lazy } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import MainContainer from "./components/MainContainer";

const CharacterModel = lazy(() => import("./components/Character"));

export default function PortfolioApp() {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <Suspense>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
}
