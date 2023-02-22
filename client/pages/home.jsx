import React from 'react';

const styles = {
  backgroundImage: {
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
  image: {
    height: '450px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  header: {
    color: '#6F8C69',
    lineHeight: '2.5rem'
  },
  text: {
    color: '#6F8C69',
    fontSize: '1.1rem',
    lineHeight: '1.8rem'
  },
  textBox: {
    top: '5%'
  }
};

export default function Home(props) {
  return (
    <div className="image-container" >
      <div style={styles.backgroundImage} className="position-relative">
        <div style={styles.textBox} className="container position-absolute">
          <div className="text-center">
            <img style={styles.image} src="/images/test-pic.JPG" alt="joyceAndKevinPic"/>
          </div>
          <div className="d-flex flex-column text-center my-3">
            <h1 style={styles.header} className="py-2 mb-3">Save the Date!</h1>
            <p style={styles.text} className="mb-1 px-3">
              We are getting married!
              <br /> June 24, 2023
              <br />More details to come!
              <br />Please let us know how to contact you for RSVP details.
            </p>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
