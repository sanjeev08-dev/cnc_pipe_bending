export const mockCncData = {
  machineTool: {
    isWarmUp: true,
    powerOnDuration: 36000, // seconds
  },
  cncStatus: {
    runMode: 1, // 1: Auto, 2: MDI, 3: Manual
    runStatus: 2, // 1: Reset, 2: Stop, 3: Hold, 4: Start
    programName: "O1000",
    programPath: "MITSUBISHI CNC/O1000",
    powerOnTime: "10:00:00",
    automaticOperationTime: "04:30:15",
    actualCuttingTime: "03:15:00",
    cycleTime: "00:05:45",
    cumulativeCycleTime: "120:45:30",
    actFeedRate: 1500, // mm/min
    cmdFeedRate: 1500,
    spindleLoad: 45, // %
    spindleRpm: 3000,
    spindleTemp: 65.5, // C
  },
  axes: {
    X: {
      d2g: 10.5,
      machPos: 1250.0,
      progPos: 1260.5,
      servoCurrent: 12.4,
      servoRpm: 1500,
    },
    Y: { // Representing A as well
      d2g: 0.0,
      machPos: -450.5,
      progPos: -450.5,
      servoCurrent: 8.2,
      servoRpm: 500,
    },
    Z: { // Representing B as well
      d2g: 5.2,
      machPos: 800.0,
      progPos: 805.2,
      servoCurrent: 15.6,
      servoRpm: 2000,
    }
  },
  channels: [
    { id: 1, name: "Channel 1", mode: 1, state: 2, feedOverride: 100, rapidOverride: 100 },
    { id: 2, name: "Channel 2", mode: 1, state: 1, feedOverride: 80, rapidOverride: 50 },
    { id: 3, name: "Channel 3", mode: 0, state: 0, feedOverride: 100, rapidOverride: 100 },
  ],
  spindles: [
    { id: 1, name: "Main Spindle", isRotating: true, override: 100 },
    { id: 2, name: "Sub Spindle 1", isRotating: false, override: 100 },
    { id: 3, name: "Sub Spindle 2", isRotating: true, override: 80 },
    { id: 4, name: "Live Tool", isRotating: false, override: 100 },
  ],
  stacklights: [
    { id: 1, color: "Red", signalOn: false, mode: 0 },
    { id: 2, color: "Yellow", signalOn: false, mode: 0 },
    { id: 3, color: "Green", signalOn: true, mode: 1 },
    { id: 4, color: "Blue", signalOn: false, mode: 0 },
    { id: 5, color: "White", signalOn: false, mode: 0 },
  ],
  plc: {
    cumPartCount: 15420
  }
};
