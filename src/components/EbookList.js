import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ebookService from '../services/ebook.service';

const EbookList = () => {
    const [ebooks, setEbooks] = useState([]);


    const init = () => {
        ebookService.getAll()
            .then(response => {
                setEbooks(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    useEffect(() => {
        init();
    }, []);

    const handleDelete = (id) => {
        ebookService.remove(id)
            .then(response => {
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(document.querySelector('#title').value);
        const inputTitle = document.querySelector('#title').value;
        ebookService.findByTitle(inputTitle)
            .then(response => {
                console.log(response.data);
                setEbooks(response.data);
            })

    }

    return (
        <div className='container'>
            <h3>All Ebooks</h3>
            <hr />
            <div>
                <div className='d-flex justify-content-between'>
                    <Link to="/add" className='btn btn-primary my-2 my-sm-3'>Add Ebook</Link>
                    <form className="form-inline" onSubmit={submitHandler}>
                        <input id="title" className="form-control mr-sm-2" type="search" placeholder="Search by title" aria-label="Search" />
                        <button className="btn btn-primary
                         my-2 my-sm-3" type="submit" >Search</button>
                    </form>
                </div>

                <table className='table table-bordered table-striped'>
                    <thead className="thead-dark">
                        <tr>
                            <th>No.</th>
                            <th>Ebook Title</th>
                            <th>Description</th>
                            {/* <th>Language</th> */}
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ebooks.map((ebook, index) => (
                                <tr key={ebook.id}>
                                    <td>{index + 1}</td>
                                    <td>{ebook.title}</td>
                                    <td>{ebook.description}</td>
                                    {/* <td>{ebook.language}</td> */}
                                    <td>{ebook.category}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/ebooks/edit/${ebook.id}`}>Update</Link>
                                        <button className='btn btn-danger ml-2' onClick={() => {
                                            handleDelete(ebook.id);
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default EbookList;