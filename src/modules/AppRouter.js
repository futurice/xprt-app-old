/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';
import WelcomeViewContainer from './login/WelcomeViewContainer';

import TeacherLoginViewContainer from './login/TeacherLoginViewContainer';
import ExpertLoginViewContainer from './login/ExpertLoginViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Welcome') {
    return <WelcomeViewContainer />;
  }

  if (key === 'TeacherLogin') {
    return <TeacherLoginViewContainer />;
  }
  if (key === 'ExpertLogin') {
    return <ExpertLoginViewContainer />;
  }

  if (key === 'Counter') {
    return <CounterViewContainer />;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer
        index={index}
      />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
