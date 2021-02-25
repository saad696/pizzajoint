import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 5000);
  const orderVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 2,
        type: "spring",
        mass: 0.5,
        damping: 7,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useState(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5300)
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={orderVariant}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && <motion.h2 exit={{x:-1000}}>Thank you for your order :)</motion.h2>}
      </AnimatePresence>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariant} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
