"use client"
import Contact from '@/app/component/contact'
import Link from 'next/link'
import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-responsive-carousel/lib/styles/carousel.min.css";//css for carousel
import 'react-tabs/style/react-tabs.css';// css for tabs

export default function WorkHistory() {

    return (
        <main className=' w-screen h-screen bg-wallpaper-image text-white justify-center'>
            <div className='items-center flex flex-col gap-7 w-screen md:snap-y h-screen md:snap-mandatory md:overflow-x-hidden'>

                <div className='text-2xl pt-32 md:text-7xl md:snap-start md:snap-always shrink-0 w-full text-center  font-mono'>Page under construction</div>
                <Link href="/">Home</Link>

                {/* <div className='flex flex-col md:flex-row md:snap-start md:snap-always shrink-0 h-screen w-full'>
                    <div className='w-full md:w-1/2 h-screen bg-white bg-opacity-70 text-black'>
                    <div className='text-xl text-black text-center pt-7'>iCompany</div>
                        <div className='p-12 w-fit h-1/3 '>
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


                    </div>
                    <div className=' flex w-full md:w-1/2 h-fit md:h-screen bg-black text-white items-center justify-center'>
                        <div className='w-full min-w-fit h-fit border-4 rounded-xl p-4 m-4'>
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

                </div>
                <div className='flex flex-col md:flex-row md:snap-start md:snap-always shrink-0 h-fit md:h-screen w-full'>
                    <div className='w-full md:w-1/2 h-screen bg-black bg-opacity-70 text-white'>
                    <div className='text-center text-2xl'>The DeliMeal</div>
                        <div className='p-4 w-fit gap-7 h-screen m-4 flex flex-col  justify-center items-center'>
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
                                <div className='h-fit'>
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
                    </div>
                    <div className='flex w-full md:w-1/2 h-fit md:h-screen bg-white  text-black items-center justify-center'>
                        <div className='w-full md:min-w-fit h-fit border-4 rounded-xl p-4 m-4 '>
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

                </div>
                <div className='flex flex-col md:flex-row md:snap-start md:snap-always shrink-0 h-fit md:h-screen w-full'>
                    <div className='w-full md:w-1/2 h-fit md:h-screen bg-white bg-opacity-70 text-black'>
                        <div className='text-center text-3xl pt-7'>SAC</div>
                        <div className='p-12 w-fit h-fit md:h-screen flex flex-col md:flex-row gap-10'>
                            <Carousel infiniteLoop={true} className='rounded-xl w-40 md:w-1/2 h-full'>
                                <div className='max-h-1/3'>
                                    <Image src="/sac(395x655)/user/1.jpg" alt='img1' width={395} height={655} quality={100} />
                                </div>
                                <div className=' max-h-1/3'>
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
                            <Carousel infiniteLoop={true} className='rounded-xl w-40 md:w-1/2 h-full'>
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


                    </div>
                    <div className=' flex w-full md:w-1/2 h-fit md:h-screen bg-black text-white items-center justify-center'>
                        <div className='w-full md:min-w-fit h-fit border-4 rounded-xl p-4 m-4'>
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

                </div>
                <div className='flex flex-col md:flex-row md:snap-start md:snap-always shrink-0 h-fit md:h-screen w-full'>
                    <div className='w-full md:w-1/2 h-fit md:h-screen bg-black bg-opacity-70 text-white '>
                        <div className='text-xl text-white text-center pt-7'>Property-Hub</div>
                        <div className='p-12 w-fit h-fit md:h-1/3 '>
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


                    </div>
                    <div className='flex w-full md:w-1/2 h-fit md:h-screen bg-white text-black items-center justify-center'>
                        <div className='w-full md:min-w-fit h-fit border-4 rounded-xl p-4 m-4'>
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

                </div> */}
            </div>
        </main>
    )
}