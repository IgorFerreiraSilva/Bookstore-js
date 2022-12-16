const App = require('./App')

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthors()

app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('A Sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 29.99, 160)
app.createBook('O Ladrão de Raios', '...', 'fantasy', 500, authors[1], '...', 39.99, 200)
app.createBook('A pirâmede Vermelha', '...', 'fantasy', 600, authors[1], '...', 59.99, 190)


const books = app.getBooks()

app.createUser('Isaac', 'teste@email.com', '123456')

const users = app.getUsers()

app.showDatabase()

const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[1],
        quantity: 5
    },
    {
        product: books[3],
        quantity: 1
    },
]

app.createOrder(items, users[0])
app.showDatabase()