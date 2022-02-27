import Head from "next/head";

import { colors } from "../../../styles/colors";

const StoryLayout = ({ children, title }) => (
  <div className="main">
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&family=Zen+Maru+Gothic:wght@400;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
    <footer className="footer">
      <a href="http://melissakate.com">about</a>
    </footer>
    <style jsx>
      {`
        .main {
          align-items: center;
          background-color: ${colors.white};
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          margin: 0 auto;
          max-width: 740px;
          position: relative;
          text-align: left;
        }

        .footer {
          bottom: 1rem;
          left: 1rem;
          position: fixed;
        }

        .footer a {
          color: ${colors.almost_black};
          font-size: 14px;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      `}
    </style>
  </div>
);

export default StoryLayout;
