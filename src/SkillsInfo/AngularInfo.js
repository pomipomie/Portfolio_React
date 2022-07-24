import { ListItem } from "./HTMLInfo";

export function Angularinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Angular CLI"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Components"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Lifecycle hooks"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Templates"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Styling"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"One-way & Two-way binding"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Directives (ngIf, ngFor, ngSwitch)"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Events"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Pipes"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Custom pipes"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Dependency injection"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Router"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Reactive Forms"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"HTTP Client"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Observables"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Consuming APIs"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Modules"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"Custom Elements"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Template variables"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Angular testing tools, Jasmine"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Web Workers"}/>
                </ul>
            </div>
    )
}