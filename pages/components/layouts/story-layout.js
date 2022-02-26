import Head from "next/head";

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
    <style jsx>
      {`
        .main {
          align-items: center;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          margin: 0 auto;
          max-width: 740px;
          position: relative;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default StoryLayout;
