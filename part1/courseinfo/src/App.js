//Variables declaration 
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]
}

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  );
}

//Part components
const Part = (props) => {
  return (
    <p>Title: {props.part} | number of exercise: {props.exercise}</p>
  )
}

//Header component
const Content = () => {
  return(
    <>
      <Part part = {course.parts[0].name} exercise = {course.parts[0].exercises}  />
      <Part part = {course.parts[1].name} exercise = {course.parts[1].exercises}  />
      <Part part = {course.parts[2].name} exercise = {course.parts[2].exercises}  />
    </>
  );
}

//Total component
const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.firstExercise + props.secExercise + props.thirdExercise}</p>
    </>
  );
}

//App component 
function App() {
  return (
    <>
      <Header course = {course.name} />
      <Content/>
      <Total firstExercise = {course.parts[0].exercises} secExercise = {course.parts[1].exercises} thirdExercise = {course.parts[2].exercises} />
    </>
  );
}

export default App;
