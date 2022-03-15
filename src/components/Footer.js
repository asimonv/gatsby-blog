import { Link } from "gatsby";
import React from "react";

const Footer = () => (
  <footer class="p-4 max-w-2xl w-full self-center">
    <small>
      <Link to="/" rel="author" class="font-semibold">
        Andre Simon
      </Link>
      <span> © {new Date().getFullYear()}</span>
    </small>
  </footer>
);

export default Footer;
