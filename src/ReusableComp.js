import { useState, useContext } from "react";
import { userContext } from './Context';

export function ContainerBox(props) {
    const isLoggedIn = useContext(userContext);

    return (
        <article className={props.className}>
            <div className="h2_container">
                <h2>{props.title}</h2>
                { isLoggedIn && 
                    <div className="add_btn" role="button" onClick={props.openModal}>
                        <i class="bi bi-plus-square"></i><p>add new</p>
                    </div>}
            </div>
            <div className={props.classDiv}>
                {props.children}
            </div>
        </article>
    );
}

export function ContentBox(props) {
    return (
        <section>
            <a href={props.href}><p className={props.className}>{props.icon}  {props.name}</p></a>
        </section>
    )
}

export function ContentBoxB(props) {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }

    return (
        <section className={props.className}>
            <h3>{props.name}</h3> 
            <p>{props.level}</p>
            {isActive ? <ToggleContent desc={props.desc}/> : null}
            <i className={isActive ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"} onClick={handleClick}></i>
        </section>
    )
}

export function ToggleContent(props) {
    return <div>{props.desc}</div>
}

export function TagButton(props) {
    return <div className="tag_btn" key={"tag"+props.skill}>{props.skill}</div>
}