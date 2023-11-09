import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
   return (
      <div
         className="header-wrap flex items-center"
         style={{
            backgroundImage:
               "url(http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-2.jpg)",
         }}
      >
         <header className="header">
            <div className="flex w-full items-center h-full">
               <div className="header-logo">
                  <a href="#" className="header-logo__link">
                     <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo.png"
                        alt=""
                        className="header-logo__img"
                     />
                  </a>
               </div>
               <nav className="header__navbar flex items-center justify-end flex-1">
                  <ul className="header__navbar-list">
                     <li className="header__navbar-item">
                        <a href="" className="header__navbar-link">
                           HOME
                        </a>
                     </li>
                     <li className="header__navbar-item header__navbar-item--active">
                        <a href="" className="header__navbar-link ">
                           PACKAGES
                        </a>
                        <ul className="header__navbar__sub-list">
                           <li className="header__navbar__sub-item ">
                              <a
                                 href=""
                                 className="header__navbar__sub-link header__navbar__sub-link--hot"
                              >
                                 Search 1
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Search 2
                              </a>
                           </li>
                           <li className="header__navbar__sub-item header__navbar__sub-item--active">
                              <a href="" className="header__navbar__sub-link">
                                 Tour Package
                                 <i className="fas fa-caret-right header__navbar__sub-link-icon"></i>
                              </a>
                              <ul className="header__navbar__sub-options">
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Carousel
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Custom Map
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       360° Panorama
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Default
                                    </a>
                                 </li>
                              </ul>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Destination
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Typology
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="header__navbar-item header__navbar-item--active">
                        <a href="" className="header__navbar-link">
                           SHOP
                        </a>
                        <ul className="header__navbar__sub-list">
                           <li className="header__navbar__sub-item ">
                              <a href="" className="header__navbar__sub-link ">
                                 Archive
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Single Product
                              </a>
                           </li>
                           <li className="header__navbar__sub-item header__navbar__sub-item--active">
                              <a href="" className="header__navbar__sub-link">
                                 Cart
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Checkout
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="header__navbar-item header__navbar-item--active">
                        <a href="" className="header__navbar-link ">
                           ABOUT US
                        </a>
                        <ul className="header__navbar__sub-list">
                           <li className="header__navbar__sub-item ">
                              <a
                                 href=""
                                 className="header__navbar__sub-link header__navbar__sub-link--new"
                              >
                                 About Us
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 About Us 2
                              </a>
                           </li>
                           <li className="header__navbar__sub-item header__navbar__sub-item--active">
                              <a href="" className="header__navbar__sub-link">
                                 About Us 3
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="header__navbar-item header__navbar-item--active">
                        <a href="" className="header__navbar-link">
                           PAGES
                        </a>
                        <ul className="header__navbar__sub-list">
                           <li className="header__navbar__sub-item ">
                              <a href="" className="header__navbar__sub-link">
                                 Services
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Agency Tours
                              </a>
                           </li>
                           <li className="header__navbar__sub-item header__navbar__sub-item--active">
                              <a href="" className="header__navbar__sub-link">
                                 Testimonials
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Prices
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Promotions
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Faq
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Coming Soon
                              </a>
                           </li>
                           <li className="header__navbar__sub-item header__navbar__sub-item--active">
                              <a href="" className="header__navbar__sub-link">
                                 About Us
                                 <i className="fas fa-caret-right header__navbar__sub-link-icon"></i>
                              </a>
                              <ul className="header__navbar__sub-options">
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       About Us 1
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       About Us 2
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       About Us 3
                                    </a>
                                 </li>
                              </ul>
                           </li>
                           <li className="header__navbar__sub-item header__navbar__sub-item--active">
                              <a href="" className="header__navbar__sub-link">
                                 Contact
                                 <i className="fas fa-caret-right header__navbar__sub-link-icon"></i>
                              </a>
                              <ul className="header__navbar__sub-options">
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Contact 1
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Contact 2
                                    </a>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                     <li className="header__navbar-item header__navbar-item--active">
                        <a href="" className="header__navbar-link ">
                           NEWS
                        </a>
                        <ul className="header__navbar__sub-list">
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Archive
                              </a>
                           </li>
                           <li className="header__navbar__sub-item header__navbar__sub-item--active">
                              <a href="" className="header__navbar__sub-link">
                                 Single Post
                                 <i className="fas fa-caret-right header__navbar__sub-link-icon"></i>
                              </a>
                              <ul className="header__navbar__sub-options">
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Full Width
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Right Sidebar
                                    </a>
                                 </li>
                                 <li className="header__navbar__sub-options-item">
                                    <a
                                       href=""
                                       className="header__navbar__sub-options-link"
                                    >
                                       Left Sidebar
                                    </a>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                     <li className="header__navbar-item header__navbar-item--active">
                        <a href="" className="header__navbar-link">
                           CONTACT
                        </a>
                        <ul className="header__navbar__sub-list">
                           <li className="header__navbar__sub-item ">
                              <a href="" className="header__navbar__sub-link ">
                                 Contact 1
                              </a>
                           </li>
                           <li className="header__navbar__sub-item">
                              <a href="" className="header__navbar__sub-link">
                                 Contact 2
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="header__navbar-item">
                        <a href="" className="header__navbar-link ">
                           BOOK NOW
                        </a>
                     </li>
                  </ul>
               </nav>
               <a
                  id="header-options-menu"
                  className="header-menu mr-20  transition-all rounded-full"
               >
                  <FontAwesomeIcon className="header-menu-bar" icon={faBars} />
               </a>
            </div>
            <div className="header-options__selection">
               <i className="far fa-times-circle header-options__selection-close"></i>
               <div className="header-options__selection-wrap">
                  <h3 className="header-options__selection-sub-heading">
                     BEST
                  </h3>
                  <h2 className="header-options__selection-heading">
                     <div className="header-options__selection-heading-text">
                        PACKAGES
                     </div>
                  </h2>
                  <ul className="header-options__selection-list">
                     <li className="header-options__selection-item">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-1-150x150.jpg"
                           alt=""
                           className="header-options__selection-img"
                        />
                        <div className="header-options__selection-item-body">
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-heading">
                                 Berlin
                              </h3>
                           </a>
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-sub-heading">
                                 <i className="fas fa-map-marker-alt header-options__selection-item-icon"></i>
                                 Europe
                              </h3>
                           </a>
                           <a href="" className="btn btn--yellow">
                              FROM 700 $
                           </a>
                        </div>
                     </li>
                     <li className="header-options__selection-item">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/package-6-150x150.jpg"
                           alt=""
                           className="header-options__selection-img"
                        />
                        <div className="header-options__selection-item-body">
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-heading">
                                 Hong Kong
                              </h3>
                           </a>
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-sub-heading">
                                 <i className="fas fa-map-marker-alt header-options__selection-item-icon"></i>
                                 Asia
                              </h3>
                           </a>
                           <a href="" className="btn btn--red">
                              FROM 500 $
                           </a>
                        </div>
                     </li>
                     <li className="header-options__selection-item">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-2-150x150.jpg"
                           alt=""
                           className="header-options__selection-img"
                        />
                        <div className="header-options__selection-item-body">
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-heading">
                                 San Francisco
                              </h3>
                           </a>
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-sub-heading">
                                 <i className="fas fa-map-marker-alt header-options__selection-item-icon"></i>
                                 United States
                              </h3>
                           </a>
                           <a href="" className="btn btn--purple">
                              FROM 400 $
                           </a>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="header-options__selection-area-wrap">
                  <div className="header-options__selection-area-content">
                     <div className="header-options__selection-area-content-wrap"></div>
                     <div className="header-options__selection-area-content-around">
                        <h3 className="header-options__selection-area-name">
                           Europe
                        </h3>
                        <h3 className="header-options__selection-area-amount-packages">
                           3 PACKAGES
                        </h3>
                     </div>
                     <div className="header-options__selection-area-content-in">
                        <h3 className="header-options__selection-area-content-heading">
                           Packages
                        </h3>
                        <div className="header-options__selection-area-content-heading-list-heading">
                           <a
                              href=""
                              className="header-options__selection-area-content-heading-item"
                           >
                              Berlin
                           </a>
                           <a
                              href=""
                              className="header-options__selection-area-content-heading-item"
                           >
                              Amsterdam
                           </a>
                           <a
                              href=""
                              className="header-options__selection-area-content-heading-item"
                           >
                              Tuscany
                           </a>
                        </div>
                        <a
                           href=""
                           className="btn header-options__selection-area-content-in-btn"
                        >
                           VIEW DESTINATION
                        </a>
                     </div>
                  </div>
               </div>
               <div className="header-options__selection-wrap">
                  <h3 className="header-options__selection-sub-heading">
                     LAST
                  </h3>
                  <h2 className="header-options__selection-heading">
                     <div className="header-options__selection-heading-text">
                        MINUTES
                     </div>
                  </h2>
                  <ul className="header-options__selection-list">
                     <li className="header-options__selection-item">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/package-5-150x150.jpg"
                           alt=""
                           className="header-options__selection-img"
                        />
                        <div className="header-options__selection-item-body">
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-heading">
                                 Tuscany
                              </h3>
                           </a>
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-sub-heading">
                                 <i className="fas fa-map-marker-alt header-options__selection-item-icon"></i>
                                 Italy
                              </h3>
                           </a>
                           <a href="" className="btn btn--green">
                              FROM 730 $
                           </a>
                        </div>
                     </li>
                     <li className="header-options__selection-item">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-4-150x150.jpg"
                           alt=""
                           className="header-options__selection-img"
                        />
                        <div className="header-options__selection-item-body">
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-heading">
                                 Amsterdam
                              </h3>
                           </a>
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-sub-heading">
                                 <i className="fas fa-map-marker-alt header-options__selection-item-icon"></i>
                                 Netherlands
                              </h3>
                           </a>
                           <a href="" className="btn btn--brown">
                              FROM 1500 $
                           </a>
                        </div>
                     </li>
                     <li className="header-options__selection-item">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-3-150x150.jpg"
                           alt=""
                           className="header-options__selection-img"
                        />
                        <div className="header-options__selection-item-body">
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-heading">
                                 Phuket
                              </h3>
                           </a>
                           <a
                              href=""
                              className="header-options__selection-link"
                           >
                              <h3 className="header-options__selection-item-sub-heading">
                                 <i className="fas fa-map-marker-alt header-options__selection-item-icon"></i>
                                 Thailandia
                              </h3>
                           </a>
                           <a href="" className="btn btn--blue">
                              FROM 1200 $
                           </a>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </header>
         <div className="wrap-middle">
            <h1 className="wrap-middle__heading">Search your next Holiday</h1>
            <h2 className="wrap-middle__sub-heading">
               CHECK OUR BEST PROMOTIONS
            </h2>
            <select className="btn wrap-middle__btn">
               <option value="0" className="wrap-middle__btn-text ">
                  Choose your Destination ...
               </option>
               <option value="1" className="wrap-middle__btn-text ">
                  Europe
               </option>
               <option value="2" className="wrap-middle__btn-text ">
                  - Italy
               </option>
               <option value="3" className="wrap-middle__btn-text ">
                  - Netherlands
               </option>
               <option value="4" className="wrap-middle__btn-text ">
                  Asia
               </option>
               <option value="5" className="wrap-middle__btn-text ">
                  - Thailandia
               </option>
               <option value="6" className="wrap-middle__btn-text ">
                  United States
               </option>
               <option value="7" className="wrap-middle__btn-text ">
                  Oceania
               </option>
            </select>
            <ul className="wrap-middle__list">
               <li className="wrap-middle__item">
                  <div className="wrap-middle__item-content">
                     <a
                        href=""
                        className="wrap-middle__item-link flex flex-col items-center justify-center"
                     >
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/t-relax.png"
                           alt=""
                           className="wrap-middle__item-img"
                        />
                        <h6 className="wrap-middle__item-text">RELAX</h6>
                     </a>
                  </div>
               </li>
               <li className="wrap-middle__item">
                  <div className="wrap-middle__item-content">
                     <a
                        href=""
                        className="wrap-middle__item-link  flex flex-col items-center justify-center"
                     >
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/t-cultural.png"
                           alt=""
                           className="wrap-middle__item-img"
                        />
                        <h6 className="wrap-middle__item-text">CULTURAL</h6>
                     </a>
                  </div>
               </li>
               <li className="wrap-middle__item">
                  <div className="wrap-middle__item-content">
                     <a
                        href=""
                        className="wrap-middle__item-link  flex flex-col items-center justify-center"
                     >
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/t-sport.png"
                           alt=""
                           className="wrap-middle__item-img"
                        />
                        <h6 className="wrap-middle__item-text">SPORT</h6>
                     </a>
                  </div>
               </li>
               <li className="wrap-middle__item">
                  <div className="wrap-middle__item-content">
                     <a
                        href=""
                        className="wrap-middle__item-link  flex flex-col items-center justify-center"
                     >
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/t-history.png"
                           alt=""
                           className="wrap-middle__item-img"
                        />
                        <h6 className="wrap-middle__item-text">HISTORY</h6>
                     </a>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}
