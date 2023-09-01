import Course from './Course'

function Courses({ courses, removeCourse }) {
    console.log(courses)
    return (
    <div className='courseMainDiv'>
    <div>
        <h2>Kurslarım</h2>
    </div>
    <div className='cardDiv'>
        {
            courses.map((course, i) => {
                return (
                    
                    <Course {... course} removeOneCourse={removeCourse} key={i}/>
                    /*
                    * Bildiğimiz gönderme işlemi : course={course}
                    */
                )
            })
        }
    </div>
    </div>
    );
}

export default Courses;