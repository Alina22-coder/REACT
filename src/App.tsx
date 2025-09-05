import './App.css';

const coursesAndDurationArray:{title:string, monthDuration:number}[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

function App() {
  return (
    <>
      <ul>
        {coursesAndDurationArray.map((course:{title:string, monthDuration:number}, index:number) => <li key={index}>{course.title} {course.monthDuration}</li>)}
      </ul>
    </>
  )
}

export default App;
