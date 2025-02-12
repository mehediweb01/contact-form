import { Header } from "@/components";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-background min-h-screen ">
      <div className="py-[67px] space-y-8">
        <Header />
        <div className=" bg-[#FFFFFF0A] w-full max-w-[1092px] mx-auto flex flex-col sm:flex-row justify-between items-start gap-5 border border-[#0A0D170D] rounded-md relative">
          <div className="size-[152px] bg-primary absolute top-0 left-0 rounded-full blur-[200px]" />
          <div className="size-[152px] bg-secondary absolute bottom-0 left-0 rounded-full blur-[200px]" />
          <div className="size-[152px] bg-secondary absolute top-0 right-0 rounded-full blur-[200px]" />
          {/* left side */}
          <div></div>
          {/* right side */}
          <div className="w-full max-w-[516px] relative">
            <Image
              src="/contact-form.png"
              alt="contact-form"
              className="w-full h-auto rounded-xl p-2"
              width={516}
              height={536}
            />
            <div className="absolute bottom-10 sm:bottom-14 md:bottom-20 lg:bottom-24 text-foreground/60 ps-0 sm:ps-6 md:ps-8 lg:ps-10 space-y-2 text-base">
              <p className="w-3/4 mx-auto sm:w-full max-w-md tracking-[-2%] leading-6">
                For any problems or assistance, please contact me. We are always
                ready to help! 😊
              </p>
              <p className="sm:ps-0 ps-10">mehedi hasan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
