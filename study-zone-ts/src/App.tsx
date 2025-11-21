import { useState } from "react";
import Alert from "./Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  const [visibleAlert, setVisibleAlert] = useState(false);

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      {visibleAlert && (
        <Alert onClick={() => setVisibleAlert(false)}>My Alert</Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setVisibleAlert(true);
        }}>
        My Button
      </Button>
    </div>
  );
}

export default App;
