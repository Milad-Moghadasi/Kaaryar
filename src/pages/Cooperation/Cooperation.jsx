import './Cooperation.scss';
import charityicon from "../../img/cooperation/charity.png"
import educationalicon from "../../img/cooperation/educational.png"
import businessicon from "../../img/cooperation/business.png"
import phoneicon from "../../img/cooperation/phone.png"
import mapicon from "../../img/cooperation/map.png"
import emailicon from "../../img/cooperation/email.png"
import socialicon from "../../img/cooperation/social.png"

function Cooperation() {
  return (
    <section className='cooperation'>
      <div className="memberofkaaryar">
        <div className="container">
          <h1>عضوی از خانواده‌ی کاریار باشید</h1>
          <p>اگر علاقه‌مند به فعالیت اجتماعی هستید،<br />
            اگر از ارتقای کیفیت زندگی دیگران لذت می‌برید،<br />
            اگر در رشته‌ی خود موفق هستید و سابقه‌ی کار حرفه‌ای و مدیریتی دارید یا در حال حاضر کسب و کار خود را اداره می‌کنیدو اگر از راهنمایی کردن دیگران لذت می‌برید و بر یکی از زبان‌های برنامه نویسی مسلط هستید، از شما دعوت می‌کنیم به گروه راهنماها و داوطلب‌های کاریار بپیوندید و هدایت مهارت‌آموزها و داوطلب‌ها را بر عهده بگیرید و در طول برگزاری دوره با حل تمرین و کمک به پیشبرد پروژه‌ها مهارت‌آموزها را راهنمایی کنید.
          </p>
          <button>فرم ثبت نام</button>
        </div>
      </div>
      <div className="coopcards container">
        <div className="charity coopcard">
          <div className="icon-name">
            <img src={charityicon} alt="charityicon" />
            <h3>نیکوکاری</h3>
          </div>
          <div className="coopcarddetail">
            <p>اگر شما از موسسات نیکوکاری هستید که به دانش آموزان و دانشجویان مستعد، بورسیه تحصیلی می‌دهید، با معرفی دانش‌آموزان و دانشجویان علاقمند خود به کاریار زمینه‌ای فراهم کنید تا این افراد وارد دوره‌های آموزشی کاربردی و معطوف به اشتغال در زمینه کدنویسی شوند.</p>
          </div>
          <div className="coopbtn">
            <button>ارتباط با کاریار</button>
          </div>
        </div>
        <div className="educational coopcard">
          <div className="icon-name">
            <img src={educationalicon} alt="educationalicon" />
            <h3>آموزشی</h3>
          </div>
          <div className="coopcarddetail">
            <p>اگر شما موسسه آموزشی هستید که دوره‌های مرتبط با برنامه‌نویسی، طراحی وب، ICDL و یا دوره‌های توسعه فردی چون دوره مهارت‌های ارتباطی برگزار می‌کنید، می‌توانید با معرفی مدرس‌ها و دوره‌های آموزشی خود، امکان آموزش را برای مهارت‌آموزهای کاریار فراهم کنید.</p>
          </div>
          <div className="coopbtn">
            <button>ارتباط با کاریار</button>
          </div>
        </div>
        <div className="business coopcard">
          <div className="icon-name">
            <img src={businessicon} alt="businessicon" />
            <h3>کسب وکار</h3>
          </div>
          <div className="coopcarddetail">
            <p>اگر شما از کسب و کارهایی هستید که نیاز به برنامه‌نویس دارید، می‌توانید با معرفی فرصت‌های کارآموزی و یا اشتغال به صورت تمام‌وقت یا پروژه‌ای، به صورت حضوری یا آنلاین به کارآموزان کاریار با ما همکاری کنید. </p>
          </div>
          <div className="coopbtns">
            <button>ارتباط با کاریار</button>
          </div>
        </div>
      </div>
      <div className="cooptext container">
        <p>ما در کاریار مهارت‌های ساده و کاربردی کدنویسی را به صورت آنلاین به افراد علاقه‌مند در سراسر ایران آموزش می‌دهیم تا برای آن‌ها امکان اشتغال فراهم شود.</p>
        <p>چشم‌انداز ما کشوری است که در آن کسی به خاطر محدودیت جغرافیایی یا نداشتن دسترسی به امکانات، از یادگیری و اشتغال باز نمی‌ماند.</p>
      </div>
      <div className="coopform container">
        <div className="rightform form">
          <form>
            <label>نام و نام خانوادگی</label><br />
            <input type="text" placeholder='مانند سعید سعیدی' /><br />
            <label>مقطع تحصیلی</label><br />
            <input type="text" placeholder='مانند کارشناس رشته کامپیوتر' /><br />
            <label>کشور محل سکونت</label><br />
            <input type="text" placeholder='مانند ایران' /><br />
            <label>زبان های برنامه نویسی و مهارت هایی که به آن مسلط هستید </label><br />
            <input type="text" placeholder='مانند پایتون، جاوا اسکریپت و...' /><br />
            <label>تجربیات مشابه </label><br />
            <textarea className='sameres' type="text" placeholder='اگر تجربیات مشابهی از تدریس ، دستیاری آموزشی ، منتورشیپ ، یا هرگونه کار داوطلبانه دارید، اینجا بنویسید.' /><br />
          </form>
        </div>
        <div className="leftform form">
          <form>
            <label>ایمیل</label><br />
            <input type="email" placeholder='abc@gmail.com' /><br />
            <label>شماره موبایل</label><br />
            <input type="number" placeholder='09123456789' /><br />
            <label>استان محل سکونت</label><br />
            <input type="text" placeholder='مانند تهران' /><br />
            <label>مدت زمانی که در هفته میتوانید وقت بگذارید</label>
            <input type="text" placeholder='مانند ده ساعت' />
          </form>
          <div className="formbtn">
            <button>ارسال فرم</button>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1>راه های ارتباطی با کاریار</h1>
        <div className="contactcards container">
          <div className="contactcard">
            <div className="icon-text">
              <img src={phoneicon} alt="phoneicon" />
              <h3> شماره تماس:</h3>
            </div>
            <div className="contactdetail">
              <p>۰۲۱-۸۸۸۴۲۶۹۳</p>
              <p>۰۹۰۵۷۲۵۷۱۸۳</p>
            </div>
          </div>
          <div className="contactcard">
            <div className="icon-text">
              <img src={mapicon} alt="mapicon" />
              <h3>آدرس:</h3>
            </div>
            <div className="contactdetail">
              <p className='address'>تهران، خیابان قائم مقام فراهانی، کوچه یکم ،شماره ۱۷، طبقه ۲</p>
            </div>
          </div>
          <div className="contactcard">
            <div className="icon-text">
              <img src={emailicon} alt="emailicon" />
              <h3>ایمیل:</h3>
            </div>
            <div className="contactdetail">
              <p>mailto:info@kaaryar.ir</p>
            </div>
          </div>
          <div className="contactcard">
            <div className="icon-text">
              <img src={socialicon} alt="socialicon" />
              <h3>شبکه های اجتماعی:</h3>
            </div>
            <div className="contactdetail">
              <a className='linkedin' href="https://www.linkedin.com/school/karyar/">لینکدین کاریار </a><br />
              <a href="https://www.instagram.com/karyar.college/">اینستاگرام کاریار</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cooperation;