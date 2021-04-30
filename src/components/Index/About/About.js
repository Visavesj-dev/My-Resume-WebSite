import React from "react"
import { Link } from "gatsby"
import man from "../../../components/App/assets/images/man.png"
import styles from "./About.module.css"

const About = () => {
  return (
    <div
      id="about"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <div className={styles.boxText}>
        <div className={styles.box}>
          <div>
            <img src={man} className={styles.images}></img>
          </div>

          <div className={styles.partition}>
            <p className={styles.name1}>Gesundheit ganzheitlich betrachten</p>
            <p className={styles.name2}>Dr. med. Hans-Joachim Petersohn</p>
            <p className={styles.paragraph}>
              Wir haben Dr. med. Hans-Joachim Petersohn für euch interviewt. Er
              ist Leiter des Gesundheitsinstitus „
              <Link style={{ color: "#bea856", textDecoration: "underline" }}>
                Salutomed
              </Link>
              “ und verfolgt den Ansatz einer ganzheitlichen Therapie: Statt nur
              Symptome zu behandeln, möchte er die Ursachen von gesundheitlichen
              Beschwerden ergründen. Die Ernährung spielt hier oft eine
              entscheidene Rolle. Ergänzend hat Dr. med. Petersohn &nbsp;
              <Link style={{ color: "#bea856", textDecoration: "underline" }}>
                Vitalstoffpräparate{" "}
              </Link>{" "}
              entwickelt, die der Körper nicht immer im ausreichenden Maße über
              die Ernährung aufnimmt.{" "}
              <Link style={{ color: "#bea856", textDecoration: "underline" }}>
                {" "}
                Welche das sind, lest ihr im Interview >
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
