import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-gray-950 py-4 text-slate-400">
      <div className="container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-red-500 font-bold">GERALDO NETO</span> <span className="font-bold">TREINADOR</span>
            </div>
            <p className="text-sm mb-4">Me siga nas Redes Sociais</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Avaliações
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Consultoria Online
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Treinos 100% Personalizados
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Planos Acessíveis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Suporte Exclusivo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>(83) 9 9556-5414</li>
              <li>
                <a href="mailto:suporte@geraldonetopersonal.com.br" className="hover:text-red-500 transition-colors">
                  suporte@geraldonetopersonal.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          {currentYear} <span className="text-red-500">Geraldo Neto Treinador</span> - Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  )
}
