import { ListItem } from "./HTMLInfo";

export function Javascriptinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Syntax and basics (variables, operators, data types, functions)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"ES6 (arrow functions, rest parameters, destructuring, etc.)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"ECMAScript 2016/2017/2018"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Scopes"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Loops and iterators (for, for in, for of, while, do... while)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Conditionals (if/else, ternary operator, switch)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"String methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Arrays and array methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Sets and set methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Objects and object methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Maps and map methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"DOM & Events"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Classes and inheritance"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Object Oriented Programming"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Functional programming"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Async & Await"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Fetch API"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Math methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Regular expressions"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Modules"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"JSON"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"BOM"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"History API"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Canvas API"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Different kinds of binding"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Callbacks and Promises"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Error handling"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Forms API"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Web Storage API"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Web Worker API"}/>
                    <ListItem icon={"bi bi-star-half"} info={"AJAX"}/>
                </ul>
            </div>
    )
}