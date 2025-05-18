import { useState } from 'react';
import blogData from '../data/blogData';

const BlogsPage = () => {
  const [activeBlog, setActiveBlog] = useState(1);
  const currentBlog = blogData.find(blog => blog.id === activeBlog);
  
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold text-center mb-12">React Concepts Guide</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Topics List */}
        <aside className="md:w-72 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">Topics</h2>
            <nav className="space-y-2">
              {blogData.map(blog => (
                <button
                  key={blog.id}
                  onClick={() => setActiveBlog(blog.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeBlog === blog.id 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {blog.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 max-w-3xl">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentBlog.title}</h2>
            <article className="prose prose-slate max-w-none">
              {currentBlog.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('function') || paragraph.includes('const [') || paragraph.includes('useEffect')) {
                  return (
                    <pre key={index} className="bg-slate-50 p-4 rounded-lg overflow-x-auto border border-slate-100 my-4">
                      <code className="text-sm font-mono text-slate-800">{paragraph}</code>
                    </pre>
                  );
                }
                
                if (paragraph.startsWith('•') || paragraph.startsWith('-')) {
                  return (
                    <ul key={index} className="list-disc pl-4 space-y-2 my-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-gray-600">
                          {item.replace(/^[•-]\s/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                if (paragraph.match(/^\d\./)) {
                  return (
                    <ol key={index} className="list-decimal pl-4 space-y-2 my-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-gray-600">
                          {item.replace(/^\d\.\s/, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }

                if (paragraph.endsWith(':')) {
                  return (
                    <h3 key={index} className="font-semibold text-gray-800 mt-8 mb-4 text-lg">
                      {paragraph.replace(':', '')}
                    </h3>
                  );
                }

                return (
                  <p key={index} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogsPage;