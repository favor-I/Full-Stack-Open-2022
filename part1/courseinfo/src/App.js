//Variables declaration
const course = 'Half Stack application development'
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name:'State of a component',
  exercises: 14
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
      <Part part = {part1.name} exercise = {part1.exercises}  />
      <Part part = {part2.name} exercise = {part2.exercises}  />
      <Part part = {part3.name} exercise = {part3.exercises}  />
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
      <Total firstExercise = {part1.exercises} secExercise = {part2.exercises} thirdExercise = {part3.exercises} />
    </>
  );
}

export default App;
