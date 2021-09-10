import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { API } from '../config/api';

import '../styles/Index/index.css';
import ListItem from '../components/ListItem';

function Index() {
   const [todos, setTodos] = useState([]);
   const [loading, setLoading] = useState(true);
   const [todolistform, Settodolistform] = useState({
      todolist: '',
   });
   const { todolist } = todolistform;

   const onChangeForm = (e) => {
      const updateForm = { ...todolistform };
      updateForm[e.target.name] = e.target.value;
      Settodolistform(updateForm);
   };

   const addTodo = async (e) => {
      e.preventDefault();
      const config = {
         Headers: {
            'Content-Type': 'application/json',
         },
      };
      const data = {
         listtodo: todolist,
      };
      await API.post(`/todo`, data, config);
      fecthTodo();
      Settodolistform({ todolist: '' });
   };

   const fecthTodo = async () => {
      const config = {
         Headers: {
            'Content-Type': 'application/json',
         },
      };
      const res = await API.get(`/todo`, config);
      setTodos(res?.data?.data?.todo);
   };

   const deleteTodo = async (id) => {
      const config = {
         Headers: {
            'Content-Type': 'application/json',
         },
      };
      await API.delete(`/todo/${id}`, config);
      fecthTodo();
   };

   const updateTodo = async (id, isDone) => {
      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      const data = {
         isDone: !isDone,
      };

      await API.patch(`/todo/${id}`, data, config);
      fecthTodo();
   };

   useEffect(() => {
      fecthTodo();
   }, []);
   return (
      <div className="container__">
         <div className="content-wrapper">
            <form>
               <input
                  className="form-size-100 form-design"
                  type="text"
                  name="todolist"
                  value={todolist}
                  id=""
                  onChange={(e) => onChangeForm(e)}
               />
               <div className="button-wrapper">
                  <button
                     className="button-style"
                     type="submit"
                     onClick={addTodo}
                  >
                     submit
                  </button>
               </div>
            </form>
            <div className="list-wrapper-outter">
               {todos.map((todo) => (
                  <ListItem
                     todo={todo}
                     deleteTodo={deleteTodo}
                     updateTodo={updateTodo}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Index;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//    const history = useHistory();
//    const authContext = useContext(AuthContext);
//    const { isLogin, loadUser } = authContext;

// useEffect(() => {
//     if (isLogin == false) {
//        history.push('/');
//     } else {
//        history.push('/feed');
//     }
//  }, [isLogin]);
//  if (localStorage.token) {
//     setAuthToken(localStorage.token);
//  }
