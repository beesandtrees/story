export default ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
    <style jsx>{`
      .header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 40px 0 20px;
      }
      .header h1 {
        font-size: 24px;
      }
    `}</style>
  </header>
);
