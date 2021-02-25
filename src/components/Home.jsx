import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader"

const Home = () => {
  const divVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vh",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const btnVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 10px white",
      boxShadow: "0px 0px 8px white",
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };
  return (
    <motion.div
      className="home container"
      variants={divVariant}
      initial="hidden"
      animate="visible"
      exit = "exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={btnVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
