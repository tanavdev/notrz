export default function Note(props) {

    function handleClick(){
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div className="menus">
                <button onClick={handleClick}>DEL</button>
            </div>
        </div>
    );
}
