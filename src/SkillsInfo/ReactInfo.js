import { ListItem } from "./HTMLInfo";

export function Reactinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"JSX"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"ES6"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Class & Functional components"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Create-react-app"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Conditional rendering"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Props"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Events"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Lists, map & iteration"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"State & lifecycle"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Hooks"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Forms"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Context API"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Redux"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"ReactDOM"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"React Router"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"CSS Styling (inline, object, stylesheet)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Fetch & Axios"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Consuming APIs"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Modules"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"React Memo"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Custom Hooks"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Authentication"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Formik"}/>
                    <ListItem icon={"bi bi-star-half"} info={"React testing library"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Jest"}/>
                </ul>
            </div>
    )
}