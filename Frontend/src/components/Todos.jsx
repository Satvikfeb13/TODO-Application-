export function Todos({todos}){
return <div>
    {
        todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.descrption}</h2>
                <button>{todo.complete==true ?"completed":"mark as complete"}</button>
            </div>
        })
    }
</div>
}
