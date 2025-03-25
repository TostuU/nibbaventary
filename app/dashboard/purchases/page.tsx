"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Plus, Search, Truck } from "lucide-react"
import DashboardNav from "../dashboard-nav"

export default function PurchasesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const purchases = [
    { id: "C001", supplier: "TechSupplies S.A.", date: "18/03/2024", items: 5, total: "$2,499.95", status: "Recibido" },
    {
      id: "C002",
      supplier: "Distribuidora Electrónica",
      date: "15/03/2024",
      items: 3,
      total: "$1,299.97",
      status: "En Tránsito",
    },
    {
      id: "C003",
      supplier: "Mayorista Informático",
      date: "10/03/2024",
      items: 8,
      total: "$3,599.92",
      status: "Recibido",
    },
    {
      id: "C004",
      supplier: "Accesorios Globales",
      date: "05/03/2024",
      items: 12,
      total: "$899.88",
      status: "Recibido",
    },
    {
      id: "C005",
      supplier: "TechSupplies S.A.",
      date: "28/02/2024",
      items: 2,
      total: "$1,799.98",
      status: "Cancelado",
    },
    {
      id: "C006",
      supplier: "Distribuidora Electrónica",
      date: "25/02/2024",
      items: 4,
      total: "$599.96",
      status: "Recibido",
    },
    {
      id: "C007",
      supplier: "Mayorista Informático",
      date: "20/02/2024",
      items: 6,
      total: "$2,999.94",
      status: "Pendiente",
    },
    {
      id: "C008",
      supplier: "Accesorios Globales",
      date: "15/02/2024",
      items: 10,
      total: "$799.90",
      status: "Recibido",
    },
  ]

  const filteredPurchases = purchases.filter((purchase) => {
    const matchesSearch =
      purchase.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.supplier.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || purchase.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const suppliers = [
    {
      id: "S001",
      name: "TechSupplies S.A.",
      contact: "Carlos Mendoza",
      email: "contacto@techsupplies.com",
      phone: "+34 912 345 678",
    },
    {
      id: "S002",
      name: "Distribuidora Electrónica",
      contact: "Ana Vázquez",
      email: "pedidos@distribuidoraelectronica.com",
      phone: "+34 934 567 890",
    },
    {
      id: "S003",
      name: "Mayorista Informático",
      contact: "Roberto Sánchez",
      email: "ventas@mayoristainformatico.com",
      phone: "+34 956 789 012",
    },
    {
      id: "S004",
      name: "Accesorios Globales",
      contact: "María Torres",
      email: "info@accesoriosglobales.com",
      phone: "+34 978 901 234",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Gestión de Compras</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nueva Orden de Compra
          </Button>
        </div>

        <Tabs defaultValue="purchase-orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="purchase-orders">Órdenes de Compra</TabsTrigger>
            <TabsTrigger value="new-purchase">Nueva Compra</TabsTrigger>
            <TabsTrigger value="suppliers">Proveedores</TabsTrigger>
          </TabsList>

          <TabsContent value="purchase-orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Órdenes de Compra</CardTitle>
                <CardDescription>Gestiona tus órdenes de compra y seguimiento de pedidos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar por ID o proveedor..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-[200px]">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los estados</SelectItem>
                        <SelectItem value="Recibido">Recibido</SelectItem>
                        <SelectItem value="En Tránsito">En Tránsito</SelectItem>
                        <SelectItem value="Pendiente">Pendiente</SelectItem>
                        <SelectItem value="Cancelado">Cancelado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Proveedor</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Fecha</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Artículos</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Estado</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {filteredPurchases.length > 0 ? (
                        filteredPurchases.map((purchase) => (
                          <tr
                            key={purchase.id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">{purchase.id}</td>
                            <td className="p-4 align-middle">{purchase.supplier}</td>
                            <td className="p-4 align-middle">{purchase.date}</td>
                            <td className="p-4 align-middle">{purchase.items}</td>
                            <td className="p-4 align-middle">{purchase.total}</td>
                            <td className="p-4 align-middle">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  purchase.status === "Recibido"
                                    ? "bg-green-100 text-green-800"
                                    : purchase.status === "En Tránsito"
                                      ? "bg-blue-100 text-blue-800"
                                      : purchase.status === "Pendiente"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                }`}
                              >
                                {purchase.status}
                              </span>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Ver
                                </Button>
                                <Button variant="outline" size="sm">
                                  Recibir
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="p-4 text-center text-muted-foreground">
                            No se encontraron órdenes de compra
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-purchase" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-12">
              <Card className="md:col-span-8">
                <CardHeader>
                  <CardTitle>Nueva Orden de Compra</CardTitle>
                  <CardDescription>Crea una nueva orden de compra para tus proveedores</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="supplier">Proveedor</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar proveedor" />
                          </SelectTrigger>
                          <SelectContent>
                            {suppliers.map((supplier) => (
                              <SelectItem key={supplier.id} value={supplier.id}>
                                {supplier.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Fecha de Pedido</Label>
                        <div className="flex items-center">
                          <Input id="date" type="date" />
                          <Calendar className="ml-2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reference">Referencia</Label>
                      <Input id="reference" placeholder="Número de referencia o pedido" />
                    </div>

                    <div className="space-y-2">
                      <Label>Productos</Label>
                      <div className="rounded-md border">
                        <table className="w-full caption-bottom text-sm">
                          <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <th className="h-12 px-4 text-left align-middle font-medium">Producto</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Cantidad</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Precio Unitario</th>
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
                                <Input type="number" min="1" defaultValue="1" />
                              </td>
                              <td className="p-4 align-middle">
                                <Input placeholder="0.00" />
                              </td>
                              <td className="p-4 align-middle">
                                <Input placeholder="0.00" disabled />
                              </td>
                              <td className="p-4 align-middle">
                                <Button variant="ghost" size="sm">
                                  Eliminar
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={5} className="p-4">
                                <Button variant="outline" size="sm" className="w-full">
                                  <Plus className="h-4 w-4 mr-2" />
                                  Añadir Producto
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notas</Label>
                      <Textarea id="notes" placeholder="Instrucciones especiales o notas para el proveedor" />
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Resumen de la Orden</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-t pt-4">
                    <div className="flex justify-between py-1">
                      <span>Subtotal:</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Impuestos (21%):</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Gastos de Envío:</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between py-1 font-bold">
                      <span>Total:</span>
                      <span>$0.00</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expected-date">Fecha Estimada de Recepción</Label>
                    <div className="flex items-center">
                      <Input id="expected-date" type="date" />
                      <Calendar className="ml-2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shipping">Método de Envío</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar método" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Estándar</SelectItem>
                        <SelectItem value="express">Express</SelectItem>
                        <SelectItem value="pickup">Recogida en Tienda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button className="w-full">
                    <Truck className="mr-2 h-4 w-4" />
                    Enviar Orden
                  </Button>
                  <Button variant="outline" className="w-full">
                    Guardar como Borrador
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="suppliers" className="space-y-4">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <div>
                  <CardTitle>Proveedores</CardTitle>
                  <CardDescription>Gestiona tus proveedores y sus datos de contacto</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nuevo Proveedor
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Nombre</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Contacto</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Teléfono</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {suppliers.map((supplier) => (
                        <tr
                          key={supplier.id}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle">{supplier.id}</td>
                          <td className="p-4 align-middle">{supplier.name}</td>
                          <td className="p-4 align-middle">{supplier.contact}</td>
                          <td className="p-4 align-middle">{supplier.email}</td>
                          <td className="p-4 align-middle">{supplier.phone}</td>
                          <td className="p-4 align-middle">
                            <div className="flex gap-2">
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

