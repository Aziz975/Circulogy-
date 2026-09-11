import React from 'react'

const Footer = () => {
  return (
       <footer className="h-[90px] bg-[#151515] text-white lg:h-[800px]" >
        <div
          className="mx-auto flex h-full ">
          
          <div className='flex mt-15 gap-30' >
              {/* //left part  */}
             <div className='ml-55 '>
          
              <h1 className='text-6xl font-bold'>Be part of the <br /><span className='inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-green-500'>circular</span> <br /> Movement</h1>
             

             <div className='flex gap-30 mt-20' >
              <div className='font-bold'>QUICK LINKS
                
               <div className='flex flex-col text-gray-400 '>             
                <a href='#'>Services</a>
                <a href='#'>Home</a>
                <a href='#'>Technology</a>
                <a href='#' >Resources</a>
                <a href='#'>Pledge</a>
                <a href='#'>Career</a>
                <a href='#'>About Us</a>
              </div>            
              </div>
              <div className=''>SOLUTIONS
                <div className='flex flex-col text-gray-400'>                <a>Services</a>
                <a href='#'>For OEMs</a>
                <a href='#'>For Importers</a>
                <a href='#' >For Brand Owners</a>
                <a href='#'>For Recylers</a>
                <a href='#'>For Refurbishers</a>
              
              </div>      
                

               
              </div>
              <div className=''>POLICIES
                <div className='flex flex-col text-gray-400'>                <a>Services</a>
                <a href='#'>Terms and Conditions</a>
                <a href='#'>Privacy Policy</a>
                <a href='#' >Disclaimer</a>
                <a href='#'>Contact Us</a>
         
              </div>      
                
              </div>
             </div>
             </div>

             {/* //right part */}
             <div className='flex flex-col gap-20'>
              <div className='mt-20' >
              <span className='inline-flex text-2xl items-center justify-center rounded-full bg-green-500 px-14 py-4 text-white'>Partner with circulogy</span> 
              </div>

              <div className='flex flex-col gap-10 border-1 border border-gray-200 rounded-xl mt-12 p-4  '>
             <h1 className='text-2xl'>Circulogy</h1>
             <p className=' h-[50px] w-[300px] text-gray-400'>
              At Circulogy, we empower recyclers and
               buyers with a transparent, trusted marketplace 
               designed to maximize value and foster growth.
             </p>
             <p>
            +91451554662
             </p>
             <p>support@circulogy.com</p>
              </div>
             </div>
          </div>
           

          </div>
      </footer>
  )
}

export default Footer
