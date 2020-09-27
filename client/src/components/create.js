import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom";
import axios from "axios" 

const Create = () => {
    const [form,setForm] = useState({title: '',author: '',description: '',published_year: '',publisher: ''});
    const history = useHistory();
    const handleChange = (event) => {
        setForm({...form,
              [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (events) => {
      events.preventDefault();
        axios.post('http://localhost:5000/api/books',{
            title: form.title,
            author: form.author,
            description: form.description,
            published_year: form.published_year,
            publisher: form.publisher
        })
        .then(res => {
                history.push('/');
        })
        .catch(err => {
            console.log(err);
        });
    }




    return (
        <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD BOOK
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={(events) => handleSubmit(events)}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={form.title} onChange={(event) => handleChange(event)} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="author" value={form.author} onChange={(event) => handleChange(event)} placeholder="Author" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" name="description" value={form.description} onChange={(event) => handleChange(event)} placeholder="Description" cols="80" rows="3" />
              </div>
              <div className="form-group">
                <label htmlFor="published_date">Published Date:</label>
                <input type="number" className="form-control" name="published_year" value={form.published_year} onChange={(event) => handleChange(event)} placeholder="Published Year" />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" className="form-control" name="publisher" value={form.publisher} onChange={(event) => handleChange(event)} placeholder="Publisher" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Create;