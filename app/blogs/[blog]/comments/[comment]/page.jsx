import Link from 'next/link'
import React from 'react'

const blogPosts = {
    'getting-started-with-nextjs': {
        id: 1,
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Next.js',
        excerpt: 'Learn the fundamentals of Next.js and build your first modern web application with this comprehensive guide.',
        date: '2024-01-15',
        author: 'John Doe',
        category: 'Tutorial',
        comments: [
            {
                id: 1,
                author: 'Alice Johnson',
                date: '2024-01-16',
                content: 'Great introduction to Next.js! This really helped me understand the basics.'
            },
            {
                id: 2,
                author: 'Bob Smith',
                date: '2024-01-17',
                content: 'The explanation of SSR vs SSG was very clear. Thanks for sharing!'
            }
        ]
    },
    'modern-css-techniques': {
        id: 2,
        slug: 'modern-css-techniques',
        title: 'Modern CSS Techniques You Should Know',
        excerpt: 'Explore the latest CSS features and techniques that will help you build better, more responsive designs.',
        date: '2024-01-20',
        author: 'Jane Smith',
        category: 'CSS',
        comments: [
            {
                id: 1,
                author: 'Charlie Brown',
                date: '2024-01-21',
                content: 'Container queries are a game changer! Thanks for covering them.'
            },
            {
                id: 2,
                author: 'Alice Johnson',
                date: '2024-01-22',
                content: 'I\'ve been using container queries in my projects and they\'ve made my layouts much more flexible.'
            },
            {
                id: 3,
                author: 'Bob Wilson',
                date: '2024-01-23',
                content: 'The combination of container queries and CSS Grid is incredibly powerful for creating adaptive layouts.'
            }
        ]
    },
    'react-best-practices': {
        id: 3,
        slug: 'react-best-practices',
        title: 'React Best Practices for 2024',
        excerpt: 'Discover the essential React patterns and practices that every developer should follow in modern applications.',
        date: '2024-02-01',
        author: 'Mike Johnson',
        category: 'React',
        comments: [
            {
                id: 1,
                author: 'Diana Prince',
                date: '2024-02-02',
                content: 'TypeScript with React is indeed a great combination. Good article!'
            },
            {
                id: 2,
                author: 'Eve Adams',
                date: '2024-02-03',
                content: 'Would love to see more about performance optimization techniques.'
            }
        ]
    },
    'building-scalable-apis': {
        id: 4,
        slug: 'building-scalable-apis',
        title: 'Building Scalable APIs with Node.js',
        excerpt: 'A deep dive into creating robust, scalable API architectures using Node.js and modern backend technologies.',
        date: '2024-02-10',
        author: 'Sarah Williams',
        category: 'Backend',
        comments: [
            {
                id: 1,
                author: 'Frank Miller',
                date: '2024-02-11',
                content: 'Excellent overview of API development with Node.js!'
            }
        ]
    }
}

const page = async ({ params }) => {
    const { blog, comment } = await params
    const post = blogPosts[blog]
    const commentId = parseInt(comment)

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <div className="max-w-4xl w-full text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
                        Blog Post Not Found
                    </h1>
                    <Link
                        href="/blogs"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        ← Back to Blogs
                    </Link>
                </div>
            </div>
        )
    }

    const commentData = post.comments.find(c => c.id === commentId)

    if (!commentData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <div className="max-w-4xl w-full text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
                        Comment Not Found
                    </h1>
                    <Link
                        href={`/blogs/${blog}/comments`}
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        ← Back to Comments
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-4xl w-full space-y-8">
                <div className="space-y-4">
                    <Link
                        href={`/blogs/${blog}/comments`}
                        className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        ← Back to All Comments
                    </Link>

                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {post.date}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Comment #{commentData.id}
                    </h1>

                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">From: {post.title}</span>
                    </div>
                </div>

                <div className="pt-8">
                    <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold flex-shrink-0">
                                {commentData.author.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                        {commentData.author}
                                    </h2>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {commentData.date}
                                    </span>
                                </div>
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                        {commentData.content}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1">
                                    💬 Reply to this comment
                                </span>
                                <span className="flex items-center gap-1">
                                    ❤️ Like
                                </span>
                                <span className="flex items-center gap-1">
                                    🔗 Share
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Other Comments on This Post
                    </h3>
                    <div className="space-y-4">
                        {post.comments
                            .filter(c => c.id !== commentData.id)
                            .map((otherComment) => (
                                <Link
                                    key={otherComment.id}
                                    href={`/blogs/${blog}/comments/${otherComment.id}`}
                                    className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 cursor-pointer"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                                            {otherComment.author.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{otherComment.author}</h4>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{otherComment.date}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                        {otherComment.content}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        ← Back to All Blogs
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
