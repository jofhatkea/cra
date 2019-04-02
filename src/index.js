import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const data = [
    {
      name: "Jonas",
      hobbies: ["js", "beer"],
      email: "jofh@kea.dk"
    },
    {
      name: "Peter",
      hobbies: ["js", "cats"],
      email: "petl@kea.dk"
    },
    {
      name: "Ida",
      hobbies: ["sprints", "business"],
      email: "idwh@kea.dk"
    }
  ];

  const teachers = data.map(teacher => {
    return (
      <Teacher
        name={teacher.name}
        email={teacher.email}
        hobbies={teacher.hobbies}
      />
    );
  });
  return (
    <div id="App">
      <header>Header</header>
      {teachers}
      <footer>Footer</footer>
    </div>
  );
}
function Teacher(props) {
  return (
    <articles>
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      <h2>Hobbies</h2>
    </articles>
  );
}
//JSX

ReactDOM.render(<App />, document.getElementById("root"));
