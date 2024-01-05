import React, { useState } from "react";

export default function Textbox(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase.", "success");
  };
  const ConvertLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase.", "success");
  };
  const capitalize = () => {
    let camelCaseText = text
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(camelCaseText);
    props.showAlert("Text converted to Capitalize.", "success");
  };
  const SentanceCase = () => {
    let lower = text.toLowerCase();
    let newText = lower.charAt(0).toUpperCase() + lower.slice(1);
    setText(newText);
    props.showAlert("Text converted to SentanceCase.", "success");
  };

  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared .", "success");
  };
  const handleonChange = () => {
    setText(event.target.value);
  };
  const handleonCopy = () => {
    var text = document.getElementById("mybox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to clipboard.", "success");
  };
  const handleonExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed.", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <h3
        className="mb-3 my-3 ml-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {props.heading}
      </h3>
      <div
        className="mb-3 my-3 container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleonChange}
        ></textarea>
      </div>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={handleUpclick}
        disabled={text.length === 0}
      >
        ConvertUpCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={ConvertLowerCase}
      >
        ConvertLowerCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-secondary mx-1 my-1"
        onClick={capitalize}
      >
        ConvertCapitalize
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-dark mx-1 my-1"
        onClick={SentanceCase}
      >
        SentanceCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-info mx-1 my-1"
        onClick={ClearText}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-warning mx-1 my-1"
        onClick={handleonCopy}
      >
        Copy text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-success mx-1 my-1"
        onClick={handleonExtraSpace}
      >
        Remove Extra Space
      </button>
      {/* <button className="btn btn-success mx-1 "
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            onClick={() =>  navigator.clipboard.writeText(text)}>Copy to clipboard 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </button> */}

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="my-4">Your Text Sammary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} character
        </p>
        <p>
          {0.08 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2 className="my-4">Preview</h2>
        <p>{text.length > 0 ? text : "Enter the your text to Preview it"}</p>
      </div>
    </>
  );
}
