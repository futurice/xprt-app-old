/*eslint-disable react/prop-types*/

import React from 'react';
import Counter from './counter/CounterViewContainer';
import Color from './colors/ColorViewContainer';
import Welcome from './login/WelcomeViewContainer';
import TeacherLogin from './login/TeacherLoginViewContainer';
import TeacherRegister from './login/TeacherRegisterViewContainer';
import RecoverPassword from './login/RecoverPasswordViewContainer';
import ExpertList from './experts/ExpertsViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <Counter />;
  }

  if (key === 'Welcome') {
    return <Welcome />;
  }

  if (key === 'TeacherLogin') {
    return <TeacherLogin />;
  }

  if (key === 'ExpertsList') {
    return <ExpertList />;
  }

  if (key === 'TeacherRegister') {
    return <TeacherRegister />;
  }

  if (key === 'TeacherRecoverPw') {
    return <RecoverPassword />;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <Color
        index={index}
      />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
