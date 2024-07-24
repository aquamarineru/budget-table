import { useState } from 'react';

const Table = ({ data }) => {
  const [activeRow, setActiveRow] = useState(null);

  const handleRowClick = (index) => {
    setActiveRow(index);
  };

  return (
    <div className="w-full overflow-x-auto m-0">
      <table className="min-w-[640px] border-separate border-spacing-0 table-auto md:w-full lg:w-full">
        <thead className="">
          <tr className="bg-table text-tableText">
            <th className="border-t border-b border-r border-white font-light p-2">Код строки</th>
            <th className="border-t border-b border-r border-white font-light">Наименование показателя</th>
            <th className="border-t border-b border-r border-white font-light">Значение</th>
            <th className="border-t border-b border-r border-white font-light">Процент</th>
          </tr>
          <tr className="bg-tableLight text-tableText">
            <th className="border-t border-b border-r border-white font-light p-2" scope="col">1</th>
            <th className="border-t border-b border-r border-white font-light" scope="col">2</th>
            <th className="border-t border-b border-r border-white font-light" scope="col">3</th>
            <th className="border-t border-b border-r border-white font-light" scope="col">4</th>
          </tr>
        </thead>
        <tbody  className="">
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(index)}
              className={`${
                activeRow === index ? 'bg-[#2177B7] text-white' : 'odd:bg-white even:bg-[#F7F7F7] hover:bg-hover hover:cursor-pointer'
              }`}
            >
              <td className="border-b border-r border-white p-2">{row.code}</td>
              <td className="border-b border-r border-white p-2">{row.name}</td>
              <td
                className={`border-b border-r border-white p-2 text-end ${
                  activeRow === index ? 'bg-[#2177B7] text-white' : 'bg-tableValue'
                }`}
              >
                {row.value}
              </td>
              <td
                className={`border-b border-r border-white p-2 text-end italic ${
                  activeRow === index ? 'text-[#FD9800]' : row.trend === 'up' ? 'text-green' : row.trend === 'down' ? 'text-red' : ''
                }`}
              >
                {row.percentage}
                <span className={`not-italic ${
                  activeRow === index ? 'text-[#FD9800]' : row.trend === 'up' ? 'text-green ' : row.trend === 'down' ? 'text-red' : ''
                }`}>
                  {row.trend === 'up' ? ' ↑' : row.trend === 'down' ? ' ↓' : ''}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
