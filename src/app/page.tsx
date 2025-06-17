"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Code,
  Calendar,
  Users,
  Globe,
  ShoppingCart,
  CheckCircle,
  Handshake,
  ArrowRight,
  Calculator,
  FileText,
  BarChart3,
  Brain,
  SearchCheck,
  Sparkles,
  PanelsTopLeft,
} from "lucide-react"

export default function Portfolio() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedService, setSelectedService] = useState("")
  const [showOtherDescription, setShowOtherDescription] = useState(false)

  const handleServiceChange = (value: string) => {
    setSelectedService(value)
    setShowOtherDescription(value === "outros")
  }

  const services = [
    { icon: ShoppingCart, title: "App de pedidos &\n E-commerce", description: "Aplicativos desenvolvidos sob demanda com funcionalidades específicas.", },
    { icon: Calendar, title: "Sistema de agendamentos", description: "Soluções inteligentes e automatizadas para agendamento de serviços." },
    { icon: Users, title: "Gestão de Clientes CRM", description: "Dashboards para monitoramento de indicadores e controle de clientes." },
    { icon: Globe, title: "Sites &\n Landing Pages SEO", description: "Criação de páginas otimizadas com foco em conversão, eficiência e usabilidade" },
    { icon: ShoppingCart, title: "E-commerce", description: "Lojas virtuais personalizadas, responsivas e otimizadas para vendas." },
    { icon: PanelsTopLeft, title: "WordPress", description: "Seu site pronto em poucos dias, personalizado e de fácil manutenção." },
    { icon: Sparkles, title: "Automações & IA", description: "Implantação e consultoria em automação de fluxos com inteligência artificial aplicada." },
    { icon: SearchCheck, title: "SEO e Performance", description: "Consultoria de sites com foco em resultados nos mecanismos de busca." },
  ]

  const tools = [
    {
      icon: Calculator,
      title: "Calculadora de Orçamentos",
      description: "Ferramenta para calcular custos de projetos de desenvolvimento",
    },
    { icon: FileText, title: "Gerador de Propostas", description: "Crie propostas profissionais automaticamente" },
    { icon: BarChart3, title: "Dashboard Analytics", description: "Monitore métricas do seu negócio em tempo real" },
  ]

  return (
    <div className="relative min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 h-16">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-16 lg:px-24 xl:px-0 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold">COD.ex</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Sobre
            </a>
            <a href="#ferramentas" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Ferramentas
            </a>
            <a href="#contato" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Contato
            </a>
          </nav>

          <Button className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white hover:scale-105 cursor-pointer ">
            <MessageCircle className="h-4 w-4 " />
            WhatsApp
          </Button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="flex items-center py-20 px-4 relative overflow-hidden h-screen z-0">
        <div className="absolute inset-0 z-[-1]">

          {/* Bolha grande com morph funcionando */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 animate-drift">
            <div className="w-[40vw] h-[40vw] animate-pulse-scale blur-3xl">
              <div className="w-full h-full gradient-background opacity-30" />
            </div>
          </div>
          {/* Bolha menor com cores vivas e nítidas
          <div className="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 animate-drift-small">
            <div className="w-[800px] h-[800px]  opacity-30">
              <div className="w-full h-full  gradient-background-vivid shadow-2xl" />
            </div>
          </div> */}

        </div>
        <div className="container grid lg:grid-cols-[1.5fr_1fr] gap-12 items-stretch w-full mx-auto px-4 md:px-16 lg:px-24 xl:px-0 max-w-[1280px]">
          {/* Introdução */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">
                Desenvolvimento de Plataformas
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transformamos suas
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  {" "}
                  ideias
                </span>{" "}
                em
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-400">
                  {" "}
                  soluções digitais
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Especialistas em desenvolvimento de plataformas completas: apps de delivery, sistemas de agendamento,
                gestão de clientes, e-commerce, sites e automações que impulsionam seu negócio.
              </p>
            </div>

            <div className="relative w-full"> {/* ⬅️ adiciona relative aqui */}

              {/* Bolha por trás dos cards
              <div className="absolute left-0 z-0 animate-drift-horizontal">
                <div className="w-[120px] h-[120px] ">
                  <div className="w-full h-full rounded-full gradient-background-vivid animate-morph shadow-2xl" />
                </div>
              </div> */}

              {/* Grid de cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10 relative">
                {services.slice(0, 4).map((service, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg border border-slate-700 hover:bg-slate-700/10 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer backdrop-blur supports-[backdrop-filter]:bg-slate-900/30"
                  >
                    <service.icon className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-300 whitespace-pre-line">{service.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <Card className="border-slate-700 justify-center bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-400">
                Vamos conversar sobre seu projeto
              </CardTitle>
              <CardDescription className="text-slate-300">
                Preencha o formulário e receba uma proposta personalizada
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-slate-200">
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome completo"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-slate-200">
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    placeholder="(11) 99999-9999"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="servico" className="text-slate-200">
                  Tipo de Serviço
                </Label>
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white cursor-pointer">
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600 text-white">
                    <SelectItem className="cursor-pointer" value="app-delivery">App de Delivery</SelectItem>
                    <SelectItem className="cursor-pointer" value="agendamento">Sistema de Agendamento</SelectItem>
                    <SelectItem className="cursor-pointer" value="gestao-clientes">Gestão de Clientes</SelectItem>
                    <SelectItem className="cursor-pointer" value="site-landing">Site/Landing Page/SEO</SelectItem>
                    <SelectItem className="cursor-pointer" value="ecommerce">E-commerce</SelectItem>
                    <SelectItem className="cursor-pointer" value="wordpress">WordPress</SelectItem>
                    <SelectItem className="cursor-pointer" value="automacao">Automação</SelectItem>
                    <SelectItem className="cursor-pointer" value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {showOtherDescription && (
                <div className="space-y-2">
                  <Label htmlFor="descricao" className="text-slate-200">
                    Descrição do Projeto
                  </Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva seu projeto em detalhes..."
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    rows={3}
                  />
                </div>
              )}

              <Button className="w-full bg-emerald-600 text-white border border-transparent hover:bg-transparent hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300 cursor-pointer">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-4 bg-slate-800/50 ">
        <div className="container w-full mx-auto px-4 md:px-16 lg:px-24 xl:px-0 max-w-[1280px]">
          <div className="text-center mb-16 ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Serviços Especializados</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Soluções completas para transformar seu negócio com tecnologia de ponta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="cursor-pointer bg-slate-800 border-slate-700 hover:border-emerald-600/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <service.icon strokeWidth={1} className="h-12 w-12 mb-5 text-emerald-400  transition-transform" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre - Comprometimento e Soluções */}
      <section id="sobre" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        {/* Aurora moderna no fundo da coluna esquerda */}
        {/* coluna esquerda */}
        <div className="absolute top-1/2 left-[30%]  h-full pointer-events-none z-0">
          <div className="w-[70vh] h-[70vh] bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-purple-600/50 blur-3xl rounded-full opacity-40 animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2" />
        </div>


        <div className="container grid lg:grid-cols-2 gap-16 w-full mx-auto px-4 md:px-16 lg:px-24 xl:px-0 max-w-[1280px] relative z-10">
          <Card className="p-0 border-slate-700 justify-center bg-emerald-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-700/10 shadow-xl shadow-emerald-800/10">
            {/* Card de Valores */}
            <CardHeader className="py-5 border-b rounded-sm  border-slate-700 justify-center  backdrop-blur supports-[backdrop-filter]:bg-slate-700/00 shadow-xl shadow-emerald-800/10">
              <CardTitle className="text-3xl font-semibold  text-white ">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-md shadow-emerald-500/90 " />
                  Essência da Marca
                </div>
              </CardTitle>
            </CardHeader>


            <CardContent className="my-6 space-y-6 relative overflow-hidden divide-y divide-slate-700/50">

              {/* Comprometimento */}
              <div className="flex items-center gap-4 pt-0 pb-4">
                <div className="p-2 bg-emerald-500/10 rounded-md">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-white">Comprometimento</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Cada projeto é tratado com dedicação total, com foco em qualidade, pontualidade e excelência.
                  </p>
                </div>
              </div>

              {/* Ética */}
              <div className="flex items-center gap-4 pt-4 pb-4">
                <div className="p-2 bg-blue-500/10 rounded-md">
                  <Handshake className="h-6 w-6 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-white">Ética</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Transparência e honestidade em todos os processos, do orçamento à entrega final.
                  </p>
                </div>
              </div>

              {/* Colaboração */}
              <div className="flex items-center gap-4 pt-4">
                <div className="p-2 bg-emerald-500/10 rounded-md">
                  <Users className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-white">Colaboração</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Trabalhamos lado a lado com você, escutando suas ideias e transformando-as em soluções eficazes.
                  </p>
                </div>
              </div>

            </CardContent>

          </Card>

          {/* Texto ilustrativo */}
          <div className="flex items-center justify-center">
            <div className="space-y-6 max-w-md text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white leading-tight">
                Soluções que geram <span className="text-emerald-400">impacto real</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Utilizamos tecnologia de ponta, metodologias ágeis e foco em resultado para criar plataformas que transformam ideias em realidade.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Seja um site institucional, um sistema personalizado ou automações inteligentes, sua necessidade é o ponto de partida.
              </p>
            </div>
          </div>
        </div>
      </section >



      {/* Ferramentas Desenvolvidas */}
      < section id="ferramentas" className="py-20 px-4 bg-slate-800/50" >
        <div className="container w-full mx-auto px-4 md:px-16 lg:px-24 xl:px-0 max-w-[1280px]">
          <div className="text-center mb-16 ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ferramentas Úteis</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ferramentas desenvolvidas por mim para otimizar processos e facilitar seu dia a dia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <tool.icon className="h-12 w-12 text-blue-400 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-white">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-4">{tool.description}</CardDescription>
                  <Button variant="outline" className="w-full border-blue-600/50 text-blue-400 hover:bg-blue-600/10">
                    Acessar Ferramenta
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ section >

      {/* Footer */}
      < footer className="py-12 px-4 border-t border-slate-800" >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-emerald-400" />
            <span className="text-xl font-bold">COD.ex</span>
          </div>
          <p className="text-slate-400 mb-4">Transformando ideias em soluções digitais inovadoras</p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <MessageCircle className="h-4 w-4 mr-2" />
            Fale Comigo no WhatsApp
          </Button>
        </div>
      </ footer>
    </div >
  )
}
