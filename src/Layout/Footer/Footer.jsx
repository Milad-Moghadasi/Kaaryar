import './Footer.scss';
import kaaryar from "../../img/footerimg/kaaryar.png"
import enamad from "../../img/footerimg/enamad.png"
import khalagh from "../../img/footerimg/khalagh.png"
import senfi from "../../img/footerimg/senfi.png"
import emailicon from "../../img/footerimg/emailicon.png"
import instagramicon from "../../img/footerimg/instagramicon.png"
import linkedinicon from "../../img/footerimg/linkedinicon.png"

function Footer() {
  return (
    <footer className='container'>
      <div className="headerfooter">
        <div className="footerlogo">
          <img src={kaaryar} alt="kaaryarlogo" />
        </div>
        <div className="extralogo">
          <div className="img">
          <img src={senfi} alt="senfilogo" />
          </div>
          <div className="img">
          <img src={khalagh} alt="khalaghlogo" />
          </div>
          <div className="img">
          <img src={enamad} alt="enamadlogo" />
          </div>
        </div>
      </div>
      <div className="bodyfooter">
        <div className="footernav">
          <div className="col1">
            <p><a href=".">درباره کاریار</a></p>
            <p><a href=".">همکاری با کاریار</a></p>
            <p><a href=".">حمایت از کاریار</a></p>
            <p><a href=".">دوره های آموزشی</a></p>
            <p><a href=".">ثبت نام مهارت آموزان</a></p>
          </div>
          <div className="col2">
            <p><a href=".">اخبار و دانستنی ها</a></p>
            <p><a href=".">قوانین و مقررات</a></p>
            <p><a href=".">پرسش های پرتکرار</a></p>
          </div>
        </div>
        <div className="connectway">
          <h4>ارتباط با کاریار</h4>
          <p>آدرس: تهران، خیابان قائم مقام فراهانی، کوچه یکم ،شماره ۱۷، طبقه ۲</p>
          <div className="number">
            <p>تماس :</p>
            <p className='num'>۰۲۱-٨٨٨۴۲۶۹۳</p>
            <p className='num'>۰٩۰۵۷۲۵۷۱۸۳</p>
          </div>
          <div className="social">
            <p>شبکه های اجتماعی:</p>
            <a href='.'><img src={instagramicon} alt="instagramicon" /></a>
            <a href='.'><img src={linkedinicon} alt="linkedinicon" /></a>
            <a href='.'><img src={emailicon} alt="emailicon" /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>کپی رایت 2023 © کاریار _ تمامی حقوق مادی و معنوی محفوظ است</p>
      </div>

    </footer>
  );
}

export default Footer;
