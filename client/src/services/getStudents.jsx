import React, { use, useEffect, useState } from "react";

function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:1000/getstudents", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`Http error : status : ${res.status}`);
        }

        const data = await res.json();
        setStudentList(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>Error: {error}</p>;
  return (<>
  
  
  </>);
}
