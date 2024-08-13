// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import UserActivities from './UserActivities';

const Dashboard = () => {
  const [userId, setUserId] = useState(1);  
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching data for userId: ${userId}`)
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();


        const activitiesResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        if (!activitiesResponse.ok) {
          throw new Error('Failed to fetch user activities');
        }
        const activitiesData = await activitiesResponse.json();

   
        setUser(userData);
        setActivities(activitiesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
        <div className="user-navigation">
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={() => setUserId(4)}>User 4</button>
        <button onClick={() => setUserId(5)}>User 5</button>
        <button onClick={() => setUserId(6)}>User 6</button>
        <button onClick={() => setUserId(7)}>User 7</button>
        <button onClick={() => setUserId(8)}>User 8</button>
        <button onClick={() => setUserId(9)}>User 9</button>
        <button onClick={() => setUserId(10)}>User 10</button>
        </div>
      {user && <UserProfile user={user} />}
      <UserActivities activities={activities} />
    </div>
  );
};

export default Dashboard;
