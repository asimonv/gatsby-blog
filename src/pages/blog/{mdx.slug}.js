import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import BlogLayout from "../../components/BlogLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEOHeader from "../../components/SEOHeader";

const PostPage = ({
  data: {
    mdx: {
      frontmatter: {
        date,
        title,
        description,
        hero_image,
        hero_image_alt,
        hide_article,
        keywords,
      },
      body,
    },
  },
}) => {
  const image = getImage(hero_image);

  return (
    <BlogLayout>
      <SEOHeader title={title} description={description} keywords={keywords} />
      {image && (
        <GatsbyImage
          image={image}
          alt={hero_image_alt}
          className={hide_article ? "" : "relative h-[33vh]"}
          objectPosition={hide_article ? "top" : "50% 50%"}
          style={
            hide_article
              ? { position: "absolute", top: 100, left: 0, bottom: 0, right: 0 }
              : {}
          }
        />
      )}
      {!hide_article && (
        <article className="space-y-3 leading-relaxed px-4 max-w-2xl self-center mt-4">
          <header>
            <div className="flex items-end pb-1">
              <time className="font-medium text-sm tracking-wide">{date}</time>
            </div>
            <h1 className="text-3xl tracking-tight font-semibold">{title}</h1>
            <div className="text-gray-500 text-lg font-medium">
              {description}
            </div>
          </header>
          <div className="text-lg block mt-4">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </article>
      )}
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
        keywords
        hide_article
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
