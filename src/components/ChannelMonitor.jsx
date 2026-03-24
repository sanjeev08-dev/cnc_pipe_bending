import React from 'react';

export default function ChannelMonitor({ channels }) {
  const modeLut = { 0: "OFF", 1: "AUTO", 2: "MDI" };
  const stateLut = { 0: "STOP", 1: "READY", 2: "RUN" };
  const stateColors = { 0: "badge-gray", 1: "badge-blue", 2: "badge-green" };

  return (
    <div className="glass-panel" style={{ padding: 0 }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>CHANNEL CH1-3</h2>
      
      <div className="grid grid-cols-3 gap-2" style={{ padding: '0.5rem', flex: 1 }}>
        {channels.map(ch => (
          <div key={ch.id} className="glass-card flex-col" style={{ background: '#222' }}>
            <div className="flex justify-between items-center pb-2 border-b mb-2">
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{ch.name}</span>
              <span className={`badge ${stateColors[ch.state] || 'badge-gray'}`} style={{ padding: '0.15rem 0.4rem' }}>
                {stateLut[ch.state] || 'UNKNOWN'}
              </span>
            </div>
            
            <div className="flex-col justify-between" style={{ flex: 1 }}>
              <div className="flex justify-between items-center py-1">
                <span className="text-label" style={{ marginBottom: 0 }}>MODE</span>
                <span className="text-value-sm" style={{ color: 'var(--accent-purple)' }}>{modeLut[ch.mode] || 'UNKNOWN'}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-label" style={{ marginBottom: 0 }}>RAPID OVR</span>
                <span className="text-value-sm" style={{ color: '#fff' }}>{ch.rapidOverride}%</span>
              </div>
              
              <div className="flex-col mt-2 pt-2 border-b" style={{ borderBottom: 'none', borderTop: '1px solid var(--border-color)' }}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-label" style={{ marginBottom: 0 }}>FEED OVR</span>
                  <span className="text-value-sm" style={{ color: 'var(--accent-cyan)' }}>{ch.feedOverride}%</span>
                </div>
                <div className="progress-bar-container" style={{ height: '4px' }}>
                  <div className="progress-bar-fill" style={{ width: `${ch.feedOverride}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
