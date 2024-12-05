import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Link} from "@tanstack/react-router";

interface Course {
    id: number
    title: string
    instructor: string
    duration: string
    image: string
    description: string
    price: number
}

interface CourseCardProps {
    course: Course
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <Card className="flex flex-col h-full text-sm">
            <CardHeader>
                <img
                    src={course.image}
                    alt={course.title}
                    width={200}
                    height={100}
                    className="w-full h-auto object-cover rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-sm text-gray-600 mb-1">Instructor: {course.instructor}</p>
                <p className="text-sm text-gray-600 mb-2">Duration: {course.duration}</p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-4">{course.description}</p>
                <p className="text-lg font-bold text-primary">${course.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
                {/*<Link to={`/courses/${course.id}`}>*/}
                {/*    */}
                {/*</Link>*/}
                <Button variant="outline" className="w-full">
                   <Link to={`/courses/${course.id}`}>
                       View Course Details</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}