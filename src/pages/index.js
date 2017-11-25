import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css';
import myFace from './me.jpg';
import Portfolio from '../components/PortfolioCard';

const IndexPage = () => (
  <div style={{display: 'flex', flexDirection: 'column', padding: '50px', height: '100%'}}>
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <img style={{height: '100px', borderRadius: '50%'}} src={myFace} />
      <div className={styles.introTitle}>
        <h1>Pranav Ram</h1>
        <p className={styles.introDetail}>Software Engineer specializing in <span className={styles.emphasis}>Data Visualization</span></p>
      </div>      
    </div>
    <hr style={{margin: '16px'}} />
    <div>
      <h2 style={{paddingLeft: 16}}>Work</h2>
      <div className="row">
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
      </div>
    </div>
    <hr style={{margin: '16px'}} />
    <div>
      <h2 style={{paddingLeft: 16}}>Most Recent Blog Posts</h2>
      <div className="row">
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
        <div className="column">
          <Portfolio />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
