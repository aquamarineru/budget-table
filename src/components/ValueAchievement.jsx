import Title from "./Title"
import procentImage from '../assets/procent.svg';
import agreeImage from '../assets/agree.svg';

export default function ValueAchievement() {
  return (
    <div className="border border-border p-4 mt-4 w-full">
      <Title type="medium">Достижение значений результатов</Title>
      <div>
        <div className="flex items-center justify-between mt-4 ">
          <p>Достигнуто значений <br/> результатов, ед.</p>
          <p className="font-bold text-xl text-left">6155 из 10237</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-row justify-between gap-4">
            <img src={procentImage} alt="procent icon" />
            <p> Процент достижения</p>
          </div>
          <p className="font-bold text-xl">71,3%</p>
        </div>
          <div className="flex flex-row gap-4 mt-4">
            <img src={agreeImage} alt="procent icon" />
            <p> Не представлены отчеты, ед.:</p>
          </div>
          <div className="flex items-center justify-between mt-4 ">
            <p>о достижении значений <br/> результатов</p>
            <p className="font-bold text-xl">95 из 435</p>
          </div>
          <div className="flex items-center justify-between mt-4 ">
            <p>об осуществлении <br/> расходов</p>
            <p className="font-bold text-xl">57 из 267</p>
          </div>

        </div>
      
    </div>
  )
}
