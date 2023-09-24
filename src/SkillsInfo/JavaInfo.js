import { ListItem } from "./HTMLInfo";

export function Javainfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Syntax and basics (variables, variable types, operators, data types, methods)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Main class, language structure, javac"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Input & Ouput"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Type casting"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"String methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Math methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Loops and iterators (for, for each, while, do... while)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Conditionals (if/else, ternary operator, switch)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Arrays and array methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Collections"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Wrapper classes"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Exceptions"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Object Oriented Programming (abstraction, polimorfism, encapsulation)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Classes, class methods, class attributes & inheritance"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Objects & object methods"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Packages & API"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Interface"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Enums"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Java Web (REST & HTTP)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Basic JSP & Servlets"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Basic JDBC with SpringBoot"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Regular expressions"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Threads & Multitasking"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Lambda"}/>
                    <ListItem icon={"bi bi-star-half"} info={"File handling"}/>
                    <ListItem icon={"bi bi-star-half"} info={"JDBC"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Sockets"}/>
                    <ListItem icon={"bi bi-star-half"} info={"More about Servlets"}/>
                </ul>
            </div>
    )
}