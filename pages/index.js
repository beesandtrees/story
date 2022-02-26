import Link from "next/link";
import { useState } from "react";
import MainLayout from "./components/layouts/main";

const MainPage = () => {
  const [swinging, setSwinging] = useState(false);
  return (
    <MainLayout title="Bad Decisions">
      <h1>
        <span>Bad</span>
        <span className={`rock ${swinging ? "swinging-rock" : ""}`}>
          Decisions
        </span>
      </h1>
      <Link href="/story">
        <span className="superhover" onMouseEnter={() => setSwinging(true)}>
          <span className="start">Start Making Decisions</span>
        </span>
      </Link>
      <style jsx>
        {`
          h1 span {
            color: #ffffff;
            display: inline-block;
            font-family: "Carrois Gothic SC", sans-serif;
            font-size: 8rem;
            padding: 1rem 2rem;
            position: relative;
            z-index: 2;
          }

          h1 .rock {
            background-color: #f46751;
            z-index: 1;
          }

          h1 .swinging-rock {
            animation-duration: 3s;
            animation-fill-mode: both;
            animation-name: swing;
          }

          .superhover {
            color: #ffffff;
            cursor: pointer;
            padding: 4rem;
          }

          .start {
            background-color: #5162ff;
            display: inline-block;
            font-family: "Zen Maru Gothic", sans-serif;
            padding: 1rem 2rem;
            position: relative;
            z-index: 4;
          }

          @keyframes swing {
            20% {
              transform: rotate(48deg) translate(12px, 170px);
            }
            60% {
              transform: rotate(37deg) translate(0px, 140px);
            }
            100% {
              transform: rotate(44deg) translate(16px, 160px);
            }
          }
        `}
      </style>
    </MainLayout>
  );
};

export default MainPage;
