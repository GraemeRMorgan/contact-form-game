"use client"
import Image from "next/image";
import styles from "./page.module.css";
import App from './App';
import { RecoilRoot } from "recoil";
const Home = () => {
  return (
    <>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </>
  );
}
export default Home;
