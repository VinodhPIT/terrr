import React from 'react';
import Modal from 'react-modal';
import {APP_LINK_APPLE,APP_LINK_GOOGLE} from '@/constants/constants'
import useTranslation from "next-translate/useTranslation";



import Link from 'next/link';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(6, 6, 6, 0.78)', 
    zIndex: 1000, 
  },
  content: {
    border: 'none', 
    background: 'transparent', 
    maxWidth: '800px', 
    margin: '0 auto', 
    padding: '0px',
    top:'0',
    bottom: '0px',
    right:'0px',
    left: '0px',
    overflow: 'inherit',
    maxHeight: 'inherit',
    borderRadius: '8px'
  },
};
const TattooSearchModalPopup = ({ isOpen, closeModal }) => {

  const { t } = useTranslation();



  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    style={customStyles} 
    ariaHideApp={false}
    >
      <div className='popup_wrap'>        
        <div className="popup_container">
          <div className="popup_box_inner">
          <button className="close_button" onClick={closeModal}>
            <img src="/popup-close.svg" alt="close"/>        
          </button>
            <div className="popup_left justify_content_center block_bg_orange">
              <img src="/mockup-iPhone-business-popup.png" alt="Manage your business" className="w_auto max_w_100pc object_fit_contain object_position"/>
            </div>
            <div className="popup_right">        
              <div className="popup_right_content">
                <div className="popup_logo">
                  <img src="/Inckd-logo-black.svg" alt="Picture of the author"/>
                </div>
                <div className="popup_content_wrap">
                  <h2><span>{t("common:explore-the")}</span>
                  
                  <span className='textBlock'>{t("common:featuresApp")}</span>
                  </h2>
                  <ul class="download_app">
                    <li class="download_app_title">
                      <h6>{t("common:downloadOurApp")}</h6>
                    </li>
                    <li>
                      <Link target="_blank" href={APP_LINK_APPLE}>
                        <img src="/app-store-new.svg" alt="Appstore" />
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" href={APP_LINK_GOOGLE}>
                        <img src="/g-play-new.svg" alt="Googleplay" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Modal>
  );
};

export default TattooSearchModalPopup;
