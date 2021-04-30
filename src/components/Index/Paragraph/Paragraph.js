import React from "react"
import { Link } from "gatsby"
import styles from "./Paragraph.module.css"
import tech from "../../../components/App/assets/images/tech.png"
import phone from "../../../components/App/assets/images/phone.png"
import Shop from "./Components/Shop"
import Carousel from "./Components/Carousels"
import FooterParagraph from "./Components/FooterParagraph"

const MyExperience = () => {
  return (
    <div>
      <div className={styles.fullContainer}>
        <div className={styles.container}>
          <div className={styles.textLeft}>
            <div className={styles.headerText}>
              Habe ich eine <span>Nahrungsmittelunverträglichkeit</span>?
            </div>
            <div className={styles.subText}>Was kann ich dagegen tun?</div>

            <div className={styles.paragraph}>
              Magen-Darm-Beschwerden, Kopfschmerzen, Hautprobleme? Dahinter kann
              die Ernährung – und eine{" "}
              <Link style={{ color: "#bea856", textDecoration: "underline" }}>
                Nahrungsmittelunverträglichkeit{" "}
              </Link>{" "}
              – stecken. Mit{" "}
              <Link style={{ color: "#bea856", textDecoration: "underline" }}>
                arbotena, dem digitalen Schnell-Test
              </Link>
              , kannst du prüfen, ob das vielleicht auch bei dir der Fall ist.
              Der arbotena-Test analysiert datenbasiert Symptome von Menschen
              und kann dadurch Rückschlüsse auf Unverträglichkeiten von
              Nahrungsmitteln ziehen. Das Ganze funktioniert mithilfe eines
              digitalen Anamnesebogens. Innerhalb von wenigen Minuten erhältst
              du dein persönliches Ergebnis.
            </div>
          </div>
          <img src={tech} className={styles.img}></img>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.imgPhoneContainer}>
          <img className={styles.imgPhone} src={phone}></img>
        </div>
        <div className={styles.space}></div>
        <div className={styles.textPhoneContainer}>
          <div className={styles.textPhoneHeader}>
            Der arbotena Test - so funktioniert’s
          </div>
          <div className={styles.textPhoneChoice1Container}>
            <div className={styles.choice1}>1</div>
            <h1 className={styles.textChoice1}>
              Registriere dich auf arbotena.de
            </h1>
          </div>
          <div className={styles.textPhoneChoice1Container}>
            <div className={styles.choice1}>2</div>
            <h1 className={styles.textChoice1}>Logge dich ein</h1>
          </div>
          <div className={styles.textPhoneChoice1Container}>
            <div className={styles.choice1}>3</div>
            <h1 className={styles.textChoice1}>
              Starte jetzt deinen arbotena Test
            </h1>
          </div>
          <div className={styles.textPhoneChoice1Container}>
            <div className={styles.choice1}>4</div>
            <h1 className={styles.textChoice1}>
              Bezahle einmalig 49,99€ inkl. MwSt über PayPal, Sofortüberweisung
              oder Kreditkarte
            </h1>
          </div>
          <div className={styles.textPhoneChoice1Container}>
            <div className={styles.choice1}>5</div>
            <h1 className={styles.textChoice1}>
              Erhalte deine persönliche Auswertung
            </h1>
          </div>
          <button className={styles.btnPhone}>
            {" "}
            arbotena Test Schritt-für-Schritt
          </button>
        </div>
      </div>

      <Shop />
      <Carousel />
      <FooterParagraph />
    </div>
  )
}

export default MyExperience
