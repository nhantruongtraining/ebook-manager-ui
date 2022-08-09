import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/ebooks');
}

const create = (data) => {
    return httpClient.post('/ebooks', data);
}

const findByTitle = (title) => {
    return httpClient.get(`ebooks/?title=${title}`);
}

const get = (id) => {
    return httpClient.get(`/ebooks/${id}`);
}

const update = (data, id) => {
    return httpClient.put(`/ebooks/${id}`, data);
}

const remove = (id) => {
    return httpClient.delete(`/ebooks/${id}`);
}
const ebookService = { getAll, create, findByTitle, get, update, remove };
export default ebookService;