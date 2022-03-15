import React from "react";
import { Link } from "gatsby";
import DarkToggle from "./DarkToggle";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Header = ({ siteTitle, twitterUsername }) => {
  return (
    <div className="self-center max-w-2xl w-full items-center flex">
      <header className="w-full p-4 flex">
        <Link
          to="/"
          className="text-lg sm:text-xl font-semibold hover:underline"
        >
          {siteTitle}
        </Link>
        <div className="grow"></div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/asimonv"
            target="_blank"
            rel="noopener noreferrer external"
            aria-label="Github: @asimonv"
            className="flex items-center justify-center transition hover:text-blue-600"
          >
            <FiGithub size={24} className="inline-block w-6 h-6 stroke-2 d" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer external"
            aria-label={`Twitter: @${twitterUsername}`}
            className="flex items-center justify-center transition hover:text-blue-600"
            href={`https://twitter.com/${twitterUsername}`}
          >
            <FiTwitter size={24} className="inline-block w-6 h-6 stroke-2 d" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer external"
            aria-label={`LinkedIn: Andre Simon`}
            className="flex items-center justify-center transition hover:text-blue-600"
            href={`https://linkedin.com/in/${twitterUsername}`}
          >
            <FiLinkedin size={24} className="inline-block w-6 h-6 stroke-2 d" />
          </a>
          <DarkToggle />
        </div>
      </header>
    </div>
  );
};

export default Header;
