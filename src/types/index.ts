export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}