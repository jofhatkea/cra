import React from "react";
import Teacher from "./Teacher";

export default function App() {
  const data = [
    {
      name: "Jonas",
      hobbies: ["js", "beer"],
      email: "jofh@kea.dk",
      kids: 3,
      cars: "Berlingo"
    },
    {
      name: "Peter",
      hobbies: ["js", "cats"],
      email: "petl@kea.dk",
      kids: 0
    },
    {
      name: "Ida",
      hobbies: ["sprints", "business"],
      email: "idwh@kea.dk",
      kids: 1
    }
  ];

  const teachers = data.map(teacher => {
    return <Teacher {...teacher} />;
  });
  return (
    <div id="App">
      <header>Header</header>
      {teachers}
      <footer>Footer</footer>
    </div>
  );
}
