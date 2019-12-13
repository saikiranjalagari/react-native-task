import axios from 'axios';


export const comments = () => {

    let config = {
        url: "https://jsonplaceholder.typicode.com/comments",
        method: 'GET',
        withCredentials: true,
        data: {

        }
    };
    return(
        axios(config)
    );
}

export const albums = () => {

    let config = {
        url: "https://jsonplaceholder.typicode.com/albums",
        method: 'GET',
        withCredentials: true,
        data: {
         
        }
    };
    return(
        axios(config)
    );
}

export const photos = () => {
    let config = {
        url: "https://jsonplaceholder.typicode.com/photos",
        method: 'GET',
        withCredentials: true,
    };
    return(
        axios(config)
    );
}



export const todos = () => {

    let config = {
        url: "https://jsonplaceholder.typicode.com/todos",
        method: 'GET',
        withCredentials: true,
        
    };
    return(
        axios(config)
    );
}
