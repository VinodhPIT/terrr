import Link from "next/link";
import Image from "next/image";
import DownloadApps from "../DownloadApps-klarna/DownloadApps";
import style from "./style.module.css";
import {
  blurDataURL,
} from "@/constants/constants";
import useTranslation from "next-translate/useTranslation";


function Offerdownload({data}) {

  const { t } = useTranslation();
  return (
    <div>
      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper exciting_offer_wrap">
            <div class="text_box_wrap right">
              <div class="img_text_box_inner m_switcher">
                <div class="text_box_content justify_content_center m_pt_15 m_pb_15">
                  <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="exciting_offer_block">
                    {data == "" ? (
                        <h3 className="color_gray_550"> Invalid Voucher</h3>
                      ) : 
                      <div className="exciting_offer_wrap">
                      <span className={`${"d_inline_block"} ${style.refer_earn_block}`}>
                        <p>Download the inckd app to get a voucher of </p>
                      </span>                      
                      <div className="exciting_offer_price">
                        <h2 className="title_exciting_price">CHF {data.amount}</h2>
                      </div>
                      <div className="exciting_offer_coupon">
                        <span>Use code</span>
                        <div className="exciting_offer_coupon_code">
                          INCKDME
                        </div>
                        <span className="exciting_offer_coupon_msg">Voucher ends on: 12-08-2023</span>
                      </div>
                      <div class="exciting_offer_social">
                        <ul>
                          <li class="exciting_offer_social_title">Join us with</li>
                          <li>
                            <a target="_blank" href="https://www.instagram.com/inckd_com/">
                              <img src="/insta-coupon.svg" alt="Instagram" />
                              <span>Instagram</span>
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="https://www.facebook.com/inckdcom/">
                              <img src="/facebook-coupon.svg" alt="Facebook" />
                              <span>Facebook</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>  } 
                    </div>                         
                  </div>
                </div>
                <div class="img_box_wrap custom_download_shadow desk_no_shadow">
                  <Image
                    priority
                    src="/pexels-ozan-çulha-15020584.png"
                    alt="Download the inckd app to get a voucher of"
                    width={612}
                    height={752}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                    className="mob_hidden"
                  />
                  <Image
                    priority
                    src="/pexels-ozan-çulha-15020584-m.png"
                    alt="Download the inckd app to get a voucher of"
                    width={375}
                    height={220}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                    className="desk_hidden"
                  />
                </div>
              </div>
            </div>
          </div>
          <DownloadApps title="Download the" subTitle="App & Explore more!"  bgColor='block_bg_white'/>
        </div>
      </section>
      
    </div>
  )
}
export default Offerdownload