import React from "react"
import { ShowLayout } from "../../components"

import { kreislauf } from "../../data/trilogy"

const { title, location, date, bodyText } = kreislauf

export default () => (
  <ShowLayout
    title={title}
    location={location}
    date={date}
    bodyText={bodyText}
  />
)
