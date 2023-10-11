import React from "react";
import styles from "@/pages/tattoo/tattoodetail.module.css";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import style from "@/components/styles/listing.module.css";
import NoData from './noData'

const Flash = ({ data }) => {
 
  return (
    <div className={styles.galleryWrapper} >
      {data.length == 0 ? <div className={style.blockCenter}>   <NoData/>  </div>:
      
        <div className={styles.grid_wrapper_tattoo}>
          {data.map((item) => (
            <Link
              href={`/flash/${item.tattoo_uid}`}
              className={styles.listing_gridItem}
              key={item.tattoo_uid}
            >
              <Image
                alt={item.tattoo_type}
                priority
                src={item.image}
                fill
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />

{item.min_price !== null && item.max_price !== null ? (
  <div className={styles.priceBox}>
    <p style={{ margin: "0" }}>
    {item.currency.code} {item.min_price} - {item.max_price}
    </p>
  </div>
) : item.min_price !== null ? (
  <div className={styles.priceBox}>
    <p style={{ margin: "0" }}>
      {item.currency.code} {item.min_price}
    </p>
  </div>
) : null}



            </Link>
          ))}
        </div>
}
    </div>
  );
};

export default Flash;
