"use client";
import HomeDashboard from '@/src/ui/Dashboard';
import Transctions from '@/src/ui/transactions';

const TransctionsPage = () => {

    return (
        <>
            <div className="lg:col-span-3">
                <div className={`grid items-start gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
                    <Transctions />
                </div>
            </div>
        </>
    );
};

export default TransctionsPage;
