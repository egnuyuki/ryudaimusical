// import H2 from "../../components/footer"
type Props = {
    role: string,
    name: string,
  }
  
  
  export default function Member2 ({role, name}:Props) {
                          
      return (
        <div className="flex flex-col items-center justify-center gap-1 w-full">
            <div className="text-[8px] md:text-lg text-zinc-300">{role}</div>
            <div className="text-white text-lg md:text-2xl">{name}</div>
        </div>
      )
  }
  