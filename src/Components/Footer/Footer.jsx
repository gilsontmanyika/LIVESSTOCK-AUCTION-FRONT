import React from 'react'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer'> 
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">


          {/*Single grid */}
          <div className="singleGrid">
            <span className="footerTitle">
              About
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                How it works
              </li>
              <li className="footerLi">
                Help Centeer
              </li>
              <li className="footerLi">
                Trust and Safety
              </li>
            </ul>
          </div>


        </div>

        {/*Footer lower section */}
        <div className="lowerSection grid">
        <p>
          2024 All rights reserved <a href="mailto:h190334n@hit.ac.zw">h190334n@hit.ac.zw</a>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Footer
