import React from 'react';

const UserActivities = ({ activities }) => {
  return (
    <div className="user-activities">
      <h3>User Activities</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;