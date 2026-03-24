import React from 'react';

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

  const TimerRow = ({ label, value, highlight }) => (
    <div className="flex justify-between items-center py-1 border-b">
      <span className="text-label" style={{ marginBottom: 0 }}>{label}</span>
      <span className="text-value-sm" style={{ 
        color: highlight ? 'var(--accent-cyan)' : '#fff',
        background: highlight ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
        padding: highlight ? '0 0.5rem' : '0'
      }}>
        {value}
      </span>
    </div>
  );

  return (
    <div className="glass-panel" style={{ padding: 0 }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>TIMERS & RATES</h2>
      
      <div className="flex-col" style={{ flex: 1, justifyContent: 'space-between', padding: '0.5rem' }}>
        <div className="flex-col gap-1">
          <TimerRow label="POWER ON" value={powerOnTime} />
          <TimerRow label="AUTO OPS" value={automaticOperationTime} />
          <TimerRow label="CUTTING" value={actualCuttingTime} highlight />
          <TimerRow label="CYCLE" value={cycleTime} />
          <TimerRow label="CUM. CYCLE" value={cumulativeCycleTime} />
        </div>

        <div className="glass-card mt-2" style={{ padding: '0.5rem', background: '#000', border: '1px solid #444' }}>
          <h3 className="text-label" style={{ marginBottom: '0.25rem', color: '#fff' }}>FEED (MM/MIN)</h3>
          <div className="flex justify-between items-end">
            <div className="flex-col">
              <span className="text-label" style={{ color: 'var(--text-secondary)' }}>CMD</span>
              <span className="text-value-sm" style={{ color: '#fff' }}>{cmdFeedRate}</span>
            </div>
            <div className="flex-col items-end">
              <span className="text-label" style={{ color: 'var(--accent-yellow)' }}>ACT</span>
              <span className="text-value-lg" style={{ color: 'var(--accent-yellow)' }}>{actFeedRate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
