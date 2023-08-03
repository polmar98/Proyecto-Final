import React, { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import check from "../assets/Check.mp4";

function PaymentComplete() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoEnded) {
      setTimeout(() => {
        setAnimationEnded(true);
      }, 700);
    }
  }, [videoEnded]);

  return (
    <>
      <div className="bg-verdeFooter">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center">
        {videoEnded && animationEnded ? (
          <div className="bg-white p-8 rounded-2xl my-32 first-letter:rounded-xl shadow-lg animate-fade-up animate-once animate-ease-in-out animate-normal">
            <h1 className="text-gray-400 text-2xl mb-6 font-bold text-center">
              Amazing!
            </h1>
            <h2 className="text-4xl mb-6 font-bold text-center fontPoppins">
              Congratulations, pack your bags for your next adventure
            </h2>
            <div className="mb-6 text-gray-500 fontPoppins">
              Reference number:{" "}
              <span className="text-black font-bold ">
                #AS97FSFV923HFJ12345
              </span>
            </div>
            <p className="text-lg text-gray-500 text-center fontPoppins mb-6">
              You will receive an email with the details of your purchase
              shortly.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="/search"
                className="bg-verdeFooter text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >
                Continue Shopping
              </a>
              <a
                href="/"
                className="text-verdeFooter underline hover:text-green-700 transition duration-300"
              >
                Go to Home
              </a>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={check}
            alt="Landing presentation"
            className={
              videoEnded
                ? "h-auto my-44 rounded-xl w-96 animate-jump-out animate-once animate-duration-1000 animate-ease-linear animate-normal"
                : "h-auto my-44 rounded-xl w-96"
            }
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default PaymentComplete;
