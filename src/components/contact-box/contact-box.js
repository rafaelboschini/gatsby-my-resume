import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Box from "../shared/box/box"

import "./contact-box.scss"

const ContactBox = () => (
  <Box className="contact-box lightblue">
    <div className="title">Contact me</div>
    <div className="title-box__content">
      <div className="title-box__item">
        <div className="icon">
          <FontAwesomeIcon icon={["fas", "at"]} />
        </div>
        <div className="label">
          <a href="mailto:rafaelboschini@gmail.com">rafaelboschini@gmail.com</a>
        </div>
      </div>
      <div className="title-box__item">
        <div className="icon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </div>
        <div className="label">
          <a
            href="https://www.linkedin.com/in/rafael-boschini-5747311/?originalSubdomain=br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className="title-box__item">
        <div className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>
        <div className="label">
          <a
            href="https://github.com/rafaelboschini"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <div className="title-box__item">
        <div className="icon">
          <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
        </div>
        <div className="label">
          <a
            href="https://pt.stackoverflow.com/users/34573/rboschini"
            target="_blank"
            rel="noopener noreferrer"
          >
            StackOverFlow
          </a>
        </div>
      </div>
    </div>
  </Box>
)

export default ContactBox
