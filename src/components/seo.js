import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import titleImage from '../images/title-image.png';

function Seo({ description, lang, title, image = titleImage, pathname, jsonLd }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteURL
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const siteURL = site.siteMetadata.siteURL;
  const metaImage = `${siteURL}${image}`;
  const canonicalURL = pathname ? `${siteURL}${pathname}` : siteURL;
  const metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

  return (
    <>
      <html lang={lang} />
      <title>{metaTitle}</title>
      <link rel="canonical" href={canonicalURL} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}

Seo.defaultProps = {
  lang: `en`,
  description: ``,
  pathname: ``,
  jsonLd: null,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
  pathname: PropTypes.string,
  jsonLd: PropTypes.object,
};

export default Seo;
