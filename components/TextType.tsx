'use client';
import { useEffect, useState } from 'react';

export default function TextType({ text }: { text: string[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = text[index];
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(full.slice(0, display.length + 1));
        if (display === full) setDel(true);
      } else {
        setDisplay(full.slice(0, display.length - 1));
        if (!display) {
          setDel(false);
          setIndex((i) => (i + 1) % text.length);
        }
      }
    }, del ? 40 : 80);

    return () => clearTimeout(t);
  }, [display, del, index, text]);

  return <span>{display}|</span>;
}
