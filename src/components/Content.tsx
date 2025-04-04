import Logo from '@/../public/logo.png';
import Image from 'next/image';
import React from 'react';

const Content: React.FC<{
    contentRef: React.RefObject<HTMLDivElement | null>;
    // titleLinesRef: React.RefObject<(HTMLParagraphElement | null)[]>;
  }> = ({ contentRef }) => (
    <div
      ref={contentRef}
      className="absolute inset-0 bg-black flex flex-col justify-center items-center overflow-hidden text-white"
    >
        <Image
          src={Logo}
          alt="Logo"
          className="w-64 h-64 object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    </div>
  );

export default Content;