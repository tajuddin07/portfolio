import Image from 'next/image'
import ProfilePicture from '/public/profile-pic-squared.jpg'
import Github from '/public/github.ico'
import Email from '/public/email.ico'
import Linkedin from '/public/linkedin.ico'
import Phone from '/public/phone.ico'
import Link from 'next/link'
export default function About() {
    {
        return (
            <main className='p-4 md:p-10 h-full w-auto'>
                <div className="flex flex-col items-center gap-7">
                    <div className='text-2xl md:text-6xl text white space-y-10'>
                        About Me
                    </div>
                    <div className=' w-2/3 h-2/3 md:w-[230px] md:h-[230px]  '>
                        <Image
                            src={ProfilePicture}
                            sizes="100vw"
                            className='rounded-full border-4 border-slate-600'
                            alt='profile picture'
                        />
                    </div>

                    <p className='text-lg md:text-2xl font-light'>
                        Based in Segamat ,Johor, Malaysia
                    </p>
                    <p className='text-base md:text-lg w-fit md:w-2/3'>
                        Born in 1997, always had a driven interest in computer since kid. Pickup programming during college studies and now had an urge and love for code.A developer with robust problem-solving
                        skills, eager to learn new
                        things and able to work in group and
                        individual environment
                    </p>
                    
                </div>
            </main>
        )
    }
}