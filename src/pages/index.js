import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <br/>
    <br/>
    <h2>🔨 site under construction 🔧</h2>
    <br/>
    <br/>
    <Link to="/about">about</Link>
    <br/>
    <Link to="/posts">bloog & posts</Link>
  </>
);

export default IndexPage;
