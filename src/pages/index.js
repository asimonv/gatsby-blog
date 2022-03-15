import React from "react";
import { graphql } from "gatsby";
import List from "../components/List";
import Section from "../components/Section";
import SEOHeader from "../components/SEOHeader";

const Home = ({ data }) => (
  <div>
    <div className="space-y-4 mt-4 grow flex flex-col max-w-4xl mx-auto">
      <SEOHeader title="Home"/>
      <Section>
        <List posts={data.allMdx.nodes} />
      </Section>
    </div>
  </div>
);

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
        slug
      }
    }
  }
`;

export default Home;
