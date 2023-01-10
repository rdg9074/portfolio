import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "../components/nav/MainNavigation";
import Main from "../screen/Main";

function RootRouter() {
  return (
    <>
      <div id="root-layout">
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default RootRouter;
