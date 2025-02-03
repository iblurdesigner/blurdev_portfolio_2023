import * as React from "react"
const JavaScript = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-brand-javascript hover:bg-amber-400"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
    <path d="M7.5 8h3v8l-2-1M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5" fill={props.fill} />
  </svg>
)
export default JavaScript
