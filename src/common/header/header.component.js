import { BRAND_LOGO } from '../../constants/image.constants'

import './header.component.css'


export default function Header(props) {
    return (
        <div className='header-wrapper'>
            <img 
                src={BRAND_LOGO}
                alt='Brand logo'
                className='brand-logo-header'
            />

        </div>
    )
}