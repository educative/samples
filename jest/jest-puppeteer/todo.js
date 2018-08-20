// Client-side calls to dark ski API via Go proxy server
const getTodo = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${ id }`)
                .then(response => response.json());
};