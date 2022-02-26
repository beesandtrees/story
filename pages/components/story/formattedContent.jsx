export default ({ content }) => {
  return content ? content.split("\n").map((c, i) => <p key={i}>{c}</p>) : "";
};
