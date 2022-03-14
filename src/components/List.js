import { Link } from "gatsby";
import React from "react";
import { FiChevronRight } from 'react-icons/fi';


const List = ({ posts }) => {
  return (
    <ul className="divide-y divide-gray-300">
      {posts.map(({ frontmatter: { date, title }, slug, id }) => (
        <li key={id}>
          <Link
            to={"/blog/" + slug}
            className="q flex items-center py-3 hover:bg-gray-300 hover:bg-opacity-10"
          >
            <div>
              <time className="text-sm font-semibold opacity-70">{date}</time>
              <h2 className="text-xl font-semibold">{title}</h2>
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
