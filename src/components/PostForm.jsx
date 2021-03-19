import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

function PostForm(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      body,
    };

    props.createPost(post);
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form action="" onSubmit={(e) => onFormSubmit(e)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" onChange={onTitleChange} value={title} />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body:</label>
          <textarea name="body" onChange={onBodyChange} value={body} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
