import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react"
import { CourseCard } from "@/components/CourseCard"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const Route = createFileRoute('/_layout/courses/')({
  component: RouteComponent,
})

const itemsPerPage = 6

function RouteComponent() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(coursesData.length / itemsPerPage)
  const indexOfLastCourse = currentPage * itemsPerPage
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage
  const currentCourses = coursesData.slice(indexOfFirstCourse, indexOfLastCourse)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
      <div className="px-4 pt-32 pb-14">
        <div className="container mx-auto max-w-6xl">
          <div className="py-8 text-3xl font-semibold text-gray-700">
            Courses
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {currentCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                  href="#"
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <PaginationItem key={number}>
                  <PaginationLink
                      href="#"
                      onClick={() => paginate(number)}
                      isActive={currentPage === number}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                  href="#"
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
  )
}



const coursesData = [
  {
    id: 1,
    title: 'Introduction to React',
    instructor: 'John Doe',
    duration: '4 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Dive into the world of React and learn how to build dynamic user interfaces. This course covers components, state management, and hooks, providing you with a solid foundation in modern front-end development.',
    price: 49.99
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    duration: '6 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, and asynchronous programming. By the end of this course, you\'ll be writing more efficient and powerful JavaScript code.',
    price: 69.99
  },
  {
    id: 3,
    title: 'CSS Mastery',
    instructor: 'Bob Johnson',
    duration: '3 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Become a CSS expert and create stunning, responsive layouts. Learn about flexbox, grid, animations, and CSS preprocessors. This course will elevate your styling skills and help you create beautiful web designs.',
    price: 39.99
  },
  {
    id: 4,
    title: 'Node.js Fundamentals',
    instructor: 'Alice Brown',
    duration: '5 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Get started with server-side JavaScript using Node.js. Learn how to build scalable and efficient web applications, work with databases, and create RESTful APIs. This course is perfect for developers looking to expand their full-stack skills.',
    price: 59.99
  },
  {
    id: 5,
    title: 'Python for Beginners',
    instructor: 'Charlie Davis',
    duration: '4 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Start your programming journey with Python. This beginner-friendly course covers basic syntax, data structures, and introduces you to object-oriented programming. By the end, you\'ll be able to write your own Python scripts and programs.',
    price: 44.99
  },
  {
    id: 6,
    title: 'Data Structures and Algorithms',
    instructor: 'Eva Wilson',
    duration: '8 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Master the core concepts of computer science. This comprehensive course covers essential data structures like arrays, linked lists, trees, and graphs, as well as fundamental algorithms for sorting, searching, and graph traversal.',
    price: 79.99
  },
  {
    id: 7,
    title: 'Machine Learning Basics',
    instructor: 'Frank Miller',
    duration: '6 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Discover the fascinating world of machine learning. Learn about supervised and unsupervised learning, neural networks, and deep learning. This course provides a solid foundation for those interested in AI and data science.',
    price: 69.99
  },
  {
    id: 8,
    title: 'Web Design Principles',
    instructor: 'Grace Lee',
    duration: '4 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Learn the principles of effective web design. This course covers color theory, typography, layout design, and user experience. Develop the skills to create visually appealing and user-friendly websites that stand out.',
    price: 49.99
  },
  {
    id: 9,
    title: 'Mobile App Development',
    instructor: 'Henry Taylor',
    duration: '7 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Build your own mobile apps for iOS and Android. This course introduces you to cross-platform development using React Native. Learn to create responsive and native-like mobile applications with a single codebase.',
    price: 74.99
  },
  {
    id: 10,
    title: 'Database Management',
    instructor: 'Ivy Chen',
    duration: '5 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Master the essentials of database management. This course covers relational databases, SQL, and NoSQL solutions. Learn how to design efficient database schemas, optimize queries, and ensure data integrity in your applications.',
    price: 59.99
  },
  {
    id: 11,
    title: 'Cloud Computing',
    instructor: 'Jack Robinson',
    duration: '6 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Explore the world of cloud computing and its applications. Learn about different cloud services, deployment models, and best practices for cloud security. This course prepares you for working with major cloud platforms like AWS and Azure.',
    price: 69.99
  },
  {
    id: 12,
    title: 'Cybersecurity Essentials',
    instructor: 'Kelly White',
    duration: '5 weeks',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png',
    description: 'Understand the fundamentals of cybersecurity and protect against digital threats. This course covers network security, encryption, ethical hacking, and security policies. Essential for anyone interested in the growing field of cybersecurity.',
    price: 64.99
  },
]
