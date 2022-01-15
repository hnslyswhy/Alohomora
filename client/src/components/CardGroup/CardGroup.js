import React from "react";
import Card from "../Card/Card";
import data from "../../data/data.js";
import "./CardGroup.scss";

const ActivitiesData = data();

function CardGroup() {
  return (
    <div className="card-group">
      {ActivitiesData.slice(0, 4).map((activity) => {
        return <Card key={activity.id} activity={activity} />;
      })}
    </div>
  );
}

export default CardGroup;
