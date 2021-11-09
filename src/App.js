import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import ActionCTA from "./components/ActionCTA";
import ActivityList from "./components/ActivityList";

function App() {
  return (
    <div className="App">
      <Filter />
      <ActionCTA />
      <ActivityList />
    </div>
  );
}

export default App;
