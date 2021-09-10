import AuthContext from '../../contexts/auth/authContext';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function FormRegister({ handleClose, moveToLogin }) {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, register } = authContext;

   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange Register input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [FormRegister, setFormRegister] = useState({
      email: '',
      password: '',
      name: '',
      username: '',
   });
   const { email, password, name, username } = FormRegister;

   const onChangeRegister = (e) => {
      const updateForm = { ...FormRegister };
      updateForm[e.target.name] = e.target.value;
      setFormRegister(updateForm);
   };
   // =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
   const submitRegister = (e) => {
      e.preventDefault();

      const body = JSON.stringify({ email, password, name, username });
      register(body);
      history.push('/feed');
   };

   return (
      <div className="modal-background login">
         <h1>Register</h1>
         <form>
            <input
               type="text"
               name="email"
               id=""
               value={email}
               placeholder="Email"
               onChange={(e) => onChangeRegister(e)}
            />
            <input
               type="text"
               name="name"
               id=""
               value={name}
               placeholder="Name"
               onChange={(e) => onChangeRegister(e)}
            />
            <input
               type="text"
               name="username"
               id=""
               value={username}
               placeholder="Username"
               onChange={(e) => onChangeRegister(e)}
            />
            <input
               type="password"
               name="password"
               id=""
               value={password}
               placeholder="Password"
               onChange={(e) => onChangeRegister(e)}
            />
            <div
               className="submit-login button-a clicked"
               onClick={submitRegister}
            >
               <p>Register</p>{' '}
            </div>
         </form>
         <div style={{ display: 'flex', marginTop: '2rem' }}>
            <p style={{ color: 'white', margin: 'auto', fontSize: '1.5rem' }}>
               Already have an account ? Klik{' '}
               <span
                  onClick={moveToLogin}
                  style={{ fontWeight: 'bold', cursor: 'pointer' }}
               >
                  {' '}
                  Here
               </span>
            </p>
         </div>
      </div>
   );
}

export default FormRegister;
