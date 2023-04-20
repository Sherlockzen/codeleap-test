import React, {useEffect, useState} from "react";
import './index.css'
import {getAll} from "../actions/get";
import '../utils/types'
import {Resp, Result} from "../utils/types";
import Card from "../components/card";
import {userAtom} from "../atoms/atom";
import {useAtom} from "jotai";


const Main = () => {
const [user, setUser] = useAtom(userAtom)
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [data, setData] = useState<Resp>({
    count: 0,
    next: "",
    previous: null,
    results: []
});
    const handleClick = () => {
        console.log(data);
    }

    useEffect(() => {
        console.log(user);
        getAll()
            .then((value) => setData(value))
    }, [])

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

            {title && content !== "" ? (
              <button onClick={handleClick}>Create</button>
            ) : (
              <button onClick={handleClick} className={"deactived"} disabled>
                Create
              </button>
            )}
          </div>
        </div>
        <div className={"notes"}>
            {
                data.results.map((ele, index) => {
                    return <Card props={ele}/>
                })
            }
        </div>
      </div>
    );
}
export default Main;