const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-center font-bold mt-4">Contacts</h1>
        <div>
          <div>
            <h3 className="text-2xl font-bold my-4">
              Sign up For The Newsletter
            </h3>
            <p>
              Want to be the first to read our news? Subscribe to the newsletter
              to keep abreast of all events.
            </p>
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full max-w-xs mt-4"
              />
              <button className="py-3 px-4 bg-[#febf00] uppercase font-bold md:rounded-r-md md:-ml-4 mt-2 md:mt-0">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
