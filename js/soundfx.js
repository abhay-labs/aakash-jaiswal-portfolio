/**
 * SOUND FX GENERATOR (Web Audio API)
 * Synthesizes realistic mechanical camera shutter sounds and tactile haptic audio
 * Completely offline, zero dependencies, zero network requests.
 */

class SoundEffectsController {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
    this.volume = 0.25;
  }

  init() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Realistic mechanical SLR / mirrorless shutter click
  playShutter() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const t = this.audioCtx.currentTime;

      // 1. Shutter curtain opening (quick noise burst)
      const bufferSize = this.audioCtx.sampleRate * 0.04; // 40ms
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = this.audioCtx.createBufferSource();
      noise.buffer = buffer;

      // Filter noise to sound like metallic leaf shutter
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2400, t);
      filter.Q.setValueAtTime(3.0, t);

      // Gain envelope
      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(this.volume * 0.8, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);
      noise.start(t);

      // 2. Shutter closing snap (slightly lower pitch & mechanical mirror clack)
      const tClose = t + 0.045;
      const osc = this.audioCtx.createOscillator();
      const oscGain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, tClose);
      osc.frequency.exponentialRampToValueAtTime(60, tClose + 0.05);

      oscGain.gain.setValueAtTime(this.volume * 0.9, tClose);
      oscGain.gain.exponentialRampToValueAtTime(0.001, tClose + 0.05);

      osc.connect(oscGain);
      oscGain.connect(this.audioCtx.destination);

      osc.start(tClose);
      osc.stop(tClose + 0.06);
    } catch (e) {
      console.debug('Audio context not permitted yet or not supported', e);
    }
  }

  // Subtle luxury UI click
  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.03);

      gain.gain.setValueAtTime(this.volume * 0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.035);
    } catch (e) {
      // Audio quiet fallback
    }
  }
}

export const soundFx = new SoundEffectsController();
