import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div id="about" className="about-area border-bottom ptb-100">
      <div className="common-right-text">
        <span>ABOUT</span>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="section-title">
            <span className="sub-title">ABOUT ME</span>
            <h2>
              I Am A Software Engineer, Specialized In Website Based Design &
              Development
            </h2>
            <p>
              Full-stack Web Development | Mobile Applications Development |
              Automated System Admin
            </p>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="left">
                <ul>
                  <li>
                    <span>Age:</span> 23 Years
                  </li>
                  <li>
                    <span>Residence:</span> Chiang Mai
                  </li>
                  <li>
                    <span>Address:</span>
                    <Link to="#">323 T.Papai A.Sansai</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-6">
              <div className="right">
                <ul>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+00932123456">+099 979 9594</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:hello@reton.com">
                      visavesj.chiangsan@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>Website:</span>
                    <Link to="#">www.visavesj.info</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
