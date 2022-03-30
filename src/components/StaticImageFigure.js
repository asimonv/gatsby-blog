import React from "react";
import ImageZoom from "./ImageZoom";

const StaticImageFigure = ({ image, description, alt }) => (
  <div className="flex flex-col items-center py-10">
    <ImageZoom image={image} alt={alt} />
    {description && (
      <p className="italic text-sm color-gray500 my-2">{description}</p>
    )}
  </div>
);

export default StaticImageFigure;
