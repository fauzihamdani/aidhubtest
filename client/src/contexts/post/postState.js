import { useReducer } from 'react';

import PostContext from './postContext';
import PostReducer from './postReducer';

import { API, setAuthToken } from '../../config/api';

const PostState = (children) => {
   const initialState = {
      feeds: null,
      likes: null,
      loading: true,
      comments: null,
      add: null,
      exploreItems: null,
      profileItems: null,
      feedByFollowed: null,
   };
   const [state, dispatch] = useReducer(PostReducer, initialState);

   const getFeeds = async () => {
      console.log('Running getPost State');
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`/feed`, config);
         dispatch({
            type: 'GET_FEEDS',
            payload: res.data.data.feed,
         });
      } catch (error) {}
   };

   const addFeed = async (formData) => {
      try {
         const config = {
            headers: {
               'Content-type': 'multipart/form-data',
            },
         };
         const res = await API.post(`/feed`, formData, config);

         dispatch({ type: 'ADD_FEED', payload: res.data.data.feed });
      } catch (err) {}
   };

   const addLike = async (postId, option, userId) => {
      console.log('running addLike');
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const data = { postId: postId };
         const res = await API.post(`/like`, data, config);

         dispatch({ type: 'ADD_LIKE', payload: res.data.data });

         getFeedsbyFollowed();
         getFeeds();
         getFeedsById(userId);
      } catch (err) {}
   };

   const getFeedsbyFollowed = async () => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`/feed-by-followed`, config);
         dispatch({
            type: 'GET_FEEDS_BY_FOLLOWED',
            payload: res.data.data.feed,
         });
      } catch (error) {}
   };

   const getFeedsById = async (userId) => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`/feed-by-id/${userId}`, config);
         dispatch({
            type: 'GET_FEEDS_BY_ID',
            payload: res.data.data.feed,
         });
      } catch (error) {}
   };

   const getCommentsById = async (feedId) => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`/comments/${feedId}`, config);
         dispatch({
            type: 'GET_COMMENTS_BY_ID',
            payload: res.data.data.comments,
         });
      } catch (error) {}
   };

   const addComment = async (comment, postId) => {
      console.log('running addComment');

      console.log('formdata', postId);
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const data = { comment: comment, postId: postId };
         const res = await API.post(`/comment`, data, config);
         getCommentsById(postId);

         dispatch({ type: 'ADD_COMMENT', payload: res.data.data });
      } catch (err) {}
   };

   return (
      <PostContext.Provider
         value={{
            feeds: state.feeds,
            comments: state.comments,
            loading: state.loading,
            likes: state.likes,
            add: state.add,
            exploreItems: state.exploreItems,
            feedProfile: state.feedProfile,
            feedByFollowed: state.feedByFollowed,
            addFeed,
            getFeeds,
            addLike,
            getFeedsbyFollowed,
            getFeedsById,
            getCommentsById,
            addComment,
         }}
      >
         {children.children}
      </PostContext.Provider>
   );
};

export default PostState;
