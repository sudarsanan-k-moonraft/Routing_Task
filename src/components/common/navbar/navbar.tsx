import { images } from '../../../resources/images';
import { content } from '../../../resources/strings';
import {
  Search,
  NavStyle,
  Trending,
  ImageWrapper,
  CreateIcon,
  NavContent,
  MIcon,
} from './navStyle';
import { Link } from 'react-router-dom';


//Navbar Functional Component

const Navbar: React.FC = (): JSX.Element => {
  return (
    <NavStyle>
      <ImageWrapper>
        <Link to="/mainPage">
          <MIcon src={images.mIcon}></MIcon>{' '}
        </Link>
      </ImageWrapper>
      <ImageWrapper>
        <Link to="/search" style={{ textDecoration: 'none' }}>
          {' '}
          <Search src={images.search}></Search>
          <NavContent>{content.search}</NavContent>
        </Link>
      </ImageWrapper>
      <ImageWrapper>
        <Link to="/trendingPage" style={{ textDecoration: 'none' }}>
          <Trending src={images.trending}></Trending>
          <NavContent>{content.trend}</NavContent>
        </Link>
      </ImageWrapper>
      <ImageWrapper>
        <Link to="/createPage" style={{ textDecoration: 'none' }}>
          {' '}
          <CreateIcon src={images.create}></CreateIcon>
          <NavContent>{content.create}</NavContent>
        </Link>
      </ImageWrapper>
    </NavStyle>
  );
};

export default Navbar;
