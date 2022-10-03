import {
  LeftWrapper,
  BlogDate,
  UserName,
  RightWrapper,
  BlogHeading,
  BlogContentText,
  References,
} from '../../dashboard/mainPage/mainPageStyle';
import { useLocation } from 'react-router';
import BlogContent from '../../../data/blogContent';

//ReadPage functional component

const ReadPage: React.FC = (): JSX.Element => {
  const { state } = useLocation();
  return (
    <>
      {BlogContent.map((blog, i) => {
        return (
          <>
            {state.id === blog.id && (
              <>
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
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default ReadPage;
