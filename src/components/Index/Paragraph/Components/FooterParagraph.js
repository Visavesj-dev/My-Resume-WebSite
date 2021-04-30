import React from "react"
import styles from "./FooterParagraph.module.css"

export default function FooterParagraph() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.textHeader}>
          Entdecke jetzt deine Nahrungsmittelunverträglichkeiten!
        </div>
        <div className={styles.textSubtitle}>
          Nur 5 Minuten zu deinem individuellen Ergebnis
        </div>
        <button className={styles.btn}>Für Quick Check registrieren</button>
      </div>
    </div>
  )
}
