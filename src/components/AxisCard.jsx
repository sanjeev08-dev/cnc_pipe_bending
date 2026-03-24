import React from 'react';

function DataCell({ label, value, valueColor, highlight }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem 0.4rem',
      background: highlight ? '#EBF2FF' : '#f8fafc',
      borderRadius: '4px',
      border: `1px solid ${highlight ? '#90c4f8' : '#e2e8f0'}`,
      minHeight: '56px',
    }}>
      <span style={{
        fontSize: '0.6rem',
        fontWeight: 600,
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        marginBottom: '4px',
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '1rem',
        fontWeight: 700,
        color: valueColor || '#1565C0',
        lineHeight: 1.2,
      }}>
        {value}
      </span>
    </div>
  );
}

export default function AxisCard({ axisName, data }) {
  const currentColor = data.servoCurrent > 15
    ? '#dc2626'
    : data.servoCurrent > 10
      ? '#d97706'
      : '#16a34a';

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
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#EBF2FF',
        padding: '0.35rem 0.65rem',
        borderBottom: '2px solid #1565C0',
        borderLeft: '3px solid #1565C0',
      }}>
        <span style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          color: '#1565C0',
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
        }}>
          {axisName} AXIS
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 500 }}>SV RPM</span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#1565C0',
            background: '#fff',
            padding: '0.1rem 0.4rem',
            borderRadius: '3px',
            border: '1px solid #90c4f8',
          }}>
            {data.servoRpm}
          </span>
        </div>
      </div>

      {/* Data Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.4rem',
        padding: '0.5rem',
        flex: 1,
      }}>
        <DataCell
          label="Machine Pos"
          value={data.machPos.toFixed(3)}
          valueColor="#1565C0"
          highlight
        />
        <DataCell
          label="Program Pos"
          value={data.progPos.toFixed(3)}
          valueColor="#1a202c"
        />
        <DataCell
          label="Dist To Go"
          value={data.d2g.toFixed(3)}
          valueColor="#16a34a"
        />
        <DataCell
          label="Load (A)"
          value={`${data.servoCurrent.toFixed(1)}`}
          valueColor={currentColor}
        />
      </div>

      {/* Load bar footer */}
      <div style={{ padding: '0 0.5rem 0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
          <span style={{ fontSize: '0.58rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Current Load
          </span>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: currentColor, fontFamily: 'JetBrains Mono, monospace' }}>
            {((data.servoCurrent / 20) * 100).toFixed(0)}%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '5px',
          background: '#e2e8f0',
          borderRadius: '999px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${Math.min((data.servoCurrent / 20) * 100, 100)}%`,
            background: currentColor,
            borderRadius: '999px',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>
    </div>
  );
}
