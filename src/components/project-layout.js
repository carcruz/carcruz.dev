import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
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
import Seo from './seo';

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
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
        smallImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 400)
          }
        }
      }
    }
  }
`;

export default function PageTemplate({ data: { mdx }, children }) {
  return (
    <>
      <Seo
        description={mdx.frontmatter.description}
        title={mdx.frontmatter.title}
        image={getSrc(mdx.frontmatter.smallImage.childImageSharp)}
      />
      <BlogHeader>
        <MainHeader>{mdx.frontmatter.title}</MainHeader>
      </BlogHeader>
      <RelatedLinksContainer>
        {mdx.frontmatter.live && (
          <LiveLink url={mdx.frontmatter.live}> Visit site</LiveLink>
        )}
        {mdx.frontmatter.github && (
          <GithubLink url={mdx.frontmatter.github}> Visit repo</GithubLink>
        )}
        {mdx.frontmatter.docs && (
          <DocsLink url={mdx.frontmatter.docs}> See docs</DocsLink>
        )}
        {mdx.frontmatter.paper && (
          <PaperLink url={mdx.frontmatter.paper}> See publication</PaperLink>
        )}
      </RelatedLinksContainer>
      <BlogMainContent>{children}</BlogMainContent>
      <BlogFooter>
        <NavLink to="/projects">
          <IoIosArrowBack />
          Back to all projects
        </NavLink>
      </BlogFooter>
    </>
  );
}
