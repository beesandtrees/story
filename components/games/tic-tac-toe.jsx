import React, { useState } from "react";
export default () => {
  const [moves, updateMoves] = useState(0);
  const [winner, updateResult] = useState(null);
  const [board, updateBoard] = useState([
    [{ id: null, class: "" }, { id: null, class: "" }, { id: null, class: "" }],
    [{ id: null, class: "" }, { id: null, class: "" }, { id: null, class: "" }],
    [{ id: null, class: "" }, { id: null, class: "" }, { id: null, class: "" }]
  ]);

  const checkWin = () => {
    let winner = null;

    // check diagonal
    if (
      (board[0][0].id === board[1][1].id &&
        board[1][1].id === board[2][2].id) ||
      (board[0][2].id === board[1][1].id && board[1][1].id === board[2][0].id)
    ) {
      if (board[1][1].id !== null) winner = board[1][1].id;
    }

    // check columns and rows
    for (let i = 0; i < board.length; i++) {
      let col = 0,
        row = 0,
        colO = 0,
        rowO = 0;

      for (let j = 0; j < board.length; j++) {
        let currCol = board[j][i];
        let currRow = board[i][j];
        // check columns
        if (currCol.id === "x") col = col + 1;
        if (currCol.id === "o") colO = colO + 1;
        // check rows
        if (currRow.id === "x") row = row + 1;
        if (currRow.id === "o") rowO = rowO + 1;
      }

      if (col === 3 || row === 3) winner = "x";
      if (colO === 3 || rowO === 3) winner = "o";
    }

    if (winner) {
      return {
        player: winner,
        won: true
      };
    }

    return false;
  };

  const flashSquare = (x, y, time) => {
    return new Promise(function(resolve) {
      const currentBoard = [...board];
      const originalClass = currentBoard[x][y].class;
      currentBoard[x][y].class = "multi";
      updateBoard(currentBoard);
      setTimeout(function() {
        currentBoard[x][y].class = originalClass;
        updateBoard(currentBoard);
        resolve();
      }, time);
    });
  };

  const checkMarker = (x, y) => {
    const currentBoardState = [...board];
    return currentBoardState[x][y].id === null;
  };

  const placeMarker = (x, y, player) => {
    if (winner) {
      return false;
    }
    const currentBoardState = [...board];
    if (checkMarker(x, y)) {
      currentBoardState[x][y] = { id: player, class: player };
      updateBoard(currentBoardState);
      const won = checkWin();
      if (won) {
        updateResult(won);
      } else {
        if (player === "x" && moves < 4) {
          computerTurn();
        }
      }
    } else {
      if (player === "o") {
        computerTurn();
      }
    }
    updateMoves(moves + 1);
  };

  const computerTurn = () => {
    const x = Math.floor(Math.random() * board.length);
    const y = Math.floor(Math.random() * board.length);

    if (checkMarker(x, y)) {
      setTimeout(() => {
        flashSquare(x, y, 300).then(() => {
          placeMarker(x, y, "o");
        });
      }, 300);
    } else {
      flashSquare(x, y, 100).then(() => {
        computerTurn();
      });
    }
  };

  return (
    <div>
      <div className={`board ${winner ? "finished" : ""}`}>
        {board.map((row, i) => {
          return row.map((col, j) => {
            return (
              <div
                className={`square ${col.id} ${col.class} ${i}+${j}`}
                key={`${i}+${j}`}
                onClick={() => placeMarker(i, j, "x")}
              />
            );
          });
        })}
      </div>
      {winner && <div>Player {winner.player} won!</div>}
      <style jsx>{`
        .board {
          align-items: flex-start;
          display: flex;
          flex-wrap: wrap;
          height: 300px;
          justify-content: flex-start;
          margin: 6rem auto 0;
          width: 300px;
        }
        .finished {
          opacity: 0.6;
        }
        .finished .square {
          background: #eee;
          cursor: not-allowed;
        }
        .square {
          border: 1px solid black;
          cursor: pointer;
          height: 100px;
          position: relative;
          width: 100px;
        }
        .square:hover {
          background-color: #dfffa0;
        }
        .multi {
          background-color: pink;
        }
        .multi:nth-child(even) {
          background-color: tomato;
        }
        .x:hover,
        .o:hover {
          background-color: #dcdcdc;
          cursor: not-allowed;
        }
        .x:before,
        .o:before {
          content: "x";
          display: block;
          font-size: 90px;
          left: 0;
          line-height: 80px;
          position: absolute;
          text-align: center;
          top: 0;
          width: 100%;
        }
        .o:before {
          content: "o";
        }
      `}</style>
    </div>
  );
};
