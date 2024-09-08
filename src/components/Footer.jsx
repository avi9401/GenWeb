import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#723073]/30 text-white py-10 px-20 border-t-4">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-10 w-10"
          />
        </div>

        {/* Links Section */}
        <div className="flex space-x-8">
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="#facebook" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.633c0-3.017 1.793-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.963h-1.513c-1.491 0-1.953.928-1.953 1.877v2.246h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.863 10.125-11.854z" />
            </svg>
          </a>
          <a href="#twitter" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.202-4.92 4.917 0 .386.043.763.127 1.125-4.087-.205-7.713-2.164-10.141-5.144-.424.729-.666 1.576-.666 2.476 0 1.71.87 3.213 2.191 4.096-.807-.026-1.566-.247-2.228-.617v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.087.627 1.956 2.444 3.379 4.6 3.419-1.685 1.32-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.175-.068 2.179 1.398 4.768 2.215 7.557 2.215 9.053 0 14.002-7.497 14.002-13.986 0-.213-.005-.425-.014-.637.961-.695 1.796-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#linkedin" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.225 0h-20.449c-.981 0-1.776.795-1.776 1.776v20.448c0 .981.795 1.776 1.776 1.776h20.449c.981 0 1.775-.795 1.775-1.776v-20.448c0-.981-.794-1.776-1.775-1.776zm-13.845 20.452h-3.075v-10.402h3.075v10.402zm-1.535-11.828c-.987 0-1.785-.799-1.785-1.785 0-.984.798-1.783 1.785-1.783.985 0 1.785.799 1.785 1.783 0 .986-.8 1.785-1.785 1.785zm13.517 11.828h-3.075v-5.632c0-1.344-.027-3.073-1.873-3.073-1.876 0-2.165 1.463-2.165 2.973v5.732h-3.075v-10.402h2.951v1.422h.042c.411-.778 1.418-1.596 2.92-1.596 3.122 0 3.696 2.055 3.696 4.729v5.847z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
