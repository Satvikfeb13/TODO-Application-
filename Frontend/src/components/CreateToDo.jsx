import { useState } from "react";

export function CreateToDo(){
    const[title,settitle]=useState("");
    const [description,setdescription]=useState("");
return <div>
    <input type="text" placeholder="title"  onChange={function (e){
        const value =e.target.value;
        settitle(value);
    }} style={{
        margin:10,padding:10,
    }} /> <br />
    <input type="text" placeholder="description"  onChange={function (e){
        const value =e.target.value;
        setdescription(value);
    }} style={{
        margin:10,padding:10,
       }} />  <br />
     <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
</div>   
}