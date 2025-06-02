export default function BlogLayout({ 
    children,
} : { 
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto p-4">
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-blue-600">Blog</h1>
            <nav className="mt-4">
              <a href="/blog" className="text-blue-600 hover:underline mr-4">
                All topic 
              </a>
              <a href="/blog/tech" className="text-blue-600 hover:underline">
                Technology 
              </a>
            </nav>
          </header>
          {children}
        </div>
      </div>
    );
}
