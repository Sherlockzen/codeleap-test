import axios from "axios";

// export interface Resp {
//     count: number
//     next: string
//     previous: any
//     results: Result[]
// }
//
// export interface Result {
//     id: number
//     username: string
//     created_datetime: string
//     title: string
//     content: string
// }

const axiosInstance = axios.create({
    baseURL: 'https://dev.codeleap.co.uk/careers',
    timeout: 1000,
    headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json',
    },
})

export const getAll = async () => {
    const response = await axiosInstance.get('/')
    const data = response.data;

    return data;
}