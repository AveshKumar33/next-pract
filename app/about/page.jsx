import { aboutData } from './data'

const page = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 sm:p-12 md:p-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTJ2LTJoLTJ2MmgtMnYyaDJ2MmgydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydjJoLTJ2LTJoLTJ2LTJoLTJ2LTJoLTJ2LTJoLTJ2LTJoLTJ2LTJoLTJ2LTJoLTJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative z-10 text-center space-y-6 sm:space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-white/90 text-xs sm:text-sm font-medium">About {aboutData.company.name}</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                        We Build
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                            Digital Excellence
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
                        Transforming ideas into exceptional digital experiences. We combine creativity,
                        technology, and strategy to deliver solutions that drive real business results.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-xl text-sm sm:text-base">
                            Get Started
                        </button>
                        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all hover:scale-105 text-sm sm:text-base">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                    { value: '500+', label: 'Clients Worldwide', color: 'from-blue-500 to-cyan-500' },
                    { value: '1,200+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
                    { value: '98%', label: 'Client Satisfaction', color: 'from-orange-500 to-red-500' },
                    { value: '50+', label: 'Team Members', color: 'from-green-500 to-emerald-500' }
                ].map((stat, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                        <div className="relative">
                            <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-lg">
                            🎯
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Our Mission</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            To empower businesses with cutting-edge technology solutions that drive growth,
                            efficiency, and innovation in the digital age. We believe in creating solutions
                            that not only meet today's needs but anticipate tomorrow's challenges.
                        </p>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-lg">
                            👁️
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Our Vision</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            To be the leading technology partner for businesses worldwide, known for
                            excellence, innovation, and transformative solutions that shape the future
                            of digital experiences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">What We Stand For</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Our core values guide everything we do
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { icon: '💡', title: 'Innovation', desc: 'Pushing boundaries with creative solutions' },
                        { icon: '🤝', title: 'Trust', desc: 'Building lasting relationships' },
                        { icon: '⚡', title: 'Excellence', desc: 'Quality in every detail' },
                        { icon: '🌍', title: 'Impact', desc: 'Making a meaningful difference' }
                    ].map((value, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative">
                                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{value.icon}</div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2">{value.title}</h3>
                                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">{value.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">Meet Our Team</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        The talented people behind our success
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        { name: 'John Doe', role: 'CEO & Founder', bio: '20+ years in tech leadership', img: '👨‍💼' },
                        { name: 'Jane Smith', role: 'CTO', bio: 'Expert in scalable architecture', img: '👩‍💻' },
                        { name: 'Mike Johnson', role: 'Lead Developer', bio: 'Full-stack specialist', img: '👨‍🔬' }
                    ].map((member, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
                                        {member.img}
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2">{member.name}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Company Info */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 sm:p-8 md:p-12 shadow-xl sm:shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBoMjB2MjBIMjBWMjB6TTEwIDEwaDIwdjIwSDEwVjEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                    <div className="space-y-2 sm:space-y-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl">
                            🏢
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Founded</h3>
                        <p className="text-2xl sm:text-3xl font-bold text-white">{aboutData.company.founded}</p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl">
                            👥
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Team Size</h3>
                        <p className="text-2xl sm:text-3xl font-bold text-white">{aboutData.company.employees}</p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl">
                            📍
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Location</h3>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-white/90">{aboutData.company.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
