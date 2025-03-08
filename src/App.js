import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i wanna render only once");
  }, []);
  useEffect(() => {
    console.log("i wanna change when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i wanna change when 'keyword' changes");
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Searching for..."
      ></input>
      <h1 className={styles.title}>
        {counter} {keyword}
      </h1>
      <button onClick={onClick}>Click me!!</button>
      <Button text={"Dont care about me"} />
    </div>
  );
}

export default App;
