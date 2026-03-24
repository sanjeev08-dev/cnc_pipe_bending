import React from 'react';

const modeLut  = { 0: "OFF",   1: "AUTO", 2: "MDI"  };
const stateLut = { 0: "STOP",  1: "READY",2: "RUN"  };
const stateColors = {
  0: { bg: '#f1f5f9', text: '#64748b', border: '#94a3b8' },
  1: { bg: '#EBF2FF', text: '#1565C0', border: '#90c4f8' },
  2: { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
};

function StateBadge({ state }) {
  const c = stateColors[state] || stateColors[0];
  return (
    <span style={{
      background: c.bg,
      color: c.text,
      border: `1px solid ${c.border}`,
      borderRadius: '4px',
      fontSize: '0.62rem',
      fontWeight: 700,
      padding: '0.15rem 0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
    }}>
      {stateLut[state] ?? 'UNKNOWN'}
    </span>
  );
}

function OverrideBar({ label, value, color }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {label}
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', fontWeight: 700, color }}>
          {value}%
        </span>
      </div>
      <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${value}%`,
          background: color,
          borderRadius: '999px',
          transition: 'width 0.3s ease',
        }} />
      </div>
    </div>
  );
}

export default function ChannelMonitor({ channels }) {
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
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1565C0', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
          Channel Monitor (CH 1–3)
        </span>
        <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 500 }}>
          {channels.filter(c => c.state === 2).length} active
        </span>
      </div>

      {/* Channel Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.5rem',
        padding: '0.5rem',
        flex: 1,
      }}>
        {channels.map(ch => {
          const sc = stateColors[ch.state] || stateColors[0];
          return (
            <div key={ch.id} style={{
              background: '#f8fafc',
              border: `1px solid ${ch.state === 2 ? '#86efac' : '#e2e8f0'}`,
              borderRadius: '6px',
              padding: '0.6rem 0.65rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              borderTop: `3px solid ${sc.border}`,
            }}>
              {/* Channel header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1a202c' }}>{ch.name}</span>
                <StateBadge state={ch.state} />
              </div>

              {/* Mode row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                padding: '0.3rem 0.5rem',
              }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Mode</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700, color: '#1565C0' }}>
                  {modeLut[ch.mode] ?? 'UNKNOWN'}
                </span>
              </div>

              {/* Override bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <OverrideBar label="Feed Ovr" value={ch.feedOverride} color="#1565C0" />
                <OverrideBar label="Rapid Ovr" value={ch.rapidOverride} color="#d97706" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
