import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Master from "./Layout/Master";
import IndexPage from "./Pages/IndexPage";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import View from "./Pages/View";
import Delete from "./Pages/Delete";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Master />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/view" element={<View />} />
            <Route path="/delete" element={<Delete />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
