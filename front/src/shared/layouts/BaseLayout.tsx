import { type ReactElement } from 'react'
import Navbar from '../components/Navbar'

const BaseLayout = ({children}:{children:ReactElement}) => {
  return (
    <>
        <div>
            <div className='relative h-16'>
              <Navbar />
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-10'>
              {children}
            </div>
        </div>
    </>
  )
}

export default BaseLayout