import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Import images
import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";
import G3 from "../assets/G3.jpg";

// Array of past events
const pastEvents = [
  { title: "Dandiya night", date: "2023-09-01", image: G1 },
  { title: "Sports event", date: "2023-10-15", image: G2 },
  { title: "Pdea Coem", date: "2023-11-25", image: G3 },
];

export default function About() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % pastEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ opacity: [0, 1], scale: [0.9, 1] });
  }, [currentEvent, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative p-6 overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    >
      <h3 className="mb-8 text-3xl font-extrabold text-center text-white md:text-4xl">
        Our Past Events
      </h3>

      {/* Image Box Section */}
      <div className="relative mx-auto w-full max-w-md h-72 sm:h-80 md:w-[28rem] lg:w-[36rem] lg:h-96 rounded-lg shadow-lg bg-gray-800">
        <motion.div
          animate={controls}
          className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg"
        >
          <img
            src={pastEvents[currentEvent].image}
            alt={pastEvents[currentEvent].title}
            className="object-cover w-full h-full rounded-lg border-4 border-white shadow-md"
          />
        </motion.div>

        {/* Event Details */}
        <div className="absolute bottom-0 w-full p-4 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-lg">
          <h4 className="text-lg font-bold text-white">
            {pastEvents[currentEvent].title}
          </h4>
          <p className="text-sm text-yellow-300">
            {pastEvents[currentEvent].date}
          </p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {pastEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentEvent(index)}
            className={`w-4 h-4 rounded-full transition ${
              index === currentEvent
                ? "bg-yellow-400 scale-125"
                : "bg-gray-300 hover:bg-yellow-200"
            }`}
            aria-label={`View ${pastEvents[index].title}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
