import { useReducer } from 'react';

import FollowerContext from './followerContext';
import FollowerReducer from './followerReducer';

import { API, setAuthToken } from '../../config/api';

const FollowerState = (children) => {
   const initialState = {
      followers: null,
      loading: true,
      following: null,
      loadingFollower: true,
      loadingFollowing: true,
      followerLength: 0,
      followingLength: 0,
   };
   const [state, dispatch] = useReducer(FollowerReducer, initialState);

   const getFollowers = async (userId) => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`follower/${userId}`, config);
         dispatch({
            type: 'GET_FOLLOWERS',
            payload: res.data.data.followers,
         });
      } catch (error) {}
   };

   const getFollowing = async (userId) => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`following/${userId}`, config);
         dispatch({
            type: 'GET_FOLLOWING',
            payload: res.data.data.following,
         });
      } catch (error) {}
   };
   const addFollower = async (addFollowData, id) => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.post(`/add-follower`, addFollowData, config);
         getFollowers(id);
         getFollowing(id);
         dispatch({ type: 'ADD_FOLLOWER', payload: res.data.link });
      } catch (err) {}
   };
   return (
      <FollowerContext.Provider
         value={{
            followers: state.followers,
            following: state.following,
            loadingFollower: state.loadingFollower,
            loadingFollowing: state.loadingFollowing,
            followerLength: state.followerLength,
            followingLength: state.followingLength,
            getFollowers,
            getFollowing,
            addFollower,
         }}
      >
         {children.children}
      </FollowerContext.Provider>
   );
};

export default FollowerState;
