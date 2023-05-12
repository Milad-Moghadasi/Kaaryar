import './Login.scss';

function Login() {
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
            <form>
              <h2>ورود به سامانه آموزشی کاریار</h2>
              <p htmlFor="username">نام کاربری/ ایمیل</p>
              <input id='username' type="text" placeholder='نام کاربری/ ایمیل' />
              <p htmlFor="password">رمز ورود</p>
              <input type="password" id='password' placeholder='رمز ورود' />
              <div className="checkbox">
                <input type="checkbox" id='checkbox' /><span htmlFor="checkbox">مرا به خاطر بسپار</span>
              </div>
              <a href=".">نام کاربری و یا رمز ورود خود را فراموش کرده اید؟</a>
              <button>ورود به سایت</button>
              <p className='cooki'>توجه کنید که کوکی‌ها باید در مرورگر شما فعال باشند.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;