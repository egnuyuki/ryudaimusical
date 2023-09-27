// import H2 from "../../components/footer"
type Props = {
  h2J: string,
  h2E: string,
}


export default function H2 ({h2J, h2E}:Props) {
                        
    return (
            <div className="border-b border-blue-400 relative w-full">
                <div className=" text-zinc-800 dark:text-white text-2xl font-normal">{h2J}</div>
                <div className=" absolute bottom-2 left-0 text-blue-50 text-opacity-20 text-4xl font-normal">{h2E}</div>
            </div>
    )
}
