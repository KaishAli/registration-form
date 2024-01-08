import axios from 'axios';
export async function axiosMethod() {
    const newData = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return newData;
}
export default axiosMethod