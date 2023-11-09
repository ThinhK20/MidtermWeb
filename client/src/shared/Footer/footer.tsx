export default function Footer() {
   return (
      <footer className="footer">
         <div>
            <div className="px-20 pb-20 flex justify-center gap-40">
               <div className=" ">
                  <h3 className="sub-heading-first-footer">KEEP IN TOUCH</h3>
                  <h1 className="heading-first-footer">Travel with Us</h1>
               </div>
               <div className="footer-input">
                  <input
                     type="text"
                     name=""
                     id=""
                     className="btn input__footer"
                  />
                  <button className="btn btn--blue btn__footer">SEND</button>
               </div>
            </div>
            <div className="grid grid-cols-4 bg-white p-20 m-20">
               <div className="l-6 footer-second-item">
                  <img
                     src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo-color.png"
                     alt=""
                     className="footer-second-img"
                  />
                  <p className="footer-second-text">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Curabitur ut diam et nibh condimentum venenatis eu ac
                     magnasin. Quisque interdum est mauris, eget ullamcorper.
                  </p>
                  <div className="footer-social">
                     <a href="" className="footer-social-link">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/twitter.png"
                           alt=""
                           className="footer-social-link-img"
                        />
                     </a>
                     <a href="" className="footer-social-link">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/youtube.png"
                           alt=""
                           className="footer-social-link-img"
                        />
                     </a>
                     <a href="" className="footer-social-link">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/facebook.png"
                           alt=""
                           className="footer-social-link-img"
                        />
                     </a>
                     <a href="" className="footer-social-link">
                        <img
                           src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/vimeo.png"
                           alt=""
                           className="footer-social-link-img"
                        />
                     </a>
                  </div>
               </div>
               <div className="l-2 footer-second-item">
                  <h6 className="footer-second-heading">OUR AGENCY</h6>
                  <ul className="footer-second-item-list">
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Services
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Insurancee
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Agency
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Tourism
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Payment
                     </li>
                  </ul>
               </div>
               <div className="l-2 footer-second-item">
                  <h6 className="footer-second-heading">PARTNERS</h6>
                  <ul className="footer-second-item-list">
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Booking
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        RentalCar
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        HostelWorld
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        HostelWorld
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        TripAdvisor
                     </li>
                  </ul>
               </div>
               <div className="l-2 footer-second-item">
                  <h6 className="footer-second-heading">LAST MINUTE</h6>
                  <ul className="footer-second-item-list">
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        London
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        California
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Indonesia
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Europe
                     </li>
                     <li className="footer-second-item-content">
                        <i className="fas fa-chevron-right footer-second-icon"></i>
                        Oceania
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
