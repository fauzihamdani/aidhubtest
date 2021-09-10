export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'ADD_FEED':
         return {
            ...state,
            loading: false,
            likes: payload,
         };

      // case 'GET_FEEDS':
      //    return {
      //       ...state,
      //       feeds: payload,
      //       loading: false,
      //    };
      // case 'GET_FEEDS_BY_FOLLOWED':
      //    return {
      //       ...state,
      //       feeds: payload,
      //       loading: false,
      //    };

      default:
         throw new Error();
   }
};
