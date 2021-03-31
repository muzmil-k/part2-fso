const Total = (props) => {

    // return (<p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises + props.course.parts[2].exercises}</p>);
    return (
        <p>Number of exercise {props.course.parts.reduce((sum, total) => { return sum + total.exercises }, 0)}</p>
    )
}
export default Total;

