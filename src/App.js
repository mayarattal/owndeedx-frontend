import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      {/* شعار الموقع */}
      <img src="/logo_blackBG.png" alt="OwnDeedX Logo" style={styles.logo} />

      <h1 style={styles.title}>OwnDeedX Wallet</h1>

      <button style={styles.button}>اتصل بمحفظتي</button>

      <div style={styles.section}>
        <h3>الرصيد:</h3>
        <p>0 ETH</p>
      </div>

      <div style={styles.section}>
        <h3>إرسال العملات:</h3>
        <input type="text" placeholder="عنوان المحفظة" style={styles.input} />
        <input type="text" placeholder="القيمة (ETH)" style={styles.input} />
        <button style={styles.button}>إرسال</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: 20,
    textAlign: 'center',
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 80,
    height: 'auto',
  },
  title: {
    color: '#2e7d32',
  },
  section: {
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    margin: '5px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default App;
