import React, { useEffect } from "react";

function AddBookModule() {
    useEffect(() => {
        console.log("AddBookModule render edildi!");
    }, []);

    return (
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
            <h1>Kitap Ekleme Sayfası</h1>
            <p>Bu sayfa başarılı şekilde yüklendi.</p>
        </div>
    );
}

export default AddBookModule;
