export class AudioController {
    private audioContext: AudioContext | null = null;
    private voices: SpeechSynthesisVoice[] = [];
    private voicesLoaded: boolean = false;

    // fix: Safari GC bug - keep references alive
    // using window to ensure it persists globally if needed, utilizing a static property here for class-level persistence
    private static activeUtterances: SpeechSynthesisUtterance[] = [];

    constructor() {
        if (typeof window !== 'undefined') {
            this.initAudioContext();
            this.loadVoices();
        }
    }

    private initAudioContext() {
        if (!this.audioContext && (window.AudioContext || (window as any).webkitAudioContext)) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            this.audioContext = new AudioContextClass();
        }
    }

    private loadVoices() {
        const populateVoices = () => {
            this.voices = window.speechSynthesis.getVoices();
            if (this.voices.length > 0) {
                this.voicesLoaded = true;
                console.log("AudioController: Voices loaded", this.voices.length);
            }
        };

        populateVoices();
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.onvoiceschanged = populateVoices;
        }
    }

    public async unlock(): Promise<void> {
        console.log("AudioController: Attempting unlock/resume");

        // Resume AudioContext
        if (this.audioContext && this.audioContext.state === 'suspended') {
            try {
                await this.audioContext.resume();
                console.log("AudioController: AudioContext resumed. State:", this.audioContext.state);
            } catch (err) {
                console.error("AudioController: AudioContext resume failed", err);
            }
        }

        // Trigger empty speech to "warm up" TTS engine on Safari
        // This is often needed to get the synthesizer ready within the user gesture
        if (!this.voicesLoaded) {
            this.loadVoices();
        }
    }

    public speak(text: string, volume: number = 1.0, rate: number = 1.0, pitch: number = 1.0): void {
        if (typeof window === 'undefined' || !window.speechSynthesis) {
            console.warn("AudioController: SpeechSynthesis not supported");
            return;
        }

        // Cancel pending
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = volume;
        utterance.rate = rate;
        utterance.pitch = pitch;

        // Select voice (prefer premium/default)
        if (this.voices.length > 0) {
            // Try to find a good English voice
            const voice = this.voices.find(v => v.name.includes("Samantha") || v.name.includes("Google US English") || v.lang.startsWith("en-US"));
            if (voice) utterance.voice = voice;
        }

        // Fix: Prevent Garbage Collection
        AudioController.activeUtterances.push(utterance);

        utterance.onend = () => {
            // Remove from active array to allow GC after playback
            const index = AudioController.activeUtterances.indexOf(utterance);
            if (index > -1) {
                AudioController.activeUtterances.splice(index, 1);
            }
            console.log("AudioController: Playback finished");
        };

        utterance.onerror = (e) => {
            console.error("AudioController: TTS Error", e);
            const index = AudioController.activeUtterances.indexOf(utterance);
            if (index > -1) {
                AudioController.activeUtterances.splice(index, 1);
            }
        };

        console.log("AudioController: Speaking...", text);
        window.speechSynthesis.speak(utterance);
    }
}

export const audioController = new AudioController();
