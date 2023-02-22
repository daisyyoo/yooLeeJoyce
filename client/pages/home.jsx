import React from 'react';

const styles = {
  image: {
    backgroundImage: 'url("/images/eucalyptus-img-5.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '60%',
    width: '100%',
    height: '100%'
  },
  // overlay: {
  //   // backgroundColor: 'rgba(69, 69, 69, 0.4)',
  //   top: '0',
  //   left: '0',
  //   width: '100%',
  //   height: '100%'
  // },
  header: {
    color: '#6F8C69',
    lineHeight: '2.5rem'
  },
  text: {
    color: '#6F8C69',
    fontSize: '1.1rem',
    lineHeight: '1.5rem'
  },
  textBox: {
    top: '40%'
  }
};

export default function Home(props) {
  return (
    <div className="image-container" >
      <div style={styles.image} className="position-relative">
        <div style={styles.textBox} className="container position-absolute">
          <div className="d-flex flex-column text-center">
            <h1 style={styles.header} className="py-2 mb-3 my-lg-4 mb-lg-5">Save the Date!</h1>
            <p style={styles.text} className="mb-4">We are getting married!</p>
            <p style={styles.text} className="mb-4">June 24, 2023</p>
            <p style={styles.text} className="mb-4 px-5">Please let us know how to contact you for RSVP details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
