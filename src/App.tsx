import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <Alert>Alert</Alert>}
      <Button text="My- BUtton" onPress={() => setShow(!show)} />
    </div>
  );
};

export default App;
