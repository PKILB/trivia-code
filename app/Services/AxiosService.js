export const hp_api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple',
    timeout: 2500
})