import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaBook, FaUser, FaUsers, FaWallet } from 'react-icons/fa';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ["order stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/order-stats")
            return res.data;
        }
    })

    console.log(chartData)



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pi chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const piChartData = chartData.map(data=> {
        return {name: data.category, value: data.revenue}
    })

    return (
        <div className='p-8'>
            <div className='w-11/12 mx-auto'>
                <h2 className="text-3xl mb-8">
                    <span>Hi, welcome {user?.displayName || "Back"}</span>
                </h2>
                <div className="stats shadow w-full mx-auto">
                    <div className="stat bg-gradient-to-r from-purple-600 to-white">
                        <div className="stat-figure text-secondary">
                            <FaWallet className='text-3xl'></FaWallet>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stats?.revenue}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-yellow-700 to-white rounded-2xl">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl'></FaUsers>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats?.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-pink-500 to-white rounded-2xl">
                        <div className="stat-figure text-secondary">
                            <FaBook className='text-3xl'></FaBook>
                        </div>
                        <div className="stat-title">Menu Items</div>
                        <div className="stat-value">{stats?.menuItems}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-blue-700 to-white rounded-2xl">
                        <div className="stat-figure text-secondary">
                            <FaUser className='text-3xl'></FaUser>
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats?.orders}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>

            <div className="flex mt-20">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={piChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {piChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                   </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;