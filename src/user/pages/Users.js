import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    // Create a fake user to list
    const USERS = [
        { 
            id: 'per1', 
            name: 'Hernan Provoste', 
            image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
            places: 3
        }
    ];

    return (
        // Pass te props of fake users to UsersList and return it
        <UsersList items={USERS} />
    )
};

export default Users;