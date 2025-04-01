
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  sender: 'user' | 'jamito';
  text: string;
}

const JamitoChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'jamito',
      text: '¡Hola! Soy Jamito, tu asistente personal para encontrar lugares. ¿Cómo puedo ayudarte hoy? Puedes decirme qué tipo de lugar buscas o cómo te sientes.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const jamitoResponses = [
    '¡Claro! Veo que buscas un lugar para {activity}. ¿Podrías decirme qué presupuesto tienes en mente?',
    'Entiendo, buscas algo {mood}. ¿Prefieres un lugar con ambiente animado o tranquilo?',
    'Basado en lo que me dices, te recomendaría visitar "Café Sereno" o "La Terraza Romántica". ¿Te gustaría ver más detalles sobre alguno de estos lugares?',
    '¿Hay alguna zona específica de la ciudad que prefieras?',
    'Puedo ofrecerte varias opciones que se adaptan a tu estado de ánimo. ¿Te gustaría ver lugares para relajarte o divertirte?'
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate Jamito typing and responding
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * jamitoResponses.length);
      let response = jamitoResponses[randomIndex];
      
      // Simple text replacement to personalize response
      if (input.toLowerCase().includes('trabajar')) {
        response = response.replace('{activity}', 'trabajar');
      } else if (input.toLowerCase().includes('cita') || input.toLowerCase().includes('romántic')) {
        response = response.replace('{activity}', 'una cita romántica');
      } else if (input.toLowerCase().includes('familia')) {
        response = response.replace('{activity}', 'salir en familia');
      } else {
        response = response.replace('{activity}', 'disfrutar');
        response = response.replace('{mood}', 'especial');
      }
      
      const jamitoMessage = {
        id: Date.now().toString(),
        sender: 'jamito',
        text: response
      };
      
      setMessages(prev => [...prev, jamitoMessage]);
      setIsTyping(false);
      
      // Show a toast notification for new recommendation
      if (response.includes('te recomendaría')) {
        toast({
          title: "¡Nuevas recomendaciones!",
          description: "Jamito ha encontrado lugares que podrían gustarte.",
        });
      }
    }, 1500);
  };

  return (
    <Card className="shadow-lg border-jamito-teal/20 transition-all hover:shadow-jamito-teal/10">
      <CardHeader className="bg-gradient-to-r from-jamito-teal/10 to-jamito-purple/10">
        <CardTitle className="flex items-center">
          <MessageCircle className="mr-2 h-5 w-5 text-jamito-teal" />
          Conversa con Jamito
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4 max-h-[340px] overflow-y-auto mb-4 p-2">
          {messages.map(message => (
            <div
              key={message.id}
              className={`p-3 rounded-lg max-w-[80%] animate-fade-in ${
                message.sender === 'user'
                  ? 'bg-jamito-teal/10 ml-auto text-right'
                  : 'bg-jamito-purple/10'
              }`}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="bg-jamito-purple/10 p-3 rounded-lg w-16">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-jamito-purple/50 animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-jamito-purple/50 animate-pulse delay-75"></span>
                <span className="w-2 h-2 rounded-full bg-jamito-purple/50 animate-pulse delay-150"></span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-end gap-2">
          <Textarea
            placeholder="Dile a Jamito qué buscas... (ej. 'Un lugar tranquilo para trabajar')"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="resize-none min-h-[60px] flex-1"
          />
          <Button 
            onClick={handleSendMessage} 
            size="icon" 
            className="h-10 w-10 rounded-full bg-jamito-teal hover:bg-jamito-teal/90"
          >
            <Send size={18} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JamitoChat;
