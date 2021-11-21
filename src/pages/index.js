import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>hi people</h1>
    <p>create a more beautiful world</p>
    <StaticImage
      src="../images/mckenna-schaller-2021-logo.png"
      width={300}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Logo"
      style={{ marginBottom: `1.25rem` }}
    />
  </Layout>
)

export default IndexPage
