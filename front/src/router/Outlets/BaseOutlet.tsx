import BaseLayout from '../../shared/layouts/BaseLayout'
import { Outlet } from 'react-router-dom'

const BaseOutlet = () => {
  return (
    <BaseLayout>
        <Outlet />
    </BaseLayout>
  )
}

export default BaseOutlet