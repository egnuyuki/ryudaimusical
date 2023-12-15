// import H2 from "../../components/footer"
type Props = {
  h3J: string,
  // h3E: string,
}


export default function H3 ({h3J}:Props) {
                        
    return (
      <div className="flex justify-center items-center gap-2">
        <div className="w-5 h-[0px] shadow border border-white line-neon-blue"></div>
        <div className="text-white font-normal font-['Figma Hand'] text-neon-blue text-xl md:text-3xl">{h3J}</div>
        <div className="w-5 h-[0px] shadow border border-white line-neon-blue"></div>
      </div>
    )
}
