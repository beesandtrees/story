import { linkBorders } from "../../../styles/colors";

const Links = ({ links, setScene }) => (
  <ul className="story-links">
    {links ? (
      links.map((link, i) => {
        console.log(links);
        const nextScene = link ? link.id : 0;
        const buttonText = link ? link.link_text : "Start Over";
        const borderColor = linkBorders[i];
        console.log(i);
        return (
          <li key={nextScene}>
            <button
              onClick={() => setScene(nextScene)}
              style={{
                borderColor
              }}
            >
              {buttonText}
            </button>
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
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        list-style-type: none;
        margin: 2.4rem 0 0;
        padding: 0;
      }

      .story-links li {
        margin: 0;
      }

      .story-links button {
        background-color: #ffffff;
        color: #43404e;
        font-family: "Carrois Gothic SC", sans-serif;
        height: auto;
        margin: 0 0 1rem 0;
        padding: 0.4rem 0.6rem 0.4rem 0;
        position: relative;
      }

      .story-links button:after {
        border-bottom: 1px solid transparent;
        border-color: inherit;
        bottom: 0;
        display: block;
        content: "";
        left: 0;
        position: absolute;
        width: 100%;
      }

      .story-links button:hover:after {
        border-bottom: 3px solid transparent;
        border-color: inherit;
      }
    `}</style>
  </ul>
);

export default Links;
