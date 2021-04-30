import './footer.component.css'

export default function Footer(props) {
    return (
        <div className='footer-wrapper'>
            <div className='footer-section'>
                <i class="fa fa-phone"></i>
                <p className='footer-link'>Toll free 1800 200 1234</p>
            </div>
            <div className='footer-section'>
                <i class="fa fa-facebook-f"></i>
                <p className='footer-link-facebook'>www.facebook.com/cripumps</p>
            </div>
            <div className='footer-section'>
                <i class="fa fa-globe fa-phone"></i>
                <p className='footer-link'>www.crigroup.com</p>
            </div>
        </div>
    )
}