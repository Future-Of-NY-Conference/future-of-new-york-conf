import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import { ArrowUpRightIcon, BellIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>The Future Of New York - Conference</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-between  bg-hero-gradient relative px-5 pt-72 md:pt-[350px] pb-20 bg-cover">
        <div className="max-w-4xl text-center z-10">
          <p className="text-sm font-medium text-[#192c55] bg-[#123480]/15 rounded-full py-2 px-5 inline-block backdrop-blur-md">
            Connecting Leaders, Visionaries, and Change-Makers
          </p>
          <h1 className="text-5xl md:text-7xl mt-4">The Future Of New York</h1>
          <div className="mt-7 md:text-lg text-gray-800 space-y-5">
            <p>
              Join us for an exclusive gathering, where elected and appointed officials, influential
              figures, and ambitious thinkers will come together to make a lasting impact. Our goal
              is to drive concrete progress on 3-5 moonshot projects that have the potential to
              dramatically reshape our city for the better.
            </p>
          </div>
          <div className="mt-7 flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0 justify-center">
            <div className="flex items-center space-x-3">
              <CalendarIcon className="w-6 h-6 text-[#1A439E]" />
              <p>Fall 2024</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="w-6 h-6 text-[#1A439E]" />
              <p>Manhattan, NY</p>
            </div>
          </div>
          <div className="mt-10 md:mt-7 flex flex-col md:flex-row items-center md:space-x-5 space-y-2 md:space-y-0 justify-center">
            <p>Presented by</p>
            <Image src="/images/logo-mny.png" width={60} height={60} alt="Maximum New York Logo" />
            <a
              href="https://www.maximumnewyork.com/"
              target="_blank"
              className="border-b border-gray-600/20 hover:border-[#1A439E]/50 hover:text-[#1A439E] transition-all ease-in-out duration-200 relative group"
            >
              Maximum New York
              <ArrowUpRightIcon className="w-3 h-3 absolute top-1 -right-4 text-[#1b49ad] hidden group-hover:inline-block" />
            </a>
          </div>
          <div className="mt-10 md:mt-7">
            <h2 className="text-2xl">Sign up for more updates on the venue and schedule.</h2>
            <a
              href="#"
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
