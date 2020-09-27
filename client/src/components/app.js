import React,{useState} from "react";
import {Link,} from "react-router-dom";
import axios from "axios" 

const App = () => {
    const [books,setBooks] = useState([]);
    


    axios.get('http://localhost:5000/api/books')
                             .then(res => {
                                setBooks(res.data);
                             })
                             .catch(err => {
                                console.log(err);
                             });





    return (
        <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOOK CATALOG
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book =>
                  <tr key={book._id}>
                    <td><Link to={`/show/${book._id}`}>{book.title}</Link></td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default App;