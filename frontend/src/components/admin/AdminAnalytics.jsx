import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Users,
  Receipt,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

export default function AdminAnalytics() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-analytics"],

    queryFn: async () => {
      const res = await api.get("/admin/analytics");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-lg font-medium">
          Loading analytics...
        </p>
      </div>
    );
  }

  const analytics = data?.analytics;

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  const cards = [
    {
      title: "Users",
      value: analytics?.totalUsers || 0,
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },

    {
      title: "Transactions",
      value: analytics?.totalTransactions || 0,
      icon: Receipt,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },

    {
      title: "Income",
      value: `$${analytics?.totalIncome || 0}`,
      icon: TrendingUp,
      color: "text-green-500",
      bg: "bg-green-100",
    },

    {
      title: "Expense",
      value: `$${analytics?.totalExpense || 0}`,
      icon: TrendingDown,
      color: "text-red-500",
      bg: "bg-red-100",
    },
  ];

  const moneyData = [
    {
      name: "Income",
      value: analytics?.totalIncome || 0,
    },

    {
      name: "Expense",
      value: analytics?.totalExpense || 0,
    },
  ];

  const usersData = [
    {
      name: "Users",
      value: analytics?.totalUsers || 0,
    },

    {
      name: "Transactions",
      value: analytics?.totalTransactions || 0,
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Admin Analytics
      </h1>

      {/* TOP CARDS */}

      <div className="grid md:grid-cols-4 gap-5">
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{item.title}</span>

                  <div
                    className={`
                      p-2
                      rounded-lg
                      ${item.bg}
                    `}
                  >
                    <Icon
                      size={22}
                      className={item.color}
                    />
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-3xl font-bold">
                  {item.value}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CHARTS */}

      <div className="grid md:grid-cols-2 gap-6">
        {/* BAR CHART */}

        <Card>
          <CardHeader>
            <CardTitle>
              Income vs Expense
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <BarChart data={moneyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="value"
                  fill="#3B82F6"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* PIE CHART */}

        <Card>
          <CardHeader>
            <CardTitle>
              Money Distribution
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <PieChart>
                <Pie
                  data={moneyData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {moneyData.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          index === 0
                            ? "#10B981"
                            : "#EF4444"
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* LINE CHART */}

      <Card>
        <CardHeader>
          <CardTitle>
            System Activity
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <LineChart data={usersData}>
              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#8B5CF6"
                strokeWidth={4}
                dot={{
                  fill: "#8B5CF6",
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}