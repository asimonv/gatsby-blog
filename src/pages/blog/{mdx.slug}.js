import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import BlogLayout from "../../components/BlogLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostPage = ({
  data: {
    mdx: {
      frontmatter: { date, title, description, hero_image, hero_image_alt },
      body,
    },
  },
}) => {
  const image = getImage(hero_image);

  return (
    <BlogLayout>
      <GatsbyImage image={image} alt={hero_image_alt} className="relative h-[33vh]"/>
      <article className="space-y-3 leading-relaxed px-4 max-w-2xl self-center mt-4">
        <header>
          <div className="flex items-end pb-1">
            <time className="font-medium text-sm tracking-wide text-gray-500">
              {date}
            </time>
          </div>
          <h1 className="text-3xl tracking-tight font-semibold">{title}</h1>
          <div className="text-gray-900 text-lg font-medium">{description}</div>
        </header>
        <div className="text-lg flex flex-col mt-4">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </BlogLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default PostPage;
