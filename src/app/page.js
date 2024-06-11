/**
 * Entrypoint 
 * Client Side Rendering for preformance.
 * 
 */

"use client";
import App from "./App";
import { RecoilRoot } from "recoil";

const Home = () => {
  return (
    // App is wrapped in a Recoil to share state throughout children. 
    <>
      <RecoilRoot>
        <App />
      </RecoilRoot>

    </>
  );
};
export default Home;
