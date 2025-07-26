import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const DNAChart = ({ data, className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid 
            stroke="#e2e8f0" 
            strokeWidth={1}
            className="opacity-60"
          />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ 
              fontSize: 12, 
              fontWeight: 500,
              fill: '#64748b'
            }}
            className="text-slate-600"
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]}
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            tickCount={5}
          />
          <Radar
            name="DNA Profile"
            dataKey="value"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.2}
            strokeWidth={3}
            dot={{ 
              r: 6, 
              fill: '#3b82f6',
              stroke: '#ffffff',
              strokeWidth: 2
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DNAChart;

