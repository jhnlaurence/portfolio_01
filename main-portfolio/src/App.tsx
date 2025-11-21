import { useState } from "react";
import "./App.css";
import Hero3D from "./components/Hero3D";
import NavigationTab from "./components/NavigationTab";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationTab />
      <div className="container">
        <div className="row">
          <div className="col-12 my-4">
            <h1 className="text-center">Welcome to My Portfolio</h1>
            <p className="text-center ui-lead">
              This is a simple portfolio layout using React and Bootstrap.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="card-dark " style={{ width: "20rem" }}>
            <div className="card-body">
              <Hero3D />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-2 mb-sm-0">
            <div className="card card-dark">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-2 mb-sm-0">
            <div className="card card-dark">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
