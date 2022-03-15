import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEOHeader = ({
  title,
  meta,
  description,
  keywords,
  image,
  author,
  lang,
  pathname,
}) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        defaultTitle,
        titleTemplate,
        defaultLang,
        defaultDescription,
        defaultAuthor,
        defaultImage,
      },
    },
  } = useStaticQuery(query);

  const canonical = pathname ? `${siteUrl}${pathname}` : null;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: lang || defaultLang,
        }}
        defaultTitle={defaultTitle}
        title={title}
        titleTemplate={titleTemplate}
        link={
          canonical
            ? [
                {
                  rel: "canonical",
                  href: canonical,
                },
              ]
            : []
        }
        meta={[
          {
            name: `description`,
            content: description || defaultDescription,
          },
          {
            name: `keywords`,
            content: keywords,
          },
          {
            property: `og:title`,
            content: title || defaultTitle,
          },
          {
            property: `og:description`,
            content: description || defaultDescription,
          },
          {
            property: `og:url`,
            content: canonical || siteUrl
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: image || `${siteUrl}${defaultImage}`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:image`,
            content: image || `${siteUrl}${defaultImage}`,
          },
          {
            name: `twitter:creator`,
            content: author || defaultAuthor,
          },
          {
            name: `twitter:title`,
            content: title || defaultTitle,
          },
          {
            name: `twitter:description`,
            content: description || defaultDescription,
          },
        ].concat(meta)}
      />
    </>
  );
};

SEOHeader.defaultProps = {
  meta: [],
  keywords: "",
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        defaultTitle
        titleTemplate
        twitterUsername
        defaultLang
        defaultDescription
        defaultAuthor
        defaultImage
      }
    }
  }
`;

export default SEOHeader;
