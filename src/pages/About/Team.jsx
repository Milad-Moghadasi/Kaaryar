import './Team.scss';
import advisor1 from "../../img/about/team/advisors/advisor1.jpg"
import advisor2 from "../../img/about/team/advisors/advisor2.jpg"
import advisor3 from "../../img/about/team/advisors/advisor3.jpg"
import advisor4 from "../../img/about/team/advisors/advisor4.jpg"
import advisor5 from "../../img/about/team/advisors/advisor5.jpg"
import advisor6 from "../../img/about/team/advisors/advisor6.jpg"
import advisor7 from "../../img/about/team/advisors/advisor7.jpg"
import advisor8 from "../../img/about/team/advisors/advisor8.jpg"
import advisor9 from "../../img/about/team/advisors/advisor9.jpg"
import executive1 from "../../img/about/team/executives/executive1.jpg"
import executive2 from "../../img/about/team/executives/executive2.jpg"
import executive3 from "../../img/about/team/executives/executive3.jpg"
import executive4 from "../../img/about/team/executives/executive4.jpg"
import executive5 from "../../img/about/team/executives/executive5.jpg"
import executive6 from "../../img/about/team/executives/executive6.jpg"
import consultant1 from "../../img/about/team/consultant/consultant1.jpg"
import consultant2 from "../../img/about/team/consultant/consultant2.jpg"
import consultant3 from "../../img/about/team/consultant/consultant3.jpg"
import consultant4 from "../../img/about/team/consultant/consultant4.jpg"
import consultant5 from "../../img/about/team/consultant/consultant5.jpg"
import consultant6 from "../../img/about/team/consultant/consultant6.jpg"
import consultant7 from "../../img/about/team/consultant/consultant7.jpg"

function Team() {
    return (
        <section className='team'>
            <div className="container">
                <h1>تیم کاریار</h1>
                <div className="members_advisors">
                    <h2>اعضا و مشاوران هیات مدیره</h2>
                    <div className="advisors">
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor1} alt="advisor1" />
                            </div>
                            <div className="advisordetail">
                                <h5>دکتر محمد حسین بنی اسدی</h5>
                                <p>رییس هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor2} alt="advisor2" />
                            </div>
                            <div className="advisordetail">
                                <h5>فیروزه صابر</h5>
                                <p>عضو هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor3} alt="advisor3" />
                            </div>
                            <div className="advisordetail">
                                <h5>دکتر فرشید اردوانی</h5>
                                <p>عضو هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor4} alt="advisor4" />
                            </div>
                            <div className="advisordetail">
                                <h5>سلمان جریری</h5>
                                <p>عضو هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor5} alt="advisor5" />
                            </div>
                            <div className="advisordetail">
                                <h5>زهرا عمرانی</h5>
                                <p>مدیر عامل و عضو هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor6} alt="advisor6" />
                            </div>
                            <div className="advisordetail">
                                <h5>علیرضا بنی اسدی</h5>
                                <p>مشاور هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor7} alt="advisor7" />
                            </div>
                            <div className="advisordetail">
                                <h5>دکتر یحیی تابش</h5>
                                <p>مشاور هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor8} alt="advisor8" />
                            </div>
                            <div className="advisordetail">
                                <h5>دکتر نرگس بنی اسدی</h5>
                                <p>مشاور هیات مدیره</p>
                            </div>
                        </div>
                        <div className="advisor">
                            <div className="advisorpic">
                                <img src={advisor9} alt="advisor9" />
                            </div>
                            <div className="advisordetail">
                                <h5>دکتر فریبا مهدیون</h5>
                                <p>مشاور هیات مدیره</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="members_executives">
                    <h2>اعضای تیم اجرایی</h2>
                    <div className="executives">
                        <div className="executive">
                            <div className="executivepic">
                                <img src={executive1} alt="executive1" />
                            </div>
                            <div className="executivedetail">
                                <h5>غزل دستوری</h5>
                                <p>مدیر آموزش</p>
                            </div>
                        </div>
                        <div className="executive">
                            <div className="executivepic">
                                <img src={executive2} alt="executive2" />
                            </div>
                            <div className="executivedetail">
                                <h5>مریم راهور</h5>
                                <p>مسئول کارآموزی</p>
                            </div>
                        </div>
                        <div className="executive">
                            <div className="executivepic">
                                <img src={executive3} alt="executive3" />
                            </div>
                            <div className="executivedetail">
                                <h5>فاطمه نقی لو</h5>
                                <p>پشتیبان مهارت آموز</p>
                            </div>
                        </div>
                        <div className="executive">
                            <div className="executivepic">
                                <img src={executive4} alt="executive4" />
                            </div>
                            <div className="executivedetail">
                                <h5>افسانه شعبانی</h5>
                                <p>مسئول دفتر</p>
                            </div>
                        </div>
                        <div className="executive">
                            <div className="executivepic">
                                <img src={executive5} alt="executive5" />
                            </div>
                            <div className="executivedetail">
                                <h5>صمد قنبری</h5>
                                <p>مسئول فنی</p>
                            </div>
                        </div>
                        <div className="executive">
                            <div className="executivepic">
                                <img src={executive6} alt="executive6" />
                            </div>
                            <div className="executivedetail">
                                <h5>مهتاب فرجی</h5>
                                <p>مدیر پروژه</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="members_consultants">
                    <h2>مشاوران کاریار</h2>
                    <div className="consultants">
                        <div className="consultant">
                            <div className="consultantpic">
                                <img src={consultant1} alt="consultant1" />
                            </div>
                            <div className="consultantdetail">
                                <h5>دکتر آرزو افشار</h5>
                                <p>مسئول و مشاور کمیته ی منتورها</p>
                            </div>
                        </div>
                        <div className="consultant">
                            <div className="consultantpic">
                                <img src={consultant2} alt="consultant2" />
                            </div>
                            <div className="consultantdetail">
                                <h5>امیرحسین کیانی</h5>
                                <p>عضو کمیته تولید محتوا و منتور</p>
                            </div>
                        </div>
                        <div className="consultant">
                            <div className="consultantpic">
                                <img src={consultant3} alt="consultant3" />
                            </div>
                            <div className="consultantdetail">
                                <h5>پویا احسانی</h5>
                                <p>عضو کمیته تولید محتوا و منتور</p>
                            </div>
                        </div>
                        <div className="consultant">
                            <div className="consultantpic">
                                <img src={consultant4} alt="consultant4" />
                            </div>
                            <div className="consultantdetail">
                                <h5>وحید ترابی</h5>
                                <p>مشاور و منتور</p>
                            </div>
                        </div>
                        <div className="consultant">
                            <div className="consultantpic">
                                <img src={consultant5} alt="consultant5" />
                            </div>
                            <div className="consultantdetail">
                                <h5>یاسمن شیریان</h5>
                                <p>مشاور کمیته ی داوطلب ها</p>
                            </div>
                        </div>
                        <div className="consultant">
                            <div className="consultantpic">
                                <img src={consultant6} alt="consultant6" />
                            </div>
                            <div className="consultantdetail">
                                <h5>محسن هجرتی</h5>
                                <p>عضو کمیته تولید محتوا و منتور</p>
                            </div>
                        </div>
                        <div className="consultant">
                            <div className="consultantpic">
                                <img src={consultant7} alt="consultant7" />
                            </div>
                            <div className="consultantdetail">
                                <h5>حانیه فلاح</h5>
                                <p>مشاور مددکاری</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;