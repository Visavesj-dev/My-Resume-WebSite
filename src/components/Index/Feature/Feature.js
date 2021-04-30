import React from "react"
import { Link } from "gatsby"
import styles from "./Feature.module.css"
import video from "../../../components/App/assets/images/app.mp4"
import HoverVideoPlayer from "react-hover-video-player"

const WhatIDo = () => {
  return (
    <div className="what-area pb-20">
      <div className="section-title">
        <h2 className={styles.text1}>Unsere Lösungen für dein Wohlbefinden</h2>
        <div className={styles.container} style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-md-12">
              <div
                style={{
                  height: "310px",
                  boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.116",
                }}
              >
                <div className={styles.cardHorizontal}>
                  <div>
                    <HoverVideoPlayer
                      videoSrc={video}
                      className={styles.video1}
                    />
                  </div>
                  <div className={styles.bodyCard}>
                    <h1 className={styles.title}>
                      Individuelle Ernährungsempfehlungen für dich
                    </h1>
                    <h1 className={styles.subTitle}>arbotena Test</h1>
                    <h3 className={styles.description}>
                      Spare dir teure wie zeitaufwendige Bluttests. In nur fünf
                      Minuten zum Ergebnis. Auch Alternativen für deinen
                      Speiseplan werden dir angezeigt.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-6 col-md-12">
              <div
                style={{
                  height: "310px",
                  boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.116",
                }}
              >
                <div className={styles.cardHorizontal}>
                  <div>
                    <HoverVideoPlayer
                      videoSrc={video}
                      className={styles.video1}
                    />
                  </div>
                  <div className={styles.bodyCard}>
                    <h1 className={styles.title}>
                      Produktcheck auf Nahrungsmittelunverträglichkeiten
                    </h1>
                    <h1 className={styles.subTitle}>arbotena Test</h1>
                    <h3 className={styles.description}>
                      Dein arbotena Assistent erleichtert deine
                      Ernährungsumstellung dank automatisierter Texterkennung.
                    </h3>

                    <button className={styles.btn}>
                      Beta-Version jetzt testen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
