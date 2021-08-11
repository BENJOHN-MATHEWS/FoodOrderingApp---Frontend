import React, {Component} from 'react';
import Header from '../../common/header/Header'

class Profile extends Component {
    render() {
        return(
            <div>
                <Header showSearchBox={true}/>
                <h1 style={{textAlign:"center", marginTop: "10%"}}>Profile Page</h1>
            </div>
           
        );
    }
}
export default Profile;