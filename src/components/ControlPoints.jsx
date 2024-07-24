import Title from "./Title"
import flagImage from '../assets/flag.svg';

function ControlPointsTable() {
  return (
    <div className="border border-border p-4 mt-4 w-full">
      <Title type="medium"> Контрольные точки (контрольные события) </Title>
      <div className="relative mt-6 ml-4">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center relative">
            <div className="absolute -left-3 ">
              <img src={flagImage} alt="flag" className="ml-1"/>
              <div className=" w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
            </div>
            <p className="mt-2 ">07.09.2020</p>
          </div>
          <div className="bg-[#E0E0E0] border-[2px] px-4 py-2 rounded-[8px] border-[#8F8F8F] max-w-full w-[272px]"> 
            <div className="flex items-center justify-between font-bold mb-2">
              <p>% исполнения</p>
              <p>68,7%</p>
            </div>
            <div className="border-[2px] rounded-[6px] border-red p-4">
                 25 ГРБС из 30 не достигли <br />
                целевого значения
             </div>
          </div>
        </div>

        <div className="flex justify-around items-center mt-4">
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-start relative">
              <div className="absolute w-2 h-2 bg-[#00AAA9] rounded-full left-0 "></div>
            </div>
            <div className="horizontal-line absolute bg-[#00AAA9]"></div>
            <p className="mt-2">01.10.2020</p>
          </div>
          <div className=" border-[2px] py-2 px-4 rounded-[8px] border-[#00AAA9] max-w-full w-[270px]"> 
            <div className="flex items-center mb-2">
              <p>Контрольная точка <br /> «Исполнение бюджета <br /> на 75%»</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ControlPointsTable