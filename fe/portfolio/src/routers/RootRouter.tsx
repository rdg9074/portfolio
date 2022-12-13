import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootRouter() {
  return (
    <>
      <div id="root-layout">
        <MainNavigation />
        <Routes>
          <Route />
        </Routes>
      </div>
    </>
  );
}

export default RootRouter;
