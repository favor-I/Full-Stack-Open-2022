//Variables declaration
const course = 'Half Stack application development'
const parts = [
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
      <Part part = {parts[0].name} exercise = {parts[0].exercises}  />
      <Part part = {parts[1].name} exercise = {parts[1].exercises}  />
      <Part part = {parts[2].name} exercise = {parts[2].exercises}  />
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
      <Header course = {course} />
      <Content/>
      <Total firstExercise = {parts[0].exercises} secExercise = {parts[1].exercises} thirdExercise = {parts[2].exercises} />
    </>
  );
}

export default App;
