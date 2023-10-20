import Image from "next/image";


type Props = {
    src: string,
    srcM: string,
    alt: string
  }

export default function FirstView({src, srcM, alt}:Props) {
    return (
        <div className="w-screen flex justify-center items-center">
            <Image
            src={src}
            alt={alt}
            className="w-full hidden md:block"
            width={1440}
            height={50}
            priority
            />
            <Image
            src={srcM}
            alt={alt}
            className="w-full block md:hidden"
            width={1440}
            height={50}
            priority
            />
        </div>
    );
}