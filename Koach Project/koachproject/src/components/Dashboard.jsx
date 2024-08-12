// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import UserActivities from './UserActivities';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      {user && <UserProfile user={user} />}
      <UserActivities activities={activities} />
    </div>
  );
};

export default Dashboard;
