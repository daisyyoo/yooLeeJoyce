import React from 'react';

const styles = {
  image: {
    backgroundImage: 'url("/images/eucalyptus-img-3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '60%',
    width: '100%',
    height: '100%'
  },
  overlay: {
    backgroundColor: 'rgba(69, 69, 69, 0.4)',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  },
  textItalic: {
    color: '#f4f6ff',
    top: '50%',
    fontFamily: 'Merriweather',
    fontStyle: 'italic',
    textAlign: 'center',
    width: '100%'
  },
  textName: {
    color: '#f4f6ff',
    bottom: '5%',
    right: '5%',
    fontFamily: 'Merriweather',
    fontSize: '1.2rem',
    fontStyle: 'italic'
  },
  header: {
    color: '#10375c',
    lineHeight: '2.5rem'
  },
  text: {
    color: '#10375c',
    fontSize: '1.1rem',
    lineHeight: '1.5rem'
  }
};

export default function Home(props) {
  return (
    <>
      <div className="image-container" >
        <div style={styles.image} className="position-relative">
          <div style={styles.overlay} className="position-absolute" />
        </div>
      </div>
      <div className="container p-3 px-lg-0 col-lg-10">
        <div className="d-flex flex-column justify-contents-center">
          <h1 style={styles.header} className="py-2 mb-3 my-lg-4 mb-lg-5">Joyce &amp; Kevin</h1>
          <p style={styles.text} className="mb-4">Save the Date!</p>
        </div>
      </div>
    </>
  );
}
