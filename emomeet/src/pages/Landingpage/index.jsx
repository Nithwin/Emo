import { motion } from "framer-motion";
import Header from "../../components/Header"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <section>
        <Header />
        <div className="px-[0.8rem] flex flex-col lg:flex-row-reverse lg:items-center">
          <div className="lg:w-1/2 flex justify-center">
            <motion.div className="h-full w-full"
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img src="/assets/home.png" alt="Meeting" className="size-[22rem] lg:size-[40rem]" />
            </motion.div>

          </div>
          <div className="flex flex-col justify-center gap-5 lg:w-1/2 lg:p-9 lg:gap-10">
            <div className="space-y-2 lg:space-y-7">
              <p className="text-2xl font-bold lg:text-6xl">Connect Beyond Words</p>
              <div className="lg:space-y-5">
                <p className="text-xl text-gray-500 lg:text-2xl">Real-time video calls with AI-powered emotion insights.</p>
                <p className="text-xl text-gray-500 lg:text-2xl">Experience real emotions in every
                  conversation</p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-15 lg:gap-20 justify-center lg:justify-start">
                <button className="bg-lightblue text-white font-bold px-[2.4rem] lg:px-[4rem] py-[1rem] rounded-2xl text-xl lg:text-2xl tracking-wide">Join</button>
                <button className="bg-lightblue text-white font-bold px-[2rem] lg:px-[4rem] py-[1rem] rounded-2xl text-xl lg:text-2xl tracking-wide">Create</button>
              </div>
            </div>
          </div>
        </div>
         {/* Parallax Scroll Effect for Cards */}
         <div className="p-[2rem] flex flex-col justify-center lg:flex-row-reverse lg:items-center gap-10 py-[5rem] items-center">
          {[
            {
              icon: "/assets/Icon.png",
              title: "Smart Engagement Analytics",
              description: "Track emotional trends and optimize meeting impact.",
            },
            {
              icon: "/assets/Icon(2).png",
              title: "Real-Time Emotion Detection",
              description: "Instantly analyze participant emotions (happy, confused, bored) and adapt your approach.",
            },
            {
              icon: "/assets/Icon(3).png",
              title: "AI-Powered Alerts",
              description: "Get notified when engagement drops and receive smart suggestions to re-engage your audience.",
            },
            {
              icon: "/assets/Icon(4).png",
              title: "Interactive Dashboard",
              description: "Dynamic dashboard with real-time analytics, emotions, and engagement metrics.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col shadow-xl p-3 py-8 rounded-xl gap-3 bg-gray-50 max-w-[20rem] min-h-[20rem] items-center lg:hover:-translate-y-15 delay-100 transition-transform"
              initial={{ opacity: 0, y: 100 }} // Start from the bottom
              whileInView={{ opacity: 1, y: 0 }} // Animate to the top
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              viewport={{ once: true }} // Trigger animation only once
            >
              <div className="w-full">
                <img src={card.icon} alt="Icon" className="size-[4rem] mx-auto" />
              </div>
              <p className="text-2xl font-bold text-center">{card.title}</p>
              <p className="text-gray-600 text-lg text-center">{card.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="p-[2rem] flex flex-col justify-center gap-10 items-center">
          <div>
            <p className="font-bold text-2xl text-center lg:text-5xl">Let's Connect Beyond the Screen!</p>
          </div>
          <div className="">
            <form action="" className="flex flex-col gap-7 max-w-[30rem]">
              <input type="text" name="name" id="name" className=" shadow-xl px-[1rem] py-[1rem] rounded-full focus:outline-0 border-[1px] border-gray-300 lg:text-2xl" placeholder="Name" />
              <input type="number" name="phone" id="phone" className="shadow-xl px-[1rem] py-[1rem] rounded-full focus:outline-0 border-[1px] border-gray-300 lg:text-2xl" placeholder="Phone" />
              <input type="email" name="email" id="email" className="shadow-xl px-[1rem] py-[1rem] rounded-full focus:outline-0 border-[1px] border-gray-300 lg:text-2xl" placeholder="Email" />
              <button className=" shadow-invert px-[2rem[ py-[1rem] rounded-full font-semibold text-xl text-gray-500 active:bg-black active:text-gray-200 lg:text-2xl lg:hover:bg-black lg:hover:text-white transition-all delay-100 ease-in">Connect</button>
            </form>
          </div>
        </div>
        <div className="py-[2rem] flex  flex-col lg:items-center bg-darkblue px-[0.5rem] gap-4 lg:gap-10">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-evenly lg:w-full">
            <div className="">
              <img src="/assets/logo.png" alt="logo" className="size-[5rem] lg:size-[8rem]" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-xl font-bold text-center lg:text-4xl">Follow US</p>
              <div className="flex gap-3">
                <FaInstagram className="text-white size-5 lg:size-8" />
                <FaFacebook className="text-white size-5 lg:size-8" />
                <FaLinkedin className="text-white size-5 lg:size-8" />
                <FaXTwitter className="text-white size-5 lg:size-8" />
              </div>
            </div>
            <div>
              <p className="text-white text-xl font-bold text-center lg:text-4xl">Contacts</p>
              <p className="text-white text-xs text-center lg:text-lg">Address : 4-5 Main road , Delhi</p>
              <p className="text-white text-xs text-center lg:text-lg">Email : educare@gmail.com</p>
              <p className="text-white text-xs text-center lg:text-lg">Phone Number : +91 4533433265</p>
            </div>
          </div>
          <div className="">
            <p className="text-white text-center lg:text-3xl">Copyright &#169; {new Date().getFullYear()} EMO | All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home