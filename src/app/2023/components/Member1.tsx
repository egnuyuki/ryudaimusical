// import H2 from "../../components/footer"
type Props = {
    role: string,
    name: string,
  }
  
  
  export default function Member1 ({role, name}:Props) {
                          
      return (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-sm md:text-xl text-zinc-300">{role}</div>
            <div className="text-white text-xl md:text-3xl">{name}</div>
        </div>
      )
  }
  