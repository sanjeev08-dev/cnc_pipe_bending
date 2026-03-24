import React from 'react';
import { mockCncData } from '@/lib/mockData';
import Header from '@/components/Header';
import AxisCard from '@/components/AxisCard';
import SpindleMonitor from '@/components/SpindleMonitor';
import ChannelMonitor from '@/components/ChannelMonitor';
import TimerCard from '@/components/TimerCard';

export const metadata = {
  title: `CNC Dashboard — ${mockCncData.cncStatus.programName} | FSM`,
  description: 'Mitsubishi CNC Pipe Bending Machine live monitoring dashboard.',
};

export default function Dashboard() {
  const data = mockCncData;

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f0f4f8',
      padding: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}>
      {/* Header */}
      <Header data={data} />

      {/* Top Section: Timers + Axes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '0.5rem',
        flex: 1,
        minHeight: 0,
      }}
        className="top-section"
      >
        <div>
          <TimerCard data={data.cncStatus} />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
        }}>
          <AxisCard axisName="X" data={data.axes.X} />
          <AxisCard axisName="Y (A)" data={data.axes.Y} />
          <AxisCard axisName="Z (B)" data={data.axes.Z} />
        </div>
      </div>

      {/* Bottom Section: Channels + Spindle */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '0.5rem',
        flex: 1,
        minHeight: 0,
      }}
        className="bottom-section"
      >
        <ChannelMonitor channels={data.channels} />
        <SpindleMonitor spindles={data.spindles} mainSpindleData={data.cncStatus} />
      </div>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.25rem 0.65rem',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/fsm_logo.png" alt="FSM" style={{ height: '18px', objectFit: 'contain' }} />
          <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 500 }}>Smart Manufacturing Simplified</span>
        </div>
        <span style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
          Mitsubishi CNC &bull; M800 Series &bull; Live Data
        </span>
        <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>
          v1.0.0 &copy; {new Date().getFullYear()} FSM
        </span>
      </footer>
    </main>
  );
}
