import { ListItem } from "./HTMLInfo";

export function SpringBootinfo() {
    return (
            <div>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-fill"} info={"Spring initializr"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"RESTful CRUD API"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Maven"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"Lombok"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"JPA, JDBC & Hibernate dependencies"}/>
                    <ListItem icon={"bi bi-star-fill"} info={"MVC Pattern"}/>
                </ul>
                <p className="list_p">Currently learning or planning to learn:</p>
                <ul className="list_ul">
                    <ListItem icon={"bi bi-star-half"} info={"More Spring Boot tools"}/>
                    <ListItem icon={"bi bi-star-half"} info={"Testing"}/>
                </ul>
            </div>
    )
}