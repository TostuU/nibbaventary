"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Plus, Search } from "lucide-react"
import DashboardNav from "../dashboard-nav"

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const products = [
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
    { id: "P003", name: "Teclado Mecánico", category: "Accesorios", stock: 23, price: "$79.99", status: "Disponible" },
    { id: "P004", name: "Mouse Inalámbrico", category: "Accesorios", stock: 30, price: "$29.99", status: "Disponible" },
    { id: "P005", name: "Impresora Canon", category: "Electrónicos", stock: 5, price: "$199.99", status: "Bajo Stock" },
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
    { id: "P008", name: "Auriculares Bluetooth", category: "Audio", stock: 18, price: "$59.99", status: "Disponible" },
    { id: "P009", name: "Cámara Web HD", category: "Accesorios", stock: 7, price: "$49.99", status: "Disponible" },
    { id: "P010", name: "Tablet Android", category: "Electrónicos", stock: 3, price: "$299.99", status: "Bajo Stock" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const categories = ["Electrónicos", "Accesorios", "Almacenamiento", "Audio"]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Gestión de Inventario</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Producto
          </Button>
        </div>

        <Tabs defaultValue="products" className="space-y-4">
          <TabsList>
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="categories">Categorías</TabsTrigger>
            <TabsTrigger value="suppliers">Proveedores</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Productos</CardTitle>
                <CardDescription>Gestiona tu inventario de productos, niveles de stock y precios.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar productos..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-[200px]">
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas las categorías</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

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
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product) => (
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
                          ))
                        ) : (
                          <tr>
                            <td colSpan={7} className="p-4 text-center text-muted-foreground">
                              No se encontraron productos
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Categorías de Productos</CardTitle>
                <CardDescription>Gestiona las categorías para organizar tus productos.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <Card key={category}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {products.filter((p) => p.category === category).length} productos
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Ver Productos
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Card className="border-dashed">
                    <CardContent className="flex flex-col items-center justify-center h-full py-6">
                      <Package className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium mb-2">Añadir Categoría</p>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Nueva Categoría
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suppliers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Proveedores</CardTitle>
                <CardDescription>Gestiona tus proveedores y sus datos de contacto.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                  <span className="text-muted">La información de proveedores aparecerá aquí</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

