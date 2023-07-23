import React from "react";
import Dropdown from "../../components/Dropdown/index";
import Footer from "../../components/Footer/index";
import Frame from "../../components/Frame/index";
import Header from "../../components/Header/index";
import Tag from "../../components/Tag/index";
import style from "./style.module.scss"

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={style.main}>
        <h1 className={style.h1}> Chez vous, partout et ailleurs</h1>
        <Frame />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
