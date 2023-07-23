import React from "react";
import datas from "../../assets/data/data";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export default function Index() {
  console.log(datas);
  
  const item = datas.map((house) => (
      <Link to={`/location/${house.id}`} className={style.item}>
      {" "}
      <h2 className={style.title}> {house.title} </h2>{" "}
    </Link>
  ));
  return <div className={style.container}>{item}</div>;
}
