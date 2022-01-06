import "./styles.css";
import React from "react";

import { Form } from "./components/Form.jsx";
export default function App() {
  return (
    <div className="App">
      <Form title="LOGIN">
        <input placeholder="name" />
      </Form>
    </div>
  );
}


export default App;
