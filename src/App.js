import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
console.log(students);
  return (
    <div>
      <h1>Student Data</h1>
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Nationality</th>
           
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>{student.nationality}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
