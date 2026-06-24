import Link from 'next/link'

const Page = async ({ params }: { params: Promise<{ filePath: string[] }> }) => {
    const { filePath } = await params;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Catch-All Route
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        This page matches any path that doesn't have a specific route
                    </p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Path Segments
                    </h2>
                    <div className="space-y-2">
                        {filePath.length === 0 ? (
                            <p className="text-gray-500 dark:text-gray-400">No path segments (root)</p>
                        ) : (
                            <ul className="space-y-2">
                                {filePath.map((segment, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm font-mono">
                                            {index}
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-300 font-mono">
                                            {segment}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Full path: <span className="font-mono">/{filePath.join('/')}</span>
                        </p>
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
