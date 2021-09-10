import { useReducer } from 'react';

import ImageModalContext from './imageModalContext';
import ImageModalReducer from './imageModalReducer';

import { API, setAuthToken } from '../../config/api';

const ImageModalState = (children) => {
   const initialState = {
      data: null,
      loading: true,
   };
   const [state, dispatch] = useReducer(ImageModalReducer, initialState);

   const changeImageModal = (modalData) => {
      try {
         dispatch({
            type: 'CHANGE_IMAGE_MODAL',
            payload: modalData,
         });
      } catch (error) {}
   };

   const getDataModal = (modalData) => {
      try {
         dispatch({
            type: 'GET_DATA_MODAL',
         });
      } catch (error) {}
   };

   return (
      <ImageModalContext.Provider
         value={{
            data: state.data,
            changeImageModal,
         }}
      >
         {children.children}
      </ImageModalContext.Provider>
   );
};

export default ImageModalState;
