import Navbar from "./components/Navbar";
import "./style/App.scss";
import Cards from "./components/Cards";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="container">
          <div className="row " >
            <div className="col-lg-8 col-md-8 col-sm-8">
              <Cards />
            </div>
            <div className="col-lg-4">
              <SideBar />{" "}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
