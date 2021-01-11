import React from 'react'
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    HomeRounded,
    SchoolRounded,
    WorkRounded,
    LinkedIn,
    GitHub,
    Telegram,
} from "@material-ui/icons";
import { Link, NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";

const Header = (props) => {
    const pathName = props?.location?.pathname


    return (
        <Navbar expands="lg" sticky="top" className="header">
            {/* Home Link */}
            <Nav.Link as={NavLink} to="/">
                <Navbar.Brand className="header-home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

              <Navbar.Toggle />
              
              
              <Navbar.Collapse>
                  <Nav>
                  {/* Resume Link */}
                      <Nav.Link
                      as={NavLink}
                      to="/"
                      className={pathName == "/" ? "header-link-active" : "header-link"}>
                      Resume
                      </Nav.Link>

                {/* Portfolio Link */}
                      <Nav.Link
                      as={NavLink}
                      to="/portfolio"
                      className={pathName == "/portfolio" ? "header-link-active" : "header-link"}>
                      Portfolio
                      </Nav.Link>
                  </Nav>

                  <div className="header-right">
                      {Object.keys(resumeData.socials).map(key => (
                          <a href={resumeData.socials[key].link} target="_blank">
                            {resumeData.socials[key].icon}
                          </a>
                      ))}
                      <CustomButton text={"Hire me!"} icon={<Telegram />} />
                  </div>
              </Navbar.Collapse>
        </Navbar> 
    )
}

export default withRouter(Header);
