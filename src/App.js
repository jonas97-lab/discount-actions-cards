import React, { useState, useEffect } from "react";
import "./App.scss";
import DiscountActionGrid from "./components/DiscountActionGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [discountActions, setDiscountActions] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await axios(
        "https://mocki.io/v1/dc3a81f5-cb45-482c-b43e-2ab8f5fbc6e5"
      );
      setDiscountActions(items.data.items[0]);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <DiscountActionGrid
              isLoading={isLoading}
              discountActions={discountActions}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
