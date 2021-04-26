import React from "react"
import htmlimg from "../App/assets/images/html1.jpeg"
import react from "../App/assets/images/react.png"
import vue from "../App/assets/images/vue.png"
import mssql from "../App/assets/images/mssql.jpeg"
import jenkins from "../App/assets/images/jenkins.png"
import docker from "../App/assets/images/docker.png"
import laravel from "../App/assets/images/laravel.png"
import nginx from "../App/assets/images/nginx.png"
import { Link } from "gatsby"

const WhatIDo = () => {
  return (
    <div className="what-area border-bottom pt-100 pb-70">
      <div className="common-right-text">
        <span>SERVICE</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">WHAT I DO</span>
          <h2>Here Are My All Skills</h2>
          <p>
            Agile Project Management | Custom Web and Mobile Applications | Web
            Solutions | Database Programming | Automated System | Networking
            Devices and Tools | Software Development Lifecycle (SDLC)
          </p>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={htmlimg}
                alt="htmlimg"
                style={{ width: "180px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>Html Javascript CSS</div>
              </h3>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={react}
                alt="htmlimg"
                style={{ width: "100px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>React JS & React Native</div>
              </h3>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={vue}
                alt="htmlimg"
                style={{ width: "100px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>Vue JS</div>
              </h3>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={jenkins}
                alt="htmlimg"
                style={{ width: "100px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>Jenkins</div>
              </h3>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={docker}
                alt="htmlimg"
                style={{ width: "100px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>Docker</div>
              </h3>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={laravel}
                alt="htmlimg"
                style={{ width: "150px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>Laravel</div>
              </h3>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={nginx}
                alt="htmlimg"
                style={{ width: "100px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>Nginx</div>
              </h3>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <img
                src={mssql}
                alt="htmlimg"
                style={{ width: "150px", height: "95px" }}
              />
              <h3 style={{ marginTop: "5px" }}>
                <div>SQL Server</div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
