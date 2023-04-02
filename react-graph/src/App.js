
import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const pdata = [
  {
    name: 'JavaScript',
    student: 18,
    fees: 10
  },
  {
    name: 'TypeScript',
    student: 18,
    fees: 11
  },
  {
    name: 'Python',
    student: 20,
    fees: 12
  },
  {
    name: 'Ruby',
    student: 25,
    fees: 14
  },
  {
    name: 'C++',
    student: 16,
    fees: 11
  },
  {
    name: 'PHP',
    student: 10,
    fees: 8
  },
  {
    name: 'MATLAB',
    student: 9,
    fees: 12
  },
  {
    name: 'Java',
    student: 16,
    fees: 10
  },
  {
    name: 'SQL',
    student: 17,
    fees: 11
  },
  {
    name: 'C#',
    student: 12,
    fees: 9
  },
  {
    name: 'C language',
    student: 14,
    fees: 10
  },
];

function App() {
  return (
    <>
      <h1 className="chart-heading">Graph</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={50} height={30} margin={{ top: 100, right: 300, left: 200, bottom: 10 }}>
          <CartesianGrid/>
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: '#FF00'}}/>
          <Legend/>
          <Line dataKey="student" stroke="red"/>
          <Line dataKey="fees" stroke="green"/>
        </LineChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Language Curve</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={50} height={30} margin={{ top: 100, right: 300, left: 200, bottom: 10 }}>
          <CartesianGrid/>
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: 'white'}}/>
          <Legend/>
          <Line type="monotone" dataKey="student" stroke="red"/>
          <Line type="monotone" dataKey="fees" stroke="green"/>
        </LineChart>
      </ResponsiveContainer>

    </>
  );
}

export default App;
