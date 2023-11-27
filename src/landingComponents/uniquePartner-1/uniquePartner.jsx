import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";

export default function UniquePartner({title ,content ,img ,alt}) {
  return (    
    <section className="img_text_banner_box">
        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right block_bg_gray_150 pt_75 pb_75 m_pt_15 m_pb_0"}>
                    <div className="img_text_box_inner container m_switcher">
                        <div className="text_box_content justify_content_start pr_40 pl_0 pb_0 m_min_h_reset m_pb_35 m_pr_0 m_text_center">
                            <div className="text_box_content_inner">
                                <h2 className="color_gray_550">{title}</h2>
                                <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 ">{content}</p>                       
                            </div>
                        </div>
                        <div className="img_box_wrap justify_content_right m_mt_25 m_mb_15">                  
                            <Image
                                priority
                                alt={alt}
                                src={img}
                                fill
                                objectFit="contain"
                                objectPosition="center"
                                blurDataURL={blurDataURL}
                                
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}
