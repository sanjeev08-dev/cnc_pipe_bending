import React from 'react';
import Stacklight from './Stacklight';

export default function Header({ data }) {
  const { cncStatus, plc, stacklights } = data;

  const modeLut = { 1: "AUTO", 2: "MDI", 3: "MANUAL" };
  const statusLut = { 1: "RESET", 2: "STOP", 3: "HOLD", 4: "START" };
  const statusColors = { 1: "badge-gray", 2: "badge-red", 3: "badge-yellow", 4: "badge-green" };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-header)', borderBottom: '2px solid var(--accent-cyan)' }}>
      {/* Brand Section */}
      <div className="flex items-center gap-4" style={{ padding: '0.5rem 1rem', background: '#e0e0e0' }}>
        <img src="/fsm_logo.png" alt="FSM Logo" style={{ height: '40px', objectFit: 'contain' }} />
        <div style={{ width: '1px', height: '40px', backgroundColor: '#9e9e9e' }}></div>
        <div>
          <h1 style={{ fontSize: '1.25rem', color: '#121212', marginBottom: 0, letterSpacing: '0' }}>CNC PIPE BENDING</h1>
          <div style={{ fontSize: '0.75rem', color: '#424242', fontWeight: 600 }}>
            INFO DISP SYS
          </div>
        </div>
      </div>
      
      {/* Middle Info */}
      <div className="flex items-center gap-4" style={{ padding: '0.5rem 1rem', flex: 1 }}>
        <div className="flex-col">
          <span className="text-label">Active Program</span>
          <span className="text-value-sm" style={{ color: '#fff' }}>{cncStatus.programName}</span>
        </div>
        <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--border-color)' }}></div>
        <div className="flex-col">
          <span className="text-label">Part Count</span>
          <span className="text-value-sm" style={{ color: 'var(--accent-cyan)' }}>{plc.cumPartCount}</span>
        </div>
      </div>

      {/* Status & Lights */}
      <div className="flex items-center gap-6" style={{ padding: '0.5rem 1rem', borderLeft: '1px solid var(--border-color)' }}>
        <div className="flex items-center gap-4">
          <div className="flex-col pb-1">
            <span className="text-label">Op Mode</span>
            <span className="text-value-sm" style={{ color: '#fff' }}>[{modeLut[cncStatus.runMode] || "UNKNOWN"}]</span>
          </div>
          <div className="flex-col pb-1">
            <span className="text-label">Machine Status</span>
            <span className={`badge ${statusColors[cncStatus.runStatus] || 'badge-gray'}`} style={{ marginTop: '0.2rem', padding: '0.25rem 0.75rem' }}>
              {statusLut[cncStatus.runStatus] || "UNKNOWN"}
            </span>
          </div>
        </div>
        <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-color)' }}></div>
        <Stacklight stacklights={stacklights} />
      </div>
    </div>
  );
}
