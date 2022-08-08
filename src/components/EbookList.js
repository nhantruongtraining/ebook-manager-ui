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

    return (
        <div className='container'>
            <h3>All Ebooks</h3>
            <hr />
            <div>
                <Link to="/add" className='btn btn-primary mb-2'>Add Ebook</Link>
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
                            ebooks.map(ebook => (
                                <tr key={ebook.id}>
                                    <td>{ebook.id}</td>
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