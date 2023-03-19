import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/header';
import Footer from './components/footer';
// import parseRoute from './lib/parse-route';
// import AppContext from './lib/app-context';
import PageContainer from './components/page-container';
// import NotFound from './pages/not-found';
// import jwtDecode from 'jwt-decode';

export default function App() {
  // const [guestId, setGuestId] = useState();
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     guestId: null,
  //     route: parseRoute(window.location.hash)
  //   };
  //   this.submittedInfo = this.submittedInfo.bind(this);
  // }

  // useEffect(() => {

  // }, []);

  // componentDidMount() {
  //   window.addEventListener('hashchange', event => {
  //     const route = parseRoute(window.location.hash);
  //     this.setState({ route });
  //   });
  //   const token = window.localStorage.getItem('guestToken');
  //   const guestId = token ? jwtDecode(token) : null;
  //   this.setState({ guestId });
  // }

  // const submittedInfo = info => {
  //   const { guestId, token } = info;
  //   window.localStorage.setItem('guestToken', token);
  //   setGuestId(guestId);
  //   // this.setState({ guestId });
  // }

  // renderPage() {
  //   const { route } = this.state;
  //   if (route.path === '') {
  //     return <Home />;
  //   }
  //   return <NotFound />;
  // }

  // const { route } = this.state;
  // add react context
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<PageContainer />}/>
        <Route index element ={<Home />}/>
      </Routes>
      <Footer />
    </>

  );
}
