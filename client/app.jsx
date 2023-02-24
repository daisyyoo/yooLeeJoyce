import React from 'react';
import Home from './pages/home';
// import Header from './components/header';
import Footer from './components/footer';
import parseRoute from './lib/parse-route';
import AppContext from './lib/app-context';
import PageContainer from './components/page-container';
import NotFound from './pages/not-found';
import jwtDecode from 'jwt-decode';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestId: null,
      route: parseRoute(window.location.hash)
    };
    this.submittedInfo = this.submittedInfo.bind(this);
  }

  // react.router
  // useEffect(() => {

  // }, []);

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
    const token = window.localStorage.getItem('guestToken');
    const guestId = token ? jwtDecode(token) : null;
    this.setState({ guestId });
  }

  submittedInfo(info) {
    const { guestId, token } = info;
    window.localStorage.setItem('guestToken', token);
    this.setState({ guestId });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    return <NotFound />;
  }

  render() {
    const { route } = this.state;
    // add react context
    const contextValue = { route };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          {/* <Header /> */}
          <PageContainer>
            {this.renderPage()}
          </PageContainer>
          <Footer />
        </>
      </AppContext.Provider>
    );
  }
}
