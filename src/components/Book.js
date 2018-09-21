import React from 'react';

function Book (props) {
    return (
        <li>
            {props.book.title}
        </li>
    );
}

export default Book;