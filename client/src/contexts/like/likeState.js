import { useReducer } from 'react';

import LikeContext from './likeContext';
import LikeReducer from './likeReducer';

import PostState from '../post/postState';

import { API, setAuthToken } from '../../config/api';

const LikeState = (children) => {
   const initialState = {
      likes: null,
   };
   const [state, dispatch] = useReducer(LikeReducer, initialState);

   const addLike = async (postId) => {
      console.log('running addLike');
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const data = { postId: postId };
         const res = await API.post(`/like`, data, config);

         dispatch({ type: 'ADD_FEED', payload: res.data.link });
         PostState.getFeeds();
      } catch (err) {}
   };

   // const getFeeds = async () => {
   //    try {
   //       const config = {
   //          headers: {
   //             'Content-type': 'application/json',
   //          },
   //       };
   //       const res = await API.get(`/feed`, config);
   //       dispatch({
   //          type: 'GET_FEEDS',
   //          payload: res.data.data.feed,
   //       });
   //    } catch (error) {}
   // };

   // const getFeedsbyFollowed = async () => {
   //    try {
   //       const config = {
   //          headers: {
   //             'Content-type': 'application/json',
   //          },
   //       };
   //       const res = await API.get(`/feed-by-followed`, config);
   //       dispatch({
   //          type: 'GET_FEEDS_BY_FOLLOWED',
   //          payload: res.data.data.feed,
   //       });
   //    } catch (error) {}
   // };

   return (
      <LikeContext.Provider
         value={{
            likes: state.likes,
            addLike,
         }}
      >
         {children.children}
      </LikeContext.Provider>
   );
};

export default LikeState;
