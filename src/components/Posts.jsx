import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  useEffect(() => {
    props.posts.unshift(props.newPost);
    console.log(props);
  }, [props]);

  return (
    <div>
      <h1>Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id + Math.random()}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
