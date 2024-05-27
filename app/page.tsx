import Image from "next/image";
import olhaRuskyPic from "../public/img/header-cut.png";
import mcokupPic from "../public/img/shaveDay_mcokup_wip3.png";
import titlePic from "../public/img/title-shave-day.png";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative h-screen">
        <div className="flex h-screen flex-col items-center justify-evenly">
          <div className="flex w-full justify-end gap-8 px-8">
            <div className="flex h-12 flex-1 items-center justify-evenly rounded-2xl border-2 border-black bg-[#FCFBDF] font-new-spirit font-medium">
              <Image src={titlePic} alt="Title" className="h-5/6 w-auto" />
              <div>How It Works</div>
              <div>Subscribe</div>
              <div>About Us</div>
            </div>
            <div className="flex h-12 w-12 items-center rounded-full border-2 border-black bg-[#FCFBDF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="m-auto size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex  w-full justify-around p-8 font-roc-compressed text-[40px] font-bold text-[#FCFBDF]">
            <div>#ShaveDifferent</div>
            <div>All Genders</div>
          </div>
          <div
            className="z-10 text-center font-roc-compressed text-[215px] font-bold leading-[176.3px]
        text-[#EF4A24]"
          >
            ON THE CUTTING EDGE <br />
            OF SHAVING
          </div>
          <div className="rounded-2xl border-2 border-black bg-[#FCFBDF] px-8 py-2 font-new-spirit font-medium">
            Get Started
          </div>
        </div>

        <Image
          src={olhaRuskyPic}
          fill={true}
          alt="bg image"
          className="absolute bottom-0 -z-10 object-cover"
        />
        <div className="absolute bottom-0 bg-[#ECB4A4] font-roc font-medium text-[#FCFBDF]">
          <Marquee autoFill={true} pauseOnHover={true}>
            CLAIM 20% OFF YOUR FIRST BOX!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>
        </div>
      </div>
      <div className="">
        <Image src={mcokupPic} alt="bg image" className="-z-10 mx-auto" />
      </div>
      <div className="bg-[#FCFBDF]"></div>
      <div className="bg-[#EF4A24]"></div>
    </main>
  );
}
