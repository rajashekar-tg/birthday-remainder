import React, { useState } from "react";
import "../src/Card.css";

export default function Cards() {
  const [text, setText] = useState([
    {
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      name: "Bertie Yates",
      age: "29 years",
    },
    {
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
      name: "Hester Hogan",
      age: "36 years",
    },
    {
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      name: "Larry Little",
      age: "34 years",
    },
    {
      img: "	https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      name: "Sean Walsh",
      age: "29 years",
    },
    {
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      name: "Lola Gardner",
      age: "29 years",
    },
  ]);

  const [msg, setMsg] = useState(<h3>5 birthday's today</h3>);
  const handlerClick = () => {
    setText([]);
    setMsg("0 birthday's today");
  };
  return (
    <div className="heading">
      <h1>{msg}</h1>
      {text.map((items) => {
        const { name, age, img } = items;
        return (
          <div className="card-Items">
            <div>
              <img src={img} />
            </div>
            <div>
              <br />
              <span id="sp1">{name} </span>
              <br />
              <span id="sp2">{age}</span>
            </div>
          </div>
        );
      })}
      <div style={{ display: "grid" }}>
        <button onClick={() => handlerClick()}>Clear All</button>
      </div>
    </div>
  );
}
