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
        path
      }
    }
  }
`;

export const Head = ({ data: { mdx } }) => (
  <Seo
    title={mdx.frontmatter.title}
    description={mdx.frontmatter.description}
    pathname={mdx.frontmatter.path}
    jsonLd={{
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: mdx.frontmatter.title,
      description: mdx.frontmatter.description,
      datePublished: mdx.frontmatter.date,
      author: {
        '@type': 'Person',
        name: mdx.frontmatter.by,
      },
    }}
  />
);
