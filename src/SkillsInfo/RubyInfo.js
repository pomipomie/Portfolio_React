import { ListItem } from "./HTMLInfo";

export function Rubyinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Syntax and basics (variables, operators, data types)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Input & Output"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Scopes"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Number Classes"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Ranges"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Math module"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Arrays and array methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Loops and iterators (for, each, while, until, unless, times, upto, downto)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Conditionals (if/else/elsif, ternary operator, case)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"String methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Working with files"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Hashes"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Matrix"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Classes and Objets (constructor, methods, inheritance, getters & setters)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Polimorfism"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Procs"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Gems"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Lambdas"}/>
                    <ListItem icon={"bi bi-star-half"} info={"More about gems & rails"}/>
                </ul>
            </div>
    )
}