import React from "react";
import ProfileTabs from '../components/ProfileTabs';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (

    <div className="page__exhibit">


      <article className="exhibit">
        <div className="row">
            <div className="col-sm-4 exhibit-feature">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oasthouse_at_Cherry_Tree_Farm%2C_Frittenden.jpg/600px-Oasthouse_at_Cherry_Tree_Farm%2C_Frittenden.jpg" alt="Frittenden" width="600" />
            </div>
            <div className="col-sm-8 exhibit-content">
                <ProfileTabs sendSelection={frontmatter.title} />
            </div>
        </div>
      </article>

      <div className="blog-post-container">
        <div className="blog-post">
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

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
      }
    }
  }
`;