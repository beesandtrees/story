const FormattedContent = ({ content }) => {
  return content
    ? content.split("\n").map((c, i) => (
        <>
          <p className={`${i === 0 ? "first" : "other"}`} key={i}>
            {c}
          </p>
          <style jsx>{`
            p {
              display: block;
              line-height: 26px;
              margin: 16px 0 0;
            }

            p.first::first-letter {
              font-size: 36px;
              font-weight: bold;
              letter-spacing: 1px;
            }
          `}</style>
        </>
      ))
    : "";
};

export default FormattedContent;
