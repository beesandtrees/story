import React, { useEffect, useState } from "react";

const Dialog = ({ dialog, items, setScene }) => {
  let [script, setScript] = useState(null);

  useEffect(() => {
    if (!script) {
      setScript(dialog.questions[0]);
    }
  }, [dialog, script, setScript]);

  if (script) {
    return (
      <React.Fragment>
        {script.setting && (
          <div className="setting">
            <p>{script.setting}</p>
          </div>
        )}
        <p className="not-you">
          <b>{dialog.who}:</b> {script.question}
        </p>
        <hr />
        <div className="you">
          <b>You:</b>
          <div className="replies">
            {script.options.map((reply, i) => {
              if (
                (!reply.required && !reply.exclude) ||
                (reply.required &&
                  items.filter((i) => `${i.id}` === `${reply.required}`)
                    .length) ||
                (reply.exclude &&
                  items.filter((i) => `${i.id}` !== `${reply.exclude}`).length)
              ) {
                return (
                  <React.Fragment key={`${reply.id}-${i}`}>
                    {i !== 0 && <span className="divider" />}
                    <button
                      className="reply"
                      onClick={() => {
                        reply.newScene
                          ? setScene(reply.id)
                          : setScript(dialog.get(reply.id));
                      }}
                    >
                      {reply.text}
                    </button>
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
        <style jsx>{`
          .setting {
            background: #eef2f3;
            color: #444;
            font-size: 85%;
            font-style: italic;
            margin: 2rem 0;
            padding: 2rem 2rem 1rem;
          }

          hr {
            border-top: 1px solid black;
            margin-bottom: 1rem;
            width: 100%;
          }

          .replies {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          .reply {
            margin-top: 1.4rem;
            text-align: right;
          }

          .divider {
            background: gray;
            display: block;
            height: 1px;
            margin: 1.8rem 0 0.6rem;
            width: 100px;
          }

          .you {
            text-align: right;
          }
          b {
            display: block;
          }
        `}</style>
      </React.Fragment>
    );
  }
  return "";
};

export default Dialog;
