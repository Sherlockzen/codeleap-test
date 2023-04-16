import React, {useState} from "react";
import './index.css'
const Main = () => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');

    const handleClick = () => {
        console.log('clicou');
    }

    return (
      <div className={"container"}>
        <header className={"header"}>
          <h1>CodeLeap Network</h1>
        </header>
        <div className={"newNote"}>
          <h1>What's on your mind?</h1>

          <div className={"container-input"}>
            <label className={"flex-col"}>
              Title
              <input
                onChange={(e) => setTitle(e.target.value)}
                type={"text"}
                placeholder={"Hello world"}
              />
            </label>
            <label className={"flex-col"}>
              Content
              <textarea
                onChange={(e) => setContent(e.target.value)}
                placeholder={"Content here"}
              />
            </label>

            {(title && content !== "") ? (
              <button onClick={handleClick}>Create</button>
            )
            :
            (
              <button onClick={handleClick} className={"deactived"} disabled>
                Create
              </button>
            )}
          </div>
        </div>
      </div>
    );
}
export default Main;