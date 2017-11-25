import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css';
import myFace from './me.jpg';

import Work from '../components/Work';

const IndexPage = ({children, data}) => {
  let workData = data.allDirectory.edges
                                  .filter(d => d.node.fields && d.node.fields.work)
                                  .map(d => d.node);

  return (
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
        <Work data={workData} />
      </div>
      <hr style={{margin: '16px'}} />
      <div>
        <h4 style={{paddingLeft: 16}}>Salesforce - Global Release Operations (GRO Web)</h4>
        <div className="row">
          <div className="column">
              <a href="/static/images/gro-2.jpg"><img src="/static/images/gro-2.jpg"/></a>
              <p>Deployments:<br /> Dashboards for Salesforce Releases</p>
          </div>     
          <div className="column">
            <a href="/static/images/gro-3.JPG"><img src="/static/images/gro-3.JPG" /></a>
            <p>Investigations:<br /> Issues Raised for Various Teams at Salesforce</p>
          </div>     
          <div className="column">
            <a href="/static/images/gro-4.JPG"><img src="/static/images/gro-4.JPG" /></a>
            <p>Case Completion:<br /> Completion State of a Release <b>in</b> Time</p>
          </div>
          <div className="column">
            <a href="/static/images/gro-1.JPG"><img src="/static/images/gro-1.JPG" /></a>
            <p>Release Timeline:<br /> Completion State of a Release <b>through</b> Time</p>
          </div>
        </div>
      </div>
      <hr style={{margin: '16px'}} />
      <div>
        <h2 style={{paddingLeft: 16}}>Most Recent Blog Posts</h2>
      </div>
    </div>
  )
}

export default IndexPage;

export const query = graphql`
query HomeQuery {
      allDirectory {
          edges {
              node {
                  name
                  fields {
                      work {
                        external
                        video
                      }
                  }
              }
          }
      }
  }
`