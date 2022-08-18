import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'font-awesome/css/font-awesome.min.css';
import Login from './login';

const HomeContent = () => {
  return (
    <div class="flex-container">
    <div style={{ display: "flex", flexDirection: "row" }} >
        <div className="" style={{
            "backgroundImage": "linear-gradient(134deg, #b32e86 5%, #152e7a 91%)"
        }} >
            {
               "IT Map"
            }
        </div>
        <div className="col-10 pl-0 pr-0" style={{ backgroundColor: "#ffffff" }} >
            <Login />
        </div>
    </div>
</div>)
}


function App() {
  return (
    <div className="App">
      <HomeContent />
    </div>
  );
}

export default App;
