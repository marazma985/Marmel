import React from 'react';
import { connect } from 'react-redux';
import Humans from './Humans';
import PreLoader from '../PreLoader/PreLoader';
import { getUsersTC } from '../../Redux/users-Reduser';
import { followTC, unfollowTC } from '../../Redux/users-Reduser';
import { disableIdUpdate,serchNameUserTC } from '../../Redux/users-Reduser';


class HumansAPI extends React.Component {
    
    componentDidMount() {
        
        this.props.getUsersTC();
       

    }
    setNewPage = (action) => {
        this.props.getUsersTC(action);

    }
    render() {
        return (
            this.props.isLoaded ? <PreLoader/> : <Humans 
                users={this.props.users}
                setNewPage={this.setNewPage}
                unfollowTC={this.props.unfollowTC}
                followTC={this.props.followTC}
                disableId={this.props.disableId}
                disableIdUpdate={this.props.disableIdUpdate}
                backPageLenght={this.props.backPageLenght}
                serchNameUserTC={this.props.serchNameUserTC}
                
                

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.humansPage.users,
        isLoaded: state.humansPage.isLoaded,
        disableId: state.humansPage.disableId,
        backPageLenght:state.humansPage.backPage.lenght,
        
    }
}

let obj = {
    followTC,
    unfollowTC,
    disableIdUpdate,
    disableIdUpdate,
    getUsersTC,
    serchNameUserTC,
    
}

const HumansContainer = connect(mapStateToProps,obj )(HumansAPI);
export default HumansContainer;