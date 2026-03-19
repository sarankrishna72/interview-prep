import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CyborgSoundService {
  private audioCtx: AudioContext | null = null;

  private getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      this.audioCtx = new AudioContext();
    }
    return this.audioCtx;
  }

  async initAudio(): Promise<void> {
    const ctx = this.getAudioContext();
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
  }

  private async playTone(
    freq: number,
    start: number,
    duration: number,
    type: OscillatorType = 'sine',
    volume = 0.03
  ): Promise<void> {
    const ctx = this.getAudioContext();

    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);

    gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + duration + 0.02);
  }

  async playWrongSound(): Promise<void> {
    await this.playTone(180, 0, 0.2, 'sawtooth');
    await this.playTone(120, 0.15, 0.25, 'sawtooth');
  }

  async playCorrectSound(): Promise<void> {
    await this.playTone(600, 0, 0.15, 'sine');
    await this.playTone(800, 0.15, 0.2, 'sine');
  }
  

}
