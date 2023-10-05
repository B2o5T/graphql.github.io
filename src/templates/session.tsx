import React, { FC } from "react"
import FooterConf from "../components/Conf/Footer"
import HeaderConf from "../components/Conf/Header"
import LayoutConf from "../components/Conf/Layout"
import SeoConf from "../components/Conf/Seo"
import { PageProps } from "gatsby"
import SessionList, {
  ScheduleSession,
} from "../components/Conf/Schedule/session-list"

const SessionsTemplate: FC<PageProps<{}, { schedule: ScheduleSession[] }>> = ({
  pageContext: { schedule },
}) => {
  return (
    <LayoutConf>
      <HeaderConf className="shadow-none" />

      <div className="bg-[#F4F6F8]">
        <div className="container">
          <SessionList scheduleData={schedule} />
        </div>
      </div>
      <FooterConf includePartners={false} includeSponors={false} />
    </LayoutConf>
  )
}

export function Head() {
  return <SeoConf title="GraphQLConf 2023 Sessions" />
}

export default SessionsTemplate
