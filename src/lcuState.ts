import LCUStateDefaults from './lcuState.json';

declare global {
  interface Window {
    LCU?: {
      State: any;
    };
  }
}

const lcuState = window.LCU?.State || {};

const LCUState = { ...LCUStateDefaults, ...(lcuState || {}) };

export default LCUState;