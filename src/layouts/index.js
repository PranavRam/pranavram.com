import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import myFace from '../pages/me.jpg';
import styles from '../pages/index.module.css';

import GoMail from 'react-icons/lib/go/mail';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

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
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '16px 32px 0'}}>
        <div style={{padding: 16, textTransform: 'uppercase', fontWeight: 'bolid', borderBottom: 'solid'}}>Home</div>
        <div style={{padding: 16, textTransform: 'uppercase', fontWeight: 'bolid', borderBottom: 'solid'}}>Blog</div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <img style={{height: '100px', borderRadius: '50%'}} src={myFace} />
        <div className={styles.introTitle}>
          <h1>Pranav Ram</h1>
          <p className={styles.introDetail}>Software Engineer specializing in <span className={styles.emphasis}>Data Visualization</span></p>          
        </div> 
        <div>
          <a
            href="mailto:pranav.ram7@gmail.com"
            style={{ textDecoration: `none`, color: `inherit` }}
          ><GoMail size={30} /></a> pranav.ram7 at gmail.com
        </div>
        <div style={{marginTop: 16}}>
          <a
            href="https://github.com/PranavRam"
            target="_blank"
            style={{ textDecoration: `none`, color: `inherit` }}>
            <GoMarkGithub size={30} /> 
            </a> PranavRam
        </div>        
      </div>
      <hr style={{margin: '16px'}} />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
