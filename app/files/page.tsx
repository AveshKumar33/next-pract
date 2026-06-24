import Link from 'next/link'

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Files
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Browse and manage your files
                    </p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Available Routes
                    </h2>
                    <div className="space-y-3">
                        <Link
                            href="/files/documents"
                            className="block p-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📁</span>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Documents</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">/files/documents</p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/files/images"
                            className="block p-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🖼️</span>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Images</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">/files/images</p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/files/projects/2024/web-app"
                            className="block p-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Nested Path Example</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">/files/projects/2024/web-app</p>
                                </div>
                            </div>
                        </Link>
                    </div>
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
    );
};

export default Page;
