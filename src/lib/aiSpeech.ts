export type SpeechRecognitionConfig = {
  lang?: string;
  onStart?: () => void;
  onResult?: (transcript: string) => void;
  onError?: (error: string) => void;
  onPermissionDenied?: () => void;
  onEnd?: () => void;
};

export type SpeechRecognitionController = {
  supported: boolean;
  start: () => void;
  stop: () => void;
};

export type SpeechSynthConfig = {
  lang?: string;
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
};

export type SpeechSynthController = {
  speak: (text: string) => boolean;
  cancel: () => void;
};

export const createSpeechRecognition = (
  config: SpeechRecognitionConfig
): SpeechRecognitionController => {
  const SpeechRecognitionCtor =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognitionCtor) {
    return {
      supported: false,
      start: () => {},
      stop: () => {}
    };
  }

  const recognition = new SpeechRecognitionCtor();
  recognition.lang = config.lang ?? "es-ES";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => config.onStart?.();

  recognition.onresult = (event: any) => {
    const transcript = event?.results?.[0]?.[0]?.transcript;
    if (typeof transcript === "string") {
      config.onResult?.(transcript);
    }
  };

  recognition.onerror = (event: any) => {
    const error = event?.error ?? "unknown";
    if (error === "not-allowed" || error === "service-not-allowed") {
      config.onPermissionDenied?.();
    }
    config.onError?.(error);
  };

  recognition.onend = () => config.onEnd?.();

  return {
    supported: true,
    start: () => recognition.start(),
    stop: () => recognition.stop()
  };
};

export const createSpeechSynth = (
  config: SpeechSynthConfig
): SpeechSynthController => {
  let preferredVoice: SpeechSynthesisVoice | null = null;

  const selectPreferredVoice = () => {
    if (!window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices();
    preferredVoice =
      voices.find(
        (voice) =>
          voice.lang.includes("es") &&
          (voice.name.includes("Natural") || voice.name.includes("Google"))
      ) || voices.find((voice) => voice.lang.includes("es")) || null;
  };

  if (
    window.speechSynthesis &&
    window.speechSynthesis.onvoiceschanged !== undefined
  ) {
    window.speechSynthesis.onvoiceschanged = selectPreferredVoice;
  }

  selectPreferredVoice();

  const cancel = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  const speak = (text: string) => {
    if (!window.speechSynthesis) return false;

    cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = config.lang ?? "es-ES";
    utterance.rate = config.rate ?? 1;
    utterance.pitch = config.pitch ?? 1;

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => config.onStart?.();
    utterance.onend = () => config.onEnd?.();
    utterance.onerror = () => config.onError?.();

    window.speechSynthesis.speak(utterance);
    return true;
  };

  return { speak, cancel };
};
