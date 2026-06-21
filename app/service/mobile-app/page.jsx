import Link from 'next/link'
import React from 'react'

const MobileApp = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Mobile Apps
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Native and cross-platform mobile applications
                    </p>
                </div>

                <div className="space-y-6 pt-8">
                    <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Our Approach</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We develop high-performance mobile applications for both iOS and Android platforms.
                            Whether you need a native app or a cross-platform solution, we have the expertise
                            to deliver exceptional user experiences.
                        </p>
                    </div>

                    <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Platforms & Technologies</h2>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">📱</span>
                                <span>React Native for cross-platform development</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">🍎</span>
                                <span>Swift for native iOS applications</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">🤖</span>
                                <span>Kotlin for native Android applications</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">⚡</span>
                                <span>Flutter for beautiful, fast apps</span>
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

export default MobileApp
