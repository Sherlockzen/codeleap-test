import React from "react";
import './index.css'
const Main = () => {


    return (
        <div className={"container"}>
            <header className={"header"}>
                <h1>CodeLeap Network</h1>
            </header>
            <div className={"newNote"}>
                <h1>What's on your mind?</h1>

                <div className="flex-col">
                    <label className={"flex-col"}>
                        Title
                        <input type={"text"} placeholder={"Hello world"}/>
                    </label>
                    <label className={"flex-col"}>
                        Content
                        <textarea placeholder={"Content here"}/>
                    </label>
                    <button>Create</button>
                </div>
            </div>
        </div>
    )
}
export default Main;