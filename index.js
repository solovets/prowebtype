const scrape = require('website-scraper');
const options = {
    urls: ['https://prowebtype.com'],
    directory: './com/',
    recursive: true,
    urlFilter: (url) => {
        return url.includes('prowebtype.com');
    }
};

scrape(options).then((result) => {
    console.log('success');
}).catch((err) => {
    console.log(err);
});