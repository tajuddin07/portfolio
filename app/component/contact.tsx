"use client"

import Link from "next/link"
import Image from "next/image"
import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {

    let [showContact, setContact] = React.useState(false);

    const variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.3
            }
        }
    };

    const variants2 = {
        initial: { opacity: 0, x: "-100%" },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.3
            }
        }
    };

    function changeContact() {
        setContact(!showContact);
    }

    return (
        <main className="w-fit h-auto items-center">
            <div className=' w-fit h-auto p-4'>

                <motion.div variants={variants} initial="initial" animate={showContact ? "initial" : "animate"} className={`bg-white bg-opacity-0 items-center justify-center h-fit p-1 rounded-xl w-fit hover:scale-105  ${showContact ? "hidden" : "visible"}`}>
                    <Image src="/t-icon-nobg.png" onClick={changeContact} width={100} height={100} alt='Email Icon' className='' />
                </motion.div>
                <motion.div onMouseLeave={changeContact} onTouchEnd={changeContact} variants={variants2} initial="initial" animate={showContact ? "animate" : "initial"} className={showContact ? "visible" : "hidden"}>
                    <div className='bg-white text-black rounded-b-lg rounded-tr-lg p-4 flex flex-row gap-7 '>

                        <div >
                            <Link href="mailto:tajuddin7469@gmail.com" className=''>
                                <Image src="/email.ico" width={20} height={20} alt='Email Icon' className='transform transition-all hover:scale-125' />
                            </Link>
                        </div>
                        <div className=''>
                            <Link href="https://www.linkedin.com/in/tajuddin-mahadi-180b64177" className=''>
                                <Image src="/linkedin.ico" width={20} height={20} alt='Linkedin Icon' className='transform transition-all hover:scale-125' />

                            </Link>
                        </div>
                        <div className=''>
                            <Link href="https://github.com/tajuddin07" className=''>
                                <Image src="/github.ico" width={20} height={20} alt='Github Icon' className='transform transition-all hover:scale-125' />
                            </Link>

                        </div>
                        <div className='visible md:hidden'>
                            <Image src="/turn-back.png" width={20} height={20} alt='Github Icon' onClick={changeContact} className=' transform transition-all hover:scale-125' />
                        </div>
                    </div>
                </motion.div>

            </div>

        </main>
    )

}