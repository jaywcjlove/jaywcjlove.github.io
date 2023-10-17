import type { FC, PropsWithChildren, AnchorHTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  padding: 0.33rem 0.73rem 0.53rem 0.73rem;
  border-radius: 0.33rem;
  transition: all .2s ease-in-out;
  background-color: rgba(var(--color-rgb) / 3%);
  > h3, > p {
    margin: 0;
    transition: all .3s ease-in-out;
  }
  > h3 {
    line-height: 1.3;
    margin-bottom: 0.2rem;
    color: var(--color-fg-subtle);


    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  > p {
    line-height: 1.1;
    font-size: 0.85rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--color-border-default);
  }
  &:hover h3 {
    color: var(--color-fg-default);
  }
  &:hover p {
    color: var(--color-fg-subtle);
  }
  &:hover {
    background-color: var(--color-border-muted);
  }
`;

interface ProjectCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
}

export const ProjectCard: FC<PropsWithChildren<ProjectCardProps>> = ({ children, label, ...reset }) => {
  return (
    <Wrapper {...reset} target="_blank">
      <h3>{label}</h3>
      <p>{children}</p>
    </Wrapper>
  );
}

interface ArticleCardProps {
  data?: {
    title: string;
    repos?: string;
    home?: string;
    children?: string;
  }[]
}

export const ArticleCard: FC<PropsWithChildren<ArticleCardProps>> = ({ data }) => {
  return (
    <Box>
      {data?.map((child, index) => {
        return (
          <ProjectCard key={index} label={child.title} href={child.repos ?`https://github.com/${child.repos}` : child.home}>
            {child.children}
          </ProjectCard>
        );
      })}
    </Box>
  )
}

const Box = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
`;