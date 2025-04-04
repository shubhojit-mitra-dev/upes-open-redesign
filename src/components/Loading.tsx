import Logo from '@/../public/logo.png';
import Image from 'next/image';

const Loading: React.FC<{
    counter: number;
    followRef: React.RefObject<HTMLDivElement | null>;
    progressBarRef: React.RefObject<HTMLDivElement | null>;
    countRef: React.RefObject<HTMLParagraphElement | null>;
    logoRef: React.RefObject<HTMLDivElement | null>; // New prop for logo ref
}> = ({ counter, followRef, progressBarRef, countRef, logoRef }) => (
    <div className="absolute inset-0 bg-black flex flex-col justify-center items-center overflow-hidden">
        <div
            ref={followRef}
            className="absolute bg-primary h-0.5 left-0 z-10"
        ></div>
        <div
            ref={progressBarRef}
            className="absolute left-0 bg-primary h-0.5 transition-all ease-out"
            style={{ width: `${counter}%` }}
        ></div>
        <div
            ref={logoRef}
            className="absolute bottom-4 right-4 flex items-center justify-center"
        >
            <Image
                src={Logo}
                alt="Logo"
                className="w-36 h-36 object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <p
                ref={countRef}
                className="text-primary font-mono text-7xl font-bold px-5"
            >
                {counter}%
            </p>
        </div>
    </div>
);

export default Loading;