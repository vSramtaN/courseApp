import Loading from './Loading'
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Courses from './Courses'


function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses)
  }


  async function fetchCourses() {

    setLoading(true)

    try {
      const response = await axios.get(`http://localhost:3000/courses`);
      setCourses(response.data)
      setLoading(false)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])



  return (
    <div className="App">
      {
        loading

          ?

          (
            <Loading />
          )

          :

          (
            <>

              {
                courses.length === 0 ? (
                <div className='f5Div'>
                  <h2>Kursların Hepsini Sildin !</h2>
                  <button className='f5Button' onClick={()=>{fetchCourses()}}>Yenile</button>
                </div>
              ) : (<Courses courses={courses} removeCourse={deleteCourse} />)
              }

            </>

          )
      }

    </div>
  );

}


export default App
