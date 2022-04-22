import React from "react";
import { graphql } from "gatsby";
import List from "../../components/List";
import Section from "../../components/Section";
import SEOHeader from "../../components/SEOHeader";
import BilingualText from "../../components/BilingualText";

const title = "好きな漢字"

const Home = ({ data }) => (
  <div className="space-y-4 mt-4 grow flex flex-col max-w-4xl mx-auto p-4">
    <SEOHeader title="好きな漢字" />
    <h1 className="text-3xl tracking-tight text-center">
      <BilingualText original={title} translation={"Favorite kanjis"}/>
    </h1>
    <Section>
      <List posts={data.allMdx.nodes} showKeywords/>
    </Section>
  </div>
);

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/kanji/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fileAbsolutePath
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          keywords
        }
        id
        slug
      }
    }
  }
`;

export default Home;
