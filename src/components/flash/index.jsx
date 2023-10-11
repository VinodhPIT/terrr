import React from "react";
import Image from "next/image";
import PageLoad from "@/components/pageLoad";
import { useGlobalState } from "@/context/Context";
import styles from "@/components/styles/listing.module.css";
import NoData from "@/components/noDatafound/noData";
import { blurDataURL } from "@/constants/constants";
import ArtistAdd from "../adds/artistAdd";
import KlarnaAdd from "../adds/klarnaAdd";
import Offer from "../adds/offer";
import Link from "next/link";

export default function Flash({ data }) {
  const { state } = useGlobalState();

  return (
    <div className={styles.pageContainer}>
      {state.loading ? (
        <div className={styles.blockCenter}>
          <PageLoad />
        </div>
      ) : data.length === 0 ? (
        <div className={styles.blockCenter}>
          <NoData category={"flash"} />
        </div>
      ) : (
        <div className={styles.grid_wrapper_tattoo}>
          {data.map((item, idx) => {
            const key = item._index === "ad" ? `ad-${idx}` : item._id;
            return item._index === "ad" ? (
              item.add === 1 ? (
                <ArtistAdd />
              ) : item.add === 2 ? (
                <KlarnaAdd />
              ) : (
                <Offer />
              )
            ) : (
              <Link
                href={`/flash/${item._source.tattoo_uid}`}
                className={styles.listing_gridItem}
                key={key}
              >
                <Image
                  priority={true}
                  src={item._source.image}
                  fill
                  objectFit="cover"
                  alt={item._source.style._source.name}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />

                {item._source.min_price && (
                  <div className={styles.priceBox}>
                    <p style={{ margin: "0" }}>
                      {item._source.min_price} {item._source.currency.code}
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
