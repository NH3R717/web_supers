import React from "react"
import styled from "styled-components"
import { colors } from "../../../src_shared/constants/variables"

import {
  name,
  profession,
  location,
  about,
  jobs,
  educations,
  skills,
} from "../data/resumeData"

const ResumeContent = () => {
  return (
    <Wrapper>
      <main>
        <section>
          <article id="about">
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <h2>{location}</h2>
            <h3>{about}</h3>
          </article>

          <div>
            <h1>Experience</h1>
            {jobs.map(job => {
              const {
                id,
                title,
                company,
                date,
                location,
                description,
                points,
              } = job
              return (
                <article key={id}>
                  <h2>{title}</h2>
                  <h3>{company}</h3>
                  <h3>{date}</h3>
                  <h3>{location}</h3>
                  <p>{description}</p>
                  {points.map(point => {
                    return <li>{point}</li>
                  })}
                </article>
              )
            })}
          </div>

          <div id="education">
            <h1>Education</h1>
            {educations.map(education => {
              const { id, school, degree, major, graduated, descriptions } =
                education
              return (
                <article key={id}>
                  <h2>{school}</h2>
                  <h3>{degree}</h3>
                  <h3>{major}</h3>
                  <h3>{graduated}</h3>
                  {/* {descriptions.map(description => {
                    return <li>{description}</li>
                  })} */}
                </article>
              )
            })}
          </div>

          <div>
            <h1>Skills</h1>
            <article id="skill-container">
              {skills.map(skill => {
                return <li id="skills-item">{skill}</li>
              })}
            </article>
          </div>
        </section>
      </main>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  @media all and (max-width: 400px) {
  }
  main {
    margin: 2em 1em 4em 1em;
    display: flex;
    justify-content: center;
  }
  section {
    font-family: "Hind";
    max-width: 55em;
    align-items: center;
    /* font-family: "Comfortaa"; */
    /* display: flex; */
  }
  div,
  span {
  }
  h1 {
    margin-top: 1.5em;
    font-size: 2.35em;
    color: ${colors.BrandGreyDark};
  }
  h2 {
    margin: 1.4em 0 0em 0em;
    color: ${colors.BrandGreyMid};
    font-size: 1.6em;
  }
  h3 {
    margin: 0.3em 0.2em;
    color: ${colors.BrandGreyLight};
    font-size: 1.2em;
  }
  p {
    font-size: 1.2em;
    color: ${colors.BrandGreyDarker};
  }
  li {
    /* color: ${colors.BrandNotBlack}; */
    color: ${colors.IconOrange};
    list-style: none;
    font-size: 1.2em;
  }
  #about {
    margin-bottom: -0em;
    color: ${colors.BrandGreyMid};
  }
  #education {
    h3 {
      color: ${colors.IconOrange};
    }
  }
  #skill-container {
    margin-bottom: 2em;
    display: flex;
    flex-wrap: wrap;
    /* max-width: 600px; */
    justify-content: space-around;
  }
  #skills-item {
    /* align-items: center; */
    /* overflow: visible; */
    margin: 0.2em;
    padding: 0.4em;
    font-size: 1.3em;
    background-color: rgba(160, 222, 177, 0.13);
  }
`

export { ResumeContent }
