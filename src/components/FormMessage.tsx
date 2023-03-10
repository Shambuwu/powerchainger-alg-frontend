import FormMessagePropsInterface from "../interfaces/FormMessagePropsInterface";

export default function FormMessage(props: FormMessagePropsInterface) {
    return (
        <div className="message">{
            props.message ?
                props.status === 1 ?
                    <p style={{color: "green"}}>✅ - {props.message}</p> :
                    <p style={{color: "red"}}>⚠️ - {props.message}</p>
                : null
        }
        </div>
    )
}