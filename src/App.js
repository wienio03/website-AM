import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./MainNav";
import SecondaryNav from "./SecondaryNav";
function App() {
  return (
    <div className="App">
      <SecondaryNav />
      <MainNav />
    </div>
  );
}

export default App;
