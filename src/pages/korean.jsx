import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

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
  backgroundImage3: {
    height: '105vh',
    backgroundImage: 'url("/images/image-1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '60%',
    width: '100%',
    height: '100%'
  },
  pageContainer: {
    height: '105vh'
  },
  marginSpacing: {
    padding: '11rem 0'
  },
  textContainer: {
    margin: '0 2rem',
    background: '#fff',
    opacity: '0.7',
    borderRadius: '5px'
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
  koreanText: {
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
  opaqueBackground: {
    background: '#fff',
    opacity: '0.7',
    borderRadius: '5px'
  }
};

export default function Korean() {
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
      <div style={styles.backgroundImage3}>
        <div style={styles.marginSpacing}>
          <div style={styles.textContainer} className="d-flex flex-column justify-content-center align-items-center text-background">
            <h4 style={styles.koreanText} className="text-center korean mx-2 my-3 dark-text">우리라는 이름으로 시작하는 삶.<br/>그 설렘의 순간에 소중한 분을 초대합니다.</h4>
            <div className="mx-3">
              <h4 style={styles.koreanText} className="text-center py-3 korean dark-text">
              하나님 안에서 서로 사랑을 시작한 저희가 이제 부부의 연으로
              <br/>예수님 안에서 한 길을 바라보려 합니다.
              <br/>평생을 성령님 안에서 서로 사랑하는 남편, 아내로 살겠습니다.
              <br/>한 곳을 바라보며 첫발을 떼는 자리입니다.
              <br/>그 시작의 자리에 함께해 주시어 축복해 주시기 바랍니다.</h4>
            </div>
            <div className="d-flex text-center align-items-center py-4">
              <h3 className="korean fw-bold dark-text">유병학  김효숙</h3>
              <h4 className="px-2 korean dark-text">의 아들</h4>
              <h3 className="korean fw-bold dark-text">재진</h3>
            </div>
            <div className="d-flex text-center align-items-center mb-3">
              <h3 className="korean fw-bold dark-text">이진형  이현진</h3>
              <h4 className="px-2 korean dark-text">의 딸</h4>
              <h3 className="korean fw-bold dark-text">재영</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
        <img style={styles.image} src="/images/image2.webp" alt="joyceAndKevinPic1" />
        <img style={styles.image} className="my-5" src="/images/DSC_4160.webp" alt="joyceAndKevinPic2" />
        <img style={styles.image} src="/images/image1.webp" alt="joyceAndKevinPic3" />
      </div>
      <div >
        <div style={styles.backgroundImage2} className="d-flex flex-column justify-content-center align-items-center">
          <div style={styles.opaqueBackground} className="d-flex flex-column text-center mx-2">
            <h1 style={styles.header} className="mt-5 mb-3 dark-text">Save The Date</h1>
            <div style={styles.textBackground}>
              <h2 style={styles.date} className="my-2 korean dark-text">2023년 6월 24일 토요일</h2>
              <h2 style={styles.dates} className="my-2 korean dark-text">오후 4시</h2>
              <h4 style={styles.text} className="mt-3 dark-text">All Nations Church</h4>
              <h4 style={styles.text} className="dark-text">10000 Foothill Blvd</h4>
              <h4 style={styles.text} className="dark-text">Lake View Terrace, CA 91342</h4>
              <h4 style={styles.koreanText} className="korean py-5 text-center dark-text">초대장을 보낼 수 있도록 성함과<br/>
                  이메일 주소를 아래에 입력해 주세요.</h4>
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
                      value: 1,
                      message: 'Last name should be at least 1 characters.'
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
                <h6 className={submittedData ? 'text-center submitted-msg w-75 korean dark-text' : 'd-none'}>
                  {submittedData ? '고맙습니다! 초대장 곳 보내드리겠습니다!' : ''}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
