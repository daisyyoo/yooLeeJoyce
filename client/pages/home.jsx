import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    height: '450px',
    objectFit: 'cover',
    borderRadius: '10px',
    outline: '8px double #e3ca93'
  },
  header: {
    fontSize: '3.3rem',
    lineHeight: '3rem'
  },
  text: {
    lineHeight: '3rem'
  },
  formLabel: {
    fontWeight: '600'
  },
  errorMsg: {
    color: '#d61456',
    fontSize: '0.8rem',
    lineHeight: '1.7rem'
  },
  submitMsg: {
    fontSize: '1.5rem',
    lineHeight: '3rem'
  }
};

export default function Home(props) {
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

  const onSubmit = data => {
  // event.preventDefault();
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/saveTheDate', req)
      .then(res => res.text())
      .then(response => {
      // setLoading(true);
      });
  // .catch(setError);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setSubmittedData(true);
    }
  }, [formState, submittedData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={styles.pageContainer}>
        <div style={styles.backgroundImage1} className="d-flex flex-column justify-content-center align-items-center text-center py-5">
          <h1 style={styles.title}>
            Joyce</h1>
          <h1 style={styles.titleSymbol}>&amp;</h1>
          <h1 style={styles.title}>Kevin</h1>
        </div>
      </div>
      <div style={styles.pageContainer} className="d-flex flex-column justify-content-center align-items-center">
        <img style={styles.image} src="/images/test-pic.JPG" alt="joyceAndKevinPic"/>
        <h3 style={styles.header} className="text-center py-4 my-4">We&apos;re getting married!</h3>
      </div>
      <div style={styles.pageContainer}>
        <div style={styles.backgroundImage2}>
          <div className="d-flex flex-column text-center">
            <h1 style={styles.header} className="mt-5">Save the Date!</h1>
            <div style={styles.textBackground}>
              <h2 style={styles.text} className="my-2 py-2">Saturday, June 24, 2023 </h2>
              <h4 style={styles.text} >All Nations Church</h4>
              <h4 style={styles.text} >10000 Foothill Blvd</h4>
              <h4 style={styles.text} >Lake View Terrace, CA 91342</h4>
              <h5 style={styles.text}>More details to come!</h5>
            </div>
          </div>
          <div className="container mt-3">
            <div className="d-flex flex-column flex-md-row col-12 justify-content-between">
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
          <div className="container">
            <div className="d-flex justify-content-center">
              <Button
                type="submit"
                className="all-button m-2 px-5">
                <b>SUBMIT</b></Button>
            </div>
          </div>
          <div className="container flex-column my-2">
            <div className="p-3 py-2 py-md-0">
              <h6 style={styles.submitMsg}>
                {submittedData ? 'Thanks! Keep an eye out for more details!' : ''}
              </h6>
            </div>
          </div>
        </div>
        <div />
      </div>
    </form>
  );
}
