const HomeFooter = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} My App. All rights reserved.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm">
                Made with <span className="text-red-500">❤</span> by
                <a href="https://www.example.com" className="text-gray-400 hover:text-gray-500">
                  &nbsp;Me
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default HomeFooter;