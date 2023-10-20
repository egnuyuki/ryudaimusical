import Image from "next/image";


type Props = {
    src: string,
    alt: string
  }

export default function FirstView({src, alt}:Props) {
    return (
        <div className="w-screen flex justify-center items-center">
            <Image
            src={src}
            alt={alt}
            className="w-full"
            width={1440}
            height={50}
            priority
            />
        </div>
    );
}