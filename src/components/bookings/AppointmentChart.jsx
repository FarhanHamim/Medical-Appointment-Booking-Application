import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
  } from 'recharts';
  
  const AppointmentChart = ({ appointments }) => {
    const chartData = appointments.map(app => ({
      name: `Dr. ${app.name}`,
      fee: app.fee,
      color: getRandomColor(app.name) // Generate a consistent color based on doctor name
    }));
    
    function getRandomColor(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      
      const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
      const index = Math.abs(hash) % colors.length;
      return colors[index];
    }
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Appointment Fees Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Fee']}
                contentStyle={{ borderRadius: '6px' }}
              />
              <Bar 
                dataKey="fee" 
                radius={[6, 6, 0, 0]}
                barSize={60}
                fill="#8884d8"
                fillOpacity={0.9}
              >
                {
                  chartData.map((entry, index) => (
                    <Bar key={`bar-${index}`} fill={entry.color} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default AppointmentChart;