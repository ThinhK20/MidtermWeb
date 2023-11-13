export default function HeaderBackground() {
   return (
      <div
         className="header-wrap flex items-center"
         style={{
            backgroundImage:
               "url(http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-2.jpg)",
         }}
      >
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
