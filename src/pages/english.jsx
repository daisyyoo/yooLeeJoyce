import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'

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
    height: '105vh'
  },
  title: {
    fontFamily: 'DearlyScript',
    fontSize: '7rem',
    lineHeight: '13rem'
  },
  titleSymbol: {
    fontSize: '6rem',
    lineHeight: '1rem',
    paddingTop: '4rem',
    color: '#e3ca93'
  },
  image: {
    width: '90%',
    objectFit: 'cover',
    borderRadius: '10px',
    outline: '8px double #e3ca93'
  },
  header: {
    fontSize: '3.3rem',
    lineHeight: '3rem'
  },
  date: {
    lineHeight: '2.5rem',
    paddingTop: '1rem'
  },
  dates: {
    lineHeight: '2rem',
    paddingBottom: '1.5rem'
  },
  text: {
    lineHeight: '1.7rem'
  },
  subtext: {
    lineHeight: '1.5rem'
  },
  formLabel: {
    fontWeight: '600'
  },
  errorMsg: {
    color: '#d61456',
    fontSize: '0.8rem',
    lineHeight: '1.7rem'
  },
  opaqueBackground: {
    background: '#fff',
    opacity: '0.7',
    borderRadius: '5px'
  }
};

export default function English() {
  const [submittedData, setSubmittedData] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  const onSubmit = async data => {
    // event.preventDefault();
    try {
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      await fetch('https://formsubmit.co/ajax/20c810cfc4f938313b2ba13286160120', req);
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setSubmittedData(true);
    }
  }, [formState, submittedData, reset]);

  const props = useSpring({
    delay: 200,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={styles.pageContainer}>
        <animated.div style={props}>
          <div style={styles.backgroundImage1} className="d-flex flex-column justify-content-center align-items-center text-center py-5">
            <h1 style={styles.title}>
              Joyce</h1>
            <h1 style={styles.titleSymbol}>&amp;</h1>
            <h1 style={styles.title}>Kevin</h1>
          </div>
        </animated.div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 style={styles.header} className="text-center py-4 my-4">We&apos;re getting married!</h3>
        <img style={styles.image} src="/images/image2.webp" alt="joyceAndKevinPic1" />
        <img style={styles.image} className="my-5" src="/images/DSC_4160.webp" alt="joyceAndKevinPic2" />
        <img style={styles.image} src="/images/image1.webp" alt="joyceAndKevinPic3" />

      </div>
      <div>
        <div style={styles.backgroundImage2} className="d-flex flex-column justify-content-center align-items-center">
          <div style={styles.opaqueBackground} className="d-flex flex-column text-center mt-5">
            <h1 style={styles.header} className="mt-5">Save the Date!</h1>
            <h5 style={styles.subtext}>Invitation to follow</h5>
            <div style={styles.textBackground}>
              <h2 style={styles.date} className="my-2">Saturday, June 24, 2023</h2>
              <h2 style={styles.dates} className="my-2">4:00 PM PST</h2>
              <h4 style={styles.text} >All Nations Church</h4>
              <h4 style={styles.text} >10000 Foothill Blvd</h4>
              <h4 style={styles.text} >Lake View Terrace, CA 91342</h4>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <Form.Group className="mb-2 col-md-5">
                <Form.Label htmlFor="firstName" style={styles.formLabel} className="text-color">First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  {...register('firstName', {
                    required: true,
                    minLength: {
                      value: 2,
                      message: 'First name should be at least 2 characters.'
                    }
                  })}
                  placeholder="First Name" />
                {errors.firstName?.type === 'required' && (
                  <p className="errorMsg px-3" style={styles.errorMsg}>First name is required.</p>
                )}
                {errors.firstName?.type === 'minLength' && (
                  <p className="errorMsg px-3" style={styles.errorMsg}>{errors.firstName.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-2 col-md-5">
                <Form.Label htmlFor="lastName" style={styles.formLabel} className="text-color">Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  {...register('lastName', {
                    required: true,
                    minLength: {
                      value: 2,
                      message: 'Last name should be at least 2 characters.'
                    }
                  })}
                  placeholder="Last Name" />
                {errors.lastName?.type === 'required' && (
                  <p className="errorMsg px-3" style={styles.errorMsg}>Last name is required.</p>
                )}
                {errors.lastName?.type === 'minLength' && (
                  <p className="errorMsg px-3" style={styles.errorMsg}>{errors.lastName.message}</p>
                )}
              </Form.Group>
            </div>
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <Form.Group className="mb-2" >
                <Form.Label htmlFor="email" style={styles.formLabel} className="text-color">Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'Please enter a valid email'
                    }
                  })}
                  placeholder="Email" />
                {errors.email?.type === 'required' && (
                  <p className="errorMsg px-3" style={styles.errorMsg}>Email address is required.</p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className="errorMsg px-3" style={styles.errorMsg}>{errors.email.message}</p>
                )}
              </Form.Group>
            </div>
            <div className="row d-flex justify-content-center">
              <Button
                type="submit"
                className="all-button my-5 px-5 w-25">
                <b>SUBMIT</b></Button>
            </div>
            <div className="row flex-column">
              <div className="p-3 py-2 py-md-0 d-flex justify-content-center">
                <h6 className={submittedData ? 'text-center submitted-msg w-75' : 'd-none'}>
                  {submittedData ? 'Thanks! Keep an eye out for more details!' : ''}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
