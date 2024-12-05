import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export const Route = createFileRoute('/_layout/courses/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)
  // const { id } = Route.useParams()
  return (
      <div className="min-h-screen bg-gray-50 pt-32">

        <main className="max-w-4xl mx-auto px-4 py-8">
          <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png"
              alt={course.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">Instructor: {course.instructor}</span>
            <span className="mr-4">|</span>
            <span className="mr-4">Duration: {course.duration}</span>
            <span className="mr-4">|</span>
            <span>Level: {course.level}</span>
          </div>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Topics</h2>
            <ul className="list-disc list-inside">
              {course.topics.map((topic, index) => (
                  <li key={index} className="text-gray-700 mb-2">{topic}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Syllabus</h2>
            {course.syllabus.map((week) => (
                <div key={week.week} className="mb-4">
                  <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">Week {week.week}: {week.title}</h3>
                    {expandedWeek === week.week ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {expandedWeek === week.week && (
                      <p className="mt-2 text-gray-700">{week.content}</p>
                  )}
                </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Enroll in this course</h2>
              <p className="text-gray-600">Gain access to all course materials and start learning today!</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-indigo-600">${course.price.toFixed(2)}</span>
              <button className="ml-4 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </main>
      </div>
  )
}

const course = {
  id: 1,
  title: "Advanced React Techniques",
  description: "Take your React skills to the next level with this advanced course. Learn about hooks, context, and performance optimization to build scalable and efficient React applications. This course is designed for developers who are already familiar with React basics and want to deepen their understanding and skills.",
  instructor: "John Smith",
  price: 79.99,
  image: "/placeholder.svg?height=400&width=800&text=Advanced+React",
  duration: "6 weeks",
  level: "Advanced",
  topics: [
    "Advanced Hook Patterns",
    "State Management with Context and Reducers",
    "Performance Optimization Techniques",
    "Server-Side Rendering with Next.js",
    "Testing React Applications",
    "Deploying React Apps"
  ],
  syllabus: [
    {
      week: 1,
      title: "Advanced Hook Patterns",
      content: "Deep dive into useEffect, useCallback, and useMemo. Custom hook creation and best practices."
    },
    {
      week: 2,
      title: "State Management",
      content: "Explore Context API and useReducer for complex state management. Comparison with Redux."
    },
    {
      week: 3,
      title: "Performance Optimization",
      content: "Techniques for optimizing React apps including memoization, lazy loading, and code splitting."
    },
    {
      week: 4,
      title: "Server-Side Rendering",
      content: "Introduction to Next.js and implementing SSR in React applications."
    },
    {
      week: 5,
      title: "Testing React Applications",
      content: "Unit testing with Jest and React Testing Library. Integration and end-to-end testing strategies."
    },
    {
      week: 6,
      title: "Deployment and Best Practices",
      content: "Deploying React apps to various platforms. Best practices for production React applications."
    }
  ]
}


