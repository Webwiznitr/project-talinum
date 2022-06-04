import React from 'react'
import {Spring,animated} from 'react-spring'
export default function BannerHead({text1,text2}) {
  return (
    <div className="  min-h-[420px] py-[100px] px-[3%] bg-[#f5fbfc] ">
    <Spring 
            from={{y:200}}
            to={{y:100}}
            config={{duration:1000 }}
        >
            {props=>(
                <animated.div style={props} className="flex justify-center items-center">
                    <img src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa308a576b613_YumYum.png" alt="" className='absolute w-full max-w-[500px]'/>
                </animated.div>
                
            )}
    </Spring>
    <Spring 
            from={{opacity:0,y:120}}
            to={{opacity:1,y:30}}
            config={{duration:800 }}
        >
            {props=>(
                <animated.div style={props} className="flex justify-center items-center">
                <div className='relative flex flex-col max-w-[670px] m-auto justify-center items-center text-center'>
                        <h1 className='mt-[20px] mb-[10px] md:text-[60px] lg:text-[60px] text-[50px] tracking-[-0.03em] font-bold block leading-none text-[#191b22] '> {text1} <span className='text-[#35b8be]'>{text2}</span>
                        </h1>
                  </div>
                </animated.div>
                
            )}
    </Spring>
    </div>
  )
}

