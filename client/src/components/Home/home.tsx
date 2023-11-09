import Footer from "../../shared/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../shared/Header/header";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
export default function Home() {
   return (
      <div>
         <Header />
         <div>
            <div>
               <div>
                  <div className="flex gap-4 flex-col items-center justify-center flex-w-full">
                     <h3 className="sub-heading__destionation">PROPOSALS</h3>
                     <div className="heading__destionation">
                        <h1 className="heading__destionation-main">OUR</h1>
                        <h1 className="heading__destionation-sub">
                           DESTINATIONS
                        </h1>
                     </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 ml-20">
                     <div className="destionation__item-area-content destionation__item--Europe">
                        <div className="destionation__item-area-content-wrap"></div>
                        <div className="destionation__item-area-content-around">
                           <h3 className="destionation__item-area-name">
                              Europe
                           </h3>
                           <h3 className="destionation__item-area-amount-packages">
                              3 PACKAGES
                           </h3>
                        </div>
                        <div className="destionation__item-area-content-in">
                           <h3 className="destionation__item-area-content-heading">
                              Packages
                           </h3>
                           <div className="destionation__item-area-content-heading-list-heading">
                              <a
                                 href=""
                                 className="destionation__item-area-content-heading-item"
                              >
                                 Berlin
                              </a>
                              <a
                                 href=""
                                 className="destionation__item-area-content-heading-item"
                              >
                                 Amsterdam
                              </a>
                              <a
                                 href=""
                                 className="destionation__item-area-content-heading-item"
                              >
                                 Tuscany
                              </a>
                           </div>
                           <a
                              href=""
                              className="btn destionation__item-area-content-in-btn"
                           >
                              VIEW DESTINATION
                           </a>
                        </div>
                     </div>
                     <div className="destionation__item">
                        <div className="destionation__item-area-content destionation__item--Thailandia">
                           <div className="destionation__item-area-content-wrap"></div>
                           <div className="destionation__item-area-content-around">
                              <h3 className="destionation__item-area-name">
                                 Thailandia
                              </h3>
                              <h3 className="destionation__item-area-amount-packages">
                                 1 PACKAGES
                              </h3>
                           </div>
                           <div className="destionation__item-area-content-in">
                              <h3 className="destionation__item-area-content-heading">
                                 Packages
                              </h3>
                              <div className="destionation__item-area-content-heading-list-heading">
                                 <a
                                    href=""
                                    className="destionation__item-area-content-heading-item"
                                 >
                                    Phuket
                                 </a>
                              </div>
                              <a
                                 href=""
                                 className="btn destionation__item-area-content-in-btn"
                              >
                                 VIEW DESTINATION
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="destionation__item">
                        <div className="destionation__item-area-content destionation__item--Asia">
                           <div className="destionation__item-area-content-wrap"></div>
                           <div className="destionation__item-area-content-around">
                              <h3 className="destionation__item-area-name">
                                 Asia
                              </h3>
                              <h3 className="destionation__item-area-amount-packages">
                                 2 PACKAGES
                              </h3>
                           </div>
                           <div className="destionation__item-area-content-in">
                              <h3 className="destionation__item-area-content-heading">
                                 Packages
                              </h3>
                              <div className="destionation__item-area-content-heading-list-heading">
                                 <a
                                    href=""
                                    className="destionation__item-area-content-heading-item"
                                 >
                                    Hong Kong
                                 </a>
                                 <a
                                    href=""
                                    className="destionation__item-area-content-heading-item"
                                 >
                                    Phuket
                                 </a>
                              </div>
                              <a
                                 href=""
                                 className="btn destionation__item-area-content-in-btn"
                              >
                                 VIEW DESTINATION
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="destionation__item">
                        <div className="destionation__item-area-content destionation__item--Italy">
                           <div className="destionation__item-area-content-wrap"></div>
                           <div className="destionation__item-area-content-around">
                              <h3 className="destionation__item-area-name">
                                 Italy
                              </h3>
                              <h3 className="destionation__item-area-amount-packages">
                                 1 PACKAGES
                              </h3>
                           </div>
                           <div className="destionation__item-area-content-in">
                              <h3 className="destionation__item-area-content-heading">
                                 Packages
                              </h3>
                              <div className="destionation__item-area-content-heading-list-heading">
                                 <a
                                    href=""
                                    className="destionation__item-area-content-heading-item"
                                 >
                                    Tuscany
                                 </a>
                              </div>
                              <a
                                 href=""
                                 className="btn destionation__item-area-content-in-btn"
                              >
                                 VIEW DESTINATION
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="destionation__item">
                        <div className="destionation__item-area-content destionation__item--Netherlands">
                           <div className="destionation__item-area-content-wrap"></div>
                           <div className="destionation__item-area-content-around">
                              <h3 className="destionation__item-area-name">
                                 Netherlands
                              </h3>
                              <h3 className="destionation__item-area-amount-packages">
                                 1 PACKAGES
                              </h3>
                           </div>
                           <div className="destionation__item-area-content-in">
                              <h3 className="destionation__item-area-content-heading">
                                 Packages
                              </h3>
                              <div className="destionation__item-area-content-heading-list-heading">
                                 <a
                                    href=""
                                    className="destionation__item-area-content-heading-item"
                                 >
                                    Amsterdam
                                 </a>
                              </div>
                              <a
                                 href=""
                                 className="btn destionation__item-area-content-in-btn"
                              >
                                 VIEW DESTINATION
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="destionation__item">
                        <div className="destionation__item-area-content destionation__item--United-States">
                           <div className="destionation__item-area-content-wrap"></div>
                           <div className="destionation__item-area-content-around">
                              <h3 className="destionation__item-area-name">
                                 United States
                              </h3>
                              <h3 className="destionation__item-area-amount-packages">
                                 1 PACKAGES
                              </h3>
                           </div>
                           <div className="destionation__item-area-content-in">
                              <h3 className="destionation__item-area-content-heading">
                                 Packages
                              </h3>
                              <div className="destionation__item-area-content-heading-list-heading">
                                 <a
                                    href=""
                                    className="destionation__item-area-content-heading-item"
                                 >
                                    San Francisco
                                 </a>
                              </div>
                              <a
                                 href=""
                                 className="btn destionation__item-area-content-in-btn"
                              >
                                 VIEW DESTINATION
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-40">
               <div className="holiday-wrap">
                  <div className="grid grid-cols-3">
                     <div className="l-2"></div>
                     <div className="l-4 ">
                        <h3 className="heading-holiday">Your</h3>
                        <h3 className="heading-holiday-bottom">Next</h3>
                        <h3 className="heading-holiday-bottom-main">Holiday</h3>
                     </div>
                     <div className="l-4 btn-wrap-holiday">
                        <a href="" className="btn btn-holiday">
                           VIEW ALL PACKAGES
                        </a>
                     </div>
                     <div className="l-2"></div>
                  </div>
               </div>
            </div>
            <div className="px-20">
               <div className="grid grid-cols-2">
                  <div className="l-4 review-wrap">
                     <h2 className="sub-heading-review">NORTH AMERICA</h2>
                     <div className="heading-review-body">
                        <h1 className="heading-review">The Best</h1>
                        <h1 className="heading-review-main">Beaches</h1>
                     </div>

                     <p className="review-content">
                        Lorem ipsum dolor sit amet, consectetur adip iscing
                        elit. Proin rhoncus urna dictum neque molestie ultricies
                        mauris ac.
                     </p>
                     <p className="review-content">
                        Lorem ipsum dolor sit amet, consectetur adip iscing
                        elit. Proin rhoncus urna dictum neque molestie ultricies
                        mauris ac.
                     </p>
                     <div className="review-price">
                        <span className="price--disable">800</span>
                        <span className="price--current">500 $</span>
                        <span className="review-for-person">/ FOR PERSON</span>
                     </div>
                     <a href="" className="btn btn-book-now">
                        BOOK NOW
                     </a>
                  </div>
                  <div className="l-8 review-img-content">
                     <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-4-1.jpg"
                        alt=""
                        className="review-img"
                     />
                     <div className="options-countdown">
                        <div className="countdown-item">
                           <h1 className="countdown-item-hour">000</h1>
                           <h3 className="countdown-item-select">DAYS</h3>
                        </div>
                        <div className="countdown-item">
                           <h1 className="countdown-item-hour">00</h1>
                           <h3 className="countdown-item-select">HOURS</h3>
                        </div>
                        <div className="countdown-item">
                           <h1 className="countdown-item-hour">00</h1>
                           <h3 className="countdown-item-select">MINUTES</h3>
                        </div>
                        <div className="countdown-item">
                           <h1 className="countdown-item-hour">00</h1>
                           <h3 className="countdown-item-select">SECONDS</h3>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex tour-wrap">
                  <div className="tour-item">
                     <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/icon-around.png"
                        alt=""
                        className="tour-img"
                     />
                     <div className="tour-content">
                        <h1 className="tour-heading">World Tour</h1>
                        <p className="tour-text">
                           Lorem ipsum dolor sit amet conse ctetur adip iscing
                           elit Proin rhonc us urna dictum.
                        </p>
                        <a href="" className="btn tour-btn">
                           View More
                        </a>
                     </div>
                  </div>
                  <div className="tour-item">
                     <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/icon-boat.png"
                        alt=""
                        className="tour-img"
                     />
                     <div className="tour-content">
                        <h1 className="tour-heading">Cruises</h1>
                        <p className="tour-text">
                           Lorem ipsum dolor sit amet conse ctetur adip iscing
                           elit Proin rhonc us urna dictum.
                        </p>
                        <a href="" className="btn tour-btn">
                           View More
                        </a>
                     </div>
                  </div>
                  <div className="tour-item">
                     <img
                        src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/icon-landmark.png"
                        alt=""
                        className="tour-img"
                     />
                     <div className="tour-content">
                        <h1 className="tour-heading">Best Tours</h1>
                        <p className="tour-text">
                           Lorem ipsum dolor sit amet conse ctetur adip iscing
                           elit Proin rhonc us urna dictum.
                        </p>
                        <a href="" className="btn tour-btn">
                           View More
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2">
               <div className="l-6 discover-wrap">
                  <div className="discover-content-cities">
                     <h3 className="discover-sub-heading">01. LAST MINUTE</h3>
                     <h1 className="discover-heading">Discover Cities</h1>
                     <a
                        href=""
                        className="btn btn-discover btn-color-text--pink"
                     >
                        DETAILS
                     </a>
                  </div>
               </div>
               <div className="l-6 discover-wrap">
                  <div className="discover-content-nature">
                     <h3 className="discover-sub-heading">02. PROMOTIONS</h3>
                     <h1 className="discover-heading">Discover Nature</h1>
                     <a
                        href=""
                        className="btn btn-discover btn-color-text-green"
                     >
                        DETAILS
                     </a>
                  </div>
               </div>
            </div>
            <div className="mb-20">
               <div className=" package__review">
                  <h3 className=" sub-heading__destionation">PROMOTIONS</h3>
                  <div className=" heading__destionation">
                     <h1 className="heading__destionation-main">OUR</h1>
                     <h1 className="heading__destionation-sub">PACKAGES</h1>
                  </div>
                  <div className="grid px-48 grid-cols-3 gap-20 package__review-list ">
                     <div className="l-4 package__review-item-wrap">
                        <div className="package__review-item">
                           <div className="review-item-img-box ">
                              <img
                                 src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-1-1024x640.jpg"
                                 alt=""
                                 className="review-item-img"
                              />
                              <a
                                 href=""
                                 className="review-item-img-icon primary--yellow"
                              >
                                 <img
                                    src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/arch.png"
                                    alt=""
                                    className="review-item-icon "
                                 />
                              </a>
                           </div>
                           <div className="package__review-item-body">
                              <h3 className="review-item-heading">Berlin</h3>
                              <h5 className="review-item-sub-heading">
                                 <FontAwesomeIcon
                                    className="header-menu-bar mr-2 review-item-heading-icon"
                                    icon={faLocationDot}
                                 />
                                 Europe
                              </h5>
                              <div className="package__review-item-section">
                                 <div className="package__review-item-section-left">
                                    <span className="review-section-unique">
                                       Cultural
                                    </span>
                                    <span className="review-section-feeling">
                                       RELAX
                                       <span className="review-section-feeling-btn btn btn--yellow">
                                          + 1
                                       </span>
                                    </span>
                                 </div>
                                 <div className="package__review-item-section-right">
                                    <span className="review-section-price">
                                       700 $
                                    </span>
                                 </div>
                              </div>
                              <p className="review-item-text">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Nunc ut efficitur ante. Donec
                                 dapibus dictum scelerisque.
                              </p>
                              <a
                                 href=""
                                 className="btn btn--yellow  btn-review"
                              >
                                 DETAILS
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="l-4 package__review-item-wrap">
                        <div className="package__review-item">
                           <div className="review-item-img-box">
                              <img
                                 src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/package-6-1024x640.jpg"
                                 alt=""
                                 className="review-item-img"
                              />
                              <a
                                 href=""
                                 className="review-item-img-icon primary--red"
                              >
                                 <img
                                    src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/torii-gate.png"
                                    alt=""
                                    className="review-item-icon"
                                 />
                              </a>
                              <a
                                 href=""
                                 className="btn btn-sales-package-review"
                              >
                                 SALE
                              </a>
                           </div>
                           <div className="package__review-item-body">
                              <h3 className="review-item-heading">Hong Kong</h3>
                              <h5 className="review-item-sub-heading">
                                 <FontAwesomeIcon
                                    className="header-menu-bar mr-2 review-item-heading-icon"
                                    icon={faLocationDot}
                                 />
                                 Asia
                              </h5>
                              <div className="package__review-item-section">
                                 <div className="package__review-item-section-left">
                                    <span className="review-section-unique">
                                       History
                                    </span>
                                    <span className="review-section-feeling">
                                       Cultural
                                       <span className="review-section-feeling-btn btn btn--red">
                                          + 1
                                       </span>
                                    </span>
                                 </div>
                                 <div className="package__review-item-section-right">
                                    <span className="review-section-price">
                                       500 $
                                    </span>
                                 </div>
                              </div>
                              <p className="review-item-text">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Nunc ut efficitur ante. Donec
                                 dapibus dictum scelerisque.
                              </p>
                              <a href="" className="btn btn--red btn-review">
                                 DETAILS
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="l-4 package__review-item-wrap">
                        <div className="package__review-item">
                           <div className="review-item-img-box">
                              <img
                                 src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-2-1024x640.jpg"
                                 alt=""
                                 className="review-item-img"
                              />
                              <a
                                 href=""
                                 className="review-item-img-icon primary--purple"
                              >
                                 <img
                                    src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/golden-gate.png"
                                    alt=""
                                    className="review-item-icon "
                                 />
                              </a>
                           </div>
                           <div className="package__review-item-body">
                              <h3 className="review-item-heading">
                                 San Francisco
                              </h3>
                              <h5 className="review-item-sub-heading">
                                 <FontAwesomeIcon
                                    className="header-menu-bar mr-2 review-item-heading-icon"
                                    icon={faLocationDot}
                                 />
                                 United States
                              </h5>
                              <div className="package__review-item-section">
                                 <div className="package__review-item-section-left">
                                    <span className="review-section-unique">
                                       Sport
                                    </span>
                                    <span className="review-section-feeling">
                                       RELAX
                                       <span className="review-section-feeling-btn btn btn--purple">
                                          + 1
                                       </span>
                                    </span>
                                 </div>
                                 <div className="package__review-item-section-right">
                                    <span className="review-section-price">
                                       400 $
                                    </span>
                                 </div>
                              </div>
                              <p className="review-item-text">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Nunc ut efficitur ante. Donec
                                 dapibus dictum scelerisque.
                              </p>
                              <a href="" className="btn btn--purple btn-review">
                                 DETAILS
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
