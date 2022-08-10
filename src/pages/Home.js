import { useCollection } from '../hooks/useCollection'

// components
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

function Home() {
  const { documents: books } = useCollection('books')

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}

export default Home
