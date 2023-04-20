import { useState } from "react"
import './App.css'
import Modal from "./components/modal";
import Main from "./pages/Main"
import {useAtom} from "jotai";
import { userAtom} from "./atoms/atom";
import { useNavigate} from "react-router-dom";

function App() {
  const [username, setUsername] = useAtom(userAtom);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('clicou')
    navigate('/main')
  }
  // console.log(username);

  return (
    <div className="App">
      <Modal>
        <div className={"modal"}>
          <div className={"modal-box"}>
            <h1>Welcome to CodeLeap network!</h1>
            <p>Please enter your username</p>
            <div className="signup">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type={"text"}
                placeholder="John doe"
              />
              {
                username !== "" && (
                <button onClick={handleClick}>Enter</button>
              )}
              {
                username === "" && (
                <button className={"deactived"} disabled onClick={handleClick}>
                  Enter
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>
      {/*<Main />*/}
    </div>
  );
}

export default App
