import React from 'react';
class SearchBar extends React.Component {
	render(){
		return <div>
				<input ref={(input) => this.search = input} className='searchbox' />
    			<button type="submit" onClick={this.onSubmit.bind(this)} className='searchbutton'>Search</button>
    			</div>
	}

	onSubmit(){
		var searchable = this.search.value.replace(" ", "+").toLowerCase();;
		fetch('http://localhost:3001/v1/house_listings/?city=' + searchable)
    	.then(response => response.json())
    	.then(json => console.log(json))
	}

}


export default SearchBar