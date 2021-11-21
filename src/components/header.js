import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f3f3f3`,
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div class="row">
        <div class="col-12 col-md-3 align-self-center">
          <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <StaticImage
                  src="../images/mckenna-schaller-2021-logo.png"
                  width={200}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Logo"
                />
          </Link>
      </div>
      <div class="col-12 col-md-9">
        <ul className="nav justify-content-end align-items-center">
          <li className="nav-item m-3">
            <Link to="/projects/" className="btn btn-secondary">projects</Link> 
          </li>
          <li className="nav-item m-3">
            <Link to="/contact/" className="btn btn-secondary">contact</Link>
          </li>
        </ul>
    </div>
  </div>

      

        

        </div>
      </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
