import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Name = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      // Animation for showing mirror image initially
      await controls.start({ scaleX: -1, opacity: 1 });

      // Animation for correcting the image with a typing effect
      await controls.start({
        scaleX: 1,
        opacity: 1,
        transition: { duration: 1 },
      });
    };

    animateText();
  }, [controls]);

  const text = "Hi,I'm Ashwani Kumar Singh,Developer";

  const lines = text.split(",");
  return (
    <div className="text-left flex flex-col cursor-default">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: "flex" }}>
          <>
            {line.split(" ").map((word, charIndex) => (
              <React.Fragment key={charIndex}>
                {word.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={charIndex + 1} // Custom prop to stagger the animation
                    initial={{ scaleX: -1, opacity: 0 }}
                    animate={controls}
                    transition={{
                      delay: 0.03 * i + 0.5 * charIndex + 2.5 * lineIndex ,
                    }} // Adjust the delay to achieve the desired typing effect
                  >
                    {(word === "Ashwani" && char === "A") ||
                    (word === "Kumar" && char === "K") ||
                    (word === "Singh" && char === "S") ? (
                      <span style={{ textShadow: "5px 2px rgb(249 115 22)" }}>
                        {char}
                      </span>
                    ) : (
                      <span>{char}</span>
                    )}
                  </motion.span>
                ))}
                {charIndex !== line.split(" ").length - 1 && (
                  <span>{"\u00A0"}</span>
                )}
              </React.Fragment>
            ))}

            {lineIndex !== lines.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                ,
              </motion.span>
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default Name;
