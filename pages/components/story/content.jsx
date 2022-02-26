import Dialog from "./dialog";
import Links from "./links";
import Question from "./question";
import Random from "./random-link";
import Trade from "./trade";
import WithItems from "./withItems";
import FormattedContent from "./formattedContent";

export default (props) => {
  if (props.currentScene && props.currentScene.type === "acquire") {
    props.acquireItem(props.currentScene.item);
  }
  return (
    <div className="story">
      {props.currentScene && props.currentScene.headline && (
        <h1>{props.currentScene.headline}</h1>
      )}
      {props.currentScene && props.currentScene.content && (
        <FormattedContent content={props.currentScene.content} />
      )}

      {props.currentScene && props.currentScene.author && (
        <p className="author">&ndash; {props.currentScene.author}</p>
      )}

      {props.currentScene && props.currentScene.type === "dialog" && (
        <Dialog
          dialog={props.currentScene.dialog}
          items={props.items}
          setScene={props.setScene}
        />
      )}
      {props.currentScene && props.currentScene.type === "question" && (
        <Question
          currentScene={props.currentScene}
          links={props.currentScene.links}
          setScene={props.setScene}
        />
      )}
      {props.currentScene && props.currentScene.type === "random" && (
        <Random links={props.currentScene.links} setScene={props.setScene} />
      )}
      {props.currentScene && props.currentScene.type === "trade" && (
        <Trade
          active={props.activeItem}
          currentScene={props.currentScene}
          items={props.items}
          links={props.currentScene.links}
          setScene={props.setScene}
          useItem={props.useItem}
        />
      )}

      {props.currentScene && props.currentScene.type === "withItems" && (
        <WithItems
          currentScene={props.currentScene}
          items={props.items}
          setScene={props.setScene}
        />
      )}

      {((props.currentScene && props.currentScene.type === undefined) ||
        (props.currentScene && props.currentScene.type === "acquire")) && (
        <Links links={props.currentScene.links} setScene={props.setScene} />
      )}

      <style jsx>{`
        .story {
          display: flex;
          flex-direction: column;
          margin: 9% auto 2%;
          white-space: pre-line;
          width: 90%;
        }

        .story p {
          line-height: 26px;
          margin: 16px 0 0;
        }
      `}</style>
    </div>
  );
};
