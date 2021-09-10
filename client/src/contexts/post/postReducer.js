export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'ADD_FEED':
         return {
            ...state,
            loading: false,
         };

      case 'GET_FEEDS':
         return {
            ...state,
            feeds: payload,
            loading: false,
         };
      case 'GET_FEEDS_BY_FOLLOWED':
         return {
            ...state,
            feedByFollowed: payload,
            loading: false,
         };

      case 'GET_FEEDS_BY_ID':
         return {
            ...state,
            feedProfile: payload,
            loading: false,
         };

      case 'GET_COMMENTS_BY_ID':
         return {
            ...state,
            comments: payload,
            loading: false,
         };

      case 'ADD_LIKE':
         return {
            ...state,
            loading: false,
            likes: payload,
         };
      case 'ADD_COMMENT':
         return {
            ...state,
            loading: false,
            add: payload,
         };

      default:
         throw new Error();
   }
};
