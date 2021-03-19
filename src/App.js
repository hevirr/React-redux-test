import { Provider } from 'react-redux';

import './App.css';

import { Posts, PostForm } from './components';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
