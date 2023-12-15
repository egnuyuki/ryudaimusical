// import H2 from "../../components/footer"
type Props = {
    h4J: string,
    // h3E: string,
  }
  
  
  export default function H3 ({h4J}:Props) {
                          
      return (
        <div className="flex items-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-white border-white line-neon-orange"></div>
          <div className="text-white text-xl font-normal md:text-3xl text-neon-orange">{h4J}</div>
        </div>
      )
  }
  