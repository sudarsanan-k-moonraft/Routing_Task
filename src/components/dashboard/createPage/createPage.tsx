import { content } from '../../../resources/strings';
import {
  CreateForm,
  InputArea,
  Heading,
  SubmitButton,
  ErrorMessage,
  InputAreaCheckBox,
  CheckBoxWrapper,
} from './createPageStyle';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

//Declaring data types for FORM elements

type Profile = {
  username: string;
  date: string;
  blogHeading: string;
  blogContent: string;
  reference1: string;
  reference2: string;
  isTrend: boolean;
};

//Functional Component for Create Page

const CreatePage: React.FC = (): JSX.Element => {
  const Navigate = useNavigate();

  //Use State Declarations

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = (blogItems: Profile) => {
    const newBlogItems = {
      userName: blogItems.username,
      date: blogItems.date,
      blogHeading: blogItems.blogHeading,
      blogContent: blogItems.blogContent,
      reference1: blogItems.reference1,
      reference2: blogItems.reference2,
      isTrend: blogItems.isTrend,
    };

    //Storing the form values in sessionStorage

    const sessionBlogs = sessionStorage.getItem('blog');

    if (sessionBlogs) {
      const existingBlogs = JSON.parse(sessionBlogs);
      existingBlogs.push(newBlogItems);
      sessionStorage.setItem('blog', JSON.stringify(existingBlogs));
    } else {
      const blogs = [];
      blogs.push(newBlogItems);
      sessionStorage.setItem('blog', JSON.stringify(blogs));
    }

    Navigate('/mainPage');
  };

  //Return function to displaying all input items

  return (
    <>
      <CreateForm onSubmit={handleSubmit(onSubmit)}>
        <Heading>Create Page</Heading>
        {content.uname}
        <InputArea
          {...register('username', { pattern: /^@[a-zA-Z]+$/ })}
          type="text"
          id="userName"
          placeholder="Enter Username(Should start with @)"
          required
        />
        {errors.username && errors.username.type === 'pattern' && (
          <ErrorMessage>Must Include @</ErrorMessage>
        )}
        {content.date}
        <InputArea
          {...register('date')}
          type="text"
          id="date"
          placeholder="Enter Date in format DD-MM"
          required
        />
        {content.blogHeading}
        <InputArea
          {...register('blogHeading')}
          type="text"
          id="heading"
          placeholder="Enter Blog Heading"
          required
        />
        {errors.blogHeading && errors.blogHeading.type === 'maxlength' && (
          <ErrorMessage>Must Include @</ErrorMessage>
        )}
        {content.blogContent}{' '}
        <InputArea
          {...register('blogContent')}
          type="textarea"
          rows={5}
          cols={10}
          id="content"
          placeholder="Enter Blog Content"
          required
        ></InputArea>
        {content.reference1}
        <InputArea
          {...register('reference1')}
          type="text"
          id="ref1"
          placeholder="Enter Reference"
          required
        />
        {content.reference2}
        <InputArea
          {...register('reference2')}
          type="text"
          id="ref1"
          placeholder="Enter Reference"
          required
        />
        <CheckBoxWrapper>
          {content.isTrend}
          <InputAreaCheckBox
            {...register('isTrend')}
            type="checkbox"
            id="isTrend"
          />
        </CheckBoxWrapper>
        <SubmitButton type="submit">Submit</SubmitButton>
      </CreateForm>
    </>
  );
};

export default CreatePage;
