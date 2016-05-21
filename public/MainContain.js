import React from 'react';
import SearchBar from './SearchBar'
class MainContain extends React.Component {
	render(){
		return (<div><SearchBar />
			{this.props.children}
			</div>)
	}
}

export default MainContain