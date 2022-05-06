const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  );
}

//Header component
const Content = (props) => {
  return(
    <>
      <p>Title: {props.part} | number of exercise: {props.exercise}</p>
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course = {course} />
      <Content part = {part1} exercise = {exercises1}  />
      <Content part = {part2} exercise = {exercises2}  />
      <Content part = {part3} exercise = {exercises3}  />
      <Total firstExercise = {exercises1} secExercise = {exercises2} thirdExercise = {exercises3} />
    </>
  );
}

export default App;
