import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/ebooks');
}

const create = data => {
    return httpClient.post("/ebooks", data);
}

const get = id => {
    return httpClient.get(`/ebooks/${id}`);
}

const update = data => {
    return httpClient.put('/ebooks', data);
}

const remove = id => {
    return httpClient.delete(`/ebooks/${id}`);
}
export default { getAll, create, get, update, remove };