import React from "react";
import {
  Title,
  Text,
  Card,
  Metric,
  TabList,
  Tab,
  BarChart,
  DateRangePicker
} from "@tremor/react";
import NavBar from "../Components/NavBar";
import SideBarAdmin from "../Components/SideBarAdmin";
import StatisticsPackage from "../Components/StatiscsPackage";
import { useEffect, useState } from "react";
import { es } from "date-fns/locale";

const salesPerMonth = [
  {
    month: "Enero",
    "Amount of sales": 25000,
  },
  {
    month: "Febrero",
    "Amount of sales": 12000,
  },
  {
    month: "Marzo",
    "Amount of sales": 30200,
  },
  {
    month: "Abril",
    "Amount of sales": 55000,
  },
  {
    month: "Mayo",
    "Amount of sales": 36950,
  },
  {
    month: "Junio",
    "Amount of sales": 93750,
  },
  {
    month: "Julio",
    "Amount of sales": 45278,
  },
];

function DashboardAdmin() {

  const [selectedView, setSelectedView] = useState(1);

  const [totalSalesValue, setTotalSalesValue] = useState(0); // Agrega estado para almacenar el total de ventas

  const [value, setValue] = useState([
    new Date(2023, 1, 1),
    new Date(),
  ]);


  useEffect(() => {
    const sales = totalSales(salesPerMonth); // Calcula el total de ventas
    setTotalSalesValue(sales); // Actualiza el estado con el total de ventas calculado
  }, []);

  const totalSales = (salesPerMonth) => {
    let sales = 0;
    salesPerMonth.forEach((element) => {
      sales += element["Amount of sales"];
    });
    return sales;
  };

  const handleDateRange = (newValue) => {
    setValue(newValue);
  };

  const monthlyPackageSales = salesPerMonth.reduce((sum, pkg) => sum + pkg.sales, 0);

  const donutChartData = salesPerMonth.map((pkg) => ({
    label: pkg.name,
    value: pkg.sales,
  }));

  return (
    <main>
      <Title>Dashboard</Title>
      <Text>Dashboard de ventas</Text>
      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
      >
        <Tab value="1" text="Ventas totales" />
        <Tab value="2" text="Ventas por Paquete" />
        <Tab value="3" text="Ventas por Ciudad" />
      </TabList>
      {selectedView === "1" && (
        <Card>
          <Text>Ventas totales</Text>
          <Metric>${totalSalesValue.toLocaleString()}</Metric>
          <BarChart
            className="mt-6"
            data={salesPerMonth}
            index="month"
            categories={["Amount of sales"]}
            colors={["blue"]}
            yAxisWidth={48}
          />
        </Card>
      )}
      

      {selectedView === "2" && (
        <Card>
          
          <Text>Ventas por Paquete</Text>
          <DateRangePicker
      className="max-w-md mx-auto"
      value={value}
      onValueChange={setValue}
      locale={es}
      dropdownPlaceholder="Seleccionar"
    />
          <Metric>${45725}</Metric>
        </Card>
      )}
      

      {selectedView === "3" && (
        <Card>
          <Text>Ventas por Ciudad</Text>
          <DateRangePicker
      className="max-w-md mx-auto"
      value={value}
      onValueChange={setValue}
      locale={es}
      dropdownPlaceholder="Seleccionar"
    />
          <Metric>${7896}</Metric>
        </Card>
      )}
      
    </main>
  );
}

export default DashboardAdmin;
