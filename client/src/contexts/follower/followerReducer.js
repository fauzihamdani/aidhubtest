export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'ADD_FOLLOWER':
         return {
            ...state,
            loading: false,
         };

      case 'GET_FOLLOWERS':
         return {
            ...state,
            followers: payload,
            followerLength: payload.length,
            loadingFollower: false,
         };
      case 'GET_FOLLOWING':
         return {
            ...state,
            loadingFollowing: false,
            following: payload,
            followingLength: payload.length,
         };
      default:
         throw new Error();
   }
};
