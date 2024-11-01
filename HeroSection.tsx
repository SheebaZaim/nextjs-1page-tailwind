import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/Moving-borders";

function HeroSection(){
    return(
        < div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 sm:pt-32">
            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <div className="p-4 relative z-10 w-full text-center ">
                <h1 className="  mt-16 sm:mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Mastery in art  of music</h1>
                <p className="mt-4 sm:mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"> you'll embark on a transformative journey to master your instrument, guided by experienced instructors. Whether you're a beginner or an advanced musician, our personalized lessons and immersive environment foster creativity and growth. Join us to unlock your musical potential and achieve excellence in your craft.</p>
<div className="mt-4">
    <Link href={"/courses"}>
    <Button
        border-radius="1.75rem"
        className= "relative inline-flex items-center justify-center px-6 py-3 border-2 border-transparent rounded-lg  bg-white dark:bg-slate-900 text-black dark:text-white transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-lg border-2 border-blue-500 blur-md"></span>
        <span className="relative z-10">Explore courses</span>
    Explore courses</Button>
    </Link>
</div>
            </div>
        </div>
    )
}
export default HeroSection