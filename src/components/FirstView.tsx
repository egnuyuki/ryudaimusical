import Image from "next/image";

export default function FirstView() {
    return (
        <div className="w-screen md:mt-10">
            <Image
            src="/fv_light.jpg"
            alt="25thImage"
            className="firstview"
            width={1440}
            height={50}
            priority
            />
        </div>
    );
}