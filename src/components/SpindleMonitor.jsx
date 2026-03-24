import React from 'react';

export default function SpindleMonitor({ spindles, mainSpindleData }) {
  const loadPct = mainSpindleData.spindleLoad;
  const loadColor = loadPct > 80 ? '#dc2626' : loadPct > 60 ? '#d97706' : '#16a34a';
  const tempColor = mainSpindleData.spindleTemp > 60 ? '#dc2626' : '#16a34a';

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 1px 4px rgba(21,101,192,0.06)',
      height: '100%',
    }}>
      {/* Title */}
      <div style={{
        background: '#EBF2FF',
        padding: '0.35rem 0.65rem',
        borderBottom: '2px solid #1565C0',
        borderLeft: '3px solid #1565C0',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1565C0', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
          Spindle Monitor
        </span>
      </div>

      <div style={{ padding: '0.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

        {/* Main Spindle Load */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '0.6rem 0.65rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Main Spindle Load
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 800, color: loadColor }}>
              {loadPct}%
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${loadPct}%`,
              background: loadColor,
              borderRadius: '999px',
              transition: 'width 0.3s ease',
            }} />
          </div>

          {/* Speed + Temp */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', marginTop: '0.5rem' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              padding: '0.4rem 0.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.58rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                Speed (RPM)
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 700, color: '#1565C0' }}>
                {mainSpindleData.spindleRpm}
              </div>
            </div>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              padding: '0.4rem 0.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.58rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                Temp (°C)
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 700, color: tempColor }}>
                {mainSpindleData.spindleTemp}
              </div>
            </div>
          </div>
        </div>

        {/* Spindle List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1 }}>
          {spindles.map(sp => (
            <div key={sp.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.4rem 0.65rem',
              background: '#f8fafc',
              border: `1px solid ${sp.isRotating ? '#86efac' : '#e2e8f0'}`,
              borderRadius: '5px',
              borderLeft: `3px solid ${sp.isRotating ? '#16a34a' : '#94a3b8'}`,
            }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.8rem', color: '#1a202c' }}>{sp.name}</div>
                <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: 500 }}>Override: {sp.override}%</div>
              </div>
              <span style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                padding: '0.15rem 0.55rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: sp.isRotating ? '#dcfce7' : '#f1f5f9',
                color: sp.isRotating ? '#16a34a' : '#64748b',
                border: `1px solid ${sp.isRotating ? '#86efac' : '#94a3b8'}`,
              }}>
                {sp.isRotating ? 'ROTATING' : 'STOPPED'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
