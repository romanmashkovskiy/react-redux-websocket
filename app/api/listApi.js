export default class ListApi {
    static getList() {
        return fetch(process.env.REACT_APP_API_ROOT)
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}