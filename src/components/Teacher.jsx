import React from "react";

export default function Teacher(props) {
  return (
    <article className="teacher">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      <h2>Hobbies</h2>
    </article>
  );
}
