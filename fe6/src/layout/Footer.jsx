import React from 'react'
import "./footer.scss"
function Footer() {
  return (
    <div className='footer'>
<div className='footerBoxes'>
  <div className='footerFirst'>
<div>
<img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
        <h1> COURSE</h1>
</div>
<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
  </div>

  <div className='footerSecond'>
<h1>Menu</h1>
<div className='footerList'>
<p>Home</p>
<p>About Us</p>
<p>Courses</p>
<p>News</p>
<p>Contact</p>
</div>

  </div>

</div>
    </div>
  )
}

export default Footer