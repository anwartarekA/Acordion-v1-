import { useState } from "react";
import "./App.css";
const cardianData = [
  {
    name: "tarek anwar mohamed yousef",
    text: "Tarek works for company in egypt and has 3 children and his wife is a teacher",
  },
  {
    name: "Anwar tarek anwar mohamed yousef",
    text: "Anwar tarek graduated from faculty of engineering mansoura university department CCSED",
  },
  {
    name: "Kareem tarek anwar mohamed yousef",
    text: "Kareem tarek graduated from faculty of engineering mansoura university department CCSED",
  },
  {
    name: "Belal tarek anwar mohamed yousef",
    text: "Belal tarek graduated from faculty of enginneering mansoura university department mechnical power",
  },
  {
    name: "Ahmed mohamed yousef harb",
    text: "Ahmed graduated from faculty of enginneering mansoura university department electrical ",
  },
];
function App() {
  return (
    <div>
      <Cardian data={cardianData} />
    </div>
  );
}

function Cardian({ data }) {
  return (
    <div className="cardians">
      {data.map((item, i) => (
        <CardianItem name={item.name} text={item.text} num={i + 1} key={i} />
      ))}
    </div>
  );
}

function CardianItem({ name, text, num }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="cardian">
      <span className="number">{num < 9 ? `0${num}` : num}</span>
      <p className="title">{name}</p>
      {isOpen && <p className="text">{text}</p>}
      <button className="toggle" onClick={handleToggle}>
        {isOpen ? "-" : "+"}
      </button>
    </div>
  );
}
export default App;
