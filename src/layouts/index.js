import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div style={{backgroundColor: '#f2f2f2', height: '100%'}}>
    <Helmet
      title="Pranav Ram - Software Craftsman & Data Visualizer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'Developer, Data Visualization' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
