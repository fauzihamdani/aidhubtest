export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
         localStorage.setItem('token', payload.token);
         return {
            ...state,
            ...payload,
            userData: {
               id: payload.id,
               email: payload.email,
            },
            isLogin: true,
            loading: false,
         };
      case 'USER_LOADED':
         return {
            ...state,
            isLogin: true,
            loading: false,
            userData: {
               id: payload.id,
               email: payload.email,
               name: payload.name,
               image: payload.image,
               username: payload.username,
               bio: payload.bio,
            },
         };

      case 'GET_USER_INFO':
         return {
            ...state,
            loading: false,
            userInfo: {
               id: payload.id,
               email: payload.email,
               name: payload.name,
               image: payload.image,
               username: payload.username,
               bio: payload.bio,
            },
         };

      case 'UPDATE_USER':
         return {
            ...state,
            loading: false,
            userData: payload,
         };

      case 'REGISTER_FAIL':
      case 'AUTH_ERROR':
      case 'LOGIN_FAIL':
      case 'LOGOUT':
         localStorage.removeItem('token');
         return {
            ...state,
            token: null,
            isLogin: false,
            loading: false,
            userData: null,
            error: action.payload,
         };

      default:
         throw new Error();
   }
};
