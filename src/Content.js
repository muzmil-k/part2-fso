import Part from './Part';

const Content = (props) => {
    return (
        <div>
            {
                props.course.parts.map((data) => {
                    return <Part name={data.name} number={data.exercises} key={data.id} />
                })
            }
        </div>
    )
}
export default Content;