import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Footer = () => {
  return <footer>&copy; 2018</footer>;
};
function App() {
  return (
    <div id="App">
      <Header />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header>
      <h1>This is React</h1>
    </header>
  );
}
function Person() {
  return (
    <article>
      <h1>Jonas</h1>
      <p>Hi mom</p>
    </article>
  );
}
//JSX

ReactDOM.render(<App />, document.getElementById("root"));
