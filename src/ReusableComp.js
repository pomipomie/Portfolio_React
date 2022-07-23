import { useState } from "react";

export function ContainerBox(props) {
    return (
        <article className={props.className}>
            <h2>{props.title}</h2>
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