import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ebookService from "../services/ebook.service";

const AddEbook = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [publishYear, setYear] = useState('');
    const [languageId, setLanguage] = useState('');
    const [publisherId, setPublisher] = useState('');
    const [categoryId, setCategory] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const [pageTitle, setPageTitle] = useState('');

    const saveEbook = (e) => {
        e.preventDefault();

        const ebook = { id, title, description, publishYear, publisherId, languageId, categoryId };
        if (id) {
            // update
            ebookService.update(ebook, ebook.id)
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
            setPageTitle('Update Ebook');
            ebookService.get(id)
                .then(ebook => {
                    setTitle(ebook.data.title);
                    setDescription(ebook.data.description);
                    setYear(ebook.data.publishYear);
                    setLanguage(ebook.data.languageId);
                    setPublisher(ebook.data.publisherId);
                    setCategory(ebook.data.categoryId);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            setPageTitle('Add New Ebook');
        }
    }, [])

    return (
        <div className="container">
            <h3>{pageTitle}</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="publishYear" value={publishYear} onChange={(e) => setYear(e.target.value)} placeholder="publishing year" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="languageId" value={languageId} onChange={(e) => setLanguage(e.target.value)} placeholder="language id" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="publisherId" value={publisherId} onChange={(e) => setPublisher(e.target.value)} placeholder="publisher id" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="categoryId" value={categoryId} onChange={(e) => setCategory(e.target.value)} placeholder="category id" />
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