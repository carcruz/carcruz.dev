import React, { useState, useMemo } from 'react';
import Seo from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import {
  Card,
  CardContent,
  CardsContainer,
  CardTitle,
  CardText,
  CardContainerImage,
  LinkStyled,
  Image,
} from '../components/common';

const CATEGORIES = ['All', 'Research', 'AI', 'Backend', 'Visualization'];

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)`
  opacity: 0;
  overflow: hidden;
  animation: ${fadeInUp} 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: ${(props) => props.index * 55}ms;
`;

const FullCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FullCardText = styled(CardText)`
  height: auto;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 0;
`;

const FilterBar = styled.div`
  position: sticky;
  top: var(--header-height);
  z-index: 99;
  background: #f8fafc;
  padding-top: 16px;
  padding-bottom: 4px;
  margin-bottom: 36px;
`;

const CategoryRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-grey-color);
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryTab = styled.button`
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  background: none;
  border: none;
  border-bottom: 2px solid ${(props) => (props.active ? 'var(--cta-color)' : 'transparent')};
  color: ${(props) => (props.active ? 'var(--blue)' : 'var(--grey-color)')};
  padding: 6px 18px 10px;
  margin-bottom: -1px;
  cursor: pointer;
  transition: color 200ms ease, border-color 200ms ease;
  letter-spacing: 0.3px;
  &:first-child {
    padding-left: 0;
  }
  &:hover {
    color: var(--main-color);
  }
`;

const StackToggle = styled.button`
  font-family: 'Inconsolata', monospace;
  font-size: 12px;
  background: none;
  border: none;
  color: ${(props) => (props.open || props.hasActive ? 'var(--blue)' : 'var(--grey-color)')};
  padding: 6px 0 10px;
  cursor: pointer;
  transition: color 200ms ease;
  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
`;

const TagsPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '150px' : '0')};
  transition: max-height 280ms ease, padding 280ms ease;
  padding-top: ${(props) => (props.open ? '12px' : '0')};
`;

const TagButton = styled.button`
  font-family: 'Inconsolata', monospace;
  font-size: 12px;
  background: none;
  border: none;
  color: ${(props) => (props.active ? 'var(--blue)' : 'var(--grey-color)')};
  padding: 3px 14px 3px 0;
  cursor: pointer;
  transition: color 200ms ease;
  letter-spacing: 0.3px;
  &:hover {
    color: var(--main-color);
  }
`;

const StyledRoute = styled(Link)`
  ${LinkStyled}
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    &:hover {
      border: solid 1px transparent;
    }
  }
`;

const IndexPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState('All');
  const [stackOpen, setStackOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query getProjects {
      allMdx(
        filter: { frontmatter: { path: { regex: "/projects/" } } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            id
            frontmatter {
              tags
              blog
              title
              description
              path
              date
              categories
              hidden
              smallImage {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMdx.edges
    .map((node) => ({
      ...node.node.frontmatter,
      id: node.node.id,
    }))
    .filter((p) => !p.hidden);

  const categoryFiltered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) =>
            p.categories?.split(',').map((c) => c.trim()).includes(activeCategory)
          ),
    [projects, activeCategory]
  );

  const availableTags = useMemo(() => {
    const all = categoryFiltered.flatMap(
      (p) => p.tags?.split(',').map((t) => t.trim()) ?? []
    );
    const counts = all.reduce((acc, t) => {
      acc[t] = (acc[t] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [categoryFiltered]);

  const filtered = useMemo(
    () =>
      activeTag === 'All'
        ? categoryFiltered
        : categoryFiltered.filter((p) =>
            p.tags?.split(',').map((t) => t.trim()).includes(activeTag)
          ),
    [categoryFiltered, activeTag]
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveTag('All');
  };

  const handleStackToggle = () => {
    if (activeTag !== 'All') {
      setActiveTag('All');
      setStackOpen(true);
    } else {
      setStackOpen((v) => !v);
    }
  };

  const handleTagSelect = (tag) => {
    setActiveTag(tag);
    setStackOpen(false);
  };

  return (
    <>
      <br />
      <FilterBar>
        <CategoryRow>
          <CategoryTabs>
            {CATEGORIES.map((cat) => (
              <CategoryTab
                key={cat}
                active={activeCategory === cat}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </CategoryTab>
            ))}
          </CategoryTabs>
          <StackToggle
            open={stackOpen}
            hasActive={activeTag !== 'All'}
            onClick={handleStackToggle}
          >
            {activeTag !== 'All' ? (
              <>stack: {activeTag} ×</>
            ) : (
              <>stack {stackOpen ? '▴' : '▾'}</>
            )}
          </StackToggle>
        </CategoryRow>
        <TagsPanel open={stackOpen}>
          {availableTags.map((tag) => (
            <TagButton
              key={tag}
              active={activeTag === tag}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </TagsPanel>
      </FilterBar>
      <CardsContainer key={`${activeCategory}-${activeTag}`}>
        {filtered.map((node, index) => (
          <AnimatedCard key={node.id} index={index}>
            <StyledRoute to={node.path}>
              <FullCardContent small>
                <CardTitle>{node.title}</CardTitle>
                <FullCardText>{node.description}</FullCardText>
              </FullCardContent>
              <CardContainerImage>
                {node.smallImage && (
                  <Image
                    image={node.smallImage.childImageSharp}
                    alt={node.title}
                  />
                )}
              </CardContainerImage>
            </StyledRoute>
          </AnimatedCard>
        ))}
      </CardsContainer>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title="Projects"
    pathname="/projects/"
    description="A selection of software engineering projects by Carlos Cruz-Castillo, spanning drug discovery platforms, data visualization, IoT, and AI-powered tooling."
  />
);
