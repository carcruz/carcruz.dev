import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  MainHeader,
  BlogHeader,
  BlogMainContent,
  BlogFooter,
  ReferenceText,
  NavLink,
} from './common';
import { IoIosArrowBack } from 'react-icons/io';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <BlogHeader>
        <MainHeader>{mdx.frontmatter.title}</MainHeader>
        <ReferenceText>{mdx.frontmatter.description}</ReferenceText>
      </BlogHeader>
      <BlogMainContent>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </BlogMainContent>
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
      body
      frontmatter {
        title
        by
        description
        date
      }
    }
  }
`;
