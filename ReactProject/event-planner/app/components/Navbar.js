export default function Navbar(){
    return(
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
            {/* Logo*/}
            <div className="text-xl font-bold">Nova</div>
    
            {/* Nav Links */}
            <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-gray-400">Personal</a>
                <a href="#" className="hover:text-gray-400">Small Business</a>
                <a href="#" className="hover:text-gray-400">Contact Us</a>
                <a href="#" className="hover:text-gray-400">Corporate</a>
            </div>
    
            {/* Login Button */}
            <button className="bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200">
            Login
            </button>
      </nav>
    
    );
}
