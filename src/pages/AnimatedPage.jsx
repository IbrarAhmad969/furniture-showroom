import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReceiptText } from "lucide-react";
import { useState } from "react";

export default function AnimatedPage() {
  const [clicked, setClicked] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-10">
      {/* Card Container */}
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-10 text-center"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          🚀 Welcome to the Future
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Stunning animations powered by{" "}
          <span className="font-semibold">Framer Motion</span>
        </motion.p>

        {/* Floating Circles Animation */}
        <div className="relative flex justify-center items-center">
          <motion.div
            className="absolute w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-60"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -80, 80, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-60"
            animate={{
              x: [0, -120, 120, 0],
              y: [0, 100, -100, 0],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60"
            animate={{
              x: [0, 150, -150, 0],
              y: [0, -120, 120, 0],
              scale: [1, 1.4, 0.6, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

       
        <motion.button
          className="relative mt-12 px-10 py-3 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full shadow-lg overflow-hidden cursor-pointer"
          style={{ rotate, x, y }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 30px rgba(255, 0, 150, 0.6)",
          }}
          whileTap={{ scale: 0.9, rotate: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onMouseMove={(e)=> {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.clientX - (rect.left + rect.width / 2);
            const offsetY = e.clientY - (rect.top + rect.height / 2);
            x.set(offsetX/5);
            y.set(offsetY/5);



          }}
          onMouseLeave={()=>{
            x.set(0);
            y.set(0)
          }}
          onClick={()=>setClicked(!clicked)}
        >
         
          <motion.span
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {clicked ? " Clicked!" : "Get Started"}
        </motion.button>
      </motion.div>
    </div>
  );
}
