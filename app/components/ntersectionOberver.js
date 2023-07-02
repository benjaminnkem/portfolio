import { useEffect, useRef } from "react";

const InterSectObserver = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const tag = targetRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is visible");
        } else {
          console.log("Element is not visible");
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (tag) {
        observer.unobserve(tag);
      }
    };
  }, []);
  return <></>;
};

export default InterSectObserver;
