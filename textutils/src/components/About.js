import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <>
      <div
        className="container font"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1
          className="my-3 ml-2"
          style={{
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        >
          About Us
        </h1>
        <p className="lead small">
          <b className="bold"> TextUtils </b>is a ReactJs website built
          primarily to do various operations on regular typed text. You can
          safely use WordPad or NotePad for text drafting, and saving, but
          TextUtils offers much more than simple text drafting and formatting.
          TextUtils can convert your text to any case in just one simple click
          of a button. It can extract links and numbers safely from a labyrinth
          of random text or sophisticated documentation. It has an improved
          property of base64 encoding, reversal of your inputted text.You can
          even remove whitespaces from your scripted documents, and wear up your
          earphones to listen to it, instead of straining your eyes! It does a
          detailed analyzing of your text, and provides an output of words, and
          characters, along with reading time as well. The best part of
          TextUtils is that it is an open source project, as a result, dozens of
          new features are in the upcoming, which definitely makes it a cut
          above the rest. The most eminent features of the website are as
          follows :
        </p>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" style={mystyle}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <strong> Analyze Your Text </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                It is a Simple Text Analyzer , which mutilates your text, but in
                a tender way
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" style={mystyle}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                <strong> Free to use </strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                It is completely free to use. No credit cards required. Use as
                much as you want!!
              </div>
            </div>
          </div>
          <div className="accordion-item mb-5">
            <h2 className="accordion-header" style={mystyle}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                It is compatible with all of your favorite browsers. Made with
                ❤️ by Taufeek.
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        className=" text-center py-3  mb-1 "
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#0c3e66" : "#00000020",
          borderRadius: "10px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p> 2023-24 . All rights reserved.</p>
              <p>Made 🖤 by Taufeek 🖤</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
