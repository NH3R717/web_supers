import React from "react"
import styled from "styled-components"

const Less = () => {
  return (
    <Wrapper>
      <div class="flex-container">
        <section className="flex1">1</section>
        <section className="flex1">2</section>
        <section className="flex1">3</section>
        <section className="flex1">4</section>
        <section className="flex1">5</section>
        <section className="flex1">6</section>
        <section className="flex1">7</section>
        <section className="flex1">8</section>
      </div>

      <div class="grid-container">
        <section class="item1 grid1">Header</section>
        <section class="item2 grid1">Menu</section>
        <section class="item3 grid1">Main</section>
        <section class="item4 grid1">Right</section>
        <section class="item5 grid1">Footer</section>
        <section class="item6 grid1">Rocks</section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* add vars */
  .flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: #a0deb1;
  }

  .flex-container .flex1 {
    background-color: #fbcd5c;
    width: 40em;
    margin: 0.2em;
    text-align: center;
    line-height: 1.5em;
    font-size: 2em;
  }

  .item1 {
    grid-area: header;
  }
  .item2 {
    grid-area: menu;
  }
  .item3 {
    grid-area: main;
  }
  .item4 {
    grid-area: right;
  }
  .item5 {
    grid-area: footer;
  }
  .item6 {
    grid-area: rocks;
  }

  .grid-container {
    display: grid;
    /* grid 4 x 8 */
    grid-template-areas:
      "header header header header header header header header"
      "menu main main main main main right right"
      "menu footer footer footer footer footer footer footer"
      "rocks rocks rocks rocks rocks rocks rocks rocks";
    grid-gap: 10px;
    background-color: #a0deb1;
    padding: 10px;
    margin-top: 2em;
  }

  .grid-container .grid1 {
    background-color: #fbcd5c;
    text-align: center;

    padding: 20px 0;
    font-size: 30px;
  }
`

export default Less
