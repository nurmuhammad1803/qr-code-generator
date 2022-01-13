import React from "react";
import "./styles/styles.css";
import Gif from './images/gif-qr.gif'
import Github from "./images/github.png";
import { useState, useEffect } from "react";
const Main = () => {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [bgColor, setBgColor] = useState("#fff");

  useEffect(() => {
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}&bgcolor=${bgColor}`
    );
  }, [word, bgColor]);

  //   function keydown() {
  //     document.querySelector("input").addEventListener("keydown", function (e) {
  //       if (e.keyCode == 13) {
  //         alert("Enter");
  //       } else {
  //       }
  //     });
  //   }

  function handleGenerate() {
    setWord(temp);
  }
  function generate(e) {
    handleGenerate();
    this.setTemp(e.target.value);
  }
  return (
    <section className="header">
      {/* <div className="inputSec">
        <input
          type="text"
          placeholder="Enter link"
          className="placeInput"
          onChange={(e) => {
            setTemp(e.target.value);
          }}
          // onChange={generate}
        />
      </div>
      <div className="output">
        <img src={qrCode} alt="QRCODE image" />
      </div>
      <div className="buttonArea">
        <button onClick={handleGenerate} className="generateBtn">
          Generate
        </button>
        <a href={qrCode} download="QrCode">
          <button className="download-btn" type="button">
            Download
          </button>
        </a>
        <input
          type="color"
          onChange={(e) => {
            setBgColor(e.target.value.substring(1));
          }}
        />
      </div> */}

      <div className="container">
        <nav>
          <a className="logo" href="https://github.com/nurmuhammad1803">@nurmuhammad1803</a>
          <div className="github">
            <a className="github__link" href="github.com/nurmuhammad1803">
              <span>Github</span><img src={Github} />{" "}
            </a>
          </div>
        </nav>
        <div className="header__content df ais jcsb">
          <div className="generation__text df fdrc">
            <h1 className="title">BEPUL QR CODE GENERATOR</h1>
            <div className="generation__inputs df aic jcsb">
              <div className="input__link df aic">
                LINK
                <input
                  type="text"
                  placeholder="Kiriting..."
                  className="place-input"
                  onChange={(e) => {
                    setTemp(e.target.value);
                  }}
                />
              </div>
              <button onClick={handleGenerate} className="generateBtn">
                Generate
              </button>
            </div>
          </div>
          <div className="generation__code">
            <div className="scan__me df fdrc jcc aic">
              <img src={qrCode} alt="QRCODE image" />
              <h2> SCAN ME</h2>
            </div>
            <a href={qrCode} download="qrCode">
              <button className="download-btn" type="button">
                Download
              </button>
            </a>
          </div>
        </div>
        <h2 className="footer">@NURMUHAMMAD_DEV | 2022</h2>
      </div>
    </section>
  );
};
export default Main;
