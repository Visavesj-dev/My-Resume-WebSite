import React from "react"
import { useRecoilState } from "recoil"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { sModalState } from "../../../utils/recoil-atoms"
import styles from "./Navbar.module.css"
import logo from "../../../components/App/assets/images/logo.png"

const Navbar = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [sidebarModal, setSidebarModal] = useRecoilState(sModalState)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const toggleModal = () => {
    setSidebarModal(!sidebarModal)
    // console.log(sidebarModal)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  })

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  const mystyle = {
    marginTop: "40px",
    fontFamily: "Roboto, system-ui",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "28px",
    color: "rgba(0, 0, 0, 0.3)",
    padding: "0px 15px",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
  }
  return (
    <React.Fragment>
      <nav
        id="navbar"
        className="navbar navbar-expand-xl navbar-light fixed-top"
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "250px", height: "80.95px", marginTop: "15px" }}
            />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div
            className={classOne}
            id="navbarSupportedContent"
            style={{ marginTop: "50px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  // className="nav-link"
                  className={styles.navLinkMenu}
                  href="#home"
                >
                  <span className={styles.startFont}>Start</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  // className="nav-link"
                  className={styles.navLinkMenu}
                  href="#home"
                >
                  Über arbotena
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className={styles.navLinkMenu}
                  href="#about"
                >
                  Shop
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className={styles.navLinkMenu}
                  href="#portfolio"
                >
                  Blog
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className={styles.navLinkMenu}
                  href="#portfolio"
                >
                  Video
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className={styles.navLinkMenu}
                  href="#portfolio"
                >
                  FAQs
                </AnchorLink>
              </li>
              |
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className={styles.navLinkMenu}
                  href="#portfolio"
                >
                  Einloggen
                </AnchorLink>
              </li>
            </ul>

            <div style={{ marginTop: "-20px" }}>
              <i></i>
              <button className={styles.buttonRegisteren}>Registrieren</button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
