"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Box,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  ArrowUp,
  Plus,
  CreditCard,
  User,
  Bell,
  Lock,
  HelpCircle,
  FileText,
} from "lucide-react"
import DashboardNav from "./dashboard-nav"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Datos simulados para el gráfico de ventas
  const salesData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    values: [4500, 5200, 4800, 5800, 6200, 5900, 6800, 7200, 7800, 8500, 9200, 10500],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Panel de Control</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <ScrollArea className="w-full whitespace-nowrap pb-3">
            <TabsList className="flex w-max">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="inventory">Inventario</TabsTrigger>
              <TabsTrigger value="sales">Ventas</TabsTrigger>
              <TabsTrigger value="purchases">Compras</TabsTrigger>
              <TabsTrigger value="new-sale">Nueva Venta</TabsTrigger>
              <TabsTrigger value="add-product">Añadir Producto</TabsTrigger>
              <TabsTrigger value="settings">Configuración</TabsTrigger>
            </TabsList>
          </ScrollArea>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <div className="flex items-center pt-1 text-xs text-green-500">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>20.1% desde el mes pasado</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Valor del Inventario</CardTitle>
                  <Box className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,234.59</div>
                  <div className="flex items-center pt-1 text-xs text-green-500">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>4.3% desde el mes pasado</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Productos</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <div className="flex items-center pt-1 text-xs text-green-500">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>7 nuevos productos este mes</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">573</div>
                  <div className="flex items-center pt-1 text-xs text-green-500">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>18 desde el mes pasado</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-full lg:col-span-4">
                <CardHeader>
                  <CardTitle>Resumen de Ventas</CardTitle>
                  <CardDescription>Ventas mensuales durante el último año</CardDescription>
                </CardHeader>
                <CardContent className="pl-2 overflow-x-auto">
                  <div className="h-[300px] w-full min-w-[600px]">
                    {/* Gráfico de barras de ventas */}
                    <div className="flex h-[250px] items-end gap-2">
                      {salesData.values.map((value, index) => (
                        <div key={index} className="relative flex-1 group">
                          <div
                            className="bg-primary rounded-t w-full transition-all duration-300 hover:bg-primary/80"
                            style={{ height: `${(value / Math.max(...salesData.values)) * 100}%` }}
                          ></div>
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                            {salesData.labels[index]}
                          </span>
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            ${value.toLocaleString()}
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
              <Card className="col-span-full lg:col-span-3">
                <CardHeader>
                  <CardTitle>Actividades Recientes</CardTitle>
                  <CardDescription>Has tenido 12 transacciones esta semana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`rounded-full p-2 ${i % 2 === 0 ? "bg-green-100" : "bg-blue-100"}`}>
                          {i % 2 === 0 ? (
                            <ShoppingCart className="h-4 w-4 text-green-600" />
                          ) : (
                            <Package className="h-4 w-4 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {i % 2 === 0 ? "Nueva venta completada" : "Inventario actualizado"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {i % 2 === 0 ? "Pedido #2345" : "ID de Producto: P-1234"}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">Hace {i}h</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Gestión de Inventario</CardTitle>
                  <CardDescription>Administra tu inventario de productos, niveles de stock y más.</CardDescription>
                </div>
                <Button>
                  <Package className="mr-2 h-4 w-4" />
                  Nuevo Producto
                </Button>
              </CardHeader>
              <CardContent className="overflow-auto">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Nombre</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Categoría</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Stock</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Precio</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Estado</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {[
                          {
                            id: "P001",
                            name: "Laptop HP Pavilion",
                            category: "Electrónicos",
                            stock: 15,
                            price: "$899.99",
                            status: "Disponible",
                          },
                          {
                            id: "P002",
                            name: 'Monitor Samsung 24"',
                            category: "Electrónicos",
                            stock: 8,
                            price: "$249.99",
                            status: "Disponible",
                          },
                          {
                            id: "P003",
                            name: "Teclado Mecánico",
                            category: "Accesorios",
                            stock: 23,
                            price: "$79.99",
                            status: "Disponible",
                          },
                          {
                            id: "P004",
                            name: "Mouse Inalámbrico",
                            category: "Accesorios",
                            stock: 30,
                            price: "$29.99",
                            status: "Disponible",
                          },
                          {
                            id: "P005",
                            name: "Impresora Canon",
                            category: "Electrónicos",
                            stock: 5,
                            price: "$199.99",
                            status: "Bajo Stock",
                          },
                          {
                            id: "P006",
                            name: "Disco Duro Externo",
                            category: "Almacenamiento",
                            stock: 12,
                            price: "$89.99",
                            status: "Disponible",
                          },
                          {
                            id: "P007",
                            name: "Memoria USB 64GB",
                            category: "Almacenamiento",
                            stock: 0,
                            price: "$19.99",
                            status: "Sin Stock",
                          },
                        ].map((product) => (
                          <tr
                            key={product.id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">{product.id}</td>
                            <td className="p-4 align-middle">{product.name}</td>
                            <td className="p-4 align-middle">{product.category}</td>
                            <td className="p-4 align-middle">{product.stock}</td>
                            <td className="p-4 align-middle">{product.price}</td>
                            <td className="p-4 align-middle">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  product.status === "Disponible"
                                    ? "bg-green-100 text-green-800"
                                    : product.status === "Bajo Stock"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {product.status}
                              </span>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex flex-col sm:flex-row gap-2">
                                <Button variant="outline" size="sm">
                                  Editar
                                </Button>
                                <Button variant="outline" size="sm">
                                  Ver
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sales" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full lg:col-span-1">
                <CardHeader>
                  <CardTitle>Nueva Venta</CardTitle>
                  <CardDescription>Registrar una nueva transacción de venta</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="customer">Cliente</Label>
                      <Input id="customer" placeholder="Seleccionar cliente" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Producto</Label>
                      <Input id="product" placeholder="Buscar producto" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Cantidad</Label>
                        <Input id="quantity" type="number" min="1" defaultValue="1" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price">Precio</Label>
                        <Input id="price" placeholder="0.00" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="discount">Descuento (%)</Label>
                      <Input id="discount" type="number" min="0" max="100" defaultValue="0" />
                    </div>
                    <Button className="w-full">Añadir a la Venta</Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="col-span-full lg:col-span-2">
                <CardHeader>
                  <CardTitle>Historial de Ventas</CardTitle>
                  <CardDescription>Últimas transacciones de venta</CardDescription>
                </CardHeader>
                <CardContent className="overflow-auto">
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Cliente</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Fecha</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Estado</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {[
                            {
                              id: "V001",
                              customer: "María García",
                              date: "15/03/2024",
                              total: "$1,299.99",
                              status: "Completada",
                            },
                            {
                              id: "V002",
                              customer: "Juan Pérez",
                              date: "14/03/2024",
                              total: "$459.98",
                              status: "Completada",
                            },
                            {
                              id: "V003",
                              customer: "Ana Rodríguez",
                              date: "13/03/2024",
                              total: "$89.99",
                              status: "Completada",
                            },
                            {
                              id: "V004",
                              customer: "Carlos López",
                              date: "12/03/2024",
                              total: "$349.97",
                              status: "Pendiente",
                            },
                            {
                              id: "V005",
                              customer: "Laura Martínez",
                              date: "11/03/2024",
                              total: "$199.99",
                              status: "Completada",
                            },
                          ].map((sale) => (
                            <tr
                              key={sale.id}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle">{sale.id}</td>
                              <td className="p-4 align-middle">{sale.customer}</td>
                              <td className="p-4 align-middle">{sale.date}</td>
                              <td className="p-4 align-middle">{sale.total}</td>
                              <td className="p-4 align-middle">
                                <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    sale.status === "Completada"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {sale.status}
                                </span>
                              </td>
                              <td className="p-4 align-middle">
                                <div className="flex flex-col sm:flex-row gap-2">
                                  <Button variant="outline" size="sm">
                                    Ver
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    Factura
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="purchases" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Órdenes de Compra</CardTitle>
                <CardDescription>Gestiona tus órdenes de compra y transacciones con proveedores.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                  <DollarSign className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-muted">Las órdenes de compra aparecerán aquí</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nueva pestaña: Nueva Venta */}
          <TabsContent value="new-sale" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Crear Nueva Venta</CardTitle>
                <CardDescription>Registra una nueva transacción de venta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-sale-customer">Cliente</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar cliente" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maria">María García</SelectItem>
                          <SelectItem value="juan">Juan Pérez</SelectItem>
                          <SelectItem value="ana">Ana Rodríguez</SelectItem>
                          <SelectItem value="carlos">Carlos López</SelectItem>
                          <SelectItem value="laura">Laura Martínez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-sale-date">Fecha</Label>
                      <Input id="new-sale-date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>Productos</Label>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Plus className="h-4 w-4" /> Añadir Producto
                      </Button>
                    </div>
                    <div className="rounded-md border overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Producto</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Precio</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Cantidad</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                            <th className="h-12 px-4 text-left align-middle font-medium"></th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccionar producto" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="laptop">Laptop HP Pavilion</SelectItem>
                                  <SelectItem value="monitor">Monitor Samsung 24"</SelectItem>
                                  <SelectItem value="keyboard">Teclado Mecánico</SelectItem>
                                  <SelectItem value="mouse">Mouse Inalámbrico</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                            <td className="p-4 align-middle">
                              <Input placeholder="0.00" defaultValue="899.99" />
                            </td>
                            <td className="p-4 align-middle">
                              <Input type="number" min="1" defaultValue="1" />
                            </td>
                            <td className="p-4 align-middle">
                              <Input placeholder="0.00" defaultValue="899.99" disabled />
                            </td>
                            <td className="p-4 align-middle">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Eliminar
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-sale-payment">Método de Pago</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Efectivo</SelectItem>
                          <SelectItem value="card">Tarjeta de Crédito</SelectItem>
                          <SelectItem value="transfer">Transferencia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-sale-discount">Descuento (%)</Label>
                      <Input id="new-sale-discount" type="number" min="0" max="100" defaultValue="0" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-sale-notes">Notas</Label>
                    <Textarea id="new-sale-notes" placeholder="Notas adicionales sobre la venta" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between border-t pt-6 gap-4">
                <div className="space-y-1 w-full sm:w-auto">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>$899.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Descuento:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Impuestos (19%):</span>
                    <span>$171.00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>$1,070.99</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Guardar Borrador
                  </Button>
                  <Button className="w-full sm:w-auto">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Completar Venta
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Nueva pestaña: Añadir Producto */}
          <TabsContent value="add-product" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Añadir Nuevo Producto</CardTitle>
                <CardDescription>Ingresa la información del nuevo producto para el inventario</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-name">Nombre del Producto</Label>
                      <Input id="product-name" placeholder="Ej: Laptop HP Pavilion" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-sku">SKU / Código</Label>
                      <Input id="product-sku" placeholder="Ej: P008" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-category">Categoría</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electronics">Electrónicos</SelectItem>
                          <SelectItem value="accessories">Accesorios</SelectItem>
                          <SelectItem value="storage">Almacenamiento</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-supplier">Proveedor</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar proveedor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="techsupplies">TechSupplies S.A.</SelectItem>
                          <SelectItem value="distribuidora">Distribuidora Electrónica</SelectItem>
                          <SelectItem value="mayorista">Mayorista Informático</SelectItem>
                          <SelectItem value="accesorios">Accesorios Globales</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-price">Precio de Venta</Label>
                      <Input id="product-price" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-cost">Costo</Label>
                      <Input id="product-cost" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-stock">Stock Inicial</Label>
                      <Input id="product-stock" type="number" min="0" defaultValue="0" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product-description">Descripción</Label>
                    <Textarea id="product-description" placeholder="Descripción detallada del producto" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-min-stock">Stock Mínimo</Label>
                      <Input id="product-min-stock" type="number" min="0" defaultValue="5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-location">Ubicación en Almacén</Label>
                      <Input id="product-location" placeholder="Ej: Estante A-12" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between border-t pt-6 gap-4">
                <Button variant="outline" className="w-full sm:w-auto">
                  Cancelar
                </Button>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Guardar Borrador
                  </Button>
                  <Button className="w-full sm:w-auto">
                    <Plus className="mr-2 h-4 w-4" />
                    Crear Producto
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full md:col-span-1">
                <CardHeader>
                  <CardTitle>Perfil de Empresa</CardTitle>
                  <CardDescription>Gestiona la información de tu empresa</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Nombre de la Empresa</Label>
                      <Input id="company-name" defaultValue="InventarioPro S.A.S." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-tax-id">NIT / Identificación Fiscal</Label>
                      <Input id="company-tax-id" defaultValue="901.234.567-8" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-address">Dirección</Label>
                      <Input id="company-address" defaultValue="Carrera 27 #47-30, Bucaramanga" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-phone">Teléfono</Label>
                      <Input id="company-phone" defaultValue="+57 305 266 9219" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-email">Email</Label>
                      <Input id="company-email" defaultValue="cperez233@unab.edu.co" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Guardar Cambios</Button>
                </CardFooter>
              </Card>

              <Card className="col-span-full md:col-span-1">
                <CardHeader>
                  <CardTitle>Preferencias del Sistema</CardTitle>
                  <CardDescription>Configura las opciones generales del sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notifications">Notificaciones</Label>
                        <p className="text-sm text-muted-foreground">Recibir alertas de stock bajo</p>
                      </div>
                      <Switch id="notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-alerts">Alertas por Email</Label>
                        <p className="text-sm text-muted-foreground">Enviar alertas a tu correo</p>
                      </div>
                      <Switch id="email-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-backup">Respaldo Automático</Label>
                        <p className="text-sm text-muted-foreground">Crear respaldos diarios</p>
                      </div>
                      <Switch id="auto-backup" defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Moneda</Label>
                      <Select defaultValue="cop">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar moneda" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cop">Peso Colombiano (COP)</SelectItem>
                          <SelectItem value="usd">Dólar Estadounidense (USD)</SelectItem>
                          <SelectItem value="eur">Euro (EUR)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tax-rate">Tasa de Impuesto (%)</Label>
                      <Input id="tax-rate" type="number" min="0" max="100" defaultValue="19" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Guardar Preferencias</Button>
                </CardFooter>
              </Card>

              <Card className="col-span-full md:col-span-1">
                <CardHeader>
                  <CardTitle>Seguridad</CardTitle>
                  <CardDescription>Gestiona la seguridad de tu cuenta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña Actual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva Contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Autenticación de Dos Factores</Label>
                        <p className="text-sm text-muted-foreground">Aumenta la seguridad de tu cuenta</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Actualizar Seguridad
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Usuarios y Permisos</CardTitle>
                <CardDescription>Gestiona los usuarios del sistema y sus niveles de acceso</CardDescription>
              </CardHeader>
              <CardContent className="overflow-auto">
                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Usuario</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Rol</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Estado</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {[
                        {
                          name: "Carlos Pérez",
                          email: "cperez233@unab.edu.co",
                          role: "Administrador",
                          status: "Activo",
                        },
                        {
                          name: "Ana Rodríguez",
                          email: "arodriguez@inventariopro.com",
                          role: "Gerente",
                          status: "Activo",
                        },
                        {
                          name: "Juan Gómez",
                          email: "jgomez@inventariopro.com",
                          role: "Vendedor",
                          status: "Activo",
                        },
                        {
                          name: "María López",
                          email: "mlopez@inventariopro.com",
                          role: "Inventario",
                          status: "Inactivo",
                        },
                      ].map((user, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle">{user.name}</td>
                          <td className="p-4 align-middle">{user.email}</td>
                          <td className="p-4 align-middle">{user.role}</td>
                          <td className="p-4 align-middle">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                user.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button variant="outline" size="sm">
                                Editar
                              </Button>
                              <Button variant="outline" size="sm" className="text-destructive">
                                Desactivar
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>
                    <User className="mr-2 h-4 w-4" />
                    Añadir Usuario
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soporte y Ayuda</CardTitle>
                <CardDescription>Recursos de ayuda y soporte técnico</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <HelpCircle className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold">Centro de Ayuda</h3>
                      <p className="text-muted-foreground mt-2">
                        Accede a nuestra documentación y tutoriales para aprender a usar el sistema.
                      </p>
                      <Button variant="link" className="mt-4">
                        Ver Documentación
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <FileText className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold">Tutoriales</h3>
                      <p className="text-muted-foreground mt-2">
                        Videos y guías paso a paso para sacar el máximo provecho del sistema.
                      </p>
                      <Button variant="link" className="mt-4">
                        Ver Tutoriales
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Bell className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold">Contacto Soporte</h3>
                      <p className="text-muted-foreground mt-2">
                        ¿Necesitas ayuda? Contacta con nuestro equipo de soporte técnico.
                      </p>
                      <Button variant="link" className="mt-4">
                        Contactar Soporte
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

