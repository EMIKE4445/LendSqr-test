import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaAngleDown} from "react-icons/fa";
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

        // if( validateFormInputs(name, value)) {
        //     if(errors.includes(name)) {
        //         seterrors( errors.filter((x)=>  x !== name ) )
        //     }

        //     if(e.target.parentElement.querySelector('.error-message') && (name !== 'type')) {
        //         e.target.parentElement.querySelector('.error-message').style.display = 'none';
        //         e.target.parentElement.style.border = '1px solid #ccc';
        //         e.target.parentElement.querySelector('.legend').style.color = 'rgb(116, 113, 113)';
        //     }

        // }else{
        //     if(!(errors.includes(name))){
        //         seterrors([...errors, name]);
        //     }

        //     e.target.parentElement.style.border = '1px solid red';
        //     e.target.parentElement.querySelector('.legend').style.color = 'red';
        //     e.target.parentElement.querySelector('.error-message').style.display = 'block';
        //     document.querySelector('.signup-form input[type="submit"] ').classList.add('submit_disabled');
        // }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };



    // because of the async nature of state update
    // useEffect(() => {
    //     if( (Object.values(formValues).every(x => x !== '')) && (errors.length === 0)){
    //         document.querySelector('.signup-form input[type="submit"] ').classList.remove('submit_disabled');
    //     }
    // },[errors, formValues]);




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
                                {/* { passwordVisible ? <FaEyeSlash  className="fa-icons"/> :<FaEye onClick={ displayPassword }className="fa-icons"/>  } */}
                                { passwordVisible ? "Show" : "Hide" }
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
