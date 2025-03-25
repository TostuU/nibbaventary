"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, BarChart3, Download, LineChart, PieChart, TrendingUp } from "lucide-react"
import DashboardNav from "../dashboard-nav"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month")

  // Datos simulados para los gráficos
  const salesData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    values: [4500, 5200, 4800, 5800, 6200, 5900, 6800, 7200, 7800, 8500, 9200, 10500],
  }

  const topProducts = [
    { name: "Laptop HP Pavilion", sales: 42, revenue: "$37,799.58", growth: 15 },
    { name: 'Monitor Samsung 24"', sales: 38, revenue: "$9,499.62", growth: 8 },
    { name: "Teclado Mecánico", sales: 35, revenue: "$2,799.65", growth: 12 },
    { name: "Mouse Inalámbrico", sales: 30, revenue: "$899.70", growth: -5 },
    { name: "Impresora Canon", sales: 25, revenue: "$4,999.75", growth: 20 },
  ]

  const categoryDistribution = [
    { category: "Electrónicos", percentage: 45 },
    { category: "Accesorios", percentage: 30 },
    { category: "Almacenamiento", percentage: 15 },
    { category: "Audio", percentage: 10 },
  ]

  const inventoryAlerts = [
    { product: "Impresora Canon", stock: 5, status: "Bajo Stock" },
    { product: "Tablet Android", stock: 3, status: "Bajo Stock" },
    { product: "Memoria USB 64GB", stock: 0, status: "Sin Stock" },
    { product: "Auriculares Bluetooth", stock: 7, status: "Bajo Stock" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Análisis y Estadísticas</h2>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Periodo de tiempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última Semana</SelectItem>
                <SelectItem value="month">Último Mes</SelectItem>
                <SelectItem value="quarter">Último Trimestre</SelectItem>
                <SelectItem value="year">Último Año</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$78,650</div>
              <div className="flex items-center pt-1 text-xs text-green-500">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>18.2% desde el periodo anterior</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Número de Ventas</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <div className="flex items-center pt-1 text-xs text-green-500">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>12.5% desde el periodo anterior</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valor Promedio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$242.75</div>
              <div className="flex items-center pt-1 text-xs text-green-500">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>5.3% desde el periodo anterior</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasa de Conversión</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.8%</div>
              <div className="flex items-center pt-1 text-xs text-red-500">
                <ArrowDown className="h-3 w-3 mr-1" />
                <span>2.1% desde el periodo anterior</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sales" className="space-y-4">
          <TabsList>
            <TabsTrigger value="sales">Ventas</TabsTrigger>
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="inventory">Inventario</TabsTrigger>
          </TabsList>

          <TabsContent value="sales" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Tendencia de Ventas</CardTitle>
                  <CardDescription>Ventas mensuales durante el último año</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    {/* Simulación de gráfico de barras */}
                    <div className="flex h-[250px] items-end gap-2">
                      {salesData.values.map((value, index) => (
                        <div key={index} className="relative flex-1">
                          <div
                            className="bg-primary rounded-t w-full"
                            style={{ height: `${(value / Math.max(...salesData.values)) * 100}%` }}
                          ></div>
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                            {salesData.labels[index]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-8 text-xs text-muted-foreground">
                      <span>0</span>
                      <span>${Math.max(...salesData.values).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Productos Más Vendidos</CardTitle>
                  <CardDescription>Los 5 productos con mayor volumen de ventas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index} className="flex items-center">
                        <div className="font-medium">{index + 1}.</div>
                        <div className="ml-2 flex-1">
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {product.sales} unidades · {product.revenue}
                          </div>
                        </div>
                        <div
                          className={`flex items-center text-xs ${product.growth >= 0 ? "text-green-500" : "text-red-500"}`}
                        >
                          {product.growth >= 0 ? (
                            <ArrowUp className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDown className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(product.growth)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribución por Categoría</CardTitle>
                  <CardDescription>Porcentaje de ventas por categoría de producto</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryDistribution.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{category.category}</span>
                          <span>{category.percentage}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Rendimiento de Productos</CardTitle>
                <CardDescription>Análisis detallado del rendimiento de productos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Producto</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Unidades Vendidas</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Ingresos</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Margen</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Crecimiento</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {[
                        { name: "Laptop HP Pavilion", units: 42, revenue: "$37,799.58", margin: "28%", growth: 15 },
                        { name: 'Monitor Samsung 24"', units: 38, revenue: "$9,499.62", margin: "32%", growth: 8 },
                        { name: "Teclado Mecánico", units: 35, revenue: "$2,799.65", margin: "45%", growth: 12 },
                        { name: "Mouse Inalámbrico", units: 30, revenue: "$899.70", margin: "52%", growth: -5 },
                        { name: "Impresora Canon", units: 25, revenue: "$4,999.75", margin: "25%", growth: 20 },
                        { name: "Disco Duro Externo", units: 22, revenue: "$1,979.78", margin: "38%", growth: 5 },
                        { name: "Auriculares Bluetooth", units: 20, revenue: "$1,199.80", margin: "42%", growth: 18 },
                        { name: "Tablet Android", units: 18, revenue: "$5,399.82", margin: "30%", growth: -2 },
                      ].map((product, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle">{product.name}</td>
                          <td className="p-4 align-middle">{product.units}</td>
                          <td className="p-4 align-middle">{product.revenue}</td>
                          <td className="p-4 align-middle">{product.margin}</td>
                          <td className="p-4 align-middle">
                            <div
                              className={`flex items-center text-xs ${product.growth >= 0 ? "text-green-500" : "text-red-500"}`}
                            >
                              {product.growth >= 0 ? (
                                <ArrowUp className="h-3 w-3 mr-1" />
                              ) : (
                                <ArrowDown className="h-3 w-3 mr-1" />
                              )}
                              {Math.abs(product.growth)}%
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Alertas de Inventario</CardTitle>
                  <CardDescription>Productos con niveles bajos de stock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium">Producto</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Stock Actual</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Estado</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {inventoryAlerts.map((item, index) => (
                          <tr
                            key={index}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">{item.product}</td>
                            <td className="p-4 align-middle">{item.stock}</td>
                            <td className="p-4 align-middle">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  item.status === "Bajo Stock"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rotación de Inventario</CardTitle>
                  <CardDescription>Velocidad de venta de productos en stock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Electrónicos", rate: 4.2, days: 85 },
                      { category: "Accesorios", rate: 6.8, days: 53 },
                      { category: "Almacenamiento", rate: 5.3, days: 68 },
                      { category: "Audio", rate: 7.5, days: 48 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.category}</span>
                          <span>
                            {item.rate.toFixed(1)}x / {item.days} días
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${(item.rate / 10) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Valor de Inventario por Categoría</CardTitle>
                  <CardDescription>Distribución del valor del inventario actual</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    {/* Simulación de gráfico circular */}
                    <div className="flex h-[300px] items-center justify-center">
                      <div className="relative h-[250px] w-[250px] rounded-full">
                        <div
                          className="absolute inset-0 rounded-full border-8 border-primary"
                          style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-blue-500"
                          style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 75%, 0 75%)" }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-green-500"
                          style={{ clipPath: "polygon(0 75%, 100% 75%, 100% 90%, 0 90%)" }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-yellow-500"
                          style={{ clipPath: "polygon(0 90%, 100% 90%, 100% 100%, 0 100%)" }}
                        ></div>
                      </div>
                      <div className="ml-8 space-y-2">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                          <span>Electrónicos (45%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                          <span>Accesorios (30%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                          <span>Almacenamiento (15%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Audio (10%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

