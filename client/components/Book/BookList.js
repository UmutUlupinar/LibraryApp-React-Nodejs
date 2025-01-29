import React from 'react';

// Örnek kitap listesi
const books = [
    { title: 'Kitap 1', author: 'Yazar 1' },
    { title: 'Kitap 2', author: 'Yazar 2' },
];

function BookList() {
    return (
        <div>
            <h2>Kitap Listesi</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <strong>{book.title}</strong> - {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;