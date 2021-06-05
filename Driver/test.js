const driver = require('.')

async function getStories(){
    const stories=await driver.books.getBook('60b4c7c0e6ab1d1564b1d99c')
    console.log(stories);
}

getStories()