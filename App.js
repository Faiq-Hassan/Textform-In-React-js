import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="DEV-REACT" Aboutus="About-Us"/>
      <div className="container my-3"> <Textform heading="ENTER YOUR DETAILS HERE"/></div>
     
      

      {/* <h1>Hello {name}</h1>
      <nav>
        <ul>
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
        </ul>
      </nav>
      <div classNameName="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
           elit. Tempora praesentium explicabo autem cupiditate,
            quasi quas repellendus esse iste veniam animi, eum mollitia
             ad culpa eveniet earum fuga et vel. Itaque.</p> 
      </div> */}
    </>
  );
}

export default App;
