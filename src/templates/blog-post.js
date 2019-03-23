import React from "react"
import {Helmet} from "react-helmet";

import styles from './styles.css';
export default class Blog extends React.Component {
  // componentDidMount () {
  //   const script = document.createElement("script");

  //   script.src = "https://snack.expo.io/embed.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }

  render (){
    const { data } = this.props
    const post = data.markdownRemark
    return (
      <div className={styles.container}>
        <h1>
          {post.frontmatter.title}
        </h1>
        <div style={{marginBottom: 80}} dangerouslySetInnerHTML={{ __html: post.html }} />
        <Helmet>     
          <title>{`Pranav Ram - ${post.frontmatter.title}`}</title>   
          <script async src="https://snack.expo.io/embed.js"></script>
        </Helmet>
      </div>
    )
}
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`