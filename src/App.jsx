import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './pages/overview/Overview';
import Layout from './layout/layout';
import Settings from './pages/settings/Settings';
import Support from './pages/support/Support';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          exact
          path="/overview"
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
        <Route
          exact
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
          <Route
          exact
          path="/support"
          element={
            <Layout>
              <Support />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
