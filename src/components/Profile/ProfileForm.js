import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ProfileForm.module.css';
import AuthContext from '../Store/auth-context';


const ProfileForm = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPaaword = newPasswordInputRef.current.value;

    //add validaction
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAAUz19H9nMj4w40UyW2UpVzPSGBJ2pqyw', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPaaword,
        returnSecureToken: false
      }),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(res =>{
      navigate('/');
    });

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
