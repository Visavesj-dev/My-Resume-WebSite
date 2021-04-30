import React from "react"
import styles from "./Carousels.module.css"
import item4 from "../../../App/assets/images/4.png"
import item11 from "../../../App/assets/images/11.png"
import item22 from "../../../App/assets/images/22.png"
import item33 from "../../../App/assets/images/33.png"
import item44 from "../../../App/assets/images/44.png"

export default function Carousels() {
  return (
    <div className={styles.carouselContainer}>
      <img
        src={item4}
        styles={{ margin: "auto", width: "91px", height: "75px" }}
      ></img>

      <div
        interval="2000"
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ width: "1100px", height: "300px", margin: "auto" }}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={item11} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={item22} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={item33} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={item44} alt="Third slide" />
          </div>
        </div>
        <div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
