import React from 'react';

export default function SpindleMonitor({ spindles, mainSpindleData }) {
  const loadColor = mainSpindleData.spindleLoad > 80 ? 'var(--accent-red)' : 'var(--accent-green)';

  return (
    <div className="glass-panel" style={{ padding: 0 }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>SPINDLE MONITOR</h2>
      
      <div style={{ padding: '0.5rem' }}>
        <div className="glass-card mb-2" style={{ background: '#000', padding: '0.5rem' }}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-label" style={{ color: '#fff' }}>MAIN SPINDLE LOAD</span>
            <span className="text-value-sm" style={{ color: loadColor }}>{mainSpindleData.spindleLoad}%</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${mainSpindleData.spindleLoad}%`, background: loadColor }}></div>
          </div>
          
          <div className="flex justify-between mt-3">
            <div className="flex-col items-center flex-1" style={{ borderRight: '1px solid #333' }}>
              <span className="text-label">SPEED (RPM)</span>
              <span className="text-value mt-1">{mainSpindleData.spindleRpm}</span>
            </div>
            <div className="flex-col items-center flex-1">
              <span className="text-label">TEMP (°C)</span>
              <span className="text-value mt-1" style={{ color: mainSpindleData.spindleTemp > 60 ? 'var(--accent-red)' : 'var(--accent-green)' }}>
                {mainSpindleData.spindleTemp}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-col gap-1 mt-2">
          {spindles.map(sp => (
            <div key={sp.id} className="flex justify-between items-center glass-card" style={{ padding: '0.35rem 0.5rem', border: '1px solid #333' }}>
              <div className="flex-col">
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>{sp.name}</span>
                <span className="text-label" style={{ fontSize: '0.65rem' }}>OVR: {sp.override}%</span>
              </div>
              <span className={`badge ${sp.isRotating ? 'badge-green' : 'badge-gray'}`} style={{ fontSize: '0.65rem' }}>
                {sp.isRotating ? 'ROTATING' : 'STOPPED'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
