import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Package, Users, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>InventarioPro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Nosotros</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos un equipo de estudiantes de Ingeniería de Sistemas de la Universidad Autónoma de Bucaramanga
                  (UNAB) apasionados por la tecnología y la innovación.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestra Historia</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  InventarioPro nació como un proyecto universitario en 2023, cuando un grupo de estudiantes de
                  Ingeniería de Sistemas de la UNAB decidimos enfrentar un desafío real: crear una solución de gestión
                  de inventario accesible para pequeñas y medianas empresas de nuestra región.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Lo que comenzó como un proyecto académico rápidamente se transformó en una pasión. Identificamos que
                  muchos negocios locales luchaban con sistemas obsoletos o procesos manuales, y vimos la oportunidad de
                  aplicar nuestros conocimientos para crear una diferencia real en la comunidad empresarial.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Equipo de InventarioPro en reunión"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height={400}
                  width={600}
                  src="/images/team-meeting-new.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestros Valores</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los principios que guían nuestro trabajo y relaciones con los clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold">Innovación Práctica</h3>
                  <p className="text-muted-foreground mt-2">
                    Creemos en desarrollar soluciones que no solo sean tecnológicamente avanzadas, sino también
                    prácticas y accesibles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold">Compromiso Académico</h3>
                  <p className="text-muted-foreground mt-2">
                    Aplicamos rigurosamente los conocimientos adquiridos en nuestra formación universitaria, manteniendo
                    altos estándares de calidad.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold">Impacto Local</h3>
                  <p className="text-muted-foreground mt-2">
                    Buscamos generar un impacto positivo en nuestra comunidad, ayudando a los negocios locales a crecer
                    y prosperar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  alt="Equipo de InventarioPro trabajando en almacén"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height={400}
                  width={600}
                  src="/images/inventory-team-new.png"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestro Equipo</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Somos un grupo diverso de estudiantes de la UNAB con diferentes habilidades y especialidades dentro de
                  la Ingeniería de Sistemas. Algunos de nosotros nos enfocamos en el desarrollo de software, otros en
                  experiencia de usuario, y otros en análisis de datos y seguridad informática.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Esta diversidad de conocimientos nos permite abordar los problemas desde múltiples perspectivas,
                  creando soluciones más completas e innovadoras. Aunque somos jóvenes, estamos comprometidos con la
                  excelencia y el aprendizaje continuo.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="gap-1">
                      Conoce al Equipo <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">¿Listo para optimizar tu inventario?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a las empresas que confían en InventarioPro para gestionar su inventario de manera eficiente.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login">
                  <Button size="lg">Comenzar Ahora</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contactar Ventas
                  </Button>
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

