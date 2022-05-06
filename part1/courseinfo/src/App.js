//Variables declaration
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const part2 = 'Using props to pass data'
const part3 = 'State of a component'
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

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
      <Part part = {part1} exercise = {exercises1}  />
      <Part part = {part2} exercise = {exercises2}  />
      <Part part = {part3} exercise = {exercises3}  />
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
      <Total firstExercise = {exercises1} secExercise = {exercises2} thirdExercise = {exercises3} />
    </>
  );
}

export default App;
