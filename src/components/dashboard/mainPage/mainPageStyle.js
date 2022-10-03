import styled from 'styled-components';
import '../../../styles/font.css';

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
export const UserNameInput = styled.p`
  font-size: 1rem;
  margin: 7rem 0rem 2rem 0rem;

  font-family: 'Lexend';
  transform: rotate(-90deg);
  text-align: end;
`;
export const UserName = styled.p`
  font-size: 1rem;
  margin: 2.5rem 0rem 0rem 4rem;

  font-family: 'Lexend';
  transform: rotate(-90deg);
  
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
export const WholeBlog = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  margin: 1rem;
`;

export const LatestHeading = styled.p`
  font-family: 'Lexend';
  padding-left: 5rem;
`;

export const GreenContainer = styled.div`
  background-color: green;
  width: 15px;
  margin-left: 6rem;
`;

export const Hide = styled.div`
  visibility: hidden;
  font-size: 3px;
`;
