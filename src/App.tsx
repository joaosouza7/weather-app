import { useContext } from "react";

import Main from "./components/Main";
import Card from "./components/Card";
import Input from "./components/Input";
import Weather from "./components/Weather";
import NotFound from "./components/NotFound";

import { WeatherContext } from "./contexts/WeatherContext";

function App() {

  const { erro, weather } = useContext(WeatherContext);

  return (
    <Main>
      <Card>
        <Input />
        { erro && <NotFound /> }
        { Object.keys(weather).length !== 0 && <Weather /> }
      </Card>
    </Main>
  );
}

export default App;