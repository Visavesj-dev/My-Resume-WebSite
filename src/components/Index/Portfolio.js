import React from "react"
import { Link } from "gatsby"
import portfolio1img from "../../components/App/assets/images/portfolio/1.png"
import portfolio2img from "../../components/App/assets/images/portfolio/2.png"
import portfolio3img from "../../components/App/assets/images/portfolio/3.png"

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-area border-bottom ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">PORTFOLIO</span>
          <h2>See My Works Which Will Amaze You</h2>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-12">
            <div className="portfolio-item">
              <div className="top">
                <img src={portfolio1img} alt="Portfolio" />
              </div>
              <div className="bottom">
                <div className="bottom-one">
                  <h3>DHouse Operation System</h3>
                  <span>Websute DESIGN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-12">
            <div className="portfolio-item">
              <div className="top">
                <img src={portfolio2img} alt="Portfolio" />
              </div>
              <div className="bottom">
                <div className="bottom-one">
                  <h3>DHouse Website</h3>
                  <span>Website DESIGN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-12">
            <div className="portfolio-item">
              <div className="top">
                <img src={portfolio3img} alt="Portfolio" />
              </div>
              <div className="bottom">
                <div className="bottom-one">
                  <h3>CPXMB Financial Application</h3>
                  <span>APP DESIGN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
