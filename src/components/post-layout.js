import React from 'react';
import { graphql } from 'gatsby';
import {
  MainHeader,
  BlogHeader,
  BlogMainContent,
  BlogFooter,
  ReferenceText,
  NavLink,
} from './common';
import { IoIosArrowBack } from 'react-icons/io';
import Seo from './seo';

export default function PageTemplate({ data: { mdx }, children }) {
  return (
    <>
      <Seo title={mdx.frontmatter.title} description={mdx.frontmatter.description} />
      <BlogHeader>
        <MainHeader>{mdx.frontmatter.title}</MainHeader>
        <ReferenceText>{mdx.frontmatter.description}</ReferenceText>
      </BlogHeader>
      <BlogMainContent>{children}</BlogMainContent>
      <BlogFooter>
        <NavLink to="/blog">
          <IoIosArrowBack />
          Back to all posts
        </NavLink>
      </BlogFooter>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        by
        description
        date
      }
    }
  }
`;
