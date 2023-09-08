import { useContext } from "react";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";
import { Button } from "@mui/material";
import { CounterContest } from "./Context";
function App() {
  const counterData = useContext(CounterContest)
  console.log(counterData);
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button onClick={() => {counterData.resta()}}>-</Button>
          <Button onClick={() => {counterData.suma()}}>+</Button>
        </div>
      </FormSpace>

    </MainSpace>
  );
}

export default App;

