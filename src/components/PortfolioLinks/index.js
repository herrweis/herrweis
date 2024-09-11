import React, { Component } from "react"
import { Link } from "gatsby"

class PortfolioLinks extends Component {

  constructor(props) {
    super(props);
  }

  render () {

    return (
        <nav className="other-work">
            <ul>
                <li>
                    <Link to="/portfolio/design-practice">Strategy and implementation of a Digital Design Practice</Link>
                </li>
                <li>
                    <Link to="/portfolio/ben-internet-banking">Evolving Bendigo Bank’s internet banking app</Link>
                </li>
                <li>
                    <Link to="/portfolio/up-navigation">Creating a navigation for a new bank (under construction)</Link>
                </li>
                <li>
                    <Link to="/portfolio/ben-digital-brand">Pushing a valuable brand digitally (under construction)</Link>
                </li>
                <li>
                    <Link to="/portfolio/product-strategy">Product strategy and a roadmap for internet banking</Link>
                </li>
            </ul>
        </nav>
    )

  }
}

export default PortfolioLinks
