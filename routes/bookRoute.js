const bookService = require('../services/bookService');

module.exports = (app) => {


    app.get('/book', (req, res) => {
        bookService.query()
            .then(books => res.json(books))
    })

    app.get('/book/:bookId', (req, res) => {
        const bookId = req.params.bookId;

        bookService.getById(bookId)
            .then(book => res.json(book))
    })

    app.delete('/book/:bookId', (req, res) => {
        const bookId = req.params.bookId;

        bookService.remove(bookId)
            .then(() => res.end(`book ${bookId} Deleted `))

    })

    app.post('/book', (req, res) => {

        const book = req.body;
        console.log('server add add add bb', book);
        bookService.add(book)
            .then(book => {
                res.json(book)
            })
    })

    app.put('/book/:bookId', (req, res) => {
        const book = req.body;
        bookService.update(book)
            .then(book => res.json(book))

    })

}
