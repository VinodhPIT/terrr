import React from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./tattoosexperience.module.css";

export default function SideBySideContentWithImage({
  mainTitle,
  description,
  title1,
  title2,
  title3,
  title4,
  content1,
  content2,
  content3,
  content4,
  title5,
  content5,
  img1,
  img2,
  img3,
  img4,
  img5,
}) {
  return (
    <section className="img_text_banner_box">
      <div
        className={
          "text_box_wrap right pt_75 pb_75 m_pt_pb_50  block_bg_gray_150"
        }
      >
        <div className="img_text_box_inner container">
          <div className="text_box_content w_100pc justify_content_center p_0 min_h_reset m_pb_0 m_text_center">
            <div className="text_box_content_inner max_w_100pc text_center">
              <h2 className="color_gray_550">{mainTitle}</h2>
              <p className="custom_fs_20 w_1090 max_w_100pc lh_30 custom_fs_m_16 color_gray_550 mb_0">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={`${"text_box_wrap right block_bg_gray_150 pb_75 m_pb_40  m_pt_20"}  ${
              mainTitle === "" ? "pt_75 m_pt_40" : null
            }`}
          >
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_center p_0 pr_40 m_pr_0 m_min_h_reset">
                <div className="text_box_content_inner max_w_100pc m_mt_0">
                  <div className="d_flex flex_direction_column  mt_0 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title1}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">
                      {content1}
                    </p>
                  </div>
                </div>
              </div>

              <div class="img_box_wrap justify_content_center">
                <ul class="justify_content_center pl_0">
                  <li>
                    <Image
                      priority
                      alt="tattoo"
                      src={img1}
                      width={591}
                      height={600}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className={styles.imageResponsive}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="img_text_box_inner container m_switcher">
              <div class="img_box_wrap justify_content_center m_order_2">
                <ul class="justify_content_center pl_0">
                  <li>
                    <Image
                      priority
                      alt="Celebrate Your Love Journey with Unique Partner Tattoos"
                      src={img4}
                      width={591}
                      height={600}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className={styles.imageResponsive}
                    />
                  </li>
                </ul>
              </div>
              <div className="text_box_content justify_content_start align_item_center p_0 pl_40 m_pl_0 m_min_h_reset m_order_1">
                <div className="text_box_content_inner max_w_100pc">
                  <div className="d_flex flex_direction_column  mt_0 m_mt_15 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title2}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">
                      {content2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_center p_0 pr_40 m_pr_0 m_min_h_reset">
                <div className="text_box_content_inner max_w_100pc m_mt_15">
                  <div className="d_flex flex_direction_column  mt_0 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title3}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">
                      {content3}
                    </p>
                  </div>
                </div>
              </div>

              <div class="img_box_wrap justify_content_center">
                <ul class="justify_content_center pl_0">
                  <li>
                    <Image
                      priority
                      alt="tattoo"
                      src={img3}
                      width={591}
                      height={600}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className={styles.imageResponsive}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="img_text_box_inner container m_switcher">
              <div class="img_box_wrap justify_content_center m_order_2">
                <ul class="justify_content_center pl_0">
                  <li>
                    <Image
                      priority
                      alt="Celebrate Your Love Journey with Unique Partner Tattoos"
                      src={img5}
                      width={591}
                      height={600}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className={styles.imageResponsive}
                    />
                  </li>
                </ul>
              </div>
              <div className="text_box_content justify_content_start align_item_center p_0 pl_40 m_pl_0 m_min_h_reset m_order_1">
                <div className="text_box_content_inner max_w_100pc">
                  <div className="d_flex flex_direction_column  mt_0 m_mt_15 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title4}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">
                      {content4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_center p_0 pr_40 m_pr_0 m_min_h_reset">
                <div className="text_box_content_inner max_w_100pc m_mt_15">
                  <div className="d_flex flex_direction_column  mt_0 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title5}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">
                      {content5}
                    </p>
                  </div>
                </div>
              </div>

              <div class="img_box_wrap justify_content_center">
                <ul class="justify_content_center pl_0">
                  <li>
                    <Image
                      priority
                      alt="tattoo"
                      src={img2}
                      width={591}
                      height={600}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className={styles.imageResponsive}
                    />
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
