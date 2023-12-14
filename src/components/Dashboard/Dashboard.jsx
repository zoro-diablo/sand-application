import React from 'react'
import './dashboard.scss'
import SwitchButton from '../SwitchButton/SwitchButton'

const Dashboard = ({position}) => {
  return (
    <div className='dashboard  text-white flex items-center justify-center'>
      <div className='main-container-one bg-[#0a1422] flex items-center justify-center rounded-2xl'>
        <div className='sub-container items-center justify-cente rounded-2xl'>
          <div className='main-square flex-col'>
            <div className='sub-square-one flex text-black'>
              <div className='square-one  w-[50%] h-[550px] grid grid-cols-4'>
                <div className='box-1 row-span-6'>
                  <div className='sub-box-one '>box 1</div>
                </div>
                <div className='box-2 row-span-4 grid'>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='left'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <SwitchButton position='left'/>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='left'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='left'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='left'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='left'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='left'/>
                    </div>
                  </div>
                </div>
                <div className='box-3 grid  row-span-4'>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='right'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <SwitchButton position='right'/>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='right'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='right'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='right'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='right'/>
                    </div>
                  </div>
                  <div className='sub-box-two'>
                    <div className='sub-toggle'>
                      <SwitchButton position='right'/>
                    </div>
                  </div>
                </div>
                <div className='box-4 row-span-4'>
                  <div className='sub-box-three'>box-4</div>
                </div>
                {/* <div className='box-5  col-span-2'>
                  <div className='sub-box-three'>box-5</div>
                </div> */}
                <div className='box-6 bg-gray-900 col-span-3 row-span-2'>
                  <div className='sub-box-three'>box-6</div>
                </div>
              </div>
              <div className='square-two  w-[50%] h-[550px] grid grid-rows- grid-cols-8'>
                <div className='box-1  col-span-2 row-span-2'>
                  <div className='sub-child-1'>box 1</div>
                </div>
                <div className='box-2  col-span-4 row-span-2'>
                  <div className='sub-child-2'>box 2</div>
                </div>
                <div className='box-3  col-span-2 row-span-2'>
                  <div className='sub-child-3'>box 3</div>
                </div>
                <div className='box-4 grid  col-span-3 row-span-6'>
                  <div className='sub-child-4 '>
                    <div className='child-one border '>
                      <div className='sub-atom border-b'>box child 1</div>
                      <div className='sub-atom'>box child 2</div>
                    </div>
                    <div className='child-two border'>
                      <div className='sub-atom border-r'>box child 1</div>
                      <div className='sub-atom'>box child 2</div>
                    </div>
                  </div>
                </div>
                <div className='box-5  col-span-5 row-span-3'>
                  <div className='sub-child-5'>box 5</div>
                </div>
                <div className='box-6  col-span-5 row-span-3'>
                  <div className='sub-child-6'>box 6</div>
                </div>
                <div className='box-7  col-span-5 row-span-3'>
                  <div className='sub-child-7'>box 7</div>
                </div>
                <div className='box-8  col-span-3 row-span-3'>
                  <div className='sub-child-8'>box 8</div>
                </div>
              </div>
            </div>
            <div className='sub-square-two flex items-center justify-center text-black mt-5'>
              <div className='child-square bg-slate-300 w-[100%] h-[60px] flex items-center justify-center rounded-2xl text-center'>
                long-child
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-container-two flex items-center justify-center right-container '>
        <div className='child-one bg-slate-300 rounded-xl text-black '>
          tall-child
        </div>
      </div>
    </div>
  )
}

export default Dashboard
