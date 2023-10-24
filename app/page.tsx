"use client"
import Main from './pages/main/page'
import About from './pages/about/page'
import Skillbar from './component/skillbar'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Contact from './component/contact'
import Image from 'next/image'

export default function Home() {

  let [showMain, setMain] = React.useState(true);
  let [showAbout, setAbout] = React.useState(false);
  let [showSkills, setSkills] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  //  
  const variants = {
    initial: { opacity: 0, x: "100%" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };


  function changeTab(tab: number) {

    if (tab == 1) {
      //document.getElementById('main')?.className("hidden")
      setMain(true)
      setAbout(false);
      setSkills(false);


    } else if (tab == 2) {
      setMain(false)
      setAbout(true);
      setSkills(false);

    } else if (tab == 3) {
      setMain(false)
      setAbout(false);
      setSkills(true);

    }
  }
  return (
    <main className=" w-scren h-screen p-10 md:p-10 md:overflow-x-hidden md:overflow-y-hidden ">

      <div className='flex flex-col w-full h-fit md:h-full md:max-h-full md:p-4 border-4 rounded-tr-2xl rounded-bl-2xl md:flex-row'>
        <div>
          <motion.div variants={variants} initial="initial" animate="animate" className={`bg-transparent items-center justify-center h-fit w-fit hover:scale-105 `}>
            <Link href={"/"}>
              <Image src="/t-icon-nobg.png" width={100} height={100} alt='Email Icon' className='' />
            </Link>
          </motion.div>
        </div>
        <div className='w-auto md:w-1/4 h-fit just flex p-10 flex-row md:flex-col font-extralight gap-10'>
          <button onClick={() => changeTab(1)} className={showMain ? "font-semibold " : "font-extralight hover:font-semibold transition-all"}>Main</button>
          <button onClick={() => changeTab(2)} className={showAbout ? "font-semibold " : "font-extralight hover:font-semibold transition-all"}>About</button>
          <button onClick={() => changeTab(3)} className={showSkills ? "font-semibold " : "font-extralight hover:font-semibold transition-all"}>Skills</button>

        </div>

        <motion.div variants={variants} initial="initial" animate={showMain ? "animate" : "initial"} className={`w-full  md:w-3/4 ${showMain ? " visible  " : "hidden  "}`} >
          <Main />
        </motion.div>
        <motion.div variants={variants} initial="initial" animate={showAbout ? "animate" : "initial"} className={`w-full md:w-3/4 ${showAbout ? "visible  " : "hidden"}`} >
          <About />
        </motion.div>
        <motion.div variants={variants} initial="initial" animate={showSkills ? "animate" : "initial"} className={`w-full md:w-3/4 ${showSkills ? "visible  " : "hidden"}`} >
          <Skillbar />
        </motion.div>

      </div>
      <div className='z-50 md:absolute bottom-12 '>
        <Contact />
      </div>



    </main>

  )
}
