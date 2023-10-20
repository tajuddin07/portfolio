import Link from 'next/link'


export default function Main()  {
     {
        return (
            <main className=" flex flex-col gap-7 place-content-center md:items-center justify-between p-10 md:p-40 sm:h-fit md:h-full sm:w-auto md:w-full ">
                <div className='flex flex-col md:flex-row' >
                    <div>
                        <h1 className="text-center text-4xl md:text-7xl font-mono text-gray-100">Welcome.</h1>
                        <p className="text-center text-2xl md:text-2xl font-mono text-gray-100">Fullstack Developer</p>
                        <p className='w-fit text-center text-lg md:text-xl font-extralight space-y-10'>
                            My name is Tajuddin Mahadi , I am a fullstack web developer .
                        </p>
                    </div>
                    
                </div>
                <div className=' w-fit md:w-2/6 h-fit max-h-fit flex flex-col border-2 rounded-b-lg rounded-tr-lg bg-black bg-opacity-40 py-4 px-10 gap-3 items-center justify-center'>
                    Learn More:
                    <ol className="list-decimal flex flex-row gap-7">
                        <ul><Link className='hover:text-lg' href="/pages/project">Project</Link></ul>
                        <ul><Link className='hover:text-lg' href="/pages/work-history">Experience</Link></ul>
                    </ol>
                </div>
            </main>
        )
    }
}