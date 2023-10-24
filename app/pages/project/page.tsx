'use client'

import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'
import React, { Component } from 'react'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { motion } from 'framer-motion'

import "react-responsive-carousel/lib/styles/carousel.min.css";//css for carousel
import 'react-tabs/style/react-tabs.css';// css for tabs

export default function Project() {
    const variantSlideIn = {
        initial: { y: "100%" },
        animate: {
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5,
            }
        }
    };

    const variantEnterBlock = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5
            }
        }
    }

    let [showProject1, setShowProject1] = React.useState(false);
    let [showProject2, setShowProject2] = React.useState(false);
    let [showProject3, setShowProject3] = React.useState(false);
    let [showProject4, setShowProject4] = React.useState(false);

    function changeShowProject1() {
        setShowProject1(!showProject1);
    }
    function changeShowProject2() {
        setShowProject2(!showProject2);
    }
    function changeShowProject3() {
        setShowProject3(!showProject3);
    }
    function changeShowProject4() {
        setShowProject4(!showProject4);
    }


    return (
        <main className=" container flex flex-row bg-wallpaper-image h-screen w-screen overflow-x-hidden overflow-y-hidden p-4">
            <div className='h-full w-1/3 bg-white bg-opacity-0 ' >
                <Link href={"/"}>
                    <Image src="/t-icon-nobg.png" width={100} height={100} alt='Email Icon' className='' />
                </Link>
            </div>
            <motion.div variants={variantSlideIn} initial="initial" animate="animate" className='grid place-items-end pt-20 pr-10 justify-items-end w-2/3 h-full overflow-auto overflow-x-hidden gap-4  bg-white bg-opacity-0  '>
                <div className='w-1/2 md:text-4xl font-mono font-thin flex flex-row underline'>
                    Project : <p className=''>4</p>
                </div>
                <div className='w-1/2 md:text-6xl font-mono font-bold text-white flex flex-row hover:scale-125 -skew-y-12 select-none' onClick={changeShowProject1}>
                    <div className='font-extralight text-2xl text-justify'>4/22:</div> ICompany
                </div>
                <div className='w-1/2 md:text-6xl font-mono font-bold text-white flex flex-row hover:scale-125 -skew-y-12 select-none ' onClick={changeShowProject2}>
                <div className='font-extralight text-2xl text-justify'>3/21:</div>The Delimeal
                </div>
                <div className='w-1/2 md:text-6xl font-mono font-bold text-white flex flex-row hover:scale-125 -skew-y-12 select-none' onClick={changeShowProject3}>
                <div className='font-extralight text-2xl text-justify'>10/20:</div>Stray Animal Complaint(SAC)
                </div>
                <div className='w-1/2 md:text-6xl font-mono font-bold text-white flex flex-row hover:scale-125 -skew-y-12 select-none' onClick={changeShowProject4}>
                <div className='font-extralight text-2xl text-justify'>10/19:</div> Property Hub
                </div>

            </motion.div>
            <motion.div variants={variantEnterBlock} initial="initial" animate={showProject1 ? "animate" : "initial"} className={`" absolute h-screen w-screen backdrop-blur-lg bg-black/40  z-40 p-10 ${showProject1 ? 'block' : 'hidden'}`}>
                <button className="absolute z-50 text-white p-4" onClick={changeShowProject1}>X</button>
                <div className='flex flex-col bg-white/20 backdrop-blur-lg w-full h-full overflow-scroll overflow-x-hidden '>
                <div className='text-center text-3xl pt-7'>iCompany</div>
                    <div className='p-12 w-full md:w-fit md:h-fit '>
                        <Carousel infiniteLoop={true} className='rounded-xl'>
                            <div className='h-fit'>
                                <Image src="/icompany(1900x900)/1.png" alt='img1' width={1900} height={900} />
                            </div>
                            <div className=' h-fit'>
                                <Image src="/icompany(1900x900)/2.png" alt='img1' width={1900} height={900} />
                            </div>
                            <div className=' h-fit'>
                                <Image src="/icompany(1900x900)/3.png" alt='img1' width={1900} height={900} />
                            </div>
                            <div className=' h-fit'>
                                <Image src="/icompany(1900x900)/4.png" alt='img1' width={1900} height={900} />
                            </div>
                            <div className=' h-fit'>
                                <Image src="/icompany(1900x900)/5.jpg" alt='img1' width={1900} height={900} />
                            </div>
                        </Carousel>
                    </div>
                    <div className=' w-fit flex flex-wrap min-w-fit h-fit border-4 rounded-xl p-4 m-4 text-white'>
                        <Tabs >
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Technologies Used</Tab>
                                <Tab>Role</Tab>
                            </TabList>
                            <TabPanel>
                                <h1 className='text-xl'>iCompany</h1>
                                <p>
                                    ICompany is a platform that focus on secretarial services provided by the company . This project provides user with secretarial management including company registration,etc for a company. This project was assigned to me during my Fulltime contract with Orbo Sdn Bhd,
                                </p><br />
                                <p>
                                    In progress ..

                                </p>
                            </TabPanel>
                            <TabPanel>
                                <ul className='list-disc px-4'>
                                    <li>Vue Js</li>
                                    <li>NuxtJs</li>
                                    <li>Django</li>
                                    <li>GraphQL</li>
                                    <li>PostgreSQL</li>
                                    <li>Javascript</li>
                                    <li>Tailwind CSS</li>

                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <div className='px-4'>
                                    <u>Front End Dev</u>
                                    <ul className=" list-disc">
                                        Task :
                                        <li>Design the website from scratch according to client requirement</li>
                                        <li>Intergrating and handle api calls to backend</li>
                                        <li>Maintain,testing anddebugging API request.</li>
                                        <li>Enhancing and create new UI Widget(Alert Popup,Side Bar Card and etc)</li>
                                    </ul>
                                </div>

                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={variantEnterBlock} initial="initial" animate={showProject2 ? "animate" : "initial"} className={`" absolute h-screen w-screen backdrop-blur-lg bg-black/40 z-40 p-10 ${showProject2 ? 'block' : 'hidden'}`}>
                <button className="absolute z-50 text-white p-4" onClick={changeShowProject2}>X</button>
                <div className='flex flex-col bg-white/20 backdrop-blur-lg  w-full h-full overflow-scroll overflow-x-hidden '>
                    <div className='text-center text-3xl pt-7'>The Delimeal</div>
                    <div className='p-4 w-fit gap-20 h-fit m-4 flex flex-col  justify-center items-center'>
                        <Carousel infiniteLoop={true} className='rounded-xl w-fit h-1/2'>
                            <div className='max-h-1/2'>
                                <Image src="/theDelimeal/web(1900x900)/1.jpg" alt='img1' width={1900} height={900} quality={100} />
                            </div>
                            <div className='max-h-1/2'>
                                <Image src="/theDelimeal/web(1900x900)/2.jpg" alt='img1' width={1900} height={900} quality={100} />
                            </div>
                            <div className='max-h-1/2'>
                                <Image src="/theDelimeal/web(1900x900)/3.jpg" alt='img1' width={1900} height={900} quality={100} />
                            </div>
                            <div className='max-h-1/2'>
                                <Image src="/theDelimeal/web(1900x900)/4.jpg" alt='img1' width={1900} height={900} quality={100} />
                            </div>
                        </Carousel>
                        <Carousel infiniteLoop={true} className='rounded-xl w-32 md:w-1/6 h-fit'>
                            <div className='max-h-1/2'>
                                <Image src="/theDelimeal/app(400x852)/1.jpg" alt='img1' width={400} height={852} quality={100} />
                            </div>
                            <div className=' max-h-fit'>
                                <Image src="/theDelimeal/app(400x852)/2.jpg" alt='img1' width={400} height={852} quality={100} />
                            </div>
                            <div className=' max-h-fit'>
                                <Image src="/theDelimeal/app(400x852)/3.jpg" alt='img1' width={400} height={852} quality={100} />
                            </div>
                            <div className=' max-h-fit'>
                                <Image src="/theDelimeal/app(400x852)/4.jpg" alt='img1' width={400} height={852} quality={100} />
                            </div>
                        </Carousel>

                    </div>
                    <div className='w-fit md:min-w-fit h-fit border-4 rounded-xl p-4 m-4 '>
                        <Tabs>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Technologies Used</Tab>
                                <Tab>Role</Tab>
                            </TabList>
                            <TabPanel>
                                <h1 className='text-xl'>The Delimeal</h1>
                                <p>
                                    The Delimeal is a food delivery platform that focus on healthcare worker as their main target. This project provides user with food delivery services and sales reporting services for the users. This project was assigned to me during my internship with Izzone Enterprise,
                                </p><br />
                                <p>
                                    There are 3 main user here that is Merchant(Food Supplier),Rider(Food Delivery Guy) and Customer.
                                    This project iniated during the 2021 Covid Pandemic outbreak to solve the traffic problem for food delivery apps during that time.
                                    The Delimeal provide 2 build that is web (mainly for reporting purpose.
                                    Merchant with their sales and revenue and Rider with their income sales,etc.)
                                    Both platform can be used to issued an order but only web version support the reporting function.

                                </p>
                            </TabPanel>
                            <TabPanel>
                                <ul className='list-disc px-4'>
                                    <li>Laravel</li>
                                    <li>PHP</li>
                                    <li>Flutter</li>
                                    <li>POSTMAN</li>
                                    <li>Google API</li>
                                    <li>Stripe Payment API</li>
                                    <li>MySQL</li>

                                </ul>

                            </TabPanel>
                            <TabPanel>
                                <div className='px-4'>
                                    <u>Fullstack Dev</u>
                                    <ul className=" list-disc">
                                        Task :
                                        <li>Maintaining the web and app build</li>
                                        <li>Add new functionalities (OTP,Multiple Address and etc) to web and app build</li>
                                        <li>Deploy changes to live</li>
                                        <li>Fixing bugs within Stripe Payment getaway</li>
                                        <li>Create new web API functionalities</li>
                                        <li>Enhance reporting pages on web build</li>
                                    </ul>
                                </div>

                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={variantEnterBlock} initial="initial" animate={showProject3 ? "animate" : "initial"} className={`" absolute h-screen w-screen backdrop-blur-lg bg-black/40 z-40 p-10 ${showProject3 ? 'block' : 'hidden'}`}>
                <button className="absolute z-50 p-4 text-white" onClick={changeShowProject3}>X</button>
                <div className='flex flex-col bg-white/20 backdrop-blur-lg  w-full h-fit overflow-scroll overflow-x-hidden '>
                    <div className='text-center text-3xl pt-7'>SAC</div>
                    <div className='p-12 w-fit h-fit max-h-1/4 md:h-screen flex flex-col md:flex-row gap-10'>
                        <Carousel infiniteLoop={true} className='rounded-xl w-40 md:w-1/4 h-fit'>
                            <div className='max-h-fit'>
                                <Image src="/sac(395x655)/user/1.jpg" alt='img1' width={395} height={655} quality={100} />
                            </div>
                            <div className=' max-h-fit'>
                                <Image src="/sac(395x655)/user/2.jpg" alt='img2' width={395} height={655} quality={100} />
                            </div>
                            <div className=' max-h-1/3'>
                                <Image src="/sac(395x655)/user/3.jpg" alt='img3' width={395} height={655} quality={100} />
                            </div>
                            <div className=' max-h-1/3'>
                                <Image src="/sac(395x655)/user/4.jpg" alt='img4' width={395} height={655} quality={100} />
                            </div>
                            <div className=' max-h-1/3'>
                                <Image src="/sac(395x655)/user/5.jpg" alt='img5' width={395} height={655} quality={100} />
                            </div>
                            <div className='max-h-1/3'>
                                <Image src="/sac(395x655)/user/6.jpg" alt='img6' width={395} height={655} quality={100} />
                            </div>
                            <div className=' max-h-1/3'>
                                <Image src="/sac(395x655)/user/7.jpg" alt='img7' width={395} height={655} quality={100} />
                            </div>
                            <div className=' max-h-1/3'>
                                <Image src="/sac(395x655)/user/8.jpg" alt='img8' width={395} height={655} quality={100} />
                            </div>
                        </Carousel>
                        <Carousel infiniteLoop={true} className='rounded-xl w-40 md:w-1/4 h-fit'>
                            <div className='h-fit'>
                                <Image src="/sac(395x655)/auth/1.jpg" alt='img1' width={395} height={655} quality={100} />
                            </div>
                            <div className='h-fit'>
                                <Image src="/sac(395x655)/auth/2.jpg" alt='img1' width={395} height={655} quality={100} />
                            </div>
                            <div className='h-fit'>
                                <Image src="/sac(395x655)/auth/3.jpg" alt='img1' width={395} height={655} quality={100} />
                            </div>
                            <div className='h-fit'>
                                <Image src="/sac(395x655)/auth/4.jpg" alt='img1' width={395} height={655} quality={100} />
                            </div>

                        </Carousel>
                    </div>
                    <div className='w-fit md:min-w-fit h-fit border-4 rounded-xl p-4 m-4 '>
                        <Tabs>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Technologies Used</Tab>
                                <Tab>Role</Tab>
                            </TabList>
                            <TabPanel>
                                <h1 className='text-xl'>SAC</h1>
                                <p>(Stray Animal Complaint) System</p>
                                <p>
                                    This is my final year project for my Bachelor Degree. Focus on reporting function to city council authority regarding stray animal problem.
                                    This project have been monitored and tested by stakeholder from Segamat City Council Officer.
                                </p><br />
                                <p>
                                    This system focus on 2 type of user that is Authorities(city council officer) and public user.The preview shows Shared and user interface on the left and the authorities exclusive interface on the right.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <ul className='list-disc px-4'>
                                    <li>Flutter</li>
                                    <li>Dart</li>
                                    <li>Firebase Firestore</li>
                                    <li>Google Maps API</li>
                                    <li>Google Geolocation API</li>

                                </ul>

                            </TabPanel>
                            <TabPanel>
                                <div className='px-4'>
                                    <u>Fullstack Dev</u>
                                    <ul className=" list-disc">
                                        Task :
                                        <li>Build the app</li>
                                        <li>Design the app</li>
                                        <li>Maintain the app</li>
                                        <li>Met stakeholder requirement</li>
                                        <li>Met the requirement set by supervisor</li>
                                        <li>Implement API usage and Rule-Based Algorithm</li>
                                    </ul>
                                </div>

                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={variantEnterBlock} initial="initial" animate={showProject4 ? "animate" : "initial"} className={`" absolute h-screen w-screen backdrop-blur-lg bg-black/40 z-40 p-10 ${showProject4 ? 'block' : 'hidden'}`}>
                <button className="absolute z-50 p-4 text-white" onClick={changeShowProject4}>X</button>
                <div className='flex flex-col bg-white/20 backdrop-blur-lg  w-full h-fit overflow-scroll overflow-x-hidden '>
                    <div className='text-center text-3xl pt-7'>Property Hub</div>
                    <div className='p-12 w-fit h-fit max-h-1/4 md:h-screen flex flex-col md:flex-row gap-10'>
                    <Carousel infiniteLoop={true} className='rounded-xl'>
                                <div className='h-fit'>
                                    <Image src="/property-hub(1900x900)/1.jpg" alt='img1' width={1900} height={900} />
                                </div>
                                <div className=' h-fit'>
                                    <Image src="/property-hub(1900x900)/2.jpg" alt='img1' width={1900} height={900} />
                                </div>
                                <div className=' h-fit'>
                                    <Image src="/property-hub(1900x900)/3.jpg" alt='img1' width={1900} height={900} />
                                </div>
                                <div className=' h-fit'>
                                    <Image src="/property-hub(1900x900)/4.jpg" alt='img1' width={1900} height={900} />
                                </div>
                            </Carousel>
                    </div>
                    <div className='w-fit md:min-w-fit h-fit border-4 rounded-xl p-4 m-4 '>
                    <Tabs>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Technologies Used</Tab>
                                    <Tab>Role</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className='text-xl'>Property Hub</div>
                                    <p>This system is a web-based system that focused on e-commerce and real estate business nature. This system is developed in group of 4 person.Developed in 2020 as mini project during my studies. Providing an easy and pleasent UI/UX for user to interact and used the system. </p>
                                </TabPanel>
                                <TabPanel>
                                    <ul className='list-disc px-4'>
                                        <li>Laravel</li>
                                        <li>MySQL</li>
                                        <li>Google Maps API</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </TabPanel>
                                <TabPanel>
                                    <div className='px-4'>
                                        <u>Backend Dev</u>
                                        <ul className=" list-disc">
                                            Task :
                                            <li>Ensure data endpoint is correct</li>
                                            <li>Design the database</li>
                                            <li>Build and implement the backend function (CRUD)</li>
                                            <li>Implement Bootstrap usage</li>
                                            <li>Implement API usage </li>
                                        </ul>
                                    </div>
                                </TabPanel>
                            </Tabs>
                    </div>
                </div>
            </motion.div>
        </main>
    )

    

}