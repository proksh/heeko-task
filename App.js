import * as React from "react";
import { Shape } from "./Shape";
import Modal from 'react-modal';
import './App.css';
import { CloseOutlined } from "@material-ui/icons";

export function App() {
  const [log, setLog] = React.useState({});
  const[modalIsOpen,setModalIsOpen]=React.useState(false);
  const [inputShape, setInputShape] = React.useState('');
  const [inputHeight, setInputHeight] = React.useState([]);
  const [inputWidth, setInputWidth] = React.useState([]);
  const [inputX, setInputX] = React.useState([]);
  const [inputY, setInputY] = React.useState([]);
  const [shapes, setShapes] = React.useState([{}]); 


  React.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if(e.target.dataset.name) 
      {
          setLog({ name: e.target.dataset.name ,
               x: e.offsetX,
               y: e.target.scrollHeight-e.offsetY});
      } 
      else  
      {
          setLog({ name: "" ,
               x: "",
               y: ""});
      }
    });
  }, []);
  

const createNewShape = () => {
  setShapes([...shapes, {inShape:inputShape, inHeight:inputHeight, inWidth:inputWidth, inX:inputX, inY:inputY}]);
  setModalIsOpen(false);
  setInputShape('');
  setInputHeight([]);
  setInputWidth([]);
  setInputX([]);
  setInputY([]);
}

const openModal = () => {
  setModalIsOpen(true);
}


  return (
    <div>
    
      <Shape name="head" x={345} y={50} width={100} height={144} />
      <Shape name="body" x={250} y={150} width={250} height={344} />
      <Shape name="arm" x={145} y={200} width={100} height={344} />
      
          <Modal isOpen={modalIsOpen} className="modal__container">
            <div className="modal">
              <div className="quadAlign">
                  <div className="h2Container">
                    <h2>Create Shape</h2>
                  </div>
                  
                  <div className="close__buttonContainer">
                      <CloseOutlined className="close__button" onClick={() => setModalIsOpen(false)}/>
                  </div>
                  
                  
              </div>
              
              
              <div className="quadAlign">
                  <div className="verticalAlign">
                    <p>Name of shape</p>
                    <input className="inputbox" placeholder="Enter shape name" value={inputShape} onChange={event => setInputShape(event.target.value)}/> 
                  </div>
              </div>
              
              
              <div className="quadAlign">
                  <div className="blocklAlign">
                    <p>Height</p>
                    <input className="inputbox" placeholder="Enter height" value={inputHeight} onChange={event => setInputHeight(event.target.value)}/>
                  </div>
                  <div className="blocklAlign">
                    <p>Width</p>
                    <input className="inputbox" placeholder="Enter width" value={inputWidth} onChange={event => setInputWidth(event.target.value)}/>
                  </div>
              </div>
              
              <div className="quadAlign">
                  <div>
                    <p>X position</p>
                    <input className="inputbox" placeholder="Enter X value" value={inputX} onChange={event => setInputX(event.target.value)}/>
                  </div>
                  <div>
                    <p>Y position</p>
                    <input className="inputbox" placeholder="Enter Y value" value={inputY} onChange={event => setInputY(event.target.value)}/>
                  </div>
              </div>
              
              <div className="quadAlign">
                  <button onClick={createNewShape}>Create new shape</button>
              </div>
              
            </div>
          </Modal>

      {
        shapes.map(({inShape,inHeight,inWidth,inX,inY}) => (
            <Shape name={inShape} x={inX} y={inY} width={inWidth} height={inHeight} />
        ))
      }

      <div className="sidebar">
        <h3>Details</h3>
        <p>Name: {log.name}</p>
        <p>Mouse X-: {log.x}</p>
        <p>Mouse Y-: {log.y}</p>
        <button onClick={openModal}>+ Add a shape</button>
      </div>
    </div>
  );
}
