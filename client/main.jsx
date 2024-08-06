import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// apex-chart
import '/public/third-party/apex-chart.css';
import '/public/third-party/react-table.css';

// map
// import 'mapbox-gl/dist/mapbox-gl.css';

// google-fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

// project import
import App from '../imports/App';
import { ConfigProvider } from '../imports/features/Auth/contexts/ConfigContext';
import reportWebVitals from '../imports/reportWebVitals';

Meteor.startup(() => {
  const container = document.getElementById('root');
  const root = createRoot(container);
// ==============================|| MAIN - REACT DOM RENDER ||============================== //
  root.render(
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
