import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="font-sans bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <header className="fixed w-full bg-white dark:bg-gray-800 shadow z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <nav className="flex-1 flex items-center space-x-4 overflow-x-auto">
            <h1 className="flex-shrink-0 text-2xl font-bold">MemoTag</h1>
            <a href="#hero" className="flex-shrink-0 hover:text-blue-500 dark:hover:text-blue-400">Home</a>
            <a href="#problem" className="flex-shrink-0 hover:text-blue-500 dark:hover:text-blue-400">Problem</a>
            <a href="#solution" className="flex-shrink-0 hover:text-blue-500 dark:hover:text-blue-400">Solution</a>
            <a href="#traction" className="flex-shrink-0 hover:text-blue-500 dark:hover:text-blue-400">Traction</a>
            <a href="#cta" className="flex-shrink-0 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          </nav>

          <button
            onClick={() => setDark(!dark)}
            className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none transition-colors"
          >
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="pt-20 transition-colors duration-300">{children}</main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} MemoTag. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;