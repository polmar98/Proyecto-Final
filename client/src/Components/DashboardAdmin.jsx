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
  DonutChart,
} from "@tremor/react";
import NavBar from "./NavBar";
import SideBarAdmin from "./SideBarAdmin";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { es } from "date-fns/locale";
import { fetchBills, filterSalesByProducts } from "../Redux/Dashboard/dashboardAction";

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function DashboardAdmin() {
  const dispatch = useDispatch();
  
  const salesRaw = useSelector((state) => state.bills);
  const { bills, billsProducts } = salesRaw;
  
  useEffect(() => {    
   dispatch(fetchBills());
   dispatch(filterSalesByProducts());        
  }, [dispatch]);

 

  const [selectedView, setSelectedView] = useState("1");

  const [value, setValue] = useState([new Date(2023, 1, 1), new Date()]);


  

  

  //suma ventas totales

  const calculateTotalSales = (bills) => {
    let total = 0;
    bills.forEach((e) => {
      total += e.amount;
    });
    return total;
  };
  const totalSales = calculateTotalSales(bills);

  //suma de ventas por mes
  const calculateSalesByMonth = (bills) => {
    const totalByDate = bills.reduce((result, bill) => {
      const { date, amount } = bill;
      if (!result[date]) {
        result[date] = 0;
      }
      result[date] += amount;
      return result;
    }, {});

    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];   

    const salesArray = Object.keys(totalByDate).map((date) => {
      const monthNumber = parseInt(date, 10); 
      const monthName = monthNames[monthNumber - 1] || ""; 
      return {
        date: monthName,
        amount: totalByDate[date],
      };
    });
    return salesArray;
    }    
    const salesByMonth = calculateSalesByMonth(bills);


    // Suma de ventas por paquete
        
    
    const handleDateRange = (newValue) => {
      setValue(newValue);
    };

    

    return (
      <main>
        <Title>Dashboard</Title>
        <Text>Dashboard de ventas</Text>
        <TabList
          defaultValue="1"
          onValueChange={(value) => setSelectedView(value)}
        >
          <Tab value="1" text="Ventas totales" />
          <Tab value="2" text="Ventas por Paquete"  />
          <Tab value="3" text="Ventas por Actividad" />
        </TabList>
        {selectedView === "1" && (
          <Card>
            <Text>Ventas totales</Text>
            <Metric>${totalSales.toLocaleString()}</Metric>
            <BarChart
              className="mt-6"
              data={salesByMonth}
              index="date"
              categories={["amount"]}
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
            <Metric>$monto por paquetes</Metric>
            <DonutChart
              className="mt-6 w-[200px] h-[200px]"
              // data={paquetes}
              category="Amount of sales"
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
  };

export default DashboardAdmin;
