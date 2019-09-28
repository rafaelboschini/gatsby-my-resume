import React from "react"

import SEO from "../components/shared/seo"
import Layout from "../layouts/public/layout"

import AvatarBox from "../components/avatar-box/avatar-box"
import TitleBox from "../components/title-box/title-box"
import ContactBox from "../components/contact-box/contact-box"
import SkillBox from "../components/skill-box/skill-box"
import LocationBox from "../components/location-box/location-box"

import "../styles/index.scss"

const IndexPage = () => (
  <>
    <SEO />
    <Layout>
      <div className="layout-column">
        <AvatarBox />
        <TitleBox />
        <ContactBox />
        <LocationBox />
      </div>
      <div className="layout-column">
        <SkillBox></SkillBox>
      </div>
    </Layout>
  </>
)

export default IndexPage
