export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  actionablePoints: string;
  createdAt: Date;
  lastUpdated: Date;
  isEditing: boolean;
}

export interface ThemeState {
  isDark: boolean;
}

export interface ChatState {
  sessions: ChatSession[];
  activeChatId: string | null;
  isShortAnswer: boolean;
}