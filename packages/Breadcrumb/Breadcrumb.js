import React from 'react'

const Breadcrumb = ({ breadcrumbs }) => {
  return <div dangerouslySetInnerHTML={{ __html: breadcrumbs }} />
}

export { Breadcrumb }
