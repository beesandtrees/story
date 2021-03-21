export default ({ closeModal, item, open }) => {
  if (open) {
    return (
      <div className="wrapper">
        <div className="item">
          <button className="close" onClick={() => closeModal()}>
            &times;
          </button>
          <div className="body">
            <div>
              <h3>{item.item_name}</h3>
              <p>{item.notes}</p>
            </div>
            <dl>
              <dt>Rarity:</dt>
              <dd>{`${item.rarity}/10`}</dd>

              <dt>Qty:</dt>
              <dd>{item.qty}</dd>
            </dl>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            align-items: center;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            height: 100vh;
            justify-content: center;
            left: 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 100;
          }
          .item {
            background: white;
            border: 1px solid black;
            box-shadow: 10px 10px 0px #000;
            display: flex;
            padding: 4rem;
            position: relative;
            max-width: 50%;
            min-height: 360px;
            width: 360px;
          }
          .close {
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            right: 1rem;
            top: 0;
          }
          .body {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
          }
          dl {
            border: 1px solid black;
            display: flex;
            font-size: 16px;
            flex-wrap: wrap;
            padding: 1rem;
            width: 100%;
          }
          dt {
            font-weight: bold;
            margin-right: 3%;
            width: 30%;
          }
          dd {
            margin: 0;
            width: 67%;
          }
        `}</style>
      </div>
    );
  }
  return null;
};
