import { AWARD_IMAGE, EQUIP_IMG, PEOPLE_IMG } from '../../constants/image.constants'
import './reward.component.css'

export default function Reward() {
    return (
        <div className='container'>
            <div className='container-wrapper'>
                <div className='left-section'>
                    <img
                        src={AWARD_IMAGE}
                        alt='Brand logo'
                        className='brand-logo'
                    />
                </div>
                <div className='right-section'>
                    <p className='right-section-heading'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                    <div className='reward-img'>
                        <img
                            src={PEOPLE_IMG}
                            alt='Brand logo'
                            className='people-img'
                        />
                    </div>
                    <p className='people-img-title'>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
            <p className='install-text'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <div className='equipment-section'>
                <img
                    src={EQUIP_IMG}
                    alt='Brand logo'
                    className='equipment-img'
                />
                <p className='people-img-title'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <div className='product-text'>
                <p className='product-text-heading'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                {/* <div className='product-list'><p className='product-name'>CHEMICALS & PROCESS</p> <p className='product-name'>POWER</p> <p className='product-name'>WATER & WASTE WATER</p> <p className='product-name'>OILS & GAS </p><p className='product-name'>PHARMA</p><p className='product-name'> SUGARS & DISTILLERIES </p><p className='product-name'>PAPER & PULP</p><p className='product-name'> MARINE & DEFENCE</p> <p className='product-name'> METAL & MINING </p><p className='product-name'>FOOD & BEVERAGE</p><p className='product-name'> PETROCHEMICAL & REFINERIES </p><p className='product-name'>SOLAR</p> <p className='product-name'>BUILDING</p><p className='product-name'> HVAC</p> <p className='product-name'>FIRE FIGHTING </p><p className='product-name'>AGRICULTURE & RESIDENTIAL</p></div> */}
                <p className='chemical-text'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
            </div>
        </div>
    )
}