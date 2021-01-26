// import React from "react";
import React, { Component } from 'react';
import {Link } from "react-router-dom";
import "./Subnavigation.css"


function Subnavigation() {
    return (
        <div className="layout">
          <input name="nav" type="radio" className="nav first" id="first" defaultChecked="checked" />
          <div className="page first">
            <div className="page-contents">
            </div>
          </div>
          {/* htmlFor="first" 을 통해 해당 id jsx코드로 이동 -> 필요한 기능 연결하면 됨 */}
          <label className="nav" htmlFor="first">
            <span>
              First
            </span>
          </label>

          <input name="nav" type="radio" className="nav second" id="second" />
          <div className="page second">
            <div className="page-contents">
            </div>
          </div>

          <label className="nav" htmlFor="second">
            <span>
              Second
            </span>
          </label>

          <input name="nav" type="radio" className="nav third" id="third" />
          <div className="page third">
            <div className="page-contents">
            </div>
          </div>

          <label className="nav" htmlFor="third">  
            <span>
              Third
            </span>
          </label>

        </div>
    );
  }

  export default Subnavigation;
