import Head from "next/head";

export default ({ children, title }) => (
  <div className="main">
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <style jsx>
      {`
        .main {
          height: 100vh;
          margin: 0 auto;
          max-width: 740px;
          position: relative;
        }
      `}
    </style>
  </div>
);
