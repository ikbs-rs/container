import React from 'react';
import {createRoot}  from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far);


const root = createRoot(document.getElementById("root"))
root.render
  (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  )


