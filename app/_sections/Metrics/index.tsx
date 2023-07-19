export const Metrics = () => {
    return(
        <div className="grid grid-cols-4 gap-4 w-full my-16 md:my-10 text-gray-900">
            {
                metricsData.map(metric => (
                    <div key={metric.type} className="flex flex-col gap-2 md:gap-4 items-start md:items-center my-4 md:my-0 justify-between border-r border-black last:border-none odd:pl-2">
                        <h1 className="text-3xl md:text-4xl font-bold">{metric.count}</h1>
                        <p className="text-sm text-gray-500 w-12 md:w-auto">{metric.type}</p>
                    </div>
                ))
            }
        </div>
    )
}


const metricsData = [
    {
        type: 'Beta Users',
        count: '20k'
    },
    {
        type: 'Total Downloads',
        count: '1.5M'
    },
    {
        type: 'Positive Feedback',
        count: '4k'
    },
    {
        type: 'Beta Communities',
        count: '2k+'
    },
]