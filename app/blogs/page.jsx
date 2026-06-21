import Link from 'next/link'
import React from 'react'

const blogPosts = [
  {
    id: 1,
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the fundamentals of Next.js and build your first modern web application with this comprehensive guide.',
    date: '2024-01-15',
    author: 'John Doe',
    category: 'Tutorial'
  },
  {
    id: 2,
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques You Should Know',
    excerpt: 'Explore the latest CSS features and techniques that will help you build better, more responsive designs.',
    date: '2024-01-20',
    author: 'Jane Smith',
    category: 'CSS'
  },
  {
    id: 3,
    slug: 'react-best-practices',
    title: 'React Best Practices for 2024',
    excerpt: 'Discover the essential React patterns and practices that every developer should follow in modern applications.',
    date: '2024-02-01',
    author: 'Mike Johnson',
    category: 'React'
  },
  {
    id: 4,
    slug: 'building-scalable-apis',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'A deep dive into creating robust, scalable API architectures using Node.js and modern backend technologies.',
    date: '2024-02-10',
    author: 'Sarah Williams',
    category: 'Backend'
  }
]

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Insights, tutorials, and industry news
          </p>
        </div>

        <div className="pt-8 space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">By {post.author}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page