import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const PostAuthor = ({ author: { name } }) => {
  return (
    <figure className="flex items-center space-x-2">
      <StaticImage src="../../static/me-c.jpg" width="40" placeholder="blurred" />
      <figcaption className="font-medium">{name}</figcaption>
    </figure>
  );
};

export default PostAuthor;
