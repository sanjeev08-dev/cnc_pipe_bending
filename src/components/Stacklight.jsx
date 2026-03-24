import React from 'react';

export default function Stacklight({ stacklights }) {
  const sortedLights = [...stacklights].sort((a, b) => a.id - b.id);

  const getColorClass = (light) => {
    if (!light.signalOn) return '';
    const colorMap = {
      Red:    'active-red',
      Yellow: 'active-yellow',
      Green:  'active-green',
      Blue:   'active-blue',
      White:  'active-white',
    };
    return colorMap[light.color] || '';
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      background: '#f8fafc',
      padding: '8px 10px',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
    }}>
      {sortedLights.map(light => (
        <div
          key={light.id}
          className={`stacklight-bulb ${getColorClass(light)}`}
          title={`${light.color} — ${light.signalOn ? 'ON' : 'OFF'}`}
          aria-label={`${light.color} signal light: ${light.signalOn ? 'active' : 'inactive'}`}
        />
      ))}
    </div>
  );
}
