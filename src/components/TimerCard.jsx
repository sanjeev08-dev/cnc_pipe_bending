import React from 'react';

function TimerRow({ label, value, highlight }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.35rem 0.5rem',
      borderRadius: '4px',
      background: highlight ? '#EBF2FF' : 'transparent',
      border: highlight ? '1px solid #90c4f8' : '1px solid transparent',
      marginBottom: '2px',
    }}>
      <span style={{
        fontSize: '0.65rem',
        fontWeight: 600,
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.85rem',
        fontWeight: highlight ? 700 : 600,
        color: highlight ? '#1565C0' : '#1a202c',
      }}>
        {value}
      </span>
    </div>
  );
}

export default function TimerCard({ data }) {
  const {
    powerOnTime,
    automaticOperationTime,
    actualCuttingTime,
    cycleTime,
    cumulativeCycleTime,
    actFeedRate,
    cmdFeedRate
  } = data;

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
        gap: '0.4rem',
      }}>
        <span style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          color: '#1565C0',
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
        }}>
          Timers & Rates
        </span>
      </div>

      <div style={{ padding: '0.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Timer rows */}
        <div>
          <TimerRow label="Power On" value={powerOnTime} />
          <TimerRow label="Auto Ops" value={automaticOperationTime} />
          <TimerRow label="Cutting" value={actualCuttingTime} highlight />
          <TimerRow label="Cycle" value={cycleTime} />
          <TimerRow label="Cum. Cycle" value={cumulativeCycleTime} />
        </div>

        {/* Feed rate card */}
        <div style={{
          marginTop: '0.5rem',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '0.5rem 0.65rem',
        }}>
          <div style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            marginBottom: '0.4rem',
          }}>
            Feed Rate (mm/min)
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: '0.58rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>CMD</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>{cmdFeedRate}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.58rem', color: '#d97706', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>ACT</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.3rem', fontWeight: 800, color: '#d97706' }}>{actFeedRate}</div>
            </div>
          </div>

          {/* Feed bar */}
          <div style={{ marginTop: '0.4rem' }}>
            <div style={{
              width: '100%',
              height: '5px',
              background: '#e2e8f0',
              borderRadius: '999px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${Math.min((actFeedRate / 3000) * 100, 100)}%`,
                background: '#d97706',
                borderRadius: '999px',
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
