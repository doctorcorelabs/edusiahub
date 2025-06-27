import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface ChartProps {
  title: string;
  data: ChartData[];
  type?: 'bar' | 'pie' | 'line';
  height?: number;
}

const Chart: React.FC<ChartProps> = ({ title, data, type = 'bar', height = 200 }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  if (type === 'bar') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4" style={{ height }}>
            {data.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-gray-500">{item.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${(item.value / maxValue) * 100}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (type === 'pie') {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center space-x-2">
            <div className="relative" style={{ width: height, height }}>
              <svg width={height} height={height} viewBox="0 0 100 100">
                {data.map((item, index) => {
                  const percentage = (item.value / total) * 100;
                  const angle = (percentage / 100) * 360;
                  const startAngle = currentAngle;
                  currentAngle += angle;

                  const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                  const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                  const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
                  const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);

                  const largeArcFlag = angle > 180 ? 1 : 0;

                  return (
                    <path
                      key={index}
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={item.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>
            </div>
            <div className="space-y-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm text-gray-500">
                    {((item.value / total) * 100).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export { Chart };
export type { ChartData };
