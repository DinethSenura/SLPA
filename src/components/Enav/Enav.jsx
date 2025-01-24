import React from 'react'
import '../Enav/enav.css'
import icon1 from '../../assets/images/esystem/berthing.png'
import icon2 from '../../assets/images/esystem/tms.png'
import icon3 from '../../assets/images/esystem/tms.png'
import icon4 from '../../assets/images/esystem/export.png'
import icon5 from '../../assets/images/esystem/ro-ro.png'
import icon7 from '../../assets/images/esystem/fcl.png'
import icon8 from '../../assets/images/esystem/destuff.png'
import icon6 from '../../assets/images/esystem/break-bulk.png'
import icon9 from '../../assets/images/esystem/empty-container.png'
import icon10 from '../../assets/images/esystem/entry-passes.png'
import icon11 from '../../assets/images/esystem/vessels-in-port.png'
import icon14 from '../../assets/images/esystem/hris.png'
import icon12 from '../../assets/images/esystem/clearing-pass.png'
import icon13 from '../../assets/images/esystem/bungalow.png'


const Enav = () => {
  return (
    <div class="custom-box">
        <div className="box-content">
        
        <ul className="link-list">
            <li><a href="#link-1"><img src={icon1} alt="" className="icon"/>BERTHING PROGRAMME</a></li>
            <li><a href="#link-2"><img src={icon2} alt="" className="icon"/>TMS</a></li>
            <li><a href="#link-3"><img src={icon3} alt="" className="icon"/>IMPORT</a></li>
            <li><a href="#link-4"><img src={icon4} alt="" className="icon"/>EXPORT</a></li>
            <li><a href="#link-5"><img src={icon5} alt="" className="icon"/>RO-RO</a></li>
            <li><a href="#link-6"><img src={icon6} alt="" className="icon"/>BULK & BREAK BULK</a></li>
            <li><a href="#link-7"><img src={icon7} alt="" className="icon"/>FCL CUTOFF INFO</a></li>
            <li><a href="#link-8"><img src={icon8} alt="" className="icon"/>DESTUFF INFO</a></li>
            <li><a href="#link-9"><img src={icon9} alt="" className="icon"/>EMPTY CONTAINERS</a></li>
            <li><a href="#link-10"><img src={icon10} alt="" className="icon"/>ONLINE ENTRY PERMITS</a></li>
            <li><a href="#link-11"><img src={icon11} alt="" className="icon"/>VESSELS IN PORT</a></li>
            <li><a href="#link-12"><img src={icon12} alt="" className="icon"/>CLEARING PASSES</a></li>
            <li><a href="#link-13"><img src={icon13} alt="" className="icon"/>BUNGALOW BOOKING</a></li>
            <li><a href="#link-14"><img src={icon14} alt="" className="icon"/>HRIS</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Enav;