import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import parseRoute from './lib/parse-route';
import AppContext from './lib/app-context';
import PageContainer from './components/page-container';
import NotFound from './pages/not-found';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
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
    const contextValue = { route };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Header />
          <PageContainer>
            {this.renderPage()}
          </PageContainer>
          <Footer />
        </>
      </AppContext.Provider>
    );
  }
}
