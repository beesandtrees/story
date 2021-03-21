export default ({ content }) => {
  return content.split("\n").map((c, i) => <p key={i}>{c}</p>);
};
