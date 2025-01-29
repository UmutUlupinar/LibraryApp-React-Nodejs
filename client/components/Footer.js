import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#f4f4f4', padding: '10px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} LibraryApp</p>
        </footer>
    );
}

export default Footer;