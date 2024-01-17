import React from 'react'
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (   
    <header className="header_wrapper db_header_wrap">
        <div>
          <div className="container_full pl_15">
            <nav className="header_dashboard">
              <div className="header_logo_nav">
                <div className="header_logo">
                  <Link href="#" className="navbar_brand">
                    <Image
                      src="/Inckd-logo-footer-black.svg"
                      alt="Logo"
                      width="105"
                      height="31"
                      priority
                    />
                  </Link>
                </div>
                <div className="header_db_title">
                  <h4>Customer analytics</h4>
                </div> 
              </div>
              <div className="nav_block db_navigation">
                  <ul className="nav main_nav navbar_collapse collapse">
                    <li className="nav_item active">
                      <Link href="#">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link href="#">
                        Menu 2
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link href="#">
                        Menu 3
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link href="#">
                        Menu 4
                      </Link>
                    </li>
                  </ul>
                </div>
              <div className="header_right">
                <div className="db_user_profile">
                  <a href="#">
                    <span>Hello, Fabian</span>
                    <Image
                      src="/db_user_1.png"
                      alt="user"
                      width="40"
                      height="40"
                      priority
                    />     
                  </a>
                </div>                
              </div>
            </nav>
          </div>
        </div>
      </header>
  )
}