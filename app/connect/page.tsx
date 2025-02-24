import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-orange-500 flex flex-col items-center justify-center p-10">

      <h1 className="text-3xl font-bold mb-8">Let's Connect</h1>

      <div className="flex flex-col items-center gap-10 w-full max-w-5xl">
  
        <div className="w-full md:w-2/3 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Chapel Hill Location"
            className="w-full h-64 md:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.7847913041365!2d-79.0558442233437!3d35.91320077239273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace5061da5d93f%3A0x8a9292bd08f4c1c!2sChapel%20Hill%2C%20NC!5e0!3m2!1sen!2us!4v1708712800143!5m2!1sen!2us"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="mailto:msgaditi@gmail.com"
              className="bg-amber-500 text-white flex items-center justify-center p-3 rounded-lg font-semibold hover:bg-amber-600 transition w-40 shadow-md"
            >
              📧 Email
            </Link>

            <Link
              href="https://www.linkedin.com/in/aditi-nayak1/"
              target="_blank"
              className="bg-teal-500 text-white flex items-center justify-center p-3 rounded-lg font-semibold hover:bg-teal-600 transition w-40 shadow-md"
            >
              🔗 LinkedIn
            </Link>

            <div className="col-span-2 flex justify-center">
              <Link
                href="https://github.com/aditivn12/StockPriceProject"
                target="_blank"
                className="bg-purple-500 text-white flex items-center justify-center p-3 rounded-lg font-semibold hover:bg-purple-600 transition w-40 shadow-md"
              >
                🐙 GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
