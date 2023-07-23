import React from "react";
import { BsFillHouseDoorFill } from 'react-icons/bs'
import resets from '../../assets/Resets.module.scss'
import style from './style.module.scss'

console.log(BsFillHouseDoorFill)

export default function Logo() {
  return (
    <span className={style.container}>
      K<BsFillHouseDoorFill />sa
    </span>
  );
}
