import Link from "next/link"
import courseData from"../data/music_course.json"
//  const userName:string=""
interface Courses{"id": number,
            title: string,
            slug:string,
            description:string,
            price:number,
            instructor:string,
            isfeatured:boolean,
            image:string

}
function FeaturedCourses(){
    const FeaturedCourse=[]
    courseData.courses.filter(course=>course.isfeatured)
    return(
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide upperCase">FEATURED COURSES</h2>
                    
                    <p className="mt-20 text-3xl leading-8 font-extrabold tracking-tight text-white sm:4xl"> Learn with the Best Teachers</p>
                </div>
                </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
               {/* {FeaturedCourses.map(Courses,courseData)} */}
               </div>
            </div>
            <div className="mt-20 text-center">
                <Link  href={"/Courses"} className=" px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 tranisition duration-200">View all Courses</Link>
            </div>
        </div>
    )
}
export default FeaturedCourses