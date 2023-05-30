import axios from 'axios';

const BASE_URL = 'https://gym-adrenaline.onrender.com'
const container = document.querySelector('.container-blog');
axios.defaults.baseURL = BASE_URL;

const getProducts = async () => {
    try {
        const response = await axios.get('/posts');

        return response.data
    } catch (error) {
        console.log(error.message)
    }
}
console.log(getProducts());


async function createMarkup() {
    const products = await getProducts()
    

    const markup = products.map(({ title, description, imageURL, topic }) => {
        const fomattedDescrition = description.replace(/\\n/g, '<br>\n');
        // const description = document.getElementById("description");
        // description.insertAdjacentHTML("beforeend", fomattedDescrition);

        return `<div class="blog-item">
        <h3>${title}</h3>
        <h4>Тема: ${topic}</h4>
        <img src="${imageURL}" alt="${title}" width ="350" height="220">
        <p class="content">${fomattedDescrition}</p>
        <button onclick="readMore(this)">Читати більше</button>
      </div>`
    }
    ).join('');
    
    container.insertAdjacentHTML('beforeend', markup);
    
}

createMarkup();


