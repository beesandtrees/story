export default ({ links, setScene }) => (
  <ul className="story-links">
    {links ? (
      links.map(link => {
        const nextScene = link ? link.id : 0;
        const buttonText = link ? link.link_text : "Start Over";
        return (
          <li key={nextScene}>
            <button onClick={() => setScene(nextScene)}>{buttonText}</button>
          </li>
        );
      })
    ) : (
      <li>
        <button onClick={() => setScene(0)}>Start Over</button>
      </li>
    )}
    <style jsx>{`
      .story-links {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 2.4rem 0 0;
        padding: 0;
      }

      .story-links li {
        margin: 0;
      }
    `}</style>
  </ul>
);
