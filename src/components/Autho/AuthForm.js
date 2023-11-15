
import { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };



  const submitHandler = (event) => {
    event.preventDefault();

    const enterdEmail = emailInputRef.current.value;
    console.log('Entered Email:', enterdEmail);
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAUz19H9nMj4w40UyW2UpVzPSGBJ2pqyw'

    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAAUz19H9nMj4w40UyW2UpVzPSGBJ2pqyw'
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enterdEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        // alert("success")
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = 'Authentication failed';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    })
      .then(data => {
        authCtx.login(data.idToken);       


        // Save email ID in local storage
        localStorage.setItem('userEmail', enterdEmail);
        console.log('Email Saved in Local Storage:', enterdEmail);

        authCtx.login(data.idToken);
        navigate('/');

      })
      .catch(err => {
        alert(err.message);
      });

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
