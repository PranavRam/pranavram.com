import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';
import gro1 from '../assets/images/gro-1.jpg';
import gro2 from '../assets/images/gro-2.jpg';
import gro3 from '../assets/images/gro-3.jpg';
import gro4 from '../assets/images/gro-4.jpg';
import Work from '../components/Work';

const IndexPage = ({ children, data }) => {
  let workData = data.allDirectory.edges
    .filter(d => d.node.fields && d.node.fields.work)
    .map(d => d.node.fields.work);
  workData.sort((a, b) => a.order - b.order);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '50px',
        height: '100%'
      }}
    >
      <div>
        <h2 style={{ paddingLeft: 16 }}>Work</h2>
        <Work data={workData} />
      </div>
      <hr style={{ margin: '16px' }} />
      <div>
        <h4 style={{ paddingLeft: 16 }}>
          Salesforce - Global Release Operations (GRO Web)
        </h4>
        <div className="row">
          <div className="column">
            <a href={gro2}>
              <img src={gro2} />
            </a>
            <p>
              Deployments:<br /> Dashboards for Salesforce Releases
            </p>
          </div>
          <div className="column">
            <a href={gro3}>
              <img src={gro3} />
            </a>
            <p>
              Investigations:<br /> Issues Raised for Various Teams at
              Salesforce
            </p>
          </div>
          <div className="column">
            <a href={gro4}>
              <img src={gro4} />
            </a>
            <p>
              Case Completion:<br /> Completion State of a Release <b>in</b>{' '}
              Time
            </p>
          </div>
          <div className="column">
            <a href={gro1}>
              <img src={gro1} />
            </a>
            <p>
              Release Timeline:<br /> Completion State of a Release{' '}
              <b>through</b> Time
            </p>
          </div>
        </div>
      </div>
      <hr style={{ margin: '16px' }} />
      <div style={{ margin: '16px' }}>
        <h2 style={{ paddingBottom: 16 }}>Most Recent Blog Posts</h2>
        {data.allMarkdownRemark.edges
          // .filter(({ node }) => {
          //   console.log(node);
          //   return true;
          // })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                style={{ textDecoration: `none`, color: `inherit` }}
              >
                <h3>
                  {node.frontmatter.title}
                  <span style={{ color: '#BBB' }}>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    allDirectory {
      edges {
        node {
          fields {
            work {
              order
              name
              description
              coverImage
              video
              link
            }
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
