export function ModalInput(props){
    return(
        <div className="modal_input">
            <label htmlFor={props.htmlFor} className={props.type === "checkbox" && "check_label"}>{props.label}</label>
            <input type={props.type} name={props.inputName} value={props.value}></input>
        </div>
    )
}

export default function Modal(props) {

    return(
        <div className="modal_container" role="dialog">
            <h3>Add new {props.title}</h3>
            <i class="bi bi-x-square" role="button" onClick={props.closeModal}></i>
            <form>
                {props.children}
            </form>
        </div>
    );
}