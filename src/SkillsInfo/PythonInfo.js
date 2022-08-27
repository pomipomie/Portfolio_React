import { ListItem } from "./HTMLInfo";

export function Pythoninfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Syntax and basics (variables, operators, data types)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Typing and Casting"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"String methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Lists"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Tuples"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Sets"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Dictionaries"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Conditionals (if/elif/else)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Loops (for, while)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Functions"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Modules"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Scope"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Lambdas"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Classes and Objects"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Iterators"}/>
                </ul>
            </div>
    )
}