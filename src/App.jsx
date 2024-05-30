import List from "./components/List";
import { Title } from "./components/microcomp/Micro";

function App() {
  return (
    <>
      <Title
        title={"APP TODOS JSX + USESTATE"}
        style={"text-center my-5 display-3 fw-bold"}
      />
      <List />
    </>
  );
}

export default App;
