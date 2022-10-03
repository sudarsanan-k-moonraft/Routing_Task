import {
  Heading,
  LeftWrapper,
  BlogDate,
  UserName,
  RightWrapper,
  BlogHeading,
  BlogContentText,
  References,
  BlogContainer,
  WholeBlog,
} from './trendingStyle';
import BlogContent from '../../../data/blogContent';

//Getting data from sessionStorage

const sessionBlogs = sessionStorage.getItem('blog');

let sessionBlogContent: any;
if (sessionBlogs) {
  sessionBlogContent = JSON.parse(sessionBlogs);
  console.log(sessionBlogContent);
} else {
  sessionBlogContent = [];
}

//Functional component to display Trending Blogs

const Trend: React.FC = (): JSX.Element => {
  return (
    <>
      <WholeBlog>
        <Heading>Trending Page</Heading>

        {/* Iterating BlogContent Object to dipslay the contents */}

        {BlogContent.map((blog, i) => {
          return (
            <>
              {blog.isTrend && (
                <>
                  <BlogContainer>
                    <LeftWrapper>
                      <BlogDate>{blog.date}</BlogDate>
                      <UserName>{blog.userName}</UserName>
                    </LeftWrapper>
                    <RightWrapper>
                      <BlogHeading>{blog.blogHeading}</BlogHeading>
                      <BlogContentText> {blog.blogContent}</BlogContentText>
                      <References>{blog.reference1}</References>
                      <References>{blog.reference2}</References>
                    </RightWrapper>
                  </BlogContainer>
                </>
              )}
            </>
          );
        })}

        {/* Iterating the sessionStorage contents to display newly added blog entries */}

        {sessionBlogContent.map((blog: any, i: any) => {
          return (
            <>
              {blog.isTrend && (
                <>
                  <BlogContainer>
                    <LeftWrapper>
                      <BlogDate>{blog.date}</BlogDate>
                      <UserName>{blog.userName}</UserName>
                    </LeftWrapper>
                    <RightWrapper>
                      <BlogHeading>{blog.blogHeading}</BlogHeading>
                      <BlogContentText> {blog.blogContent}</BlogContentText>
                      <References>{blog.reference1}</References>
                      <References>{blog.reference2}</References>
                    </RightWrapper>
                  </BlogContainer>
                </>
              )}
            </>
          );
        })}
      </WholeBlog>
    </>
  );
};

export default Trend;
