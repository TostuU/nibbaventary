"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Package, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para cualquier consulta o solicitud.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Información de Contacto</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed mb-8">
                    Puedes contactarnos a través de los siguientes medios o utilizando el formulario de contacto.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">cperez233@unab.edu.co</p>
                    <p className="text-muted-foreground">soporte@inventariopro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-muted-foreground">+57 305 266 9219 (Colombia)</p>
                    <p className="text-muted-foreground">+57 601 234 5678 (Línea de Soporte)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Oficinas</h3>
                    <p className="text-muted-foreground">Carrera 27 #47-30, Barrio Sotomayor, Bucaramanga, Colombia</p>
                    <p className="text-muted-foreground">Calle 36 #23-15, Barrio Bolívar, Bucaramanga, Colombia</p>
                    <p className="text-muted-foreground">
                      Avenida González Valencia #55-42, Barrio Cabecera, Bucaramanga, Colombia
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold mb-2">Horario de Atención</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
                  <p className="text-muted-foreground">Domingos: Cerrado</p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-6">
                      <div className="rounded-full bg-green-100 p-3">
                        <svg
                          className="h-6 w-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">¡Mensaje Enviado!</h3>
                      <p className="text-center text-muted-foreground">
                        Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Enviar otro mensaje</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre Completo</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo Electrónico</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Tu número de teléfono"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Asunto de tu mensaje"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Escribe tu mensaje aquí"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-[120px]"
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Preguntas Frecuentes</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Respuestas a las preguntas más comunes sobre nuestros servicios.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {[
                {
                  question: "¿Cómo puedo empezar a usar InventarioPro?",
                  answer:
                    "Para comenzar, simplemente regístrate en nuestra plataforma. Ofrecemos un período de prueba gratuito de 14 días para que puedas explorar todas las funcionalidades antes de decidir.",
                },
                {
                  question: "¿Qué soporte técnico ofrecen?",
                  answer:
                    "Ofrecemos soporte técnico por correo electrónico, chat en vivo y teléfono durante el horario laboral. Los clientes con planes Premium tienen acceso a soporte prioritario 24/7.",
                },
                {
                  question: "¿Puedo migrar mis datos desde otro sistema?",
                  answer:
                    "Sí, ofrecemos servicios de migración de datos desde la mayoría de los sistemas de gestión de inventario populares. Nuestro equipo te guiará durante todo el proceso.",
                },
                {
                  question: "¿Ofrecen capacitación para nuevos usuarios?",
                  answer:
                    "Sí, proporcionamos sesiones de capacitación en línea, documentación detallada y videos tutoriales para ayudar a tus empleados a familiarizarse con el sistema rápidamente.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
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

