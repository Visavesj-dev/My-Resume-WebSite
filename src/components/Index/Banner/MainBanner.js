import React, { useState } from "react"
import bg from "../../../components/App/assets/images/bg.png"
import styles from "./MainBanner.module.css"
import ModalVideo from "react-modal-video"

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div
      id="home"
      className="banner-area border-bottom"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="EvUfoK3qjKw"
        onClose={() => setOpen(false)}
      />

      <div className={styles.table}>
        <div>
          <div className="container">
            <div>
              <h1 className={styles.bigTitle}>
                Welche Nahrungsmittel verträgst du nicht? Wir helfen dir dabei,
                es rauszufinden.
              </h1>
              <p className={styles.smallTitle}>
                Erfahre hier mit dem digitalen Schnelltest, welche Lebensmittel
                du künftig meiden solltest und mit welchen Alternativen dein
                Speiseplan abwechslungsreich bleibt
              </p>

              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-12">
                  <button className={styles.btn}>
                    Für Quick Check registrieren
                  </button>
                </div>
                <div className="col-sm-12 col-lg-6  col-md-12">
                  <button className={styles.btn2} onClick={() => setOpen(true)}>
                    arbotena Video-Anleitung
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
