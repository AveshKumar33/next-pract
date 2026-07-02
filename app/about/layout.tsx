
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Indigo App",
    description: "Learn more about our company and mission",
};
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </div>
        </div>
    )
}
