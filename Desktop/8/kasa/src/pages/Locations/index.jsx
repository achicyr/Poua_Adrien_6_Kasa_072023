import React from "react";
import Dropdown from "../../components/Dropdown/index";
import Footer from "../../components/Footer/index";
import Frame from "../../components/Frame/index";
import Header from "../../components/Header/index";
import Logement from "../../components/Logement"
import Tag from "../../components/Tag/index";
import style from "./style.module.scss"
import datas from "../../assets/data/data";
import { useParams } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={style.main}>
        <Logement />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
