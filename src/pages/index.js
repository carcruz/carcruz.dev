import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <br/>
    <br/>
    <h1>Carlos Cruz</h1>
    <br/>
    <br/>
    <Link to="/about">about</Link>
    <br/>
    <Link to="/posts">bloog & posts</Link>
  </>
);

export default IndexPage;
