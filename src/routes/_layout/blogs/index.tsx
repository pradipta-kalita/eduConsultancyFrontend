import { createFileRoute } from '@tanstack/react-router'
import BlogLayout from "@/components/BlogLayout.tsx";
import {BlogPostCard} from "@/components/BlogPostCard.tsx";

export const Route = createFileRoute('/_layout/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <BlogLayout>
        <div className="space-y-2">
          {mockPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </BlogLayout>
  )
}



const mockPosts = [
  {
    id: 1,
    publication: 'Level Up Coding',
    title: 'The worst way of fetching data with Spring Data JPA',
    excerpt: 'Have you ever heard of findAll() anti-pattern? If not, this article is perfect for you. Otherwise, seeing a couple of real examples of...',
    author: 'Flavius Zichil',
    date: 'Jun 12',
    readTime: '5 min',
    views: 783,
    comments: 13,
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png'
  },
  {
    id: 2,
    publication: 'Science Spectrum',
    title: 'What is the Fastest Way to Solve Soduko?',
    excerpt: 'How math can help you with this addictive puzzle',
    author: 'Cole Frederick',
    date: '4h ago',
    readTime: '7 min',
    views: 284,
    comments: 6,
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png'
  },{
    id: 3,
    publication: 'Level Up Coding',
    title: 'System design basics',
    excerpt: 'something something',
    author: 'Flavius Zichil',
    date: 'Jun 12',
    readTime: '5 min',
    views: 783,
    comments: 13,
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png'
  },
  {
    id: 4,
    publication: 'Science Spectrum',
    title: 'Docker & k8s basics',
    excerpt: 'docker and k8s basics',
    author: 'Cole Frederick',
    date: '4h ago',
    readTime: '7 min',
    views: 284,
    comments: 6,
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QnEHTb57iUU8KPQ-gBzw6w.png'
  },
  // Add more mock posts as needed
]
