import React, { PureComponent, useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ["#2d9dd6", "#dd1c3a"];

const BatchChart = () => {
  const [activeBatches, setActiveBatches] = useState(0);
  const [frozenBatches, setFrozenBatches] = useState(0);

  useEffect(() => {
    const fetchBatchCounts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/batchcount");
        console.log(response.data);
        const { ActiveBatches, FrozenBatches } = response.data;
        console.log(ActiveBatches, FrozenBatches);

        setActiveBatches(response.data.activeCount);
        setFrozenBatches(response.data.frozenCount);

      } catch (error) {
        console.error(error);
      }
    };

    fetchBatchCounts();
  }, []);

    console.log(activeBatches);
    
  const data = [
    { name: "Active Batches", value: activeBatches },
    { name: "Frozen Batches", value: frozenBatches },
  ];

  return (
    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div class="flex items-center justify-between mb-4">
                <div class="flex-shrink-0">
                    <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Batch Overview</span>
                    <h3 class="text-base font-normal text-gray-500">Active & Frozen Batches</h3>
                </div>
                <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                 
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          height={400}
          width={400}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={(entry) => entry.name }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
        </div>
  );
};

export default BatchChart;