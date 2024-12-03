import { MessageSquare } from 'lucide-react'
import {Link} from "@tanstack/react-router";

export type BlogPost = {
    id: number
    publication: string
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    views: number
    comments: number
    image: string
}

export function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <article className="py-8 border-b border-gray-200">
            <div className="flex items-center space-x-1 text-sm">
                <Link to="/" className="font-medium">
                    {post.publication}
                </Link>
            </div>
            <div className="flex justify-between items-start mt-2">
                <div className="flex-1 pr-8">
                    <Link href="#" className="block group">
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-700">
                            {post.title}
                        </h2>
                        <p className="mt-2 text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </Link>
                    <div className="flex items-center mt-4 text-sm text-gray-600">
                        <span>{post.date}</span>
                        <span className="mx-2">·</span>
                        <span>{post.readTime} read</span>
                        <span className="mx-2">·</span>
                        <span className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
                            {post.comments}
            </span>
                    </div>
                </div>
                <Link href="#" className="block flex-shrink-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        width={112}
                        height={112}
                        className="w-28 h-28 object-cover"
                    />
                </Link>
            </div>
        </article>
    )
}

