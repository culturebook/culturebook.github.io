import React from 'react'

class ProfileItem extends React.Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="{{ name.edmPreview }}" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{{ name.title }}</h5>
                </div>
            </div>
        );
    }

}

export default ProfileItem;