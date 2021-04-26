import React from "react"
import { Link } from "gatsby"

const MyExperience = () => {
  return (
    <div className="experience-area border-bottom ptb-100">
      <div className="common-right-text">
        <span>EXPERIENCE</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">MY EXPERIENCE</span>
          <h2>
            I Have <span>10</span> Months Of Experience with development skills
          </h2>
        </div>

        <div className="experience-content">
          <div className="experience-inner">
            <ul className="align-items-center">
              <li>
                <span>2020-2021</span>
              </li>
              <li>
                <span>Full Stack Developer, DHouse</span>
              </li>
              <li>
                <p>
                  - Develops systems and tools with emphasis on performance and
                  scalability <br />
                  - Maintains database schema as well as functional and
                  technical documents <br />- Participated in all aspects of a
                  project, from design and development to testing
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-content">
          <div className="experience-inner">
            <ul className="align-items-center">
              <li>
                <span>2020</span>
              </li>
              <li>
                <span>Software Engineer, SCB</span>
              </li>
              <li>
                <p>
                  - Developed a mobile app for finance within the bank <br />-
                  Developer responsible for full app life-cycle concept, design,
                  build, test, deploy and release to internal use
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyExperience
