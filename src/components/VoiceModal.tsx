import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Mic, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTranscription: (text: string) => void;
}

export const VoiceModal: React.FC<VoiceModalProps> = ({
  isOpen,
  onClose,
  onTranscription,
}) => {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (isOpen && 'webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');
        setTranscript(transcript);
      };

      recognition.start();

      return () => {
        recognition.stop();
      };
    }
  }, [isOpen]);

  const handleConfirm = () => {
    onTranscription(transcript);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 w-[90vw] max-w-md shadow-xl">
          <div className="relative">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Voice Input
            </Dialog.Title>
            <Dialog.Close className="absolute top-0 right-0">
              <X className="w-5 h-5" />
            </Dialog.Close>
            
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="p-4 bg-indigo-100 rounded-full"
              >
                <Mic className="w-8 h-8 text-indigo-600" />
              </motion.div>
              
              <div className="w-full min-h-[100px] p-4 bg-gray-50 rounded-lg">
                {transcript || "Listening..."}
              </div>

              <button
                onClick={handleConfirm}
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};