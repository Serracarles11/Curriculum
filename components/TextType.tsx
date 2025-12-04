'use client';

import React, { useEffect, useState } from 'react';

export interface TextTypeProps {
  text: string[];              // frases a escribir
  typingSpeed?: number;        // ms por letra
  pauseDuration?: number;      // pausa entre frases
  deletingSpeed?: number;      // ms por letra al borrar
  loop?: boolean;              // si vuelve a empezar
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 80,
  pauseDuration = 1500,
  deletingSpeed = 40,
  loop = true,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
  style,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);  // índice de la frase actual
  const [displayed, setDisplayed] = useState('');       // texto que se ve
  const [isDeleting, setIsDeleting] = useState(false);  // si está borrando

  useEffect(() => {
    if (!text || text.length === 0) return;

    const currentText = text[currentIndex];
    const isFinishedTyping = !isDeleting && displayed === currentText;
    const isFinishedDeleting = isDeleting && displayed === '';

    let timeout: ReturnType<typeof setTimeout>;

    if (isFinishedTyping) {
      timeout = setTimeout(() => {
        if (deletingSpeed > 0) {
          setIsDeleting(true);
        } else {
          const nextIndex = (currentIndex + 1) % text.length;
          if (!loop && nextIndex === 0) return;
          setCurrentIndex(nextIndex);
        }
      }, pauseDuration);
    } else if (isFinishedDeleting) {
      const nextIndex = (currentIndex + 1) % text.length;
      if (!loop && nextIndex === 0) return;
      setIsDeleting(false);
      timeout = setTimeout(() => {
        setCurrentIndex(nextIndex);
      }, 200);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        const nextLength = displayed.length + (isDeleting ? -1 : 1);
        setDisplayed(currentText.slice(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    currentIndex,
    text,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ]);

  return (
    <span className={className} style={style}>
      {displayed}
      {showCursor && (
        <span className="ml-1 animate-pulse">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
