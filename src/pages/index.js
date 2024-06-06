import Image from "next/image"
import HeadMeta from "@/components/HeadMeta"
import { Inter } from "next/font/google"
import { ArrowUpRightIcon, BellIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <HeadMeta title="The Future Of New York" />
      <div className="flex min-h-screen flex-col items-center justify-between  bg-hero-gradient relative px-5 pt-72 md:pt-[350px] pb-20 bg-cover">
        <div className="max-w-4xl text-center z-10">
          <p className="text-sm font-medium text-[#192c55] bg-[#123480]/15 rounded-full py-2 px-5 inline-block backdrop-blur-md">
            A literal Manhattan project
          </p>
          <h1 className="text-5xl md:text-7xl mt-4 md:pr-6">The Future Of New York</h1>
          <div className="mt-7 md:text-lg text-gray-800 space-y-5">
            <p>
              An invite-only working conference for elected/appointed officials and ambitious civic thinkers. 
              Attendees will make concrete progress on 3-5 moonshot projects, all of which have the potential to
              dramatically reshape New York City for the better.
            </p>
          </div>
          <div className="mt-7 flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0 justify-center">
            <div className="flex items-center space-x-3 md:min-w-[150px] md:justify-end">
              <CalendarIcon className="w-6 h-6 text-[#1A439E]" />
              <p>Fall 2024</p>
            </div>
            <div className="flex items-center space-x-3 md:min-w-[150px]">
              <MapPinIcon className="w-6 h-6 text-[#1A439E]" />
              <p>Manhattan</p>
            </div>
          </div>
          <div className="mt-10 md:mt-7 flex flex-col md:flex-row items-center md:space-x-5 space-y-2 md:space-y-0 justify-center">
            <p className="min-w-[150px] md:text-right">Presented by</p>
            <Image src="/images/logo-mny.png" width={60} height={60} alt="Maximum New York Logo" />
            <a
              href="https://www.maximumnewyork.com/"
              target="_blank"
              className="border-b border-gray-600/20 hover:border-[#1A439E]/50 hover:text-[#1A439E] transition-all ease-in-out duration-200 relative group md:min-w-[150px]"
            >
              Maximum New York
              <ArrowUpRightIcon className="w-3 h-3 absolute top-1 -right-4 text-[#1b49ad] hidden group-hover:inline-block" />
            </a>
          </div>
          <div className="mt-10 md:mt-7">
            <h2 className="text-2xl">
              Subscribe for updates and a thorough post-conference writeup.
            </h2>
            <a
              href="https://forms.reform.app/f/future-of-new-york-conf/93ax6a"
              target="_blank"
              className="flex md:inline-flex items-center justify-center rounded-lg bg-gradient-to-t from-[#123480] to-[#123480] text-white px-6 py-4 shadow-lg mt-6 text-lg hover:from-[#123480] hover:to-[#1b49ad] border border-solid border-[#1b49ad] hover:-translate-y-1  transition-all ease-in-out duration-200"
            >
              <BellIcon className="w-6 h-6 mr-2 text-[#96B5FB]" />
              Receive Updates
            </a>
          </div>
        </div>
        <div className="absolute top-14 left-[calc(50%-90px)]">
          <Image
            src="/images/empire-state-building.png"
            alt="Empire State Building"
            width={190}
            height={683}
            className="mix-blend-multiply opacity-40 md:opacity-100"
          />
        </div>
      </div>
    </main>
  )
}
