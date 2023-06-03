import './EducationCourses.scss';
import coursesimg from "../../img/EducationCourses/coursesImg.png"
import backendroadmap from "../../img/EducationCourses/backendroadmap.png"
import brainicon from "../../img/EducationCourses/brain.png"
import python from "../../img/EducationCourses/python.png"
import jango from "../../img/EducationCourses/jango.png"
import communication from "../../img/EducationCourses/communication.png"
import frontendicon from "../../img/EducationCourses/frontendicon.png"
import ICDLicon from "../../img/EducationCourses/ICDLicon.png"
import dataanalysisicon from "../../img/EducationCourses/dataanalysisicon.png"

function EducationCourses() {
  return (
    <section className='EducationCourses'>
      <div className="container">
        <p>کاریار در حال حاضر و با همراهی مدرسین و موسسات آموزشی معتبر در چهار مسیر شغلی از سطح مقدماتی تا پیشرفته دوره‌های آموزشی برگزار می‌کند.</p>
        <div className="courseimg">
          <img src={coursesimg} alt="coursesimg" />
        </div>
        <p>مهارت‌آموزان بعد از ورود به هر کدام از مسیرهای آموزش و اشتغال کاریار، طی مدت ۶ تا ۹ ماه آموزش‌های تخصصی دریافت می‌کنند و با گذراندن دوره‌ی آموزش‌های حرفه‌ای، شامل: <br /> رزومه‌نویسی، مصاحبه شغلی، لینکدین و شبکه‌سازی آماده‌ی ورود به بازار کار می‌شوند.</p>
        <p>و همچنین هر مهارت‌آموز با ثبت نام در دوره‌های آموزشی کاریار یک بسته آموزشی دریافت می‌کند که این بسته آموزشی شامل:</p>
        <p>دوره‌های آموزش تخصصی، دوره‌ی مهارت‌های ارتباطی، کلاس زبان، کلاس‌های آنلاین هفتگی تدریس و حل تمرین ، جلسات ماهانه‌ی مشاوره با منتور و کارگاه‌های جانبی ماهانه در حوزه‌های عمومی و تخصصی است.</p>
        <h1>مسیر آموزش و اشتغال برنامه‌نویسی سمت سرور (بک‌اند) در یک نگاه</h1>
        <div className="backendroadmap">
          <img src={backendroadmap} alt="backendroadmap" />
        </div>
      </div>
      <div className="backendroadmapcards container">
        <div className="roadmapcard container">
          <div className="backendhead">
            <img src={brainicon} alt="brainicon" />
            <h2> دوره مبانی برنامه‌نویسی و تفکر الگوریتمی</h2>
          </div>
          <div className="backendcap">
            تمرکز کاریار با توجه به اهدافی که برای خود در نظر گرفته، بر آموزش برنامه‌نویسی به مهارت‌آموزان است. <br />
            با گذراندن دوره‌ی برنامه‌نویسی، مهارت‌آموزان با مبانی برنامه‌نویسی پایتون و تفکر الگوریتمی آشنا می‌شوند و  با آشنایی با مبانی برنامه‌نویسی،
            مهارت‌آموزان فقط یک زبان برنامه‌نویسی یاد نمی‌گیرند، بلکه یاد می‌گیرند که چگونه با دید برنامه‌نویسی به همه مسائل نگاه کنند. چگونه یک مسئله پیچیده را به مسائل کوچک و ساده‌تر تبدیل کنند و به صورت مدولار برنامه بنویسند و همچنین مهارت‌آموزان یاد می‌گیرند که چگونه کد خود را تست کنند و مطمئن شوند که کد، کاری که باید را انجام می‌دهد. این دوره مقدماتی و پروژه محور میباشد.
          </div>
          <div className="greenline"></div>
          <div className="backenddetail">
            <p><span>مدت زمان :</span> ۳ ماه (حداقل ۲۰ ساعت در هفته )</p>
            <p><span>پیش نیاز :</span> فقط علاقه مند به تفکر ریاضی و اعداد</p>
            <p><span>سرفصل :</span> براساس سیلابس های پلتفرم کوئرا</p>
          </div>

        </div>
        <div className="roadmapcard">
          <div className="backendhead">
            <img src={python} alt="python" />
            <h2> دوره پایتون پیشرفته (گیت/ پایه و اصول برنامه نویسی/ زبان پایتون/ تفکر شی‌گرا)</h2>
          </div>
          <div className="backendcap">
            پایتون زبان مورد علاقه برنامه نویسان است و این دوره‌‌ی آموزش برنامه‌نویسی پایتون و تفکر شی‌گرا، توسط موسسه کوئرا. با هدف ایجاد دید گسترده و عمیق نسبت به مفاهیم برنامه‌نویسی و شی‌گرایی طراحی شده است. این دوره پیشرفته و پروژه محور میباشد.
          </div>
          <div className="greenline"></div>
          <div className="backenddetail">
            <p><span>مدت زمان :</span> ۳ ماه (حداقل ۲۰ ساعت در هفته )</p>
            <p><span>پیش نیاز :</span>گذراندن دوره مبانی برنامه نویسی و تفکر الگوریتمی</p>
            <p><span>سرفصل :</span> براساس سیلابس های پلتفرم کوئرا</p>
          </div>
        </div>
        <div className="roadmapcard">
          <div className="backendhead">
            <img src={jango} alt="jango" />
            <h2>جنگو</h2>
          </div>
          <div className="backendcap">
            فریم ورک جنگو ساده و انعطاف پذیر است و این دوره آموزشی توسط کوئرا برای علاقمندان به بک‌اند طراحی شده است و در آن ابتدا زبان پایتون مرور می‌شود، سپس جزئیات فریم ورک جنگو آموزش داده می‌شود و همچنین همزمان با آموزش تخصصی در این ترم، دوره آموزش حرفه‌ای شامل رزومه نویسی، مصاحبه شغلی، لینکدین و شبکه سازی نیز برگزار می‌شود. این دوره مقدماتی و پروژه محور میباشد.
          </div>
          <div className="greenline"></div>
          <div className="backenddetail">
            <p><span>مدت زمان :</span> ۳ ماه (حداقل ۲۰ ساعت در هفته )</p>
            <p><span>پیش نیاز :</span>گذراندن دوره پایتون پیشرفته</p>
            <p><span>سرفصل :</span> براساس سیلابس های پلتفرم کوئرا</p>
          </div>
        </div>
        <div className="roadmapcard">
          <div className="backendhead">
            <img src={communication} alt="communication" />
            <h2>مهارت‌های ارتباطی</h2>
          </div>
          <div className="backendcap">
            تمامی دوره‌های تخصصی در کاریار با ۱۰ ساعت آموزش‌ مهارت‌های نرم همراه است. مهارت‌های نرم مجموعه‌ای از توانمندی‌های اکتسابی است که فرد را برای حضور در فضای کار حرفه‌ای آماده می‌کند.
          </div>
          <div className="greenline"></div>
          <div className="backenddetail">
            <p><span>مدت زمان :</span> ۳ ماه (حداقل ۲۰ ساعت در هفته )</p>
            <p><span>پیش نیاز :</span>پیش نیازی ندارد اما فقط برای مهارت آموزانی برگزار می‌شود که در یکی دیگر از دوره های تخصصی کاریار ثبت نام کرده باشند.</p>
            <p><span>سرفصل :</span>رفتار و خُلق عمومی، مهارت درون فردی، مهارت بین فردی، توان سازگاری، مدیریت استرس</p>
          </div></div>
      </div>
      <div className="otherheader">
        <h1>سایر دوره های کاریار</h1>
      </div>
      <div className="othercoursecards container">
        <div className="othercoursecard">
          <div className="otherhead">
            <img src={frontendicon} alt="frontendicon" />
            <h3>مسیر آموزش و اشتغال برنامه‌نویسی سمت کاربر (فرانت‌اند)</h3>
          </div>
          <div className="othercap">
            <p>در این دوره شما با زبان‌های HTML, CSS, JavaScript برای طراحی سایت آشنا می‌شوید. همه شرکت‌های بزرگ و کوچک و اشخاص حقیقی و کسب و کارهای خانوادگی به دنبال شما هستند تا سایتی برای آن‌ها طراحی کنید.
            </p>
          </div>
          <div className="otherdetail">
            <ul>
              <li>فرانت‌اند مقدماتی‌(HTML, CSS)</li>
              <li>فرانت‌اند پیشرفته‌(JavaScript)</li>
              <li>React JS</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className="otherseecours">
            <h3><a href=".">مشاهده دوره </a></h3>
          </div>
        </div>
        <div className="othercoursecard">
          <div className="otherhead">
            <img src={ICDLicon} alt="ICDLicon" />
            <h3>مسیر آموزش و اشتغال امور اداری</h3>
          </div>
          <div className="othercap">
            <p>در این دوره با دانش عمومی کامپیوتر، کار با مرورگرهای وب و اینترنت آشنا می‌شوید.
            </p>
          </div>
          <div className="otherdetail">
            <ul>
              <li>مقدماتی ICDL</li>
              <li>ICDL پیشرفته</li>
            </ul>
          </div>
          <div className="otherseecours">
            <h3><a href=".">مشاهده دوره </a></h3>
          </div>
        </div>
        <div className="othercoursecard">
          <div className="otherhead">
            <img src={dataanalysisicon} alt="dataanalysisicon" />
            <h3>تحلیل داده</h3>
          </div>
          <div className="othercap">
            <p>تحلیلگر داده کسی است که می‌تواند از میان انبوه اطلاعات بدون ساختار، پاسخ سؤالات کسب و کاری را پیدا کند.</p>
          </div>
          <div className="otherdetail">
            <ul>
              <li>مبانی برنامه نویسی و تفکر الگوریتمی</li>
              <li>تحلیل داده مقدماتی با پایتون</li>
              <li>تحلیل داده پیشرفته</li>
            </ul>
          </div>
          <div className="otherseecours">
            <h3>
              <a href=".">مشاهده دوره </a></h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EducationCourses;