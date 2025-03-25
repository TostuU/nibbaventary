"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, FileText, Plus, Search, ShoppingCart, Trash2 } from "lucide-react"
import DashboardNav from "../dashboard-nav"

export default function SalesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cartItems, setCartItems] = useState([
    { id: 1, product: "Laptop HP Pavilion", price: 899.99, quantity: 1, total: 899.99 },
    { id: 2, product: "Mouse Inalámbrico", price: 29.99, quantity: 2, total: 59.98 },
  ])

  const sales = [
    { id: "V001", customer: "María García", date: "15/03/2024", items: 3, total: "$1,299.99", status: "Completada" },
    { id: "V002", customer: "Juan Pérez", date: "14/03/2024", items: 2, total: "$459.98", status: "Completada" },
    { id: "V003", customer: "Ana Rodríguez", date: "13/03/2024", items: 1, total: "$89.99", status: "Completada" },
    { id: "V004", customer: "Carlos López", date: "12/03/2024", items: 4, total: "$349.97", status: "Pendiente" },
    { id: "V005", customer: "Laura Martínez", date: "11/03/2024", items: 2, total: "$199.99", status: "Completada" },
    { id: "V006", customer: "Roberto Sánchez", date: "10/03/2024", items: 1, total: "$599.99", status: "Completada" },
    { id: "V007", customer: "Elena Gómez", date: "09/03/2024", items: 3, total: "$149.97", status: "Pendiente" },
    { id: "V008", customer: "Miguel Torres", date: "08/03/2024", items: 2, total: "$79.98", status: "Completada" },
  ]

  const filteredSales = sales.filter(
    (sale) =>
      sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity,
            total: item.price * quantity,
          }
        }
        return item
      }),
    )
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.total, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Gestión de Ventas</h2>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Generar Informe
          </Button>
        </div>

        <Tabs defaultValue="new-sale" className="space-y-4">
          <TabsList>
            <TabsTrigger value="new-sale">Nueva Venta</TabsTrigger>
            <TabsTrigger value="sales-history">Historial de Ventas</TabsTrigger>
            <TabsTrigger value="analytics">Análisis</TabsTrigger>
          </TabsList>

          <TabsContent value="new-sale" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-12">
              <Card className="md:col-span-8">
                <CardHeader>
                  <CardTitle>Carrito de Venta</CardTitle>
                  <CardDescription>Productos añadidos a la venta actual</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium">Producto</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Precio</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Cantidad</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {cartItems.length > 0 ? (
                          cartItems.map((item) => (
                            <tr
                              key={item.id}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle">{item.product}</td>
                              <td className="p-4 align-middle">${item.price.toFixed(2)}</td>
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </Button>
                                  <span className="w-8 text-center">{item.quantity}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </Button>
                                </div>
                              </td>
                              <td className="p-4 align-middle">${item.total.toFixed(2)}</td>
                              <td className="p-4 align-middle">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-destructive"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="p-4 text-center text-muted-foreground">
                              No hay productos en el carrito
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Detalles de la Venta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer">Cliente</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maria">María García</SelectItem>
                        <SelectItem value="juan">Juan Pérez</SelectItem>
                        <SelectItem value="ana">Ana Rodríguez</SelectItem>
                        <SelectItem value="carlos">Carlos López</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment">Método de Pago</Label>
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
                    <Label htmlFor="discount">Descuento (%)</Label>
                    <Input id="discount" type="number" min="0" max="100" defaultValue="0" />
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between py-1">
                      <span>Subtotal:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Descuento:</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between py-1 font-bold">
                      <span>Total:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Completar Venta
                  </Button>
                  <Button variant="outline" className="w-full">
                    Guardar como Borrador
                  </Button>
                </CardFooter>
              </Card>

              <Card className="md:col-span-12">
                <CardHeader>
                  <CardTitle>Añadir Productos</CardTitle>
                  <CardDescription>Busca y añade productos a la venta actual</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar productos..." className="pl-8" />
                    </div>
                    <div className="w-full md:w-[200px]">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las categorías</SelectItem>
                          <SelectItem value="electronics">Electrónicos</SelectItem>
                          <SelectItem value="accessories">Accesorios</SelectItem>
                          <SelectItem value="storage">Almacenamiento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { id: "P001", name: "Laptop HP Pavilion", price: "$899.99", stock: 15 },
                      { id: "P002", name: 'Monitor Samsung 24"', price: "$249.99", stock: 8 },
                      { id: "P003", name: "Teclado Mecánico", price: "$79.99", stock: 23 },
                      { id: "P004", name: "Mouse Inalámbrico", price: "$29.99", stock: 30 },
                      { id: "P005", name: "Impresora Canon", price: "$199.99", stock: 5 },
                      { id: "P006", name: "Disco Duro Externo", price: "$89.99", stock: 12 },
                    ].map((product) => (
                      <Card key={product.id}>
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {product.price} - Stock: {product.stock}
                            </p>
                          </div>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-1" />
                            Añadir
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sales-history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historial de Ventas</CardTitle>
                <CardDescription>Registro de todas las transacciones de venta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar por ID o cliente..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-[200px]">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los estados</SelectItem>
                        <SelectItem value="completed">Completada</SelectItem>
                        <SelectItem value="pending">Pendiente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Cliente</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Fecha</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Artículos</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Estado</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {filteredSales.length > 0 ? (
                        filteredSales.map((sale) => (
                          <tr
                            key={sale.id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">{sale.id}</td>
                            <td className="p-4 align-middle">{sale.customer}</td>
                            <td className="p-4 align-middle">{sale.date}</td>
                            <td className="p-4 align-middle">{sale.items}</td>
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
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Ver
                                </Button>
                                <Button variant="outline" size="sm">
                                  Factura
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="p-4 text-center text-muted-foreground">
                            No se encontraron ventas
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Ventas</CardTitle>
                <CardDescription>Visualiza el rendimiento de tus ventas a lo largo del tiempo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-muted">Los gráficos de análisis aparecerán aquí</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

