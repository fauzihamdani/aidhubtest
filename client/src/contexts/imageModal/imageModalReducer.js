export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'CHANGE_IMAGE_MODAL':
         return {
            loading: false,
            data: payload,
         };
      case 'GET_DATA_MODAL':
      // return { data: data };
      default:
         throw new Error();
   }
};
