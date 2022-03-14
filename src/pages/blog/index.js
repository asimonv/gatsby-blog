import React from "react";
import { graphql } from "gatsby";
import List from "../../components/List";
import Section from "../../components/Section";

const Home = ({ data }) => (
  <div className="space-y-4 mt-4 grow flex flex-col max-w-4xl mx-auto p-4">
    <Section>
      <List posts={data.allMdx.nodes} />
    </Section>
  </div>
);

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`;

export default Home;
