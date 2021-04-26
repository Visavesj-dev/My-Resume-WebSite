import React from 'react'
import { Link } from 'gatsby'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom">
            <div className="common-right-text two">
                <span>Visavesj</span>
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Visavesj Chiangsan</h1>
                            <p>Hello I am a <span>Software Engineer</span>. I have rich experience of 5 months in web site development and 5 months in mobile development, also I am good at extraordinary development concept. I love to hear from you about your unique needs.</p>

                            {/* <div className="banner-btn-area">
                                <Link to="#" className="common-btn">
                                    Contact With Me
                                </Link>
                                <Link to="#" className="common-btn banner-btn">
                                    Hire Me
                                </Link>
                            </div>

                            <ul>
                                <li>
                                    <Link to="#">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className='bx bxl-behance'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className='bx bxl-dribbble'></i>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner