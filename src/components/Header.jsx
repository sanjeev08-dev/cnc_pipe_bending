import React from 'react';
import Stacklight from './Stacklight';

export default function Header({ data }) {
  const { cncStatus, plc, stacklights } = data;

  const modeLut = { 1: "AUTO", 2: "MDI", 3: "MANUAL" };
  const statusLut = { 1: "RESET", 2: "STOP", 3: "HOLD", 4: "START" };
  const statusColors = {
    1: "badge-gray",
    2: "badge-red",
    3: "badge-yellow",
    4: "badge-green"
  };

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <header style={{
      display: 'flex',
      alignItems: 'stretch',
      background: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 2px 8px rgba(21,101,192,0.07)',
      overflow: 'hidden',
      minHeight: '60px',
      flexWrap: 'wrap',
    }}>

      {/* Brand Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem 1.25rem',
        background: '#1565C0',
        borderRight: '1px solid rgba(255,255,255,0.15)',
        minWidth: '200px',
        flexShrink: 0,
      }}>
        <img
          src="/fsm_logo.png"
          alt="FSM Logo"
          style={{ height: '34px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
        />
        <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.25)' }} />
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.06em', lineHeight: 1.2 }}>
            CNC PIPE BENDING
          </div>
          <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.04em', marginTop: '1px' }}>
            INFO DISPLAY SYSTEM
          </div>
        </div>
      </div>

      {/* Program Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0.5rem 1.25rem',
        borderRight: '1px solid #e2e8f0',
        flexShrink: 0,
      }}>
        <div>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block' }}>
            Active Program
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.95rem', fontWeight: 700, color: '#1565C0', display: 'block', marginTop: '2px' }}>
            {cncStatus.programName}
          </span>
        </div>
        <div style={{ width: '1px', height: '28px', background: '#e2e8f0' }} />
        <div>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block' }}>
            Part Count
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.95rem', fontWeight: 700, color: '#1565C0', display: 'block', marginTop: '2px' }}>
            {plc.cumPartCount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Feed Rate */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0.5rem 1.25rem',
        borderRight: '1px solid #e2e8f0',
        flexShrink: 0,
      }}>
        <div>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block' }}>
            Feed Rate (mm/min)
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '2px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8' }}>
              CMD {cncStatus.cmdFeedRate}
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.95rem', fontWeight: 700, color: '#d97706' }}>
              ACT {cncStatus.actFeedRate}
            </span>
          </div>
        </div>
      </div>

      {/* Mode & Status */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.5rem 1.25rem',
        borderRight: '1px solid #e2e8f0',
        flexShrink: 0,
      }}>
        <div>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block' }}>
            Op Mode
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 700, color: '#1a202c', display: 'block', marginTop: '2px' }}>
            {modeLut[cncStatus.runMode] || 'UNKNOWN'}
          </span>
        </div>
        <div>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: '3px' }}>
            Machine Status
          </span>
          <span className={`badge ${statusColors[cncStatus.runStatus] || 'badge-gray'}`} style={{ fontSize: '0.65rem', padding: '0.2rem 0.65rem' }}>
            {statusLut[cncStatus.runStatus] || 'UNKNOWN'}
          </span>
        </div>
      </div>

      {/* Clock */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem 1.25rem',
        borderRight: '1px solid #e2e8f0',
        flexShrink: 0,
      }}>
        <div>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block' }}>
            {dateStr}
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 700, color: '#1a202c', display: 'block', marginTop: '2px' }}>
            {timeStr}
          </span>
        </div>
      </div>

      {/* Stacklight */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        marginLeft: 'auto',
        gap: '0.5rem',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          Signal
        </span>
        <Stacklight stacklights={stacklights} />
      </div>

    </header>
  );
}
