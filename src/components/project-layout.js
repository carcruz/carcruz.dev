import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  MainHeader,
  BlogHeader,
  BlogMainContent,
  BlogFooter,
  NavLink,
  LiveLink,
  GithubLink,
  DocsLink,
  PaperLink,
  RelatedLinksContainer,
} from './common';
import { IoIosArrowBack } from 'react-icons/io';

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        by
        description
        date
        tags
        github
        live
        docs
        paper
      }
    }
  }
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <BlogHeader>
        <MainHeader>{mdx.frontmatter.title}</MainHeader>
      </BlogHeader>
      <RelatedLinksContainer>
        {mdx.frontmatter.live && (
          <LiveLink url={mdx.frontmatter.live}> Live</LiveLink>
        )}
        {mdx.frontmatter.github && (
          <GithubLink url={mdx.frontmatter.github}> Github</GithubLink>
        )}
        {mdx.frontmatter.docs && (
          <DocsLink url={mdx.frontmatter.docs}> Docs</DocsLink>
        )}
        {mdx.frontmatter.paper && (
          <PaperLink url={mdx.frontmatter.paper}> Related publication</PaperLink>
        )}
      </RelatedLinksContainer>
      <BlogMainContent>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </BlogMainContent>
      <BlogFooter>
        <NavLink to="/projects">
          <IoIosArrowBack />
          Back to all projects
        </NavLink>
      </BlogFooter>
    </>
  );
}
