// components/ContactUs.js
const ContactUs = () => {
    return (
      <div id="Contact-Us" className="flex flex-col items-center justify-center py-10">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="form border-2 border-[#2b2d42]  w-2/3 h-[525px] flex items-center justify-center text-lg font-medium p-4">
          <form action="">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="h-10 sd:w-[300px] lg:w-[350px] text-lg rounded-lg border border-gray-300 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="h-10 w-full text-lg rounded-lg border border-gray-300 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="h-10 w-full text-lg rounded-lg border border-gray-300 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full text-lg rounded-lg border border-gray-300 p-2"
              ></textarea>
            </div>
            <input
              className="button rounded-full outline-none bg-[#37bcf7] text-[#f5f5f5] py-1 px-8 h-12 text-lg font-semibold cursor-pointer transition duration-200 hover:bg-[#2b2d42] hover:text-[#ff9f43]"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactUs;