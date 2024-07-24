import Title from "./Title"
import flagImage from '../assets/flag.svg';

function ControlPointsTable() {
  return (
    <div className="border border-border p-4 mt-4 w-full">
      <Title type="medium"> Контрольные точки (контрольные события) </Title>
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <div className="col-span-1 flex flex-col items-center">
          <img src={flagImage} alt="flag" />
          <p className="mt-2 ">07.09.2020</p>
        </div>
        <div className="col-span-2">
          <div className="bg-[#E0E0E0] border-[2px] px-4 py-2 rounded-[8px] border-[#8F8F8F] w-full">
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
      </div>
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <div className="col-span-1 flex flex-col items-center">
        01.10.2020
        </div>
        <div className="col-span-2">
        <div className=" border-[2px] py-2 px-4 rounded-[8px] border-[#00AAA9] max-w-full"> 
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