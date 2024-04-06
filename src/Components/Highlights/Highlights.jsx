import React from 'react'
import './Highlights.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import  image1 from '../../assets/image1.png'


 
const Highlights = () => {
  return (
    <div className='highlights section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            HIGHLIGHTS
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className='cattleContainer grid twoColumn' >
         
          {/*single cattle Div*/}
          <div className="singleCattle grid" >
            <div className="imgDiv" >
              <img src={image1} alt="Cattle Image" />
            </div>

            <div className="theText">
             <h5 className='breed' >
              Black Angus Cattle
             </h5>
             <span className='age' >
              3years
             </span>
             <span className='location' >
              Hurungwe
             </span>

             <div className="priceBid flex" >
              <span className='price' >
                $200
              </span>
              <span className='bid' >
                BID NOW
              </span>
            </div>
          </div>
        </div>

        {/*single cattle Div*/}
        <div className="singleCattle grid" >
            <div className="imgDiv" >
              <img src={image1} alt="Cattle Image" />
            </div>

            <div className="theText">
             <h5 className='breed' >
              Black Angus Cattle
             </h5>
             <span className='age' >
              3years
             </span>
             <span className='location' >
              Hurungwe
             </span>

             <div className="priceBid flex" >
              <span className='price' >
                $200
              </span>
              <span className='bid' >
                BID NOW
              </span>
            </div>
          </div>
        </div>

        {/*single cattle Div*/}
        <div className="singleCattle grid" >
            <div className="imgDiv" >
              <img src={image1} alt="Cattle Image" />
            </div>

            <div className="theText">
             <h5 className='breed' >
              Black Angus Cattle
             </h5>
             <span className='age' >
              3years
             </span>
             <span className='location' >
              Hurungwe
             </span>

             <div className="priceBid flex" >
              <span className='price' >
                $200
              </span>
              <span className='bid' >
                BID NOW
              </span>
            </div>
          </div>
        </div>

        {/*single cattle Div*/}
        <div className="singleCattle grid" >
            <div className="imgDiv" >
              <img src={image1} alt="Cattle Image" />
            </div>

            <div className="theText">
             <h5 className='breed' >
              Black Angus Cattle
             </h5>
             <span className='age' >
              3years
             </span>
             <span className='location' >
              Hurungwe
             </span>

              <div className="priceBid flex" >
               <span className='price' >
                $200
               </span>
               <span className='bid' >
                BID NOW
               </span>
              </div>
          </div>
        </div>

      </div>
     </div>
    </div>
  )
}
export default Highlights
