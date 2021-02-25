import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const toppingsVariant = {
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
      className="toppings container"
      variants={toppingsVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
        variants={btnVariant}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
