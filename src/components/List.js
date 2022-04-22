import { Link } from "gatsby";
import React from "react";
import { FiChevronRight } from 'react-icons/fi';

const extractSource = fileAbsolutePath => fileAbsolutePath.split("/content/")[1].split("/")[0]

const List = ({ posts, showKeywords = false }) => {
  return (
    <ul className="divide-y divide-gray-300">
      {posts.map(({ frontmatter: { date, title, keywords }, slug, id, fileAbsolutePath }) => (
        <li key={id}>
          <Link
            to={`/${extractSource(fileAbsolutePath)}/${slug}`}
            className="q flex items-center py-3 hover:bg-gray-300 hover:bg-opacity-10"
          >
            <div>
              <time className="text-sm font-semibold opacity-70">{date}</time>
              <h2 className="text-xl font-semibold">{title}</h2>
              {showKeywords && <p className="text-xl">{keywords}</p>}
            </div>
            <div className="grow"></div>
            <FiChevronRight />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
