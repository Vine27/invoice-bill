import { ImLocation } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import {IoCall } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <div className="logoFooter flex justify-between ;" >

        <div>
          <img class="footerImg " src="https://websiterevolution.co.za/wp-content/uploads/brizy/192/assets/images/logo4dark-bg.svg" alt="" draggable="false" loading="lazy" />
         </div>
            <div className ="mt-5">
              <p> 102 Fraiser Street, Turffontein </p> 
              <p>Johannesrburg South, 2140</p> 
          <p> </p>
              <p>www.websitereolution.co.za</p>
          <p>info@websiterevolution.co.za</p> 
          <p>+27 68 507 1552</p>
        </div>
        <div className="mt-6 mr-8">
               <p className=""><ImLocation/></p>
              <p className="mt-2"><GoLocation/></p>
              <p className="mt-2"><GrLanguage/></p>
              <p className="mt-2"><HiOutlineMail/></p>
              <p className="mt-3"><IoCall/> </p>       
        </div>
  
      </div>

    </>
  );
}
