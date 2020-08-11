import React, { useState } from "react";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";

import Select from "../Select/Select";
import SearchBar from "../SearchBar/SearchBar";

import animiationRight from './animationRight.module.scss';
import animiationLeft from './animationLeft.module.scss';
import styles from "../../pages/style.module.scss";

const categorias = [
  { nome: "Função não implementada", value: 0, id: 99 },
  { nome: "HTML - incompleto", value: 1, id: 0 },
  { nome: "CSS - incompleto", value: 2, id: 1 },
  { nome: "Javascript - incompleto", value: 3, id: 2 },
  { nome: "React.js - incompleto", value: 4, id: 3 },
];

const data = [
  { nome: "Função não implementada", value: 0, id: 99 },
  { nome: "Crescente - incompleto", value: 1, id: 0 },
  { nome: "Decrescente - incompleto", value: 2, id: 1 },
  { nome: "Relevancia - incompleto", value: 3, id: 2 },
];

const inputClasses = {
  container: styles.select,
  input: styles.selectInput,
  label: styles.selectLabel,
  list: styles.selectList,
  item: styles.selectItem,
};
const searchBoxClasses = {
  search: styles.searchBar,
  label: styles.searchBarLabel,
  input: styles.searchBarInput,
  icon: styles.searchBarIcon
}
const Center = (props) => {
  const [filter, setFilter] = useState({
    categorias: "Categorias",
    data: "Data",
  });
  const handleFilterChange = (filter, value) => {
    const selectedFilter = filter === "categorias" ? categorias : data;
    setFilter((prev) => ({
      ...prev,
      [filter]: selectedFilter.find((item) => item.value == value).nome,
    }));
  };
  const gridCenter = (page = props.page - 1) => {
    let gridCenter = [];
    for (var i = page * 8; i < page * 8 + 8; i++) {
      const text =
        props.data[i].replace(/-/g, " ").length > 32
          ? props.data[i].replace(/-/g, " ").substring(0, 30) + "..."
          : props.data[i].replace(/-/g, " ");
      gridCenter.push(
        <a
          className={styles.portfolioListItem}
          target="_blank"
          href={`/fmc/${props.data[i]}`}
        >
          <div className={styles.portfolioListItemImage}>
            <img src={`/assets/thumb/${props.data[i]}.jpg`} />
          </div>
          <div className={styles.portfolioListItemText}>
            <h4>{text}</h4>
            <div className={styles.portfolioListItemTextTag}>
              <span>TAG 1</span>,<span>TAG 2</span>,<span>TAG 3</span>
            </div>
          </div>
        </a>
      );
    }
    return gridCenter;
  };
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.portfolioTitle}>Portfólio & Labs</h1>
      <div className={styles.portfolioFilter}>
        <Select
          list={categorias}
          classes={inputClasses}
          name="categorias"
          value={filter.categorias}
          setValue={handleFilterChange}
        />
        <Select
          list={data}
          classes={inputClasses}
          name="data"
          value={filter.data}
          setValue={handleFilterChange}
        />
        <SearchBar classes={searchBoxClasses}/>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          classNames={props.dir?animiationRight:animiationLeft}
          timeout={0}
          key={props.page}
          unmountOnExit
        >
          <div className={styles.portfolioList}>{gridCenter()}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Center;
