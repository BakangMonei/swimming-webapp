import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import Records from "../layouts/records/Records";
import Rankings from "../layouts/rankings/Rankings";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Use Firebase or your authentication logic to determine if the user is authenticated
    // Update the authenticated state accordingly
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/LoginPage" component={LoginPage} />
        {/* <PrivateRoute
          path="/AdminDashboard"
          component={AdminDashboard}
          authenticated={authenticated}
        /> */}

        {/* <PrivateRoute
          path="/UserDashboard"
          component={Records}
          authenticated={authenticated}
        />

        <PrivateRoute
          path="/Rankings"
          component={Rankings}
          authenticated={authenticated}
        /> */}
      </Switch>
    </Router>
  );
}

export default App;
