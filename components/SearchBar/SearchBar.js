import React from "react";
import clsx from "clsx";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
  let classes = {};
  classes = {...props.classes};
  return (
    <div className={clsx(styles.search,classes.search)}>
      <p className={clsx(styles.label,classes.label)} >Busca</p>
      <input type="text" placeholder="Busca..." className={clsx(styles.input,classes.input)} disabled/>
      <BsSearch className={clsx(styles.icon, classes.icon)}/>
    </div>
  );
};

export default SearchBar;
