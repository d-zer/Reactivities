import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Offcanvas } from 'react-bootstrap';
import { List } from 'reactstrap';


function App() {
  const [activities, setActivities] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div className="App">
      <Offcanvas.Header>
        <Offcanvas.Title>Reactivities</Offcanvas.Title>
      </Offcanvas.Header>

      <List>
        {activities.map((activity: any) => (
              <List.arguments key={activity.id}>
                  {activity.title}
              </List.arguments>
          ))}
      </List>
    </div>
  );
}

export default App;
