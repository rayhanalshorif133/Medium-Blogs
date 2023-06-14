import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Medium", "Blogger"];
export default function Slider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mx-auto bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              <TextTransition springConfig={presets.molasses}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>{" "}
            is a place to write,read and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex md:h-[15rem] h-32 lg:h-[30rem]"
          src="images/logo_m.png"
          alt=""
        />
      </div>
    </>
  );
}
