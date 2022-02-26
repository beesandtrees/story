import { useState } from "react";
import Arrow from "./arrows";

export default ({ activeItem, items, theme, useItem }) => {
  const [open, setOpen] = useState(false);
  if (items && items.length) {
    return (
      <div className={`items show-hide ${theme} ${open ? "show" : ""}`}>
        <h2 onClick={() => setOpen(!open)}>
          <Arrow open={open} /> Inventory
        </h2>
        <div className="list">
          {items.map((item, i) => (
            <div
              className={`item ${activeItem === item.id && "active"}`}
              key={i}
              onClick={() => useItem(item.id)}
            >
              {item.item_name}
            </div>
          ))}
        </div>
        <style jsx>{`
          .items {
            margin: 0 auto;
          }

          .drawer {
            background: white;
            border: 1px solid black;
            box-shadow: 10px 10px 0px #000;
            right: 5%;
            padding: 0 0.4rem 0;
            position: fixed;
            top: 1%;
          }

          .drawer.show {
            max-width: 90%;
            padding: 0 0.4rem 1rem;
            width: 460px;
          }

          .show-hide.show .list {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
          }

          .drawer .list {
            display: none;
          }

          .inset {
            margin-top: 1rem;
          }

          .inset .list {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }

          .item {
            border: 1px solid white;
            color: #575adc;
            cursor: pointer;
            flex: 1;
            margin: 1%;
            min-width: 31%;
            padding: 0.6rem;
            text-align: center;
          }

          .active {
            font-weight: bold;
          }

          .item:hover {
            background-color: lavender;
            border: 1px solid #575adc;
          }

          h2 {
            cursor: pointer;
            padding: 0.6rem 1rem 0;
            text-align: right;
          }

          h2 span {
            font-size: 75%;
          }

          .inset h2 {
            display: none;
          }
        `}</style>
      </div>
    );
  }
  return null;
};
