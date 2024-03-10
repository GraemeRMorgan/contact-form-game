"use client";
import styles from "./page.module.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import GameStart from "./components/ui/GameStart";
// import "../app/components/ui/ui_globals.css";

const Home = () => {
  return (
    <>
    {/* <GameStart /> */}

      <RecoilRoot>
        <App />
      </RecoilRoot>

    </>
  );
};
export default Home;
