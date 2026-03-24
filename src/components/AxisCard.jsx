import React from 'react';

export default function AxisCard({ axisName, data }) {
  return (
    <div className="glass-panel" style={{ padding: 0 }}>
      <div className="section-title" style={{ marginBottom: 0 }}>
        {axisName} AXIS
        <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          SV RPM: <span style={{ color: 'var(--accent-purple)', fontFamily: 'JetBrains Mono' }}>{data.servoRpm}</span>
        </span>
      </div>
      
      <div className="grid grid-cols-2" style={{ flex: 1 }}>
        <div className="flex-col justify-center border-b" style={{ padding: '0.5rem', borderRight: '1px solid var(--border-color)' }}>
          <span className="text-label text-center">Machine</span>
          <div className="readout text-center mt-1">
            <span className="text-value" style={{ color: 'var(--primary-blue)' }}>{data.machPos.toFixed(3)}</span>
          </div>
        </div>

        <div className="flex-col justify-center border-b" style={{ padding: '0.5rem' }}>
          <span className="text-label text-center">Program</span>
          <div className="readout text-center mt-1">
            <span className="text-value" style={{ color: '#fff' }}>{data.progPos.toFixed(3)}</span>
          </div>
        </div>

        <div className="flex-col justify-center" style={{ padding: '0.5rem', borderRight: '1px solid var(--border-color)', background: '#1a1a1a' }}>
          <span className="text-label text-center">Dist To Go</span>
          <div className="readout text-center mt-1">
            <span className="text-value" style={{ color: 'var(--accent-green)' }}>{data.d2g.toFixed(3)}</span>
          </div>
        </div>

        <div className="flex-col justify-center" style={{ padding: '0.5rem', background: '#1a1a1a' }}>
          <span className="text-label text-center">Load (AMPS)</span>
          <div className="readout text-center mt-1" style={{ border: 'none', background: 'transparent' }}>
             <span className="text-value" style={{ color: data.servoCurrent > 15 ? 'var(--accent-red)' : 'var(--accent-yellow)' }}>
               {data.servoCurrent.toFixed(1)} <span className="text-unit">A</span>
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}
