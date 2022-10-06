import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Hey</h1>
      <Outlet />
    </div>
  );
}
