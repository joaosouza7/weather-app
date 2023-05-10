import Card from "./components/Card";
import Main from "./components/Main";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <Main>
        <Card>
          <Weather/>
        </Card>
      </Main>
    </div>
  );
}

export default App;