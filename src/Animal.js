import React from "react";
import AnimalDetails from "./AnimalDetails";

const Animal = (props) => {
  const details = props.details;
  return (
    <div>
      {props.children}
      <ul>
        {details.map((detail, index) => (
          <AnimalDetails detail={detail} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Animal;
