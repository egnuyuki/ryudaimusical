import FadingInOnScroll from "./FadingInOnScroll"

// import H2 from "../../components/footer"
type Props = {
  h2J: string,
}


export default function H2 ({h2J}:Props) {
                        
    return (
      <FadingInOnScroll>
        <div className="text-white text-4xl md:text-6xl font-bold font-h2 text-neon-blue mb-6">{h2J}</div>
      </FadingInOnScroll>
    )
}
