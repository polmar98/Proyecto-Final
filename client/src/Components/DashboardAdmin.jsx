import React from "react";
import {
  Title,
  Text,
  Card,
  Metric,
  TabList,
  Tab,
  BarChart,
  DateRangePicker,
  DonutChart
} from "@tremor/react";
import NavBar from "./NavBar";
import SideBarAdmin from "./SideBarAdmin";
import { useEffect, useState } from "react";
import { es } from "date-fns/locale";

const salesPerMonth = [
  {
    month: "Ene",
    "Amount of sales": 25000,
  },
  {
    month: "Feb",
    "Amount of sales": 12000,
  },
  {
    month: "Mar",
    "Amount of sales": 30200,
  },
  {
    month: "Abr",

    "Amount of sales": 55000,
  },
  {
    month: "May",
    "Amount of sales": 36950,
  },
  {
    month: "Jun",
    "Amount of sales": 93750,
  },
  {
    month: "Jul",
    "Amount of sales": 45278,
  },
];

const paquetes = [

  {
    name: "Capadocia",
    date: "2023-08-06",
   "Amount of sales": 6500
    
  },

  {
    name: "Paseo por cancún",
    date: "2023-04-01",
   "Amount of sales": 3600
    
  },

  {
    name: "Iguazu",
    date: "2023-02-22",
   "Amount of sales": 1600
    
  },

  {
    name: "Canaima",
    date: "2023-02-22",
    "Amount of sales": 2300
    
  }
];

const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function DashboardAdmin() {

  const [selectedView, setSelectedView] = useState("1");

  const [totalSalesValue, setTotalSalesValue] = useState(0);
  const [totalPakagesValue, setTotalPackagesValue] = useState(0); // Agrega estado para almacenar el total de ventas

  const [value, setValue] = useState([
    new Date(2023, 1, 1),
    new Date(),
  ]);


  useEffect(() => {
    const sales = totalSales(salesPerMonth); // Calcula el total de ventas
    setTotalSalesValue(sales);
    const packagesSales = totalPackages(paquetes);
    setTotalPackagesValue(packagesSales); // Actualiza el estado con el total de ventas calculado
  }, []);

  const totalSales = (salesPerMonth) => {
    let sales = 0;
    salesPerMonth.forEach((element) => {
      sales += element["Amount of sales"];
    });
    return sales;
  };


  const totalPackages = (paquetes) => {
    let sales = 0;
    paquetes.forEach((element) => {
      sales += element["Amount of sales"];
    });
    return sales;
  };
  const handleDateRange = (newValue) => {
    setValue(newValue);
  };

  // const monthlyPackageSales = salesPerMonth.reduce((sum, pkg) => sum + pkg.sales, 0);

  // const donutChartData = salesPerMonth.map((pkg) => ({
  //   label: pkg.name,
  //   value: pkg.sales,
  // }));

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
          <Metric>${totalPakagesValue.toLocaleString()}</Metric>
          <DonutChart
          className="mt-6 w-[200px] h-[200px]"
          data={paquetes}
          category= "Amount of sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["slate", "violet", "indigo", "rose"]}
          />          
        </Card>
      )}
      

      {selectedView === "3" && (
        <Card>
          <Text>Ventas por Actividad</Text>
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
