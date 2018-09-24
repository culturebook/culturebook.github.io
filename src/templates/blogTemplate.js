import React from "react";
import ProfileTabs from '../components/ProfileTabs';
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (

    <div className="page__exhibit">

      <Helmet title={ `${frontmatter.title} `} />

      <article className="exhibit">
        <div className="row">
            <div className="col-sm-4 exhibit-feature">
                <img src={frontmatter.photo} alt={frontmatter.title} width="600" />
            </div>
            <div className="col-sm-8 exhibit-content">
                <ProfileTabs sendSelection={ frontmatter } sendContent={ html } />
            </div>
        </div>
      </article>

    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        photo
      }
    }
  }
`;