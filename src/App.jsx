import { useEffect, useState } from 'react'
import Card from './components/Card'
import ColumnChart from './components/ColumnChart'
import ControlPointsTable from './components/ControlPointsTable'
import LineCart from './components/LineCart'
import RedeploymentRequests from './components/RedeploymentRequests'
import Table from './components/Table'
import Title from './components/Title'
import ValueAchievement from './components/ValueAchievement'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
 

  return (
    <div className='p-12'>
      <Title type='large' className=''>Структура остатков средств федерального бюджета </Title>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[30px]'>
        <Card />
        <Table data={data.table} />
        <ColumnChart />
        <LineCart />
        <RedeploymentRequests />
        <ControlPointsTable />
        <ValueAchievement />
      </div>
     

    </div>
  )
}

export default App
