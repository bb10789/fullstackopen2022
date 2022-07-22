
const Header = (props) => <h1>{props.name}</h1>

const Content = ({ name, exercises }) => <li>{name} {exercises}</li>

const AddAll = ({ parts }) => {
    return (
        parts.reduce(function (total, part) {
            console.log("total is", total);
            console.log("part is ", part);
            return total + part.exercises
        }, 0)
    )
}

const Course = ({ courses }) => {
    return (
        courses.map(course => {
            console.log(course)
            return (
                <div>
                    <Header name={course.name}></Header>
                    <ul>
                        {course.parts.map(part => <Content key={part.id} name={part.name} exercises={part.exercises} />)}
                    </ul>
                    <b>total of {<AddAll parts={course.parts}></AddAll>} exercises</b>
                </div>
            )
        }
        )

    )

}

export default Course