import { StaticImage } from "gatsby-plugin-image";
import React from "react";


const PostAuthor = () => {
  return (
    <figure className="flex items-center space-x-2">
      <StaticImage src="../../static/me-c.png" width={40} placeholder="blurred" quality={90} />
      <figcaption className="font-medium">Andre Simon</figcaption>
    </figure>
  );
};

export default PostAuthor;

