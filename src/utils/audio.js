/**
 * Web Audio API synthesized sound generator for traditional Tamil ceremonies.
 * Generates temple bell, scratch sound effects, flower shower fanfare, and ambient Carnatic drone.
 * Works without requiring large external audio assets, and supports custom audio URLs.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isPlayingMusic = false;
    this.bgOscillators = [];
    this.bgGain = null;
    this.musicInterval = null;
    this.externalAudio = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute(override) {
    if (typeof override === 'boolean') {
      this.isMuted = override;
    } else {
      this.isMuted = !this.isMuted;
    }

    if (this.isMuted) {
      if (this.bgGain && this.ctx) {
        this.bgGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
      if (this.externalAudio) {
        this.externalAudio.pause();
      }
    } else {
      if (this.isPlayingMusic) {
        if (this.externalAudio) {
          this.externalAudio.play().catch(() => {});
        } else if (this.bgGain && this.ctx) {
          this.bgGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        }
      }
    }
    return this.isMuted;
  }

  /**
   * Authentic Kovil Mani (Temple Bell) synthesis
   * Combines fundamental frequency and distinct metallic partials with long natural decay
   */
  playTempleBell() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const partials = [
      { freq: 440, gain: 0.5, decay: 3.5 },   // Fundamental strike
      { freq: 880, gain: 0.35, decay: 2.8 },  // Octave
      { freq: 1320, gain: 0.25, decay: 2.2 }, // Minor third overtone
      { freq: 1760, gain: 0.2, decay: 1.8 },  // High harmonic
      { freq: 2640, gain: 0.15, decay: 1.2 }, // Metallic rim chime
      { freq: 3520, gain: 0.08, decay: 0.8 }, // Initial high transient
    ];

    partials.forEach((p) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(p.freq, t);
      // Slight pitch glide simulating brass bell inertia
      osc.frequency.exponentialRampToValueAtTime(p.freq * 0.998, t + p.decay);

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(p.gain * 0.45, t + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + p.decay);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + p.decay);
    });
  }

  /**
   * Soft gold-foil scratch sound
   */
  playScratchSound() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.06; // 60ms noise burst
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200 + Math.random() * 800, t);
      filter.Q.setValueAtTime(3.0, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.055);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(t);
    } catch {
      // Ignore if user has not interacted
    }
  }

  /**
   * Malar Mazhai (Flower shower celebration fanfare)
   */
  playFlowerCelebration() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Auspicious pentatonic Carnatic notes (Sa, Ri2, Ga3, Pa, Dha2, Sa')
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25, 783.99];

    notes.forEach((freq, idx) => {
      const noteTime = t + idx * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0, noteTime);
      gain.gain.linearRampToValueAtTime(0.18, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.85);
    });
  }

  /**
   * Ambient Mangala Vadyam / Carnatic Nadaswaram & Tambura background music
   */
  startMangalaVadyam(customUrl = '') {
    this.isPlayingMusic = true;
    if (this.isMuted) return;
    this.initContext();

    if (customUrl) {
      if (!this.externalAudio) {
        this.externalAudio = new Audio(customUrl);
        this.externalAudio.loop = true;
      }
      this.externalAudio.play().catch(() => {
        this.startSyntheticCarnaticAmbience();
      });
      return;
    }

    this.startSyntheticCarnaticAmbience();
  }

  startSyntheticCarnaticAmbience() {
    if (!this.ctx) return;
    this.stopSyntheticCarnaticAmbience();

    const t = this.ctx.currentTime;
    this.bgGain = this.ctx.createGain();
    this.bgGain.gain.setValueAtTime(0.06, t);
    this.bgGain.connect(this.ctx.destination);

    // Tambura Drone Harmonics (C3: 130.81Hz, G3: 196.00Hz, C4: 261.63Hz)
    const tamburaPitches = [130.81, 196.00, 261.63, 392.00];

    tamburaPitches.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const pGain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t);

      // Low pass filter to give rich warm acoustic tambura resonance
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, t);

      pGain.gain.setValueAtTime(0.04, t);

      osc.connect(filter);
      filter.connect(pGain);
      pGain.connect(this.bgGain);

      osc.start(t);
      this.bgOscillators.push(osc);
    });

    // Gentle meditative Nadaswaram / Flute notes played intermittently (Mohanam raga)
    const ragaNotes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    let noteIdx = 0;

    this.musicInterval = setInterval(() => {
      if (!this.isPlayingMusic || this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      const nOsc = this.ctx.createOscillator();
      const nGain = this.ctx.createGain();

      nOsc.type = 'sine';
      const targetFreq = ragaNotes[noteIdx % ragaNotes.length];
      noteIdx = (noteIdx + Math.floor(Math.random() * 2) + 1) % ragaNotes.length;

      nOsc.frequency.setValueAtTime(targetFreq, now);
      // Delicate Gamakam vibrato
      nOsc.frequency.linearRampToValueAtTime(targetFreq * 1.02, now + 0.6);
      nOsc.frequency.linearRampToValueAtTime(targetFreq, now + 1.2);

      nGain.gain.setValueAtTime(0, now);
      nGain.gain.linearRampToValueAtTime(0.035, now + 0.3);
      nGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      nOsc.connect(nGain);
      nGain.connect(this.bgGain);

      nOsc.start(now);
      nOsc.stop(now + 2.3);
    }, 2400);
  }

  stopSyntheticCarnaticAmbience() {
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
    this.bgOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    this.bgOscillators = [];
  }

  stopMangalaVadyam() {
    this.isPlayingMusic = false;
    this.stopSyntheticCarnaticAmbience();
    if (this.externalAudio) {
      this.externalAudio.pause();
    }
  }
}

export const soundEngine = new SoundEngine();

