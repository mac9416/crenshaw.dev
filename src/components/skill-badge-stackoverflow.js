import React from "react"
import StackOverflowIcon from "./icons/stackoverflow";
import SkillBadge from "./skill-badge"

const SkillBadgeStackoverflow = (props) => 
  <SkillBadge 
    icon={<StackOverflowIcon />}
    href={`https://stackoverflow.com/search?tab=votes&q=user:684776+[${encodeURIComponent(props.tag)}]+is:answer`} 
    title={`My ${props.tag} answers on StackOverflow`}
  >
    {props.score} answer score
  </SkillBadge>

export default SkillBadgeStackoverflow