import {
    BrowserRouter as Router,
    Route,
    Navigate ,
    Routes
} from "react-router-dom";

import Users from "./pages/Users/Users";
import SingleUser from "./pages/SingleUser/SingleUser";
import UserGeneralDetails from './components/UserGeneralDetails/UserGeneralDetails';
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import './App.scss';


function App() {
    return (
        <div className="App">
            <Router >
                <Routes >
                    <Route path="/" >
                        <Route index element={ <Error />} />
                        <Route path='/login' element={ <Login />}/>
                        <Route path='users' >
                            <Route index element={ <Users />} />
                            <Route path=":userId" element={ <SingleUser/>} >
                                <Route index element={<Navigate to="general" replace />} />
                                <Route path='general' element={ <UserGeneralDetails /> } />
                                <Route path='*' element={ <Error />}/>
                            </Route>
                            <Route path='*' element={ <Error />}/>
                        </Route>
                        <Route path='/' element={ <Error />}/>
                        <Route path='*' element={ <Error />}/>
                    </Route>
                    <Route path='/error' element={ <Error />}/>
                    <Route path='*' element={ <Error />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
