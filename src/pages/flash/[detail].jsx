import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/tattoo/tattoodetail.module.css";
import { fetchTattooDetail } from "@/action/action";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import { fetchArtistDetail } from "@/action/action";
import Link from "next/link";
import style from "@/pages/search/search.module.css";
import { useGlobalState } from "@/context/Context";
import SearchField from "@/components/tattooSearch/tattooSearch";
import { useRouter } from "next/router";
import TattooSearchModalPopup from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import useTranslation from "next-translate/useTranslation";

export default function Detail({ data, status, locale }) {
  const router = useRouter();
  const { state, getLocale ,styleCollection } = useGlobalState();
  const { isPopupOpen, openPopup, closePopup } = useModal();

  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [tattoo, setTattoo] = useState([]);
  const [getStyle, setStyle] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    styleCollection()
    
    try {
      getLocale({
        locale,
      });
    } catch (error) {}
  }, [locale]);

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (!data) {
      return null;
    } else {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetchArtistDetail(data.artist.slug);
          setTattoo(res.data.tattoo);
          setStyle(res.data.style);
          setLocation(res.data.studio);
        } catch (error) {}
        setLoading(false);
      };
      fetchData();
    }
  }, []);

  if (!data) {
    return null;
  }

  const searchStyle = (searchStyle) => {
    router.push(`/search?term=${""}&category=${"flash"}&style=${searchStyle}`);
  };

 
  return (
    <>
     <Head>
        <title>
        Browse unique tattoo designs by talented tattoo artists
        </title>
         <meta
          name="description"
          content="Explore a diverse range of one-of-a-kind tattoo designs created by exceptionally talented artists. Find your perfect tattoo inspiration in our extensive collection"
        />
        <meta
          name="keywords"
          content="Tattoo artist designs, Tattoo Designs, Flash Tattoos, Custom Tattoo designs, Find tattoo designs, Tattoo inspiration gallery, Tattoartist, Tattoo"
        />
      </Head> 
      <main>
        <div className="page_wrapper">
          <div className="container">
            <div className={style.filter_container}>
              <div className={style.tattoo_search_wrap}>
                <div className={style.search_form}>
                  <div className="search_form_wrap">
                    <SearchField currentTab={"flash"} />
                  </div>
                </div>
              </div>

              <div className={style.main_wrap}>
                <div className={style.wrapper_filter}>
                  <img
                    src="/setting_tuning.svg"
                    alt="location"
                    className={style.filter_icon}
                  />
                  <select
                    onChange={(event) => searchStyle(event.target.value)}
                    value={state.selectedStyle}
                  >
                    <option value="0">Choose Style</option>
                    {state.styleCollection.map((el) => (
                      <option key={el._id} value={el._id}>
                        {el.sort[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.product_detail_wrap}>
              <div className={styles.back_arrow}>
                <Image
                  src={"/back-arrow.svg"}
                  alt="backArrow"
                  width={44}
                  height={44}
                  priority
                  style={{ cursor: "pointer" }}
                  onClick={goBack}
                />
              </div>

              <div className={styles.product_media}>
                <Image
                  alt={data.style.name}
                  priority
                  src={data.tattoo.image}
                  height={200}
                  width={200}
                  sizes="100vw"
                  style={{
                    height: "auto",
                    width: "100%",
                  }}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>

              <div className={styles.product_info_col}>
                <div className={styles.search_profile_block}>
                  <div className={styles.search_profile_pic}>
                    <Image
                      alt={"data.tattoo.image"}
                      priority
                      src={data.artist.profile_image}
                      width={100}
                      height={100}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                  <div className={styles.search_profile}>
                    <div className={styles.search_profile_content}>
                      <div className={styles.search_profile_name}>
                        {data.artist.artist_name}
                      </div>
                    </div>
                    <div className={styles.search_profile_link}>
                      <Link
                        href={`/artists/${data.artist.slug}`}
                        className={styles.profile_getin}
                      >
                        {t("common:viewProfile")}
                      </Link>
                      <a
                        onClick={openPopup}
                        target="_blank"
                        className={styles.profile_bookmark}
                      >
                        <img src="/bookmark-icon.svg" alt="bookmark icon" />
                      </a>
                      <a
                        onClick={openPopup}
                        target="_blank"
                        className={styles.profile_share}
                      >
                        <img src="/share-icon.svg" alt="share icon" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.product_style}>
                  <span className={styles.product_style_label}>
                    {t("common:image-tattoo-style")}
                  </span>

                  {getStyle.length > 0 && (
                    <ul className={styles.product_style_list}>
                      {getStyle.map((e) => {
                        return (
                          <li key={e.id}>
                            {" "}
                            <Link
                              href={`/search?term=${
                                e.name
                              }&category=${"flash"}`}
                            >
                              {" "}
                              {e.name}{" "}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                <div className={styles.product_detail_location}>
                  <span className={styles.product_location_label}>
                    {t("common:locations")}
                  </span>
                  <div className={styles.product_location_list}>
                    {location.length > 0 &&
                      location.map((el) => {
                        return (
                          <span
                            className={styles.product_loc_title}
                            key={el.studio_uid}
                          >
                            <img
                              src="/location-small.svg"
                              alt="Berlin, Germany"
                            />
                            {el.city}, {el.country}
                          </span>
                        );
                      })}
                  </div>
                </div>

                <div className={styles.product_price_block}>
                  <div className={styles.product_price_wrap}>
                    {data.tattoo.max_price !== null ||
                    data.tattoo.min_price !== null ? (
                      <div>
                        {data.tattoo.min_price !== null && (
                          <span>
                            <span className={styles.product_price_label}>
                              {data.tattoo.max_price !== null
                                ? t("common:flexible-price")
                                : t("common:fixed-price")}
                            </span>

                            <span className={styles.product_price_value}>
                              {data.currency.code} {data.tattoo.min_price}
                            </span>
                          </span>
                        )}

                        {data.tattoo.max_price !== null &&
                          data.tattoo.min_price !== null && (
                            <span className={styles.product_price_to}>to</span>
                          )}

                        {data.tattoo.max_price !== null && (
                          <span className={styles.product_price_value}>
                            {data.currency.code} {data.tattoo.max_price}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div>
                        <span className={styles.product_price_label}>
                          {t("common:flash-doesn't-price")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <ul className={styles.download_app}>
                  <li className={styles.download_app_title}>
                    <h6>{t("common:download-our-app")}</h6>
                  </li>
                  <li>
                    <Link target="_blank" href={APP_LINK_APPLE}>
                      <img src="/app-store-new.svg" alt="app store" />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href={APP_LINK_GOOGLE}>
                      <img src="/g-play-new.svg" alt="g play" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.titleWrapper}>
              <h1>{t("common:you-might-like")}</h1>
            </div>

            {loading === true ? null : tattoo && tattoo.length > 0 ? (
              <div className={styles.grid_wrapper_tattoo}>
                {tattoo.map((item) => (
                  <Link
                    href={`/flash/${item.tattoo_uid}`}
                    className={styles.listing_gridItem}
                    key={item.tattoo_uid}
                  >
                    <Image
                      alt={item.style_name}
                      priority
                      src={item.image_medium}
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <TattooSearchModalPopup
            className="custom-modal"
            isOpen={isPopupOpen}
            closeModal={closePopup}
          />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await fetchTattooDetail(context.query.detail);

    if (!data.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: data.data,
        status: true,
        locale: context.locale,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
