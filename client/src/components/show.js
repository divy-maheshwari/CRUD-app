import React,{useState,useEffect} from "react";
import {useHistory,Link,} from "react-router-dom";
import axios from "axios" 

const Show = (props) => {
        const history = useHistory();
        const [book,setBook] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/books/${props.match.params.id}`)
                        .then(res => {
                            setBook(res.data);
                        });
    },[props.match.params.id]);

    const remove = (id) => {
        axios.delete( `http://localhost:5000/api/books/${id}` )
                                               .then(res => {
                                                   history.push('/');
                                               });
     }
    

     return (
        <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {book.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <dl>
              <dt>Author:</dt>
              <dd>{book.author}</dd>
              <dt>Description:</dt>
              <dd>{book.description}</dd>
              <dt>Publish Date:</dt>
              <dd>{book.published_year}</dd>
              <dt>Publisher:</dt>
              <dd>{book.publisher}</dd>
            </dl>
            <Link to={`/edit/${book._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={() => remove(book._id)} className="btn btn-danger">Delete</button> 
          </div>
        </div>
      </div>
     )
}

export default Show;