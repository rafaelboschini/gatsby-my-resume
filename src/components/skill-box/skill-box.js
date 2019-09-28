import React from "react"

import Box from "../shared/box/box"
import ProgressBar from "../shared/progress/progress"

import "./skill-box.scss"

const dataList = [
  {
    groupName: "Technologies",
    items: [
      { title: "nodejs", percent: 40 },
      { title: "JavaScript", percent: 100 },
      { title: "TypeScript", percent: 80 },
      { title: "C#", percent: 100 },
      { title: "php", percent: 80 },
      { title: "sass / less", percent: 95 },
      { title: "Gulp", percent: 100 },
      { title: "Webpack", percent: 80 },
    ],
  },
  {
    groupName: "Frameworks",
    items: [
      { title: "Angular 7", percent: 90 },
      { title: "Leaflet", percent: 80 },
      { title: "Gatsby / React", percent: 20 },
      { title: "Bootstrap", percent: 100 },
      { title: "jQuery", percent: 100 },
      { title: "MVC Razor", percent: 95 },
      { title: "Entity Framework", percent: 95 },
    ],
  },
  {
    groupName: "Frameworks",
    items: [
      { title: "Facebook API", percent: 90 },
      { title: "Google Maps Api", percent: 100 },
      { title: "OpenStreetMaps", percent: 100 },
      { title: "VTEX - E-commerce", percent: 50 },
      { title: "PagSeguro", percent: 80 },
      { title: "ClearSale", percent: 90 },
    ],
  },
  {
    groupName: "Database",
    items: [
      { title: "SQL Server", percent: 100 },
      { title: "PostgreSQL / Postgis", percent: 100 },
      { title: "MySQL", percent: 100 },
      { title: "ElasticSearch", percent: 40 },
      { title: "NoSQL", percent: 50 },
    ],
  },
  {
    groupName: "Tests Automation",
    items: [
      { title: "Selenium", percent: 80 },
      { title: "Karma / jasmine", percent: 75 },
    ],
  },
  {
    groupName: "Frameworks",
    items: [
      { title: "Nodejs - PM2", percent: 95 },
      { title: "IIS", percent: 100 },
      { title: "jenkins", percent: 90 },
      { title: "Windows Server", percent: 95 },
      { title: "Nginx", percent: 50 },
    ],
  },
]

function SkillList() {
  var items = list =>
    list.map((item, keyItem) => {
      return (
        <li key={keyItem}>
          <div>{item.title}</div>
          <ProgressBar percent={item.percent.toString()}></ProgressBar>
        </li>
      )
    })

  return dataList.map((map, key) => {
    return (
      <div className="skill-container__box" key={key}>
        <div>{map.groupName}</div>
        <ul className="list-container">{items(map.items)}</ul>
      </div>
    )
  })
}

const SkillBox = () => (
  <Box className="skill-container white">
    <h2 className="skill-container__title">
      <span role="img" aria-label="top skills">
        🚀
      </span>{" "}
      Professional Skills
    </h2>
    <div>
      <SkillList />
    </div>
  </Box>
)

export default SkillBox
