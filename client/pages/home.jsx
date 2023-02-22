import React from 'react';

const styles = {
  backgroundImage: {
    backgroundImage: 'url("/images/eucalyptus-img-5.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '60%',
    width: '100%',
    height: '100%'
  },
  landingPage: {
    height: '95vh'
  },
  title: {
    fontSize: '2.5rem'
  },
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
    fontSize: '1.5rem',
    lineHeight: '3rem'
  },
  textBox: {
    top: '35%'
  }
};

export default function Home(props) {
  return (
    <>
      <div className="container">
        <div style={styles.landingPage} className="d-flex flex-column justify-content-around align-items-center">
          <h1 style={styles.title} className="py-5">Joyce &amp; Kevin</h1>
          <img style={styles.image} src="/images/test-pic.JPG" alt="joyceAndKevinPic"/>
        </div>
      </div>
      <div className="image-container" >
        <div style={styles.backgroundImage} className="position-relative">
          <div style={styles.textBox} className="container position-absolute">
            <div className="d-flex flex-column text-center my-3">
              <h1 style={styles.header} className="py-2 mb-3">Save the Date!</h1>
              <p style={styles.text} className="mb-1 px-3">
                We are getting married!
                <br /> June 24, 2023
                <br /> La Crescenta, CA
                <br />More details to come!
                <br />Please let us know how to contact you for RSVP details.
              </p>
            </div>
          </div>
        </div>
        <div />
      </div>
    </>
  );
}
