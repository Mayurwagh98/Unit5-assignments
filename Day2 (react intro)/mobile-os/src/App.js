import './App.css';

function App() {

  let t1 = "Mobile Operating System"
  let t2 = "Mobile Manufacturers"
  
  let l1 = ["Anroid", "Balckberry", "IPhone", "Windows Phone"]
  let l2 = ["Samsung", "HTC", "Micromax", "Apple"]

  return (
    <div className="App">
      <Component title = {t1} items = {l1} />

      <Component title = {t2} items = {l2} />
    </div>
  );
}


const Component = (props) =>{

  return (

    <div>
      <h3>{props.t}</h3>
      <ul>
        {props.items.map ((e) =>{

          return <li>{e}</li>
        })}
      </ul>
    </div>
  )
}
export default App;
