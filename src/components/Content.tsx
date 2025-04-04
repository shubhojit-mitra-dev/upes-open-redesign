const Content: React.FC<{
    contentRef: React.RefObject<HTMLDivElement | null>;
    titleLinesRef: React.RefObject<(HTMLParagraphElement | null)[]>;
  }> = ({ contentRef, titleLinesRef }) => (
    <div
      ref={contentRef}
      className="absolute inset-0 bg-black flex flex-col justify-center items-center overflow-hidden text-white px-4"
    >
      {[
        "The greatest glory in living lies",
        "not in never falling,",
        "but in rising every time we fall.",
        "-Elon Musk",
      ].map((line, index) => (
        <p
          key={index}
          ref={(el) => {
            if (el) titleLinesRef.current[index] = el;
          }}
          className="text-center text-lg sm:text-xl md:text-2xl opacity-0 hidden font-medium m-2"
        >
          {line}
        </p>
      ))}
    </div>
  );

export default Content;