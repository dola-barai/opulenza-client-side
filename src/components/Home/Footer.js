import React from "react";
import Newsletter from "./Newsletter";


import { footerData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";

const Footer = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative top-96 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20">
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col gap-y-12">
          <div>
            <Newsletter />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12">
            <div className="flex-1 bg-pink-100/10 lg:max-w-[170px]">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {contact.title}
              </div>
              <div className="capitalize">{contact.address}</div>
              <div className="capitalize">{contact.phone}</div>
            </div>
            <div className="flex-1 bg-pink-100/10">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {hours.title}
              </div>
              <div className="flex gap-x-[46px]">
                {hours.program.map((item, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <div>{item.days}</div>
                        <div>{item.hours}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>social</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
