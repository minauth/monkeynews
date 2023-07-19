import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaUser, FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Добавляем слушатель события прокрутки, чтобы определить, когда показать кнопку
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Убираем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем плавную анимацию прокрутки
    });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowUp size={45} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
