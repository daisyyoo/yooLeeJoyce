import React from 'react';

const styles = {
  backgroundImage1: {
    backgroundImage: 'url("/images/eucalyptus-img-5.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '70%',
    width: '100%',
    height: '100%'
  },
  backgroundImage2: {
    backgroundImage: 'url("/images/eucalyptus-img-6.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '60%',
    width: '100%',
    height: '100%'
  },
  pageContainer: {
    height: '95vh'
  },
  title: {
    fontSize: '5rem',
    lineHeight: '8rem',
    height: '100%'
  },
  image: {
    height: '450px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  header: {
    fontSize: '3.3rem',
    lineHeight: '3rem'
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '3rem'
  }
};

export default function Home(props) {
  return (
    <>
      <div style={styles.pageContainer}>
        <div style={styles.backgroundImage1}>
          <h1 style={styles.title} className="d-flex flex-column justify-content-around align-items-center text-center py-5">Joyce <br/>&amp; <br/>Kevin</h1>
        </div>
      </div>
      <div style={styles.pageContainer} className="d-flex flex-column justify-content-center align-items-center">
        <img style={styles.image} src="/images/test-pic.JPG" alt="joyceAndKevinPic"/>
        <h3 style={styles.header} className="text-center py-4 my-4">We&apos;re getting married!</h3>
      </div>
      <div style={styles.pageContainer}>
        <div style={styles.backgroundImage2}>
          <div className="d-flex flex-column text-center my-3">
            <h1 style={styles.header} className="mt-5">Save the Date!</h1>
            <p style={styles.text} className="p-2">
              June 24, 2023
              <br /> La Crescenta, CA
              <br />More details to come!
              <br />Please let us know how to contact you for RSVP details.
            </p>
          </div>
        </div>
        <div />
      </div>
    </>
  );
}
