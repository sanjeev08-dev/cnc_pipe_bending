import React from 'react';

export default function Stacklight({ stacklights }) {
  // Sort by id exactly as physical stacklights: usually red at top, then yellow, green, blue, white
  const sortedLights = [...stacklights].sort((a, b) => a.id - b.id);

  const getColorClass = (light) => {
    if (!light.signalOn) return '';
    const colorMap = {
      'Red': 'active-red',
      'Yellow': 'active-yellow',
      'Green': 'active-green',
      'Blue': 'active-blue',
      'White': 'active-white'
    };
    return colorMap[light.color] || '';
  };

  return (
    <div className="stacklight-container" style={{ display: 'flex', flexDirection: 'column', gap: '4px', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      {sortedLights.map(light => (
        <div 
          key={light.id} 
          className={`stacklight-bulb ${getColorClass(light)}`}
          title={`${light.color} - Mode: ${light.mode}`}
        ></div>
      ))}
    </div>
  );
}
