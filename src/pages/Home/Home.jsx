import './Home.scss';
import boy from "../../img/homesectionimg/boy.png"
import onclassicon from "../../img/homesectionimg/onclassicon.png"
import projecticon from "../../img/homesectionimg/projecticon.png"
import mentoricon from "../../img/homesectionimg/mentoricon.png"
import workshopicon from "../../img/homesectionimg/workshopicon.png"
import howtojoinimg from "../../img/homesectionimg/howtojoinimg.png"
import backendicon from "../../img/homesectionimg/backendicon.png"
import frontendicon from "../../img/homesectionimg/frontendicon.png"
import ICDLicon from "../../img/homesectionimg/ICDLicon.png"
import dataanalysisicon from "../../img/homesectionimg/dataanalysisicon.png"
import circleLeft from "../../img/homesectionimg/circleLeft.png"
import circleRight from "../../img/homesectionimg/circleRight.png"
import student1 from "../../img/homesectionimg/student1.png"
import student2 from "../../img/homesectionimg/student2.png"
import student3 from "../../img/homesectionimg/student3.png"
import stars from "../../img/homesectionimg/stars.png"
import comenticon from "../../img/homesectionimg/comenticon.png"
import mentor1 from "../../img/homesectionimg/mentor1.jpg"
import mentor2 from "../../img/homesectionimg/mentor2.jpg"
import mentor3 from "../../img/homesectionimg/mentor3.jpg"
import navmentor1 from "../../img/homesectionimg/navmentor1.png"
import navmentor2 from "../../img/homesectionimg/navmentor2.png"
import zahedan from "../../img/homesectionimg/zahedan.jpg"
import tehran from "../../img/homesectionimg/Tehran.jpg"
import data from "../../img/homesectionimg/data.jpg"



function Home() {
  return (
    <section className='home'>
      <div className="container">
        <div className="container1">
          <div className="imgtext">
            <div className="img">
              <img src={boy} alt="boyimg" />
            </div>
            <div className="text">
              <div className="cap">
                <h1>کاریار، مدرسه آنلاین برنامه‌نویسی متصل به بازار کار</h1>
                <p>کاریار مرجع متفاوتی برای معرفی کدنویسان تازه‌نفس به استارت‌آپ‌های کوچک و شرکت‌های پیشرو در اکوسیستم استارت‌آپی ایران و پلتفرمی برای پرورش تولیدکنندگان تکنولوژی در سطح جهان است.</p>
                <div className="btns">
                  <button className='first-btn'>بیشتر بخوانید</button>
                  <button className='second-btn'>ثبت نام مهارت آموزان</button>
                </div>
                <div className="numcount">
                  <div className="num1">
                    <h4>۲۹۵</h4>
                    <h4>مهارت‌آموز</h4>
                  </div>
                  <div className="num2">
                    <h4>۵</h4>
                    <h4>دوره آموزشی </h4>
                  </div>
                  <div className="num3">
                    <h4>۸۸</h4>
                    <h4>منتور و مربی</h4>
                  </div>
                  <div className="num4">
                    <h4>۹۰%</h4>
                    <h4>ورود به بازار کار</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card card1">
            <img src={onclassicon} alt="onclassicon" />
            <h4>کلاس‌های آنلاین</h4>
            <p>تمام فرآیند اجرایی و آموزشی کاریار آنلاین است،  از این رو علاقمندان از سراسر ایران می‌توانند در دوره‌های آموزشی کاریار شرکت کنند.</p>
          </div>
          <div className="card card2">
            <img src={projecticon} alt="projecticon" />
            <h4>پروژه محور</h4>
            <p>مهارت‌آموزان در هر دوره آموزشی، به صورت فردی و تیمی پروژه‌های کاربردی را انجام می‌دهند و پروژه‌های خود را در جلساتی با حضور کارفرماها ارائه می‌کنند.</p>
          </div>
          <div className="card card3">
            <img src={mentoricon} alt="mentoricon" />
            <h4>حضور راهنما</h4>
            <p>هر مهارت‌آموز در تمام مدت آموزش، با یک مربی حل تمرین و یک منتور در ارتباط است. آنها همراه و راهنمای مهارت‌آموزان در مسیر حرفه‌ای شدن هستند.</p>
          </div>
          <div className="card card4">
            <img src={workshopicon} alt="workshopicon" />
            <h4>کارگاه‌های کاربردی</h4>
            <p>کارگاه‌های کاربردی ماهانه، با هدف آموزش‌های کاربردی و در راستای نیازبازار برگزار می‌شود.
              مدیران شرکت‌های بزرگ و کوچک برگزار‌کنندگان این کارگاه‌ها هستند.</p>
          </div>
        </div>
        <div className="howtojoin">
          <div className="howtext">
            <h1>نحوه پیوستن و مدل آموزشی کاریار</h1>
            <p>
              مهارت‌آموزان کاریار پس از طی فرایند پذیرش و ثبت نام نهایی، در یک دوره آموزشی آنلاین 6 الی 9 ماهه شرکت می‌کنند. هر مهارت‌آموز در طول دوره آموزشی حدود ۲۰ ساعت در هفته را به آموزش‌های کاریار اختصاص می‌دهد.<br />
              در کاریار یاد بگیرید که چگونه یک برنامه‌‌‌‌‌نویس حرفه‌‌‌‌‌‌‌‌‌ای شوید. مهارت‌های تخصصی و ارتباطی خود را تقویت کنید و به شبکه وسیعی از افراد حرفه‌ای و کارفرماها متصل شوید.
            </p>
            <button>همین حالا ثبت نام کنید</button>
          </div>
          <div className="kaaryarimg">
            <img src={howtojoinimg} alt="kaaryarimg" />
          </div>
        </div>
      </div>
      <div className="kaaryareducation">
        <div className="headtext">
          <h1>آموزش های کاریار</h1>
        </div>
        <div className="items">
          <div className="item">
            <div className="details">
              <img src={backendicon} alt="backendiconimg" />
              <h4>مسیر آموزش و اشتغال برنامه‌نویسی سمت سرور (بک‌اند)</h4>
              <p>در این دوره ابتدا با تفکر الگوریتمی و مدل حل مسئله آشنا می‌شوید و در مرحله‌ی بعد مدل حل مسئله با زبان پایتون و جنگو را می‌آموزید.</p>
              <ul>
                <li>مبانی برنامه‌نویسی و تفکر الگوریتمی</li>
                <li>پایتون پیشرفته</li>
                <li>جنگو</li>
              </ul>
            </div>
            <div className="detailbtn">
              <h3>مشاهده دوره</h3>
            </div>
          </div>
          <div className="item">
            <div className="details">
              <img src={frontendicon} alt="frontendiconimg" />
              <h4>مسیر آموزش و اشتغال برنامه‌نویسی سمت کاربر (فرانت‌اند)</h4>
              <p>در این دوره شما با زبان‌های HTML, CSS, JavaScript برای طراحی سایت آشنا می‌شوید. همه شرکت‌های بزرگ و کوچک و اشخاص حقیقی و کسب و کارهای خانوادگی به دنبال شما هستند تا سایتی برای آن‌ها طراحی کنید.</p>
              <ul>
                <li>فرانت‌اند مقدماتی‌(HTML, CSS)</li>
                <li>فرانت‌اند پیشرفته‌(JavaScript)</li>
                <li>React JS</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="detailbtn">
              <h3>مشاهده دوره</h3>
            </div>
          </div>
          <div className="item">
            <div className="details">
              <img src={ICDLicon} alt="ICDLiconimg" />
              <h4>مسیر آموزش و اشتغال امور اداری</h4>
              <p>در این دوره با دانش عمومی کامپیوتر، کار با مرورگرهای وب و اینترنت آشنا می‌شوید.</p>
              <ul>
                <li>مقدماتی ICDL</li>
                <li>ICDL پیشرفته</li>
              </ul>
            </div>
            <div className="detailbtn">
              <h3>مشاهده دوره</h3>
            </div>
          </div>
          <div className="item">
            <div className="details">
              <img src={dataanalysisicon} alt="dataanalysisiconimg" />
              <h4>تحلیل داده</h4>
              <p>تحلیلگر داده کسی است که می‌تواند از میان انبوه اطلاعات بدون ساختار، پاسخ سؤالات کسب و کاری را پیدا کند.</p>
              <ul>
                <li>مبانی برنامه نویسی و تفکر الگوریتمی</li>
                <li>تحلیل داده مقدماتی با پایتون</li>
                <li>تحلیل داده پیشرفته</li>
              </ul>
            </div>
            <div className="detailbtn">
              <h3>مشاهده دوره</h3>
            </div>
          </div>

        </div>
      </div>
      <div className="studentcoments container1">
        <div className="headtext">
          <h2>از مهارت آموزان کاریار بشنوید</h2>
          <div className="chngicon">
            <a href='.'><img src={circleRight} alt="icon" /></a>
            <a href='.'><img src={circleLeft} alt="icon" /></a>
          </div>
        </div>
        <div className="students">
          <div className="student">
            <div className="coments">
              <div className="bio">
                <div className="studentpic">
                  <img src={student1} alt="studentpic" />
                </div>
                <div className="studentname">
                  <h4>مجتبی یعقوب‌پور</h4>
                  <img src={stars} alt="ratingicon" />
                </div>
              </div>
              <div className="coment">
                <div className="comenticon">
                  <img src={comenticon} alt="comenticon" />
                </div>
                <p>من قبل اینکه وارد کاریار بشوم، کمی سرگردان بودم، نمی‌دانستم  کدام راه را انتخاب کنم و درسم را چه کار کنم. کاریار انگیزه من را برای آن حرفه‌ای که داشتم دنبال می‌کردم، بیشتر کرد.</p>
              </div>
            </div>
          </div>
          <div className="student">
            <div className="coments">
              <div className="bio">
                <div className="studentpic">
                  <img src={student2} alt="studentpic" />
                </div>
                <div className="studentname">
                  <h4>فاطمه خواجه</h4>
                  <img src={stars} alt="ratingicon" />
                </div>
              </div>
              <div className="coment">
                <div className="comenticon">
                  <img src={comenticon} alt="comenticon" />
                </div>
                <p>من فکر می کنم سخت ترین بخش ، همین روند پیدا کردن کار باشد; منتورم در کاریار به من کمک کرد که در مسیر پیدا کردن شغل توانایی‌های خودم را آنطور که هست نشان بدهم و خودم را دست کم نگیرم</p>
              </div>
            </div>
          </div>
          <div className="student">
            <div className="coments">
              <div className="bio">
                <div className="studentpic">
                  <img src={student3} alt="studentpic" />
                </div>
                <div className="studentname">
                  <h4>سهند کریم‌نژاد</h4>
                  <img src={stars} alt="ratingicon" />
                </div>
              </div>
              <div className="coment">
                <div className="comenticon">
                  <img src={comenticon} alt="comenticon" />
                </div>
                <p>بزرگترین دستاورد من از دوره‌های آموزشی کاریار، هدایت من برای ورود به دنیای کار برنامه‌نویسی و آشنا شدن با گزینه های پیش رویم است. کاریار و منتورها خیلی من را آگاه کردند و دیدم نسبت به قبل خیلی بازتر شده است.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mentors container1">
        <div className="headmentor">
          <h2>از داوطلبان کاریار بشنوید</h2>
        </div>
        <div className="bodymentor">
          <div className="mentor2">
            <img src={mentor2} alt="mentorpic" />
          </div>
          <div className="mentor1">
            <img src={mentor1} alt="mentorpic" />
            <h4>امیرحسین کیانی</h4>
            <p>ارشد علوم کامپیوتر دانشگاه استنفورد<br />
              مدیر محصول شرکت گوگل<br />
              منتور کاریار</p>
            <div className="pcaption">
              <p>
                <span className='span1'><img src={comenticon} alt="comenticon" /></span>
                هدف من برای همکاری با کاریار کمک به توسعه‌ی دسترسی افرادی است که دسترسی کمتری به منابع دارند و امیدوارم بتوانم الگوی مثبتی برای کارآموزهای کاریار باشم.
                <span className='span2'><img src={comenticon} alt="comenticon" /></span>
              </p>
            </div>
            <div className="navmentor">
              <a href="."><img src={navmentor2} alt="navmentorpic" /></a>
              <a href="."><img src={navmentor1} alt="navmentorpic" /></a>
              <a href="."><img src={navmentor2} alt="navmentorpic" /></a>
            </div>
            <button>ثبت نام داوطلبان</button>
          </div>
          <div className="mentor3">
            <img src={mentor3} alt="mentorpic" />
          </div>
        </div>
      </div>
      <div className="news container1">
        <div className="headnews">
          <h2>اخبار و دانستنی ها</h2>
          <a href=".">مشاهده همه</a>
        </div>
        <div className="bodynews">
          <div className="newscard">
            <div className="newsimg">
              <img src={zahedan} alt="newspic" />
            </div>
            <div className="newsdetial">
              <h3>در رویداد “تا ... کد” زاهدان چه گذشت </h3>
              <p>۱۰ اسفند ۱۴۰۱</p>
            </div>
            <div className="readmore">
              <a href=".">بیشتر بخوانید</a>
            </div>
          </div>
          <div className="newscard">
            <div className="newsimg">
              <img src={tehran} alt="newspic" />
            </div>
            <div className="newsdetial">
              <h3>رویداد “ یادبگیر و به کار بگیر “ در تهران ، بیرجند و قائن برگزار شد. </h3>
              <p>۱۰ اسفند ۱۴۰۱</p>
            </div>
            <div className="readmore">
              <a href=".">بیشتر بخوانید</a>
            </div>
          </div>
          <div className="newscard">
            <div className="newsimg">
              <img src={data} alt="newspic" />
            </div>
            <div className="newsdetial">
              <h3>مهارت آموزان مسیر آموزشی  تحلیل داده ، پروژه پایانی خود را ارائه دادند. </h3>
              <p>۹ اسفند ۱۴۰۱</p>
            </div>
            <div className="readmore">
              <a href=".">بیشتر بخوانید</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;