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
    content: `
      <p>Next.js has become one of the most popular React frameworks for building modern web applications. In this comprehensive guide, we'll explore the fundamentals and help you get started with your first Next.js project.</p>
      
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework that provides additional features like server-side rendering, static site generation, and file-based routing out of the box. It's built by Vercel and offers an excellent developer experience.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Render pages on the server for better SEO and performance</li>
        <li><strong>Static Site Generation (SSG):</strong> Generate static HTML at build time</li>
        <li><strong>File-based Routing:</strong> Automatic routing based on file structure</li>
        <li><strong>API Routes:</strong> Build API endpoints as part of your Next.js app</li>
        <li><strong>Image Optimization:</strong> Automatic image optimization and resizing</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js project, simply run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary configurations. You can then start the development server with:</p>
      <pre><code>npm run dev</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a powerful foundation for building modern web applications. With its rich feature set and excellent developer experience, it's no wonder it's become the framework of choice for many developers.</p>
    `
  },
  'modern-css-techniques': {
    id: 2,
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques You Should Know',
    excerpt: 'Explore the latest CSS features and techniques that will help you build better, more responsive designs.',
    date: '2024-01-20',
    author: 'Jane Smith',
    category: 'CSS',
    content: `
      <p>CSS has evolved significantly over the years, introducing powerful new features that make styling easier and more efficient. Let's explore some modern CSS techniques that every developer should know.</p>
      
      <h2>CSS Grid Layout</h2>
      <p>CSS Grid is a powerful two-dimensional layout system that allows you to create complex layouts with ease. It's perfect for building responsive designs without relying on frameworks.</p>
      
      <h2>CSS Custom Properties</h2>
      <p>Also known as CSS variables, custom properties allow you to define reusable values that can be used throughout your stylesheet. They're perfect for theming and maintaining design consistency.</p>
      
      <h2>Flexbox</h2>
      <p>Flexbox is a one-dimensional layout method that makes it easy to align and distribute space among items in a container. It's ideal for building responsive navigation bars and card layouts.</p>
      
      <h2>CSS Container Queries</h2>
      <p>Container queries allow you to style elements based on the size of their container rather than the viewport. This is a game-changer for building truly responsive components.</p>
      
      <h2>Conclusion</h2>
      <p>Modern CSS provides developers with powerful tools to create beautiful, responsive designs. By staying up-to-date with these techniques, you can build better web experiences more efficiently.</p>
    `
  },
  'react-best-practices': {
    id: 3,
    slug: 'react-best-practices',
    title: 'React Best Practices for 2024',
    excerpt: 'Discover the essential React patterns and practices that every developer should follow in modern applications.',
    date: '2024-02-01',
    author: 'Mike Johnson',
    category: 'React',
    content: `
      <p>React continues to evolve, and with it, the best practices for building React applications. Here are the essential patterns and practices you should follow in 2024.</p>
      
      <h2>Use Functional Components</h2>
      <p>Functional components with hooks are now the standard in React development. They're simpler, easier to test, and provide better performance than class components.</p>
      
      <h2>Component Composition</h2>
      <p>Favor composition over inheritance. Build small, reusable components that can be combined to create complex UIs. This makes your code more maintainable and easier to understand.</p>
      
      <h2>State Management</h2>
      <p>Use React's built-in state management for local component state. For global state, consider using Context API, Zustand, or Redux Toolkit depending on your needs.</p>
      
      <h2>Performance Optimization</h2>
      <p>Use React.memo, useMemo, and useCallback to optimize performance. Avoid unnecessary re-renders by properly managing your component dependencies.</p>
      
      <h2>TypeScript</h2>
      <p>Use TypeScript to add type safety to your React applications. It catches errors early, improves developer experience, and makes your code more maintainable.</p>
      
      <h2>Conclusion</h2>
      <p>Following these best practices will help you build robust, maintainable React applications. Stay updated with the latest React features and community recommendations.</p>
    `
  },
  'building-scalable-apis': {
    id: 4,
    slug: 'building-scalable-apis',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'A deep dive into creating robust, scalable API architectures using Node.js and modern backend technologies.',
    date: '2024-02-10',
    author: 'Sarah Williams',
    category: 'Backend',
    content: `
      <p>Building scalable APIs is crucial for modern applications. Node.js, with its event-driven architecture, is an excellent choice for creating high-performance APIs.</p>
      
      <h2>REST vs GraphQL</h2>
      <p>Choose between REST and GraphQL based on your needs. REST is simpler and works well for most use cases, while GraphQL provides more flexibility for complex data requirements.</p>
      
      <h2>Authentication & Authorization</h2>
      <p>Implement proper authentication using JWT tokens or OAuth 2.0. Ensure authorization checks are in place to protect sensitive endpoints.</p>
      
      <h2>Database Design</h2>
      <p>Design your database schema carefully. Use proper indexing, normalization, and consider using ORMs like Prisma or TypeORM for better developer experience.</p>
      
      <h2>Error Handling</h2>
      <p>Implement comprehensive error handling with proper HTTP status codes and meaningful error messages. Use middleware to handle errors consistently across your API.</p>
      
      <h2>Testing</h2>
      <p>Write unit tests, integration tests, and end-to-end tests for your API. Use testing frameworks like Jest and Supertest to ensure your API works as expected.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable APIs requires careful planning and attention to detail. By following these practices, you can create APIs that are robust, maintainable, and ready for growth.</p>
    `
  }
}

const page = async ({ params }) => {
  const { blog } = await params
  const post = blogPosts[blog]

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full space-y-8">
        <div className="space-y-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
          >
            ← Back to Blogs
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
            {post.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium">By {post.author}</span>
          </div>
        </div>

        <div className="pt-8">
          <article className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
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