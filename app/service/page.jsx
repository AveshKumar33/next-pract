import Link from 'next/link'
import React from 'react'

const service = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Our Services
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Comprehensive solutions tailored to your needs
                    </p>
                </div>

                <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/service/web-dev" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 space-y-3 cursor-pointer">
                        <div className="text-4xl mb-2">💻</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Web Development</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Custom web applications built with modern frameworks and best practices
                        </p>
                    </Link>

                    <Link href="/service/mobile-app" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 space-y-3 cursor-pointer">
                        <div className="text-4xl mb-2">📱</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Mobile Apps</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Native and cross-platform mobile applications for iOS and Android
                        </p>
                    </Link>

                    <Link href="/service/cloud" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 space-y-3 cursor-pointer">
                        <div className="text-4xl mb-2">☁️</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cloud Solutions</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Scalable cloud infrastructure and deployment services
                        </p>
                    </Link>

                    <Link href="/service/consulting" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 space-y-3 cursor-pointer">
                        <div className="text-4xl mb-2">🔧</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Consulting</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Expert technical consulting and architecture design
                        </p>
                    </Link>

                    <Link href="/service/ui-ux" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 space-y-3 cursor-pointer">
                        <div className="text-4xl mb-2">🎨</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">UI/UX Design</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            User-centered design that delights and converts
                        </p>
                    </Link>

                    <Link href="/service/security" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 space-y-3 cursor-pointer">
                        <div className="text-4xl mb-2">🔒</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Security</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Comprehensive security audits and implementation
                        </p>
                    </Link>
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

export default service
