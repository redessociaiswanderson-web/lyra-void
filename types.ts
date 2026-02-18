
export enum MessageRole {
  USER = 'user',
  LYRA = 'lyra'
}

export interface Message {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: number;
  isCreateResult?: boolean;
}

export interface LyraCreateResult {
  lyrics: string;
  sunoPrompt: string;
  emotionalContext: string;
  metadata: {
    signalStrength: string;
    emotion: string;
    energy: string;
  };
}

export interface EmotionalState {
  loneliness: number;
  nostalgia: number;
  fragility: number;
  curiosity: number;
  hope: number;
}
