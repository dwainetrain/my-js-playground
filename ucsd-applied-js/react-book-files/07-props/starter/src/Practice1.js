import React from "react";

const Practice1 = () => {
  const id = 1;
  const username = "zgordon";
  return (
    <div className="practice">
      {/* 
        1.Pass the id and username into <User /> as props 
      */}
      <User username={username} id={id}/>
    </div>
  );
};

const User = props => {
  return (
    <p>
      {props.username} [{props.id}]
    </p>
  );
};

export default Practice1;
