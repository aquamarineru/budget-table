import Title from './Title';
import vectorImage from '../assets/Vector.svg';
import groupImage from '../assets/Group.svg';

export default function RedeploymentRequests() {
  return (
    <div className="border border-border p-4 mt-4 relative overflow-x-auto w-full">
      <Title type="medium" className="mt-8">
        Запросы на перераспределение
      </Title>
      <div className="flex justify-end items-center mt-2 gap-2 absolute right-2">
        <p className="text-sm text-gray-600 text-end mr-4 break-words">Документы на изменении / <br /> из них просрочено, ед.</p>
        <p className="text-sm text-gray-600 text-end w-[150px]">Суммы изменений / <br /> из них просрочено согласование, млн ₽</p>
      </div>
      
      <div className="mt-4">
        <Title type="medium">ВСЕГО</Title>
        <p className="text-sm text-gray-600 mt-1">из них:</p>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex flex-col mt-2 items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <img src={vectorImage} alt="vector" className="w-10 h-10 md:w-16 md:h-16" />
            <p className="text-sm text-gray-600 mr-2">на межведомственном согласовании</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={groupImage} alt="vector" className="w-10 h-10 md:w-16 md:h-16" />
            <p className="text-sm text-gray-600 mr-2 break-words">в координационных органах</p>
          </div>

        </div>
        <div className="flex items-center justify-between ">
        <div className='flex flex-col items-center font-bold text-base md:text-xl  md:gap-8 w-[100px]'>
          <div className='flex items-center flex-col md:flex-row'>
            <p>142 /</p>
            <p className='text-red'>31</p>
          </div>
          <div className='flex items-center flex-col md:flex-row'>
            <p>424 /</p>
            <p className='text-red'>35</p>
          </div>
          
        </div>
        <div className='flex flex-col items-center font-bold text-base md:text-xl md:gap-8 w-[100px] md:w-[150px]'>
          <div className='flex items-center flex-col md:flex-row'>
            <p >1 254,5 /</p>
            <p className='text-red'>1 127,3</p>
          </div>
          <div className='flex items-center flex-col md:flex-row'>
            <p>3 745,5 / </p>
  
            <p className='text-red'>1 972,7</p>
          </div>
          
        </div>
        </div>
        
      </div>
    </div>
  );
}
