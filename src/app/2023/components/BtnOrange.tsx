// import H2 from "../../components/footer"
import Link from 'next/link'

type Props = {
  Text: string
  Href: string,
}
  export default function BtnOrange({Href, Text}:Props) {
      return (
        <div className='flex justify-center'>
          <Link className="p-4 bg-orange-300 shadow justify-center items-center flex w-fit text-center" href={Href}>
            <div className="text-white text-l font-normal font-['Inter']">{Text}</div>
          </Link>
        </div>
      )
  }