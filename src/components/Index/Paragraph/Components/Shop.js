import React from "react"
import styles from "./Shop.module.css"
import item1 from "../../../App/assets/images/1.png"
import item2 from "../../../App/assets/images/2.png"
import item3 from "../../../App/assets/images/3.png"

const data = [
  {
    name: "Wild Blueberry Direktsaft",
    subname: "13,95 € inkl. MwSt.",
    img: item1,
  },
  {
    name: "Empfehlung in Zeiten von Virus-Belastungen",
    subname: "185,67 € inkl. MwSt.",
    img: item2,
  },
  {
    name: "Dr. Budwig Omega-3 Leinöl 250 ml Flasche",
    subname: "11,95 € inkl. MwSt.",
    img: item3,
  },
]

export default function Shop() {
  return (
    <div style={{ paddingTop: "110px" }}>
      <h2 className={styles.textheader}>arbotena Shop</h2>
      <div style={{ textAlign: "center" }}>
        <a
          href="http://shop.arbotena.de/"
          target="_blank"
          className={styles.link}
        >
          Zum Shop
        </a>
      </div>
      <div className={styles.shopContainer}>
        {data.map(item => {
          return (
            <a
              href="https://shop.arbotena.de/products/wild-blueberry-direktsaft"
              target="_blank"
              className={styles.linkShop1}
            >
              <div className={styles.itemContainer}>
                <img className={styles.img} src={item.img}></img>
              </div>
              <p className={styles.itemTitle}>{item.name}</p>
              <p className={styles.itemSubtitle}>{item.subname}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}
