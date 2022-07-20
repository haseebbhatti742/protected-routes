import "./App.css";
import Layout from "./components/layout/Layout";
import AuthContextContainer from "./context/authContext/AuthContextContainer";

function App() {
  return (
    <AuthContextContainer>
      <div className="App">
        <Layout />
      </div>
    </AuthContextContainer>
  );
}

export default App;
