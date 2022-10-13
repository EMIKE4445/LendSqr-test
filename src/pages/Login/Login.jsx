import { useState } from "react";
import Logo from '../../components/Logo/Logo';
import './login.scss';

function Login() {
    const initialFormInputs = {
        email: '',
        password: '',
    };

    const [formValues, setformValues] = useState({ ...initialFormInputs });
    // const [errors, seterrors] = useState([]);
    const [passwordVisible, setpasswordVisible] = useState(false);

    const displayPassword = () => {
        setpasswordVisible(!passwordVisible);
    }

    // const validateFormInputs = (name, value) => {
    //     const rg = {
    //         email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //         // password: /.{8,}/
    //     }

    //     if ((name in rg) && (rg[name].test(value))) {
    //         return true;
    //     }

    //     if (!(name in rg)) {
    //         return true;
    //     }
    //      return false;
    // };


    const handleInputChange = (e) => {
        const {name, value } = e.target;

        setformValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


  return (
    <div className="login-page-container">
        <Logo />

        <div className="login-page-content-container">
            <div className="login-page-left-content-container">
                <img src="/assets/img/login-image.jpg" alt="user login" />
            </div>

            <div className="login-page-right-content-container">
                <h3 className="login-text">Welcome!</h3>
                <div className="alternate-login-text">Enter details to login.</div>
                <div className="form-container">
                    <form className="login-form">
                        <fieldset>
                            <input type="text" placeholder="Email" name="email" value={ formValues.email } onChange={ handleInputChange } ></input>
                            <div className="legend" tabIndex="0" >Email</div>
                        </fieldset>

                        <fieldset>
                            <input type= { passwordVisible ? "text" : "password" } placeholder="Password" name="password" value={ formValues.password } onChange={ handleInputChange } ></input>
                            <div className="legend" tabIndex="0" >Password</div>
                            <span className="toggle-password" onClick={ displayPassword }>
                                { passwordVisible ? "Hide" : "Show" }
                            </span>
                        </fieldset>

                        <span className="forgot-password">Forgot PASSWORD?</span>

                        <input type="submit" value="LOG IN" onClick={handleSubmit}></input>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
