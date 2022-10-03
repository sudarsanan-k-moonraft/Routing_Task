import styled from 'styled-components';
import '../../../styles/font.css';

export const Heading = styled.h1`
  font-family: 'Lexend';
  font-size: 2rem;
  margin: 0 auto;
`;
export const BlogHeading = styled.p`
  font-size: 1rem;
  margin: 1rem;
  font-family: 'Dm-Serif';
  font-size: 32px;
  color: green;
`;

export const BlogDate = styled.h1`
  font-size: 1rem;
  margin: 1rem;
  font-family: 'Lexend-Bold';
  font-size: 32px;
  width: 5%;
  text-align: right;
  display: flex;
  align-items: flex-end;
  padding-left: 3rem;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: 1rem;
  margin: 1rem;
  font-family: 'Lexend';
  transform: rotate(-90deg);
  margin: 2.5rem 0rem 0rem 4rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogContentText = styled.p`
  font-size: 1rem;
  margin: 1rem;
  font-family: 'Lexend';
`;

export const References = styled.p`
  font-size: 1rem;
  margin: 1rem;
  font-family: 'Lexend';
  width: 25%;
`;
export const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
export const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WholeBlog = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 80%;
`;
