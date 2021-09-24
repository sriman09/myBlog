import React from 'react'
import { Route, Switch } from 'react-router';
import Article from './components/articles/Article';
import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client'
import ArticleDetails from './components/articles/ArticleDetails'
// import Home from './components/Home';
//import HomePage from './components/pages/HomePage';

//layout
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Categories from './components/routes/Categories';

//apollo client
const client = new ApolloClient({
  uri: 'https://myblog-backendcms.herokuapp.com/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path= '/' component={Article}/>
          <Route path= '/posts/:slug' component={ArticleDetails}/>
          <Route path='/:slug' component={Categories} />
        </Switch>
        <Footer />
      </div>
    </ApolloProvider>

  );
}

export default App;
