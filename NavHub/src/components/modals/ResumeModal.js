import React from "react"
import styled from "styled-components"

import {
  name,
  profession,
  jobs,
  education,
  skills,
} from "../../data/resumeData"

const ResumeContent = () => {
  return (
    <Wrapper>
      <section>
        <article>
          <div>
            <h1>{name}</h1>
            <h1>{profession}</h1>
          </div>
          <div>
            {jobs.map(resumeJobs => {
              const { id, title, company, date, description } = resumeJobs
              return (
                <article key={id}>
                  <h1>{title}</h1>
                  <h2>{company}</h2>
                  <h2>{date}</h2>
                  <p>{description}</p>
                </article>
              )
            })}
          </div>
        </article>

        <div className="skills">
          <aside>
            {skills.map(skill => {
              return <li>{skill}</li>
            })}
          </aside>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  section {
    font-family: "Hind";
    /* font-family: "Comfortaa"; */
    display: flex;
  }
  div,
  span {
  }
  .skills {
    float: "right";
  }
`

export default ResumeContent
