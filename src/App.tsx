import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from './hoc/Layout';
import { PostState } from './context/Post/PostState';
import { ErrorState } from './context/Error/ErrorState';
import { PostsTable } from './components/PostsTable';
import { PostForm } from './components/PostForm';
import { SubmitLoadingState } from './context/Loading/SubmitLoading/SubmitLoadingState';
import { AlertState } from './context/Alert/AlertState';
import { ErrorsTable } from './components/ErrorsTable';

const App: React.FC = () => {
  return (
    <AlertState>
      <SubmitLoadingState>
        <ErrorState>
          <PostState>
            <BrowserRouter>
              <Layout>
                <Switch>
                  <Route path="/" exact component={PostsTable}/> 
                  <Route path="/form"  component={PostForm}/> 
                  <Route path="/errors"  component={ErrorsTable}/> 
                </Switch>
              </Layout>
            </BrowserRouter>
          </PostState>
        </ErrorState>
      </SubmitLoadingState>
    </AlertState>
  );
}

export default App;
