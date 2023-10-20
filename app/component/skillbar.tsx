'use client'

import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export default function skillbar() {
    let medium = "#6aee30"
    let interemediate = "#6096c6"
    let beginner = "6096c5"
    let [showSkills,setShowSkills] = React.useState(true)
    // let [showFramework,setShowFramework] = React.useState(false) 

    {
        return (
            <main className=" md:pt-8 h-full w-full">
                <div className='text-white text-xl md:text-4xl justify-center text-center pb-5'>Technical Skills</div>
                <div className='flex flex-col md:flex-row'>
                    <div className={`flex flex-col w-full md:w-1/2 h-full font-serif text-xl bg-trans text-black items-center md:visible  `}>
                        <div className='text-lg md:text-2xl font-sans font-medium text-white'>Language</div>
                        <div className=' w-3/4 px-4 rounded-xl h-fit bg-white items-center justify-center flex flex-col'>
                            <div className='w-full bg-trans rounded-lg p-4'>
                                <p>PHP</p>
                                <ProgressBar completed="85" width='' animateOnRender={true} bgColor={interemediate} labelColor='#000000' customLabel='Intermediate' />
                            </div>
                            <div className='w-full bg-trans rounded-lg p-4'>
                                <p>Javascript</p>
                                <ProgressBar completed="85" animateOnRender={true} bgColor={interemediate} labelColor='#000000' customLabel='Intermediate' />
                            </div>
                            <div className='w-full bg-trans rounded-lg p-4'>
                                <p>Java</p>
                                <ProgressBar completed="80" animateOnRender={true} bgColor={interemediate} labelColor='#000000' customLabel='Intermediate' />
                            </div>
                            <div className='w-full bg-trans rounded-lg p-4'>
                                <p>Python</p>
                                <ProgressBar completed="60" animateOnRender={true} bgColor={medium} labelColor='#000000' customLabel='Medium' />
                            </div>
                            <div className='w-full bg-trans rounded-lg p-4'>
                                <p>C#</p>
                                <ProgressBar completed="50" animateOnRender={true} bgColor={medium} labelColor='#000000' customLabel='Medium' />
                            </div>
                            <div className='w-full bg-trans rounded-lg p-4'>
                                <p>Dart</p>
                                <ProgressBar completed="70" animateOnRender={true} bgColor={interemediate} labelColor='#000000' customLabel='Intermediate' />
                            </div>
                        </div>

                    </div>
                    <div className={`w-full md:w-1/2 h-fit md:h-full flex flex-col items-center p-4 `}>
                        <h1 className='text-lg md:text-xl'>Technologies/Framework :</h1>
                        <div className='w-full h-full md:w-fit md:h-fit  bg-slate-700 px-10 py-4 rounded-xl text-white'>
                            <ul className=' list-disc text-xs md:text-lg md:flex  md:flex-col '>
                                <li>NextJs</li>
                                <li>NuxtJs</li>
                                <li>Express</li>
                                <li>Laravel</li>
                                <li>VueJs</li>
                                <li>React Js</li>
                                <li>Flutter</li>
                                <li>.Net</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>GraphQL</li>
                                <li>TailwindCSS</li>
                                <li>ExpressJs</li>
                                <li>Bootstrap</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        )
    }
}