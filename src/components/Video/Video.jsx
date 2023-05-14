import { useRef, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "intersection-observer";

const Video = ({
  src,
  className = "",
  loop = true,
  muted = true,
  autoPlay = true,
  playsInline = true,
  controls = false,
  controlsList = "nodownload noremoteplayback",
}) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.7,
  });
  const videoRef = useRef();

  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      videoRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);

      if (node && !controls) {
        node.addEventListener("click", function () {
          if (this.paused) {
            this.play();
          } else {
            this.pause();
          }
        });
      }
    },
    [inViewRef, controls]
  );

  useEffect(() => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    if (inView && autoPlay) {
      videoRef.current.play();
    } else if (inView === false && autoPlay) {
      videoRef.current.pause();
    }
  }, [inView, autoPlay]);

  return (
    <video
      ref={setRefs}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      controls={controls}
      playsInline={playsInline}
      className={className}
      controlsList={controlsList}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
