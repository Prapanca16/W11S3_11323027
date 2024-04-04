import React, { useState } from 'react';

function UserInfo() {
  // State untuk menyimpan nilai nama
  const [nama, setNama] = useState('');
  // State untuk menyimpan nilai umur
  const [umur, setUmur] = useState('');
  // State untuk menyimpan pesan hasil submit
  const [submitMessage, setSubmitMessage] = useState('');

  // Fungsi untuk menangani perubahan nilai nama
  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  // Fungsi untuk menangani perubahan nilai umur
  const handleUmurChange = (event) => {
    setUmur(event.target.value);
  };

  // Fungsi untuk menangani submit
  const handleSubmit = () => {
    const message = `Nama: ${nama}, Umur: ${umur}`;
    setSubmitMessage(message);
  };

  return (
    <center>
    <div>
      <h2>Info Pengguna</h2>
      <div>
        <label>Nama: </label>
        <input type="text" value={nama} onChange={handleNamaChange} />
      </div>
      <div>
        <label>Umur: </label>
        <input type="number" value={umur} onChange={handleUmurChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>{submitMessage}</div> {/* Menampilkan pesan hasil submit */}
    </div>
    </center>
  );
}

export default UserInfo;
