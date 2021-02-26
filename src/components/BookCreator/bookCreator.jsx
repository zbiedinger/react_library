import React, { Component } from 'react';


class BookCreator extends Component { 
    constructor(props) {
        super(props);
        this.state = {  
            title: '',
            author: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    handleSubmit(event) { 
        event.preventDefault(); 
        const book = {
            title: this.state.title, 
            author: this.state.author
        } 
        this.props.addNewBook(book); 
        this.setState({
            title: '',
            author: ''
        });
    }

    render() {
        return (  
            <div>
                <hr />
                <center>
                    <h3>Add a new book!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row"> 
                        <div className="col-md-5">
                            <input type="text" className="form-control" name="title" placeholder="Book Title" value={this.state.title} onChange={this.handleChange} required/>
                        </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" name="author" placeholder="Author Name" value={this.state.author} onChange={this.handleChange} required/>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-block" style={{backgroundColor: 'rgb(139, 184, 185)'}} value="Add" /> 
                        </div>
                    </div>
                </form>
            </div>
        );
    } 
}

export default BookCreator;
