import React from 'react';
import UsersItems from './UsersItem';
import './UsersList.css';
import Card from '../../shered/components/UIElements/Card';


const UsersList = (props) => {
    // Evaluate if user exist or not
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found!</h2>
                </Card>
            </div>
        );
    }

    // Return list of users
    return (
        <ul className="users-list">
            {props.items.map(user => {
                return <UsersItems key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name}
                placeCount={user.places} />
            })}
        </ul>
    );
};

export default UsersList;