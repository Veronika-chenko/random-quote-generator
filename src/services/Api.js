import axios from 'axios';

const API_KEY = 'YABs29hy/C/BcZTvuIvWxw==2VeizKgtYY8APR5O'; 

const options = {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": API_KEY},
    contentType: "application/json",
};

export const getRandomQuote = async () => {
    try {
        const res = await axios.request(options);
        
        return res.data[0];
    } catch (error) {
        if (error.name === "CanceledError") return;
        console.log(error);
    }
}
