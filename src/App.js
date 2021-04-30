import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import { Provider } from 'react-redux';
import store from './store/storeConfig';

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Treinando Redux</h1>
        <Form />
      </div>
    </Provider>

  );
}

export default App;
