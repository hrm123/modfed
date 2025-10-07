import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { loadRemoteModule } from '@org/load-remote-module';
const Cart = React.lazy(() => loadRemoteModule('cart', './Module'));
const Blog = React.lazy(() => loadRemoteModule('blog', './Module'));
const Shop = React.lazy(() => loadRemoteModule('shop', './Module'));

const Ckeditor = React.lazy(() => loadRemoteModule('ckeditor','./Module'));

const Demo = React.lazy(() => loadRemoteModule('demo', './Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/ckeditor">Ckeditor</Link>
        </li>

        <li>
          <Link to="/demo">Demo</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/ckeditor" element={<Ckeditor />} />

        <Route path="/demo" element={<Demo />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
