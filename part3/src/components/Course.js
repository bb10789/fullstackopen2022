
const Header = (props) => <h1>{props.name}</h1>

const Content = ({name, exercises}) => <li>{name} {exercises}</li>

const Course = ({course}) => {
    const parts = course.parts
    return (
        <div>
            <Header name={course.name}></Header>
            <ul>
            {parts.map(part => <Content key={part.id} name={part.name} exercises={part.exercises}/>)}
            </ul>
        </div>
    )

}

export default Course