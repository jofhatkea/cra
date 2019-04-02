import React from "react";

export default function Teacher(props) {
  /*let car = "";
  if (props.car) {
    car = <p>Car: {props.car}</p>;
  }*/
  //const car = props.car ? <p>Car: {props.car}</p> : "";
  return (
    <article className="teacher">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      {props.car && <p>Car: {props.car}</p>}
      <h2>Hobbies</h2>
    </article>
  );
}
