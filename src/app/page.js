import React from 'react';
import { mockCncData } from '@/lib/mockData';
import Header from '@/components/Header';
import AxisCard from '@/components/AxisCard';
import SpindleMonitor from '@/components/SpindleMonitor';
import ChannelMonitor from '@/components/ChannelMonitor';
import TimerCard from '@/components/TimerCard';

export const metadata = {
  title: 'CNC Dashboard - ' + mockCncData.cncStatus.programName,
  description: 'Mitsubishi CNC Pipe Bending Dashboard',
};

export default function Dashboard() {
  const data = mockCncData;

  return (
    <main className="dashboard-container">
      <Header data={data} />
      
      <div className="flex-col gap-2" style={{ flex: 1, padding: '0 0.5rem 0.5rem', overflow: 'hidden' }}>
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-2" style={{ flex: 1, minHeight: 0 }}>
          <div className="col-span-3">
            <TimerCard data={data.cncStatus} />
          </div>
          
          <div className="col-span-9 grid grid-cols-3 gap-2">
            <AxisCard axisName="X" data={data.axes.X} />
            <AxisCard axisName="Y (A)" data={data.axes.Y} />
            <AxisCard axisName="Z (B)" data={data.axes.Z} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-2" style={{ flex: 1, minHeight: 0 }}>
          <div className="col-span-8">
            <ChannelMonitor channels={data.channels} />
          </div>
          <div className="col-span-4">
            <SpindleMonitor spindles={data.spindles} mainSpindleData={data.cncStatus} />
          </div>
        </div>
      </div>
    </main>
  );
}
