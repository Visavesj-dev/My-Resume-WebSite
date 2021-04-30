import React from "react"
import styles from "./Footer.module.css"
import so from "../../components/App/assets/images/so.png"

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerText}>
        <div className={styles.leftText}>
          <div className={styles.twoClass}>
            <button className={styles.btn}>Impressum</button>
            <button className={styles.btn}>Datenschutz</button>
            <button className={styles.btn}>Konformitätserklärung</button>
            <button className={styles.btn}>Feedback</button>
            <button className={styles.btn}>Kontakt</button>
          </div>
        </div>

        <div classNames={styles.rigthText}>
          <div className={styles.btnTitle}>
            © 2021 Arbotena GmbH. All Rights Reserved.     <img src={so}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
