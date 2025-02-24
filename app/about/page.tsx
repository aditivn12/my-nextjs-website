import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400 flex flex-col md:flex-row gap-8 p-10">

      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Passions & Interests
          </h2>
          <p className="text-gray-600 mt-2">
            When I'm not coding, you can find me listening to music, journaling, crocheting, going to the gym, or hanging out with friends.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Academic Journey
          </h2>
          <p className="text-gray-600 mt-2">
            I love the intersection between technology and business and would like to eventually get into tech consulting. But before that I...
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Life Philosophy
          </h2>
          <p className="text-gray-600 mt-2">
            My life philosophy is loving yourself and being confident in yourself is the best way to achieve your goals.
          </p>
        </div>
      </div>


      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image src="/friends.jpeg" alt="Friends" width={400} height={250} className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image src="/dukegame.jpeg" alt="Duke Game" width={400} height={250} className="w-full h-48 object-cover" />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md flex justify-center">
          <Image 
            src="/headshotimage.jpg" 
            alt="Me" 
            width={500} 
            height={400} 
            className="w-full h-72 object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
