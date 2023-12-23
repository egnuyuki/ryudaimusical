// import H2 from "../../components/footer"
import Link from 'next/link'

type Props = {
  Text: string
  Href: string,
}
  export default function BtnOrange({Href, Text}:Props) {
      return (
        <div className='flex justify-center'>
          <Link className="p-4 shadow justify-center items-center flex w-fit text-center" href={Href} target='brank'>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-sm hover:translate-y-1 transform transition-all duration-300 text-l font-['Inter']">{Text}</div>
          </Link>
        </div>
      )
  }