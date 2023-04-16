import React from "react";
import './index.css';
import delIcon from '../../images/delete.svg'
import edtIcon from '../../images/edit.svg'

const Card = ({ props }) => {
  return (
    <div className={"cardContainer"}>
      <header>
        <h1>{props.title}</h1>
        <div className={"btnContainer"}>
            <div className={"btn"}>
                <img src={delIcon} alt={"delete"}/>
            </div>
            <div className={"btn"}>
                <img src={edtIcon} alt={"delete"}/>
            </div>
        </div>
      </header>
      <div className={"contentContainer"}>
        <div className={"nameTime"}>
          <span>@{props.username}</span>
          <span>25 minutes ago</span>
        </div>
        <p>
            {props.content}
        </p>
      </div>
    </div>
  );
};

export default Card;