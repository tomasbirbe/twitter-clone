import React, { useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Layout/Layout';
import Feed from './Pages/Feed/Feed';
import ComposeTweet from './Pages/ComposeTweet/ComposeTweet';
import TweetsContext from './tweetContext';
import { useMediaQuery } from '@chakra-ui/media-query';
import breakpoints from './breakpoints';

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [isMd] = useMediaQuery(`(min-width: ${breakpoints.md})`);

  return (
    <TweetsContext.Provider value={[tweets, setTweets]}>
      <Switch>
        <Route
          exact
          path="/tweet"
          render={() => (isMd ? <Redirect to="/" /> : <ComposeTweet />)}
        />
        ;
        <Route exact path="/" render={() => <Layout page={<Feed />} />} />
      </Switch>
    </TweetsContext.Provider>
  );
};

export default App;
