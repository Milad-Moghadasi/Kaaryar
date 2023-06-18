import './Login.scss';
import { useState , useContext } from "react";
import {loginContext } from "../../LoginContext";
import cryptoJs from "crypto-js";


function Login() {
  const [,setIsLogin] = useContext(loginContext);
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const hashUser = cryptoJs.SHA256(username).toString();
    const hashPass = cryptoJs.SHA256(password).toString();

    if (hashUser === "6182e221e734938459da67b7914dbbb4dd9d47eff9e9330c02978a49a05a399c" && hashPass === "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3") {
      setError(false);
      setIsLogin(true);
    } else {
      setError("inavlid username or password");
    }
  }

  return (
    <div className='login'>
      <div className="all container2">
        <div className="welcome">
          <h1>به سامانه آموزشی کاریار خوش آمدید!</h1>
        </div>
        <div className="form">
          <div className="right">
            <p>اگر عضو سامانه آموزشی نیستید با دسترسی مهمان وارد شوید:</p>
            <button>ورود به عنوان مهمان</button>
          </div>
          <div className="left">
            <form onSubmit={handleSubmit}>
              <h2>ورود به سامانه آموزشی کاریار</h2>
              {error && <div className="error">{error}</div>}
              <p htmlFor="username">نام کاربری/ ایمیل</p>
              <input id='username' type="text" name="username" placeholder='نام کاربری/ ایمیل' />
              <p htmlFor="password">رمز ورود</p>
              <input type="password" id='password' name="password" placeholder='رمز ورود' />
              <div className="checkbox">
                <input type="checkbox" id='checkbox' /><span htmlFor="checkbox">مرا به خاطر بسپار</span>
              </div>
              <a href=".">نام کاربری و یا رمز ورود خود را فراموش کرده اید؟</a>
              <input type="submit" value="ورود به سایت"/>
              <p className='cooki'>توجه کنید که کوکی‌ها باید در مرورگر شما فعال باشند.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;