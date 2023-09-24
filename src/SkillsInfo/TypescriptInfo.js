import { ListItem } from "./HTMLInfo";

export function Typescriptinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Syntax and basics (variables, operators, data types, functions)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Union types"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Type Aliases and Interfaces"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"TSX"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Generics"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Conditional Types"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Classes and Objects"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Modules"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Iterators & generators"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Object Oriented Programming"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"More on types & type manipulation"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Decorators"}/>
                </ul>
            </div>
    )
}