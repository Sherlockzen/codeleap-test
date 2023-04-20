import React, {useState} from "react";
import './index.css';
import delIcon from '../../images/delete.svg'
import edtIcon from '../../images/edit.svg'
import {DateTime, Interval} from "luxon";

const Card = ({props}:any) => {
const [diffDate, setDiffDate] = useState({
    days: 0,
    hours: 0,
    mins: 0,
})

    const dtCard = DateTime.fromISO(props.created_datetime);
    const dtDiff = dtCard.diffNow(["days", "hours", "minutes"]);

    //todo Converter os valores para number e remover o -
    // setDiffDate({
    //     days: dtDiff.days,
    //     hours: dtDiff.hours,
    //     mins: dtDiff.minutes,
    // });

  return (
    <div key={props.id} className={"cardContainer"}>
      <header>
        <h1>{props.title}</h1>
        <div className={"btnContainer"}>
            <div className={"btn"}>
                <img src={delIcon} alt={"delete"}/>
            </div>
            <div className={"btn"}>
                <img src={edtIcon} alt={"edit"}/>
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