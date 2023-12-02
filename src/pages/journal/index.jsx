import React ,{useState,useEffect}from "react";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./listing.module.css"
import path from "path";
import fs from "fs";
import {useRouter} from 'next/router'


export default function ListingPage({ data, locale }) {




  const [listing, setListing] = useState([]);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!data[locale] || !Array.isArray(data[locale]) || data[locale].length === 0) {
    
        setError(true)
      
    } else {
      setListing(data[locale]);
      setError(false)
    }

  
   
  }, [data, locale, router ,error]);

 


  return ( 
    <div>

      <div className={styles.banner_block}>
        <div className={styles.banner_wrap}>
          <div className={styles.banner_item}>
            <div className={styles.banner}>
              <div className={styles.banner_inner}>
                <Image
                  src="/discover-unforgettable.png"
                  alt="banner"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  fill
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </div>
            </div>
            <div className={`${""} ${styles.banner_content}`}>
              <div className={styles.banner_caption}>
                <h1>
                  <span className="m_dis_inline">Discover Unforgettable </span>
                  <span className="textBlock m_dis_inline">Partner Tattoos with inckd</span>
                </h1>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">                                                  
                    <div className={`${'mt_65 mb_80 m_mb_30 m_mt_25'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>  


         {error ===  true ?  null :              

   listing.map((el)=>{

return (
<div className={styles.listing_gridItem} key={el.id}>
<Link href={`/${router.locale}/${el.url}`}>
                              <div className={styles.listing_grid_img_col}>
                               
                                  <Image
                                    src={el.imageUrl}
                                    alt="Partner tattoo artists near me"
                                    width={752}
                                    height={480}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL={blurDataURL}
                                    layout="responsive"
                                  />
                                
                                <div className={styles.listing_grid_brand}>
                              <p style={{"margin":"0",color:"#000"}}>{el.tagTitle}</p>   
                                </div>
                              </div>      
                              <div className={styles.listing_grid_content_wrap}>
                                
                                  <h5>{el.title}</h5>
                                
                                <p>{el.desc} </p>
                                <div className="w_100pc d_flex justify_content_end">
                                  <Link href={el.url} className="btn_primary btn_img btn_custom_48">
                                    Read more
                                    <Image
                                      src="/arow-white-right.svg"
                                      width={24}
                                      height={24}
                                      alt="logo"
                                      loading="lazy"
                                      placeholder="blur"
                                      blurDataURL={blurDataURL}
                                      className="ml-8 mt-2"
                                    />
                                  </Link>
                                </div>
                              </div>
                              </Link>
                          </div>


)






   })}




                          

                        

                          
                          
                          

                        


                        
                          
                        </div>                        
                    </div>
                </div>
            </div>  
        </div>
    </section>  
      
      

    </div>

  );
}


export async function getServerSideProps(context) {
  const filePath = path.join(process.cwd(), "src", "data", "journal.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

 

  return {
    props: {
      data,
      locale: context.locale,
    },
  };
}