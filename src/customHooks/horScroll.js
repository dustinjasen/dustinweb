import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const horzToVertListenerRef = useRef();
  useEffect(() => {
    const eventListener = horzToVertListenerRef.current;
    if (eventListener) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        eventListener.scrollTo({
          //scroll 20 pixels per touch for responsiveness and UX
          left: eventListener.scrollLeft + 30 + e.deltaY,
          right: eventListener.scrollRight + 30 + e.deltaY,
          behavior: "smooth",
        });
      };
      eventListener.addEventListener("wheel", onWheel);
      return () => eventListener.removeEventListener("wheel", onWheel);
    }
  }, []);
  return horzToVertListenerRef;
}
