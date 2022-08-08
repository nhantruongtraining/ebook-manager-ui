import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ebookService from "../services/ebook.service";

const AddEbook = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [publisher, setPublisher] = useState('');
    const [language, setLanguage] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveEbook = (e) => {
        e.preventDefault();

        const ebook = { id, title, description, year, publisher, language, category };
        if (id) {
            // update
            ebookService.update(ebook)
                .then(response => {
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            // create
            ebookService.create(ebook)
                .then(response => {
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }
    useEffect(() => {
        if (id) {
            ebookService.get(id)
                .then(ebook => {
                    setTitle(ebook.data.name);
                    setDescription(ebook.data.description);
                    setYear(ebook.data.year);
                    setPublisher(ebook.data.publisher);
                    setLanguage(ebook.data.language);
                    setCategory(ebook.data.category);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])
    return (
        <div className="container">
            <h3>Add Ebook</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="title" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="description" onChange={(e) => setDescription(e.target.value)} placeholder="description" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="year" onChange={(e) => setYear(e.target.value)} placeholder="publishing year" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="publisher" onChange={(e) => setTitle(e.target.value)} placeholder="publisher id" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="language" onChange={(e) => setTitle(e.target.value)} placeholder="language id" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="category" onChange={(e) => setTitle(e.target.value)} placeholder="category id" />
                </div>
                <div>
                    <button onClick={(e) => saveEbook(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to List</Link>
        </div>
    )

}

export default AddEbook;