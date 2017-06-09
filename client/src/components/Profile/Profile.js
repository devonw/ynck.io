import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchAllUserData, updateUserData } from './../../../actions/actionUserInfo';

import UserInfo from './UserInfo';
import Feed from './Feed';


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.getUserData = this.getUserData.bind(this);
    this.saveEdits = this.saveEdits.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    this.props.fetchAllUserData('/api/profiles/user-data', this.props.match.params.id);
  }

  saveEdits(firstName, lastName, description) {  
    this.props.updateUserData('/api/user/edit', this.props.userData.userProfile, loggedInUser.id, firstName, lastName, description);
  }
  

  render() {
    return (
      <div>
        <div className="feed_container">
          <div className="profile_sidebar">
            { this.props.userData.userProfile ? 
              <UserInfo userData = {this.props.userData.userProfile} saveEdits = { this.saveEdits } /> 
              : null 
            }
          </div>
          <div className="main_content">
            { this.props.userData ? 
              <Feed myTattoos = {this.props.userData.tattoo} myDesigns = {this.props.userData.design} myInspirations = {this.props.userData.inspiration}/>
              : null 
            }
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    userData: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserData: (url, id) => dispatch(fetchAllUserData(url, id)),
    updateUserData: (url, userData, id, name, profile_description) => dispatch(updateUserData(url, userData, id, name, profile_description))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
