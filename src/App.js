import React from 'react';
import './App.css';
import Form from './Form';
import Sender from './Students';

const API_URL = "https://randomuser.me/api/";

export default function App() {
  const [delItem, setDelItem] = React.useState(0)
  const [students, setStudents] = React.useState([]);
  const insertSender = (sender) => {
    fetch(API_URL)
      .then(resp => resp.json())
      .then((resp) => {
        const users = resp.results;
        if (users.length > 0) {
          const student = users[0];
          setStudents(
            [...students,
            {
              name: `${student.name.first} ${student.name.last}`,
              home: `${student.location.city}, ${student.location.country}`,
              picture: student.picture.large,
              sender,
              key: student.login.uuid
            }
            ]
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteSender = (id) => {
    setStudents(
      students.filter((student) => student.key !== id)
    ); setDelItem(delItem + 1)
  };

  const getSenderComponentList = () => {
    return students.map((student) => (
      <Sender
        name={student.name}
        home={student.home}
        picture={student.picture}
        sender={student.sender}
        key={student.key}
        id={student.key}
        delete={deleteSender}
      />
    ));
  };

  return (
    <div className="App">
      <Form insert={insertSender}
        deletedCounter={delItem}
      />
      <div className="students">{getSenderComponentList()}</div>
    </div >
  );

}

