import React from "react";
import style from "./style.module.scss";

export default function Dropdown({ title, content, className}) {
  const handleOnClick = () => {
    const contentElements = document.getElementsByClassName("dropDown__content");
    console.log(contentElements);
  };
  return (
    <div className={style.container}>
      <div className={style.dropDownBar}>
        <h3 className={style.dropDown__title}>{title}</h3>
        <div>
          <span className={style.arrow} onClick={handleOnClick} />
        </div>
      </div>
      <p className={style.dropDown__content}> {content} </p>
    </div>
  );
}
