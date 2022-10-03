
import BlogContent from '../../../data/blogContent';
import {
  BlogHeading,
  BlogDate,
  LeftWrapper,
  UserName,
  RightWrapper,
  BlogContentText,
  References,
  BlogContainer,
  WholeBlog,
  LatestHeading,
  GreenContainer,
  Hide,
} from './mainPageStyle';
import { Link } from 'react-router-dom';

//Function Component for MainPage

const MainPage: React.FC = (): JSX.Element => {

  // Getting data from sessionStorage

  const sessionBlogs = sessionStorage.getItem('blog');

  let sessionBlogContent: any;

  if (sessionBlogs) {
    sessionBlogContent = JSON.parse(sessionBlogs);
    console.log(sessionBlogContent);
  } else {
    sessionBlogContent = [];
  }

  return (
    <>
      <WholeBlog>
        <GreenContainer>
          {' '}
          <Hide>hide</Hide>
        </GreenContainer>
        <LatestHeading>Latest</LatestHeading>

        {/* Iterating Blogcontent Object and displaying content */}

        {BlogContent.map((blog: any, i: any) => {
          return (
            <>
              <BlogContainer>
                <LeftWrapper>
                  <BlogDate>{blog.date}</BlogDate>
                  <UserName>{blog.userName}</UserName>
                </LeftWrapper>
                <RightWrapper>
                  <BlogHeading>{blog.blogHeading}</BlogHeading>
                  {blog.blogContent.length <= 500 && (
                    <BlogContentText>{blog.blogContent}</BlogContentText>
                  )}
                  {blog.blogContent.length > 500 && (
                    <BlogContentText>
                      {blog.blogContent.substring(0, 500) + '...'}
                      <Link to="/readpage" state={{ id: i }}>
                        Readmore
                      </Link>
                    </BlogContentText>
                  )}
                  <References>{blog.reference1}</References>
                  <References>{blog.reference2}</References>
                </RightWrapper>
              </BlogContainer>
            </>
          );
        })}

        {/* Iterating SesssionStorage content and displaying the content */}

        {sessionBlogContent.map((blog: any, i: any) => {
          return (
            <>
              <BlogContainer>
                <LeftWrapper>
                  <BlogDate>{blog.date}</BlogDate>
                  <UserName>{blog.userName}</UserName>
                </LeftWrapper>
                <RightWrapper>
                  <BlogHeading>{blog.blogHeading}</BlogHeading>
                  {blog.blogContent.length <= 500 && (
                    <BlogContentText>{blog.blogContent}</BlogContentText>
                  )}
                  {blog.blogContent.length > 500 && (
                    <BlogContentText>
                      {blog.blogContent.substring(0, 500) + '...'}
                      <Link to="/readpage" state={{ id: i }}>
                        Readmore
                      </Link>
                    </BlogContentText>
                  )}
                  <References>{blog.reference1}</References>
                  <References>{blog.reference2}</References>
                </RightWrapper>
              </BlogContainer>
            </>
          );
        })}
      </WholeBlog>
    </>
  );
};

export default MainPage;
