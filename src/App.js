import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
// import Dexie from 'dexie';
import Users from "./pages/Users/Users";
import SingleUser from "./pages/SingleUser/SingleUser";
import './App.scss';


// const db = new Dexie('lendsqr');
// db.version(1).stores({
//   users: ''
// })

function App() {
    return (
        <div className="App">
            <Router >
                <Routes >
                    <Route path="/">
                        <Route path='users' >
                            <Route index element={ <Users />} />
                            <Route path=':userid' element={ <SingleUser/>} > </Route>
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
