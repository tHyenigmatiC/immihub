import { MetricsContainer } from "./MetrixContainer"

export const Metrics = () => {
    return(
        <MetricsContainer>
            {
                metricsData.map(metric => (
                    <div key={metric.type} className="flex flex-col gap-2 md:gap-4 items-start md:items-center my-4 md:my-0 justify-between border-r border-black last:border-none odd:pl-2">
                        <h1 className="text-3xl md:text-4xl font-bold">{metric.count}</h1>
                        <p className="text-sm text-gray-500 w-12 md:w-auto">{metric.type}</p>
                    </div>
                ))
            }
        </MetricsContainer>
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