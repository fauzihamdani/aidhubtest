import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import Index from './pages/Index';
import PrivateRoute from './components/routes/PrivateRoute';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

function App() {
   // const history = useHistory();
   //  const authContext = useContext(AuthContext);
   //  const { isLogin, loadUser } = authContext;

   //  useEffect(() => {
   //     loadUser();
   //     // eslint-disable-next-line
   //  }, []);
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/" component={Index} exact />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
