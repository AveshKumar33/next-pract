'use client'

import Link from "next/link";

export default function Home() {
  const name = "Software company";
  console.log("Hello World", name);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hello {name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Building innovative solutions for the modern web
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 pt-8">
          <Link
            href="/about"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            About
          </Link>
          <Link
            href="/service"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Service
          </Link>
          <Link
            href="/blogs"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Blog
          </Link>
        </nav>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Fast</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lightning-fast performance</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Modern</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Beautiful, responsive design</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Secure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Built with security in mind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
