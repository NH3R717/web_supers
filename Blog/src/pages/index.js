import React from "react"
import Layout from "/src/shared/components/Layout.js"

const index = () => {
  return (
    <Layout>
      <section
        style={{
          fontFamily: "Comfortaa",
          height: "200px",
          margin: "15% 0",
        }}
      >
        <h1 style={{ color: "red" }}>Blog Page – Home</h1>
        {/* <h3 style={{ color: "red" }}>"Coming Soon (maybe)"</h3> */}
      </section>
    </Layout>
  )
}

export default index
