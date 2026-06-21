import Link from 'next/link'
import React from 'react'

const UIUX = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        UI/UX Design
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        User-centered design that delights and converts
                    </p>
                </div>

                <div className="space-y-6 pt-8">
                    <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Our Process</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We create beautiful, intuitive interfaces that users love. Our design process 
                            focuses on understanding user needs, creating wireframes and prototypes, 
                            and delivering polished designs that drive engagement and conversions.
                        </p>
                    </div>

                    <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Design Services</h2>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">🎨</span>
                                <span>User interface (UI) design</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">🔍</span>
                                <span>User experience (UX) research and testing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">📱</span>
                                <span>Responsive and mobile-first design</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">🎯</span>
                                <span>Design systems and component libraries</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 text-center">
                    <Link
                        href="/service"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        ← Back to Services
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UIUX
