import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Filter, Search } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: "P001",
      name: "Laptop HP Pavilion",
      description: "Potente laptop con procesador Intel Core i5, 8GB RAM y 512GB SSD.",
      price: "$899.99",
      category: "Electrónicos",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "P002",
      name: 'Monitor Samsung 24"',
      description: "Monitor Full HD con panel IPS y tiempo de respuesta de 5ms.",
      price: "$249.99",
      category: "Electrónicos",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "P003",
      name: "Teclado Mecánico",
      description: "Teclado mecánico con retroiluminación RGB y switches Cherry MX.",
      price: "$79.99",
      category: "Accesorios",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "P004",
      name: "Mouse Inalámbrico",
      description: "Mouse ergonómico con sensor óptico de alta precisión y batería de larga duración.",
      price: "$29.99",
      category: "Accesorios",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "P005",
      name: "Impresora Canon",
      description: "Impresora multifuncional con conectividad WiFi y sistema de tinta continua.",
      price: "$199.99",
      category: "Electrónicos",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "P006",
      name: "Disco Duro Externo",
      description: "Disco duro portátil de 1TB con conexión USB 3.0 para transferencias rápidas.",
      price: "$89.99",
      category: "Almacenamiento",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "P007",
      name: "Memoria USB 64GB",
      description: "Memoria USB compacta con 64GB de capacidad y carcasa metálica resistente.",
      price: "$19.99",
      category: "Almacenamiento",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "P008",
      name: "Auriculares Bluetooth",
      description: "Auriculares inalámbricos con cancelación de ruido y hasta 20 horas de batería.",
      price: "$59.99",
      category: "Audio",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>InventarioPro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
            Productos
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            Nosotros
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contacto
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Iniciar Sesión
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Productos</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora nuestra amplia gama de productos para satisfacer todas tus necesidades tecnológicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold tracking-tight">Catálogo de Productos</h2>
                <span className="text-muted-foreground">({products.length} productos)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Buscar productos..."
                    className="pl-8 h-10 w-full md:w-[250px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filtrar
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                      </div>
                      <span className="font-bold text-lg">{product.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Ver Detalles</Button>
                    <Button>Añadir</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Cargar Más Productos
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">¿No encuentras lo que buscas?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contamos con un amplio catálogo de productos. Si no encuentras lo que necesitas, contáctanos y te
                  ayudaremos.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg">Contactar</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 InventarioPro. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

