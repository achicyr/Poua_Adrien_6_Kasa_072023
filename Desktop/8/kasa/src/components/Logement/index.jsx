import React from "react";
import datas from "../../assets/data/data";
import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import { AiFillStar } from "react-icons/ai";
import Dropdown from "../Dropdown";

export default function Index() {
  const { id } = useParams();
  let dataPage = datas.filter((element) => element.id === id);
  let data = dataPage[0];
  const splittedName = data.host.name.split(" ");

  console.log(data);
  let tags = data.tags.map((tag) => <div className={style.tag}> {tag} </div>);

  const rating = () => {
    const hostRate = parseInt(data.rating);
    const filledStars = Array(hostRate).fill(
      <AiFillStar className={`${style.filledStar} ${style.star}`} />
    );
    const emptyStars = Array(5 - hostRate).fill(
      <AiFillStar className={`${style.emptyStar} ${style.star}`} />
    );
    return [...filledStars, ...emptyStars];
  };

  let equipments = data.equipments.map((stuff) => <li> {stuff} </li>);
  let listOfEquipments = <ul> {equipments}</ul>;

  return (
    <div className={style.container}>
      <div className={`${style.wrapper} ${style.wrapper__top}`}>
        <div className={style.left}>
          <h1 className={style.title}> {data.title} </h1>
          <h2 className={style.location}> {data.location}</h2>
        </div>
        <div className={style.right}>
          <div className={style.host}>
            <div className={style.host__Name}>
              <span> {splittedName[0]}</span>
              <span> {splittedName[1]}</span>
            </div>
            <div className={style.host__avatar}>
              <img
                src={data.host.picture}
                alt="okok"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.wrapper__tags}>{tags}</div>
        <div className={style.right}>{rating()}</div>
      </div>
      <div className={`${style.wrapper} ${style.wrapper__bottom}`}>
        <Dropdown title="Description" content={data.description}/>
        <Dropdown title="Equipements" content={listOfEquipments}  />
      </div>
    </div>
  );
}
