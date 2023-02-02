import React,{useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';

const Projectdesk = (props) => {
    const [imgs, setimgs] = useState(0)
    const forwardimg = ()=>{
      if((imgs+1) === props.img.length ){
        setimgs(0);
      }
      else{
        setimgs(imgs+1);
      }
    }
    const backwardimg = ()=>{
      if(imgs === 0){
        setimgs(props.img.length - 1);
      }
      else{
        setimgs(imgs-1);
      }
    }
  return (
    <div>
        <div className="bgback my-5 rounded-lg py-3">
          <div className='lg:flex clasna text-white'>
            
          <div className='lg:w-3/5 wclass lg:my-auto justify-center mx-auto'>
                <div className='divimg p-3 rounded-lg inline-block md:mx-10 mx-3'>
                    <img src={`/${props.img[imgs]}`} alt="" className='imgw block rounded-lg'/>
                    <hr className='border-yellow-500 border-2'/>
                    <div className='flex justify-between'>
                      <div className='cursor-pointer arrowbtn p-2 rounded-3xl' onClick={backwardimg}>
                        <ArrowBackIosIcon/>
                      </div>
                      <div className='arrowbtn p-2 rounded-xl'>
                            <span className='text-xl'>{imgs+1} / {props.img.length}</span>
                      </div>
                      <div className='cursor-pointer arrowbtn p-2 rounded-3xl' onClick={forwardimg}>
                        <ArrowForwardIosIcon/>
                      </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/5 wclass p-7 px-10'>
              <div>
                <h1 className='text-center font'>{props.title}</h1>
              </div>
              <hr />
              <div>
                <p className='text-2xl font lg:mx-4'>{props.desc}</p>
                <div className='lanicon h-14 rounded-xl flex justify-around items-center'>

                { (props.lang).map((itm,num)=>{ 
                  return( <div className='' key={num}>
                      <img src={`/${itm}`} alt="" width={50}/>
                    </div> )
                    })
                  } 
                </div>
              </div>
              <div></div>
              <hr />
              <h1 className='text-3xl namec font text-center'>Relevant Links</h1>
              <div className='mt-3 justify-center text-center'>
              <Button className='hoverbtn text-white font mb-2 fontw mx-3' variant="outlined">Demo</Button>
              <Button className='hoverbtn text-white mb-2 font fontw' variant="outlined">GitHub</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projectdesk