import { useForm } from "react-hook-form";
import Button from "../components/buttons/Button";
import { ChevronDown } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const faqVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2, // stagger index.
      },
    }),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const faQs = [
    {
      id: 1,
      heading: "How to buy a Product ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cumque, nihil officiis magnam reiciendis ipsam esse at nisi soluta, animi fuga veniam quaerat iste doloremque consequatur culpa, alias fugiat odit delectus ipsum.",
    },
    {
      id: 2,
      heading: "How to make refund from your website ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cumque, nihil officiis magnam reiciendis ipsam esse at nisi soluta, animi fuga veniam quaerat iste doloremque consequatur culpa, alias fugiat odit delectus ipsum.",
    },
    {
      id: 3,
      heading: "How to make online delivery ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cumque, nihil officiis magnam reiciendis ipsam esse at nisi soluta, animi fuga veniam quaerat iste doloremque consequatur culpa, alias fugiat odit delectus ipsum.",
    },
    {
      id: 4,
      heading: "How to pay the amount ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cumque, nihil officiis magnam reiciendis ipsam esse at nisi soluta, animi fuga veniam quaerat iste doloremque consequatur culpa, alias fugiat odit delectus ipsum.",
    },
    {
      id: 5,
      heading: "How to contact you ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cumque, nihil officiis magnam reiciendis ipsam esse at nisi soluta, animi fuga veniam quaerat iste doloremque consequatur culpa, alias fugiat odit delectus ipsum.",
    },
  ];

  return (
    <div className="mt-16 p-4 flex flex-col gap-10 min-h-screen sm:flex-col sm:gap-16">
      {/* Contact Form */}
      <form className="flex-1 max-w-lg sm:mx-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-bold tracking-wide text-2xl mb-5"
        >
          Contact Us
        </motion.h1>
        <div className="flex flex-col gap-4">
          <label className="tracking-wide">Your Name</label>
          <input
            placeholder="Write your name here..."
            className="border border-gray-300 rounded-lg p-3 outline-0 caret-gray-700 text-gray-500 dark:bg-zinc-800 dark:text-gray-400"
            {...register("UserName", {
              required: true,
              maxLength: 20,
            })}
          />

          <label>Your Email</label>
          <input
            placeholder="Write your email here..."
            className="border border-gray-300 rounded-lg p-3 outline-0 caret-gray-700 text-gray-500 dark:bg-zinc-800 dark:text-gray-400"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 100,
            })}
          />

          <label>Your Message</label>
          <textarea
            rows={5}
            placeholder="Write your review here... "
            className="border border-gray-300 rounded-lg p-3 outline-0 caret-gray-700 text-gray-500 dark:bg-zinc-800 dark:text-gray-400 "
            {...register("message", {
              required: true,
              maxLength: 400,
            })}
          />

          <Button text={"Send"} />
        </div>
      </form>

      {/* FAQ Section */}
      <div style={{ opacity }} className="flex-1 max-w-2xl mx-auto sm:mx-0">
        <h1 className="text-3xl font-bold text-center sm:text-left mb-8 text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faQs.map((item, i) => (
            <motion.details
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={faqVariants}
              custom={i}
              className="group bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all"
            >
              <motion.summary className="p-5 flex justify-between items-center cursor-pointer font-semibold text-gray-900 select-none">
                <span>{item.heading}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
              </motion.summary>

              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-gray-700 leading-relaxed"
                >
                  {item.description}
                </motion.div>
              </AnimatePresence>
            </motion.details>
          ))}
        </div>
      </div>

      {/* below part  */}
      <div className="">
        <motion.h1
          intial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          You can contact us and share your valueable feedback with us.
        </motion.h1>
      </div>
    </div>
  );
};

export default Contact;
