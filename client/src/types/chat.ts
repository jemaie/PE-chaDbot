export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
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
