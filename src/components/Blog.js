import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of Frontend Development',
      date: 'April 10, 2025',
      excerpt:
        'Exploring the latest trends and technologies shaping the future of frontend development.',
      link: '#',
    },
    {
      title: 'Mastering React Hooks',
      date: 'March 25, 2025',
      excerpt:
        'A comprehensive guide to using React Hooks effectively in your projects.',
      link: '#',
    },
    {
      title: 'Responsive Design Best Practices',
      date: 'March 15, 2025',
      excerpt:
        'Tips and techniques for creating websites that look great on all devices.',
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Latest Blog Posts</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Check out my latest articles on web development, design, and industry trends.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                {/* Using SVG as placeholder instead of copyrighted images */}
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="gradient-bg text-sm font-medium">{post.date}</p>
                <h3 className="text-xl font-semibold mt-2 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={post.link}
                  className="gradient-bg font-medium hover:text-blue-800 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}