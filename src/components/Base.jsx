import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const divVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 2,
        type: "spring",
      },
    },
    exit: {
      x: "-100vh",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const nextVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.3,
        duration: 2,
        type: "spring",
      },
    },
  };

  const btnVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 10px white",
      boxShadow: "0px 0px 8px white",
      transition: {
        duration: .2,
        yoyo: Infinity
      }
    },
  };

  return (
    <motion.div
      className="base container"
      variants={divVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariant}>
          <Link to="/toppings">
            <motion.button
            variants={btnVariant}
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
