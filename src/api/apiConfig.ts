const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e42a5e9bc6ff79854a72f1454d50cf02',
    originalImage: (imgPath : string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath : string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig