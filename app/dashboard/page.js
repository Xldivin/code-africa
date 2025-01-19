"use client";
import HomeDashboard from '@/src/ui/Dashboard';

const Dashboard = () => {
    return (
        <>
            <div className="lg:col-span-3">
                <div className={`grid items-start gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
                    <HomeDashboard />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
