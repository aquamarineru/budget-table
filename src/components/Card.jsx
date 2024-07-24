import Title from "./Title"

export default function Card() {
  return (
    <div className="px-4 pb-11 pt-2.5 border-[1px] border-border">
    <Title type='medium'>Казначейское сопровождение БС/МБ</Title>
    <div className="flex items-center justify-between mb-2.5">
      <p className="uppercase font-light mt-11 text-base md:text-lg md:w-[500px] ">СУММА ГОС. (МУНИЦ.) КОНТРАКТОВ (КОНТРАКТОВ) /СОГЛАШЕНИЙ (ДОГОВОРОВ)</p>
      <p className="text-5xl font-bold text-left">857,4</p>
    </div>
    <div className="flex items-center justify-between mb-2.5">
      <p className="lg:w-[500px] text-base md:text-lg w-[200px]">Кол-во гос. (муниц.) контрактов (контрактов)/соглашений (договоров)</p>
      <span className="text-2xl font-bold text-left">6 290</span>
    </div>
    <div className="flex items-center justify-between mb-2.5">
      <p className="text-base md:text-lg  ">Кассовый расход</p>
      <p className="text-2xl font-bold text-left">5,0</p>

    </div>
    <div className="flex items-center justify-between mb-2.5">
      <p className="text-base md:text-lg">На счета в кредитные организации</p>
      <p className="text-2xl font-bold text-left">0,0</p>
    </div>
    <div className="flex items-center justify-between mb-2.5">
      <p className="text-base md:text-lg">Остаток средств</p>
      <p className="text-2xl font-bold text-left">73,1</p>
    </div>
  </div>
  )
}
