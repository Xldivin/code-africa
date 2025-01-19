"use client";

import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardDescription, CardTitle, CardHeader } from '../components/ui/card';
// import Products from '../products';
import BarChart from './graphs/BarChart';
import LineChart from './graphs/LineChartDays';
import TransactionsTable from './transactions/Transctiontable';

const HomeDashboard = () => {
  return (
    <div data-testid="main-dashboard" className='flex flex-col gap-[10px] xl:flex-row sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[20px]'>
      <div className={`w-full lg:${"w-50%"} 2xl:w-[70%]`}>
        <p className='font-bold text-xl pt-[2rem] text-gray-500'>Wallet Dashboard </p>
        <div className='flex gap-[1rem] flex-col'>
          <div className='flex flex-col gap-[1rem] lg:flex-row'>
            <Card className="w-[100%] h-[29rem] pb-[0.5rem] bg-[#151515] lg:w-[80%] 2xl:w-[50%]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  <div className="flex gap-[2rem] justify-between">
                    <div className="flex flex-row gap-[2rem]">
                      <div>
                        <p className="text-sm text-gray-500">Transactions Chart</p>
                      </div>
                    </div>
                  </div>
                </CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  <div className="mt-[1rem]">
                    <p className='text-xs text-gray-500'>
                      Wallet Balance
                    </p>
                    <p className="text-1xl text-gray-500">
                      200,000000
                    </p>
                  </div>
                  <BarChart />
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-[100%] h-[29rem] pb-[0.5rem] bg-[#151515] lg:w-[80%] 2xl:w-[50%]">
              <CardDescription>
                <p className="ml-[0.7rem] mt-[1rem] text-xs text-gray-500">Account Balance</p>
                <p className="text-2xl ml-[0.7rem] mt-[1rem] text-gray-500">
                  {'200,000'}
                </p>
                <LineChart />
              </CardDescription>
            </Card>
          </div>
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
};
export default HomeDashboard;
