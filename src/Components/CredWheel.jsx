import React, { useState } from "react";

export default function CredWheel() {
  const [rotate, setRotate] = useState(false);
  const [angle, setAngle] = useState(0);

  const clickHandler = () => {
    try {
      if (!rotate) {
        setRotate(true);
        setTimeout(() => {
          setAngle(Math.floor(Math.random() * 361));
          setRotate(false);
        }, 3000);
      }
    } catch (e) {
      console.log("error in clickhandler");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          textAlign: "center",
          font: "32px sans-serif",
          fontWeight: "800",
        }}
      >
        Cred Wheel
      </header>
      <div className='App'>
        <div className='classWheel'>
          <div
            className='secondOuterCircle'
            style={{
              animation: rotate ? "rotatePie 0.6s linear infinite" : "unset",
              transform: `rotate(${angle}deg)`,
            }}
          >
            <span className='red'>Red</span>
            <span className='green'>Green</span>
            <span className='blue'>Blue</span>
            <span className='yellow'>Yellow</span>
          </div>
          <div className='innerCircle'>
            <div className='innerArrow'></div>
          </div>
        </div>
      </div>
      <div className='buttonContainer'>
        <button
          style={{
            height: "70px",
            width: "150px",
            borderRadius: "10px",
            fontSize: "30px",
            backgroundColor: "blue",
            color: "white",
          }}
          onClick={clickHandler}
        >
          SPIN
        </button>
      </div>
    </div>
  );
}
