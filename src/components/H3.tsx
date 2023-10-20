// import H2 from "../../components/footer"
type Props = {
  h3J: string,
  // h3E: string,
}


export default function H3 ({h3J}:Props) {
                        
    return (
            <div className="relative w-full mt-10 mb-4 rounded-full dark:border-slate-800">
                <div className=" text-zinc-800 dark:text-white text-2xl font-normal p-3 shadow-md rounded-full bg-slate-50 dark:bg-slate-950">{h3J}</div>
                {/* <div className=" absolute bottom-2 left-0 text-blue-300 text-opacity-20 text-4xl font-normal">{h2E}</div> */}
            </div>
    )
}
