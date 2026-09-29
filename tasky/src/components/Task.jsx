const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p className="deadline">Due: {props.deadline}</p>
            <p className="description">{props.description}</p> 
            <p className="priority" style={{color: !props.done ? 'red' : 'lightgrey'}}>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>         
        </div>
    )
}

export default Task;