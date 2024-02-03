import Link from 'next/link';
import React from 'react';
import styles from "./footer.module.css"

const Footer = () => {
    return (
        
            <footer className={`${styles.container} bg-slate-200 flex flex-wrap justify-around flex-col lg:flex-row mt-9`}>
                <div className="m-2">
                    <ul>
                        <li>آدرس:تهران خ تهران پلاک 10 </li>
                        <li>تلفن : 0912000000</li>
                        <li>اینستاگرام:@test </li>
                    </ul>
                </div>
                <div className="m-2">
                    <ul>
                        <li><Link href="/contact">صفحه اصلی</Link></li>
                        <li><Link href="/contact">محصولات</Link></li>
                        <li><Link href="/contact">مقالات</Link></li>
                        <li><Link href="/contact">ارتباط با ما</Link></li>
                    </ul>

                </div>
                <div className="m-2">
                    <ul>
                        <li>ارسال رایگان</li>
                        <li>پرداخت ایمن</li>
                    </ul>
                    
                </div>
                <div className="m-2">
                    <p>ساعت کاری فروشگاه شنبه تا چهارشنبه 10 صبح تا 10 شب</p>
                    
                </div>
            </footer>
        
    );
};

export default Footer;