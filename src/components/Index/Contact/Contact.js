import React from "react"
import styles from "./contact.module.css"
import lo from "../../../components/App/assets/images/lo.png"

export default function Contact() {
  return (
    <div className={styles.contect}>
      <img className={styles.img} src={lo}></img>
      <form>
        <div className={styles.textHeader}>
          <h3 className={styles.text}>
            Abonniere unseren Newsletter für wöchentliche Gesundheitstipps
          </h3>
        </div>
        <div className={styles.form}>
          <div className={styles.formMini}>
            <input
              name="email"
              type="email"
              id="email-field"
              placeholder="Deine E-Mail-Adresse"
              className={styles.input}
            />
          </div>
          <button className={styles.btn}> Abonnieren</button>
        </div>
      </form>
    </div>
  )
}
