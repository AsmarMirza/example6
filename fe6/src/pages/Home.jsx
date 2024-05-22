import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../context/BasketProvider'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../context/WishlistProvider'
import "./home.scss"
function Home() {
    const [products, setProducts] = useState([])
    const {addBasket}=useContext(BasketContext)
    const {addWishlist,isExist}=useContext(WishlistContext)
    useEffect(() => {
        getAllProducts()
    }, [])

    async function getAllProducts(){
        const res=await fetch("http://localhost:3000/example/")
        const data=await res.json()
        setProducts(data)
    }

  return (
    <div>
          <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className='hero'>
<div className='heroText'>
   <div>Get your</div>
   <div className='heroDif'>Education</div>
   <div>today!</div>
</div>
      </section>

      <section className='courses'>
<h1 className='coursesHeading'>Popular Courses</h1>

        <div style={{display:"flex",flexWrap:"wrap",gap:"50px"}}>
{products.map((x)=>(
    
    <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} key={x._id}>
        {isExist(x) ?  <i onClick={()=>addWishlist(x)} className="fa-solid fa-heart"></i>  :<i onClick={()=>addWishlist(x)} className="fa-regular fa-heart"></i>}
        <img style={{width:"100%"}} src={x.image} alt="" />
        <h2>{x.name}</h2>
        <p>{x.description}</p>
        <h4>{x.price}$</h4>
        <button onClick={()=>addBasket(x)}>add basket</button>
        <Link to={`/detail/${x._id}`}>go to detail</Link>
    </div>
))}
        </div>
      </section>

      <section className='main'>
<div className='left'>
<h1 className='mainDif'>Register now and get a discount <span className='mainDiff'>50% </span> discount until 1 January</h1>
<p className='mainText'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
<button className='rightBtn'>Register Now</button>
</div>
<div className='right'>
  <h1 className='mainDif'>Search for your course</h1>
  <div className='mainInput'>

  <input className='mainInp' type="text" placeholder='Course Name' />
  <input className='mainInp' type="text" name="" id="" placeholder='Category' />
  <input className='mainInp' type="text" name="" id="" placeholder='Degree' />
  <button className='inpBtn'>Search Course</button>
  </div>
</div>

      </section>

      <section className='services'>
        

       
<h1 className='servicesHeading'>Our Services</h1>

<div className='serviceBoxes'>
  <div className='serviceBox'>
    <div className='sourceImg'>
      <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
    </div>
<h3 className='serviceHeading'>Online Courses</h3>
<p className='serviceText'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
  </div>


  <div className='serviceBox'>
    <div className='sourceImg'>
      <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/exam.svg" alt="" />
    </div>
<h3 className='serviceHeading'>Indoor Courses</h3>
<p className='serviceText'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
  </div>


  <div className='serviceBox'>
    <div className='sourceImg'>
      <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/books.svg" alt="" />
    </div>
<h3 className='serviceHeading'>Amazing Library</h3>
<p className='serviceText'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
  </div>


  <div className='serviceBox'>
    <div className='sourceImg'>
      <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/professor.svg" alt="" />
    </div>
<h3 className='serviceHeading'>Exceptional Professors</h3>
<p className='serviceText'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
  </div>


  <div className='serviceBox'>
    <div className='sourceImg'>
      <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/blackboard.svg" alt="" />
    </div>
<h3 className='serviceHeading'>Top Programs</h3>
<p className='serviceText'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
  </div>


  <div className='serviceBox'>
    <div className='sourceImg'>
      <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/mortarboard.svg" alt="" />
    </div>
<h3 className='serviceHeading'>Graduate Diploma</h3>
<p className='serviceText'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
  </div>

</div>

      </section>

<section className='events'>
<div className='eventsMain'>
<h1 className='eventsHeading'>Upcoming Events</h1>
<div className='events_'>

  <div  className='eventsLeft'>
<h3 className='eventsBoxHead'>07</h3>
<p className='eventsBoxText'>January</p>
  </div>
  <div className='eventsMiddle'>
<h3 className='middleHead'>Student Festival</h3>
<p className='middleText1'>Grand Central Park</p>
<p className='middleText2'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
  </div>
  <div className='eventsRight'>
<img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp" alt="" />
  </div>
</div>


<div className='events_'>

  <div  className='eventsLeft'>
<h3 className='eventsBoxHead'>07</h3>
<p className='eventsBoxText'>January</p>
  </div>
  <div className='eventsMiddle'>
<h3 className='middleHead'>Open day in the Univesrsity campus</h3>
<p className='middleText1'>Grand Central Park</p>
<p className='middleText2'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
  </div>
  <div className='eventsRight'>
<img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/event_2.jpg.webp" alt="" />
  </div>
</div>



<div className='events_'>

  <div  className='eventsLeft'>
<h3 className='eventsBoxHead'>07</h3>
<p className='eventsBoxText'>January</p>
  </div>
  <div className='eventsMiddle'>
<h3 className='middleHead'>Student Graduation Ceremony</h3>
<p className='middleText1'>Grand Central Park</p>
<p className='middleText2'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
  </div>
  <div className='eventsRight'>
<img style={{width:"100%"}} src="https://preview.colorlib.com/theme/course/images/event_3.jpg.webp" alt="" />
  </div>
</div>

</div>
</section>



    </div>
  )
}

export default Home