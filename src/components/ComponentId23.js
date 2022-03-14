import React from 'react';
import GradientView from './GradientView';

const contentText = 'Let it flow through you. Again and again. Forever. Let it flow through you. Again and again. Forever.';

const ComponentId23 = () => {
  return (
    <GradientView style={{ height: 300, padding: 20 }} top="pink" bottom="lavender">
      <p>{contentText}</p>
    </GradientView>
  )
}

export default ComponentId23;
