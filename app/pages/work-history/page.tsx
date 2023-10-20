
import Link from 'next/link'
import React, { Component } from 'react'

export default function WorkHistory () {
    
        return (
            <main className=" flex flex-col gap-7 place-content-center md:items-center justify-between p-10 md:p-40 sm:h-fit md:h-full sm:w-auto md:w-full ">
            <div className='flex flex-col md:flex-row bg-white bg-opacity-30 p-40' >
                <div className='item-center'>
                    <h1 className="text-center text-4xl md:text-7xl font-mono text-gray-100">Under Construction</h1>
                    <Link href='/' className="self-center text-2xl md:text-2xl font-mono text-gray-100">Return Home</Link>
                    <p className='w-fit text-center text-lg md:text-xl font-extralight space-y-10'>
                        Were, sorry for your inconvinience. This page is currently being worked on. Thank you for your consideration.
                    </p>
                </div>
                
            </div>
            
        </main>
        )
    
}