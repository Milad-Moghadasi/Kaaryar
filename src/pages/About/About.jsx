import './About.scss';
import firstimg from "../../img/about/about/firstimg.jpg"
import secondimg from "../../img/about/about/secondimg.jpg"
import thirdimg from "../../img/about/about/thirdimg.jpg"
import features from "../../img/about/about/features.png"


function About() {
    return (
        <section className='about container'>
            <h1>درباره کاریار</h1>
            <div className="imgtexts">
                <div className="first">
                    <div className="firsttext">
                        <p>کمی بعد از آغاز پاندمی کرونا و در ابتدای سال۱۳۹۹، بنیانگذاران کاریار با مشاهده اثرات جبران‌ناپذیر کرونا از یک سو، از جمله اختلال در کسب و کارهای بزرگ و کوچک و بیکاری حاصل از آن و از سوی دیگر رونق کسب و کارهای آنلاین‌، تصمیم به راه‌اندازی کاریار گرفتند. بنابراین با تشکیل تیمی مجرب از افراد متخصص و حرفه‌ای در گرایش‌های کارآفرینی، توانمندسازی اقتصادی، مشاوره‌ی مدیریت و سلامت عمومی، استارت‌آپ اجتماعی کاریار تاسیس شد تا با آموزش آنلاین دانش کامپیوتر و به خصوص کدنویسی، فرصت اشتغال از راه دور را برای عموم علاقه‌مندان فراهم کند.</p>
                    </div>
                    <div className="firstimg">
                        <img src={firstimg} alt="firstimg" />
                    </div>
                </div>
                <div className="second">
                    <div className="secondimg">
                        <img src={secondimg} alt="secondimg" />
                    </div>
                    <div className="secondtext">
                        <p>کاریار استارت‌آپی اجتماعی و غیرانتفاعی، متعهد به عدالت، دسترسی و فرصت همگانی است که با ایجاد محیطی با دسترسی مناسب در زمینه‌ی آموزش IT به خصوص کدنویسی، فرصت رشد و پیشرفت را برای تمام اقشار جامعه فارغ از طبقه‌بندی‌های اجتماعی و انتزاعی موجود، فراهم می‌کند.
                            کاریار معتقد است که مشارکت فعال و آگاهانه در جامعه‌ی دیجیتالی امروز، نیازمند یادگیری علوم کامپیوتر است و برای دستیابی به این هدف، همواره تلاش می‌کند موانعی که از ورود و مشارکت جلوگیری می‌کند را شناسایی کرده و از بین ببرد، به این ترتیب دانشجویان فارغ التحصیل شده از کاریار، توانایی مقابله با مشکلات منحصر به فرد عصر دیجیتال و حل مسئله را خواهند داشت.
                            به عبارت دیگر، کاریار فقط آموزش نیست، آموزش معطوف به کسب و کار است.</p>
                    </div>
                </div>
                <div className="third">
                    <div className="thirdtext">
                        <p>ما اعتقاد داریم آموزش IT با استانداردهای جهانی و کیفیت مناسب باید در دسترس عموم باشد و هر فردی فارغ از جنسیت، نژاد، قومیت، هویت، درآمد خانواده، محل زندگی خود و … باید امکان آموزش را داشته باشد.
                            کاریار قصد دارد تا فرصت آموزش را برای تک‌تک افراد با انگیزه و علاقه‌مند به پیشرفت در کشور فراهم کند. برای حرکت در راستای این دیدگاه، با موسسه‌ها و افراد بی‌شماری که به ایجاد، تامین اعتبار و گسترش آموزش علوم کامپیوتر کمک کرده‌اند همکاری می‌کنیم و برای هدایت مهارت‌آموزها در نیل به پروژه‌های نهایی و حل تمرین از گروه داوطلب‌های کاریار بهره می‌جوییم.</p>
                    </div>
                    <div className="thirdimg">
                        <img src={thirdimg} alt="thirdimg" />
                    </div>
                </div>
            </div>
            <h1>ویژگی های متمایز کاریار</h1>
            <div className="features">
                <img src={features} alt="features" />
            </div>
        </section>
    );
}

export default About;