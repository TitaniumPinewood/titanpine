import React from 'react';
import { Link } from 'react-router'

class NavBar extends React.Component {
	render(){
		return (
			<div>
				<Link to='/signup' className='searchlinks'>Sign Up</Link>
				<Link to='/login' className='searchlinks'>Log In</Link>
				<Link to="/createHouse" className='searchlinks'>Create List</Link>
				<Link to='/createprofile' className='searchlinks'>Create Profile</Link>
				<div>{this.props.children}</div>
    		</div>
    	);
	}
}


export default NavBar
