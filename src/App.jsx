import React, { Component } from "react";
import { render } from "react-dom";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Meet the {this.props.name} </h1>;
  }
}

function App() {
  const name = "StarGazers";
  return (
    <>
      <div className="container">
        <article>
          <hgroup>
            <img src="images/group.svg" alt="StarGazers Group" />
            <Welcome name="stars" />
            <Welcome name="starGazers" />
            <Welcome name="starGallery" />
            <h1>
              Meet the <i style={{ color: "SteelBlue" }}>{name}</i>
            </h1>
            <p>
              Members of an <b>intergalactic alliance</b>
              <br />
              paving the way for peace and benevolence among all species. They
              are known for their enthusiasm for science, for their love of fun,
              and their dedication to education.
            </p>
            <button className="Outline" onClick={() => alert("Hi there")}>
              Click me
            </button>
          </hgroup>
        </article>
      </div>
    </>
  );
}
export default App;
