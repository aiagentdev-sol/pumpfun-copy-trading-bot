import React from 'react'
import DiscoverTokensComp from './DiscoverTokensComp'
import { fetchHotCollections } from '../../utils/fetchData';

export default function DiscoverTokens() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [totalNumber, setTotalNumber] = React.useState(0);
    const [hottestData, setHottestData] = React.useState<any[]>();
    const [loadMore, setLoadMore] = React.useState(false);
    const [discoverNumber, setDiscoverNumber] = React.useState(15);
    function getRandomSubarray(arr: any, length: number) {
        const shuffled = arr.slice(0);
        let i = arr.length;
        while (i--) {
            const index = Math.floor((i + 1) * Math.random());
            [shuffled[i], shuffled[index]] = [shuffled[index], shuffled[i]];
        }
        return shuffled.slice(0, length);
    }

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await fetchHotCollections();
                const tempData = getRandomSubarray(data.data.tokens, data.data.tokens.length);
                setTotalNumber(data.data.total);
                setHottestData(tempData);
                setIsLoading(false);
                console.log(data, '>>>>><<<<<');
                // Handle the data as needed
            } catch (error) {
                // Handle error
                console.error('Error fetching data in component:', error);
            }
        };

        fetchData();
    }, []);
    React.useEffect(() => {
        if (loadMore) {
            setDiscoverNumber(50);
        } else {
            setDiscoverNumber(15);
        }
    },[loadMore])
    
    return (
        <div className='w-full px-6 md:px-[100px] py-6 md:py-[50px] flex items-center justify-center '>
            <div className='w-full max-w-[1440px] flex flex-col gap-[50px] text-white font-semibold'>
                <div className='flex flex-col items-center'>
                    <div className='overflow-y-hidden mb-2 text-4xl  md:text-5xl'>
                        Discover Tokens
                    </div>
                    <div className='text-secondary-400 text-xl'>
                        {totalNumber?.toLocaleString()} Token Listed
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6'>
                    {(!isLoading) && (hottestData?.length) && hottestData.slice(0, discoverNumber).map((item, index) => (
                        <DiscoverTokensComp title={item.name} imgUrl={item.logoURI} mintedNumber={item.mc} key={index}/>
                    ))}
                </div>
                <div className='flex mx-auto justify-center items-center'>
                    <button className='px-6 py-2 bg-secondary-500 rounded-xl text-sm hover:bg-secondary-200 duration-500' onClick={()=>setLoadMore(!loadMore)}>
                        Load more
                    </button>
                </div>
            </div>
        </div>
    )
}
