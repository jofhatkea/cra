import React from "react";
import Teacher from "./Teacher";

export default function App() {
  const data = [
    {
      id: 2,
      name: "Jonas",
      hobbies: ["js", "beer"],
      email: "jofh@kea.dk",
      kids: 3,
      car: "Berlingo"
    },
    {
      id: 345,
      name: "Peter",
      hobbies: ["js", "cats"],
      email: "petl@kea.dk",
      kids: 0
    },
    {
      id: 234,
      name: "Ida",
      hobbies: ["sprints", "business"],
      email: "idwh@kea.dk",
      kids: 1
    }
  ];

  const teachers = data.map((teacher, index) => {
    return <Teacher key={teacher.id} {...teacher} />;
  });
  return (
    <div id="App">
      <header>Header</header>
      {teachers}
      <footer>Footer</footer>
    </div>
  );
}
