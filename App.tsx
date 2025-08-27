
import React from 'react';
import { PawIcon, CheckCircleIcon, DocumentTextIcon, CalculatorIcon, BanknotesIcon, CalendarDaysIcon, HomeIcon, BeakerIcon, TruckIcon, ClipboardDocumentListIcon, ArchiveBoxIcon } from './components/Icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
    <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 text-base leading-relaxed">{description}</p>
  </div>
);

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <PawIcon className="h-8 w-8 text-blue-600" />
        <span className="text-2xl font-bold text-slate-800">Pet Shop Gestão</span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Recursos</a>
        <a href="#fiscal" className="text-slate-600 hover:text-blue-600 transition-colors">Fiscal</a>
        <a href="#vendas" className="text-slate-600 hover:text-blue-600 transition-colors">Vendas</a>
      </nav>
      <button className="hidden md:block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
        Comece Agora
      </button>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative bg-white pt-20 pb-32">
    <div className="absolute inset-0">
        <img src="https://loremflickr.com/1600/900/happy,dog,owner?lock=1" alt="Happy dog with its owner" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative">
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
        O Sistema para seu <span className="text-blue-600">Pet Shop</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
        Para organizar a rotina de um dia de cão, o Pet Shop Gestão será seu maior escudeiro. Ele organiza seu dia a dia, mantém o registro completo dos atendimentos, vacinações, exames, cirurgias e muito mais.
      </p>
      <div className="mt-10 flex justify-center space-x-4">
        <a href="#features" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg">
          Conheça os Recursos
        </a>
        <a href="#" className="bg-white text-slate-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition-transform hover:scale-105 shadow-lg border border-slate-200">
          Solicite uma Demo
        </a>
      </div>
    </div>
  </section>
);


const App: React.FC = () => {
  const mainFeatures = [
    { icon: <ClipboardDocumentListIcon className="w-8 h-8"/>, title: "Prontuário Eletrônico", description: "Registre informações, anexe imagens e exames para acompanhar todo o histórico do pet. Compartilhe facilmente com outros profissionais." },
    { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Agenda Inteligente", description: "Realize agendamentos recorrentes, registre faltas e comunique com o cliente via WhatsApp de forma integrada." },
    { icon: <HomeIcon className="w-8 h-8"/>, title: "Hospedagem do Pet", description: "Assegure as hospedagens dos pets com todas as reservas registradas no sistema, para que você tenha controle de tudo." },
    { icon: <CheckCircleIcon className="w-8 h-8"/>, title: "Controle de Atendimento", description: "Mantenha o registro de atendimentos, vacinações, exames, cirurgias, banho e tosa. Envie lembretes via WhatsApp." },
    { icon: <BeakerIcon className="w-8 h-8"/>, title: "Vacinas", description: "Defina protocolos de vacina e o sistema mostra as datas das próximas aplicações para cada pet, simplificando o controle." },
    { icon: <TruckIcon className="w-8 h-8"/>, title: "Controle de Delivery", description: "Com integração iFood e painel do entregador, controle a entrega dos seus produtos diretamente pelo sistema em tempo real." },
  ];

  const fiscalFeatures = [
    { title: "Controle Fiscal & Contábil", description: "Desenvolvido para MEI, ME, Simples, Lucro Real e Lucro Presumido." },
    { title: "Documentos Fiscais", description: "Emita NFe, NFCe, NFSe e CTe de forma descomplicada. Integrado com 98% das Prefeituras." },
    { title: "Painel do Contador", description: "Seu contador acessa todos os documentos de forma imediata e gratuita, incluindo Sintegra, Sped Fiscal e Bloco K." },
  ];

  const salesFeatures = [
    { title: "Controle de Vendas", description: "Facilite sua venda, emita documentos fiscais e crie ordens de serviço para ter controle total." },
    { title: "Entrada Automática de Notas", description: "Entrada de notas de forma automática, vinculado ao site da Receita Federal." },
    { title: "Integração TEF", description: "Transações por cartão mais rápidas e seguras com máquinas PinPad, com registro automático no sistema." },
    { title: "Cotações e Compras", description: "Crie cotações, envie para fornecedores e gere pedidos de compra de forma automática." },
  ];

  return (
    <div className="antialiased text-slate-700">
      <Header />
      <main>
        <Hero />
        
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">É na nuvem. E faz tudo pelo seu negócio.</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  O tempo que seria gasto procurando e organizando papéis pode ser investido em produtividade e mais atendimentos. O Pet Shop Gestão conta com ferramentas fáceis de usar e pode ser acessado a qualquer hora, de qualquer lugar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3"/>
                    <span>Acesso de qualquer dispositivo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3"/>
                    <span>Segurança e backup automático</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3"/>
                    <span>Atualizações constantes e gratuitas</span>
                  </div>
                </div>
              </div>
              <div className="relative h-96">
                <img src="https://loremflickr.com/600/400/veterinarian,cat?lock=2" alt="Veterinarian with a cat" className="absolute w-2/3 h-auto top-0 left-0 rounded-xl shadow-2xl z-10"/>
                <img src="https://loremflickr.com/600/400/puppy,cute?lock=3" alt="Cute puppy" className="absolute w-2/3 h-auto bottom-0 right-0 rounded-xl shadow-2xl"/>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Um sistema completo de gestão</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
              De ponta a ponta, temos os recursos que seu Pet Shop ou Clínica Veterinária precisam para crescer.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {mainFeatures.map(feature => (
                <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Atendemos seu Segmento</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-12">Nossa plataforma é flexível e robusta, ideal para:</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="bg-slate-700 p-8 rounded-lg w-full md:w-1/3 text-center">
                <PawIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold">Pet Shops</h3>
              </div>
              <div className="bg-slate-700 p-8 rounded-lg w-full md:w-1/3 text-center">
                <BeakerIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold">Clínicas Veterinárias</h3>
              </div>
            </div>
          </div>
        </section>
        
        <section id="fiscal" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <CalculatorIcon className="w-16 h-16 text-blue-600 mb-4" />
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Contábil e Fiscal sem Complicação</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Emita documentos fiscais e mantenha sua contabilidade em dia de forma integrada e descomplicada. Atendemos a legislação de todos os estados.
                </p>
                <ul className="space-y-3">
                  {fiscalFeatures.map(f => (
                    <li key={f.title} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                      <div>
                        <h4 className="font-semibold text-slate-800">{f.title}</h4>
                        <p className="text-slate-600">{f.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Documentos Fiscais Suportados</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-100 text-blue-800 font-bold p-4 rounded-lg">NFe</div>
                  <div className="bg-blue-100 text-blue-800 font-bold p-4 rounded-lg">NFCe</div>
                  <div className="bg-blue-100 text-blue-800 font-bold p-4 rounded-lg">NFSe</div>
                  <div className="bg-blue-100 text-blue-800 font-bold p-4 rounded-lg">CTe</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vendas" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1 bg-white p-8 rounded-xl shadow-lg">
                <img src="https://loremflickr.com/600/400/pet,shop,cashier?lock=4" alt="Cashier at a pet shop" className="rounded-lg shadow-md w-full h-auto"/>
              </div>
              <div className="order-1 md:order-2">
                <BanknotesIcon className="w-16 h-16 text-blue-600 mb-4" />
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Vendas e Controle Total do seu Negócio</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Crie ordens de serviço e tenha controle de tudo que acontece no seu negócio, desde o orçamento até a venda e entrega.
                </p>
                <ul className="space-y-3">
                  {salesFeatures.map(f => (
                    <li key={f.title} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                      <div>
                        <h4 className="font-semibold text-slate-800">{f.title}</h4>
                        <p className="text-slate-600">{f.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

         <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">E muito mais...</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
              Recursos adicionais para otimizar cada parte da sua operação.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <FeatureCard icon={<ArchiveBoxIcon className="w-8 h-8"/>} title="Controle de Estoque" description="Apure seu estoque de forma simples e inteligente, baseado nas entradas e saídas de documentos fiscais." />
              <FeatureCard icon={<ClipboardDocumentListIcon className="w-8 h-8"/>} title="Anamnese e Cadastros" description="Registre todas informações essenciais do pet: idade, patologia, peso, alergias, ração de preferência e mais." />
              <FeatureCard icon={<DocumentTextIcon className="w-8 h-8"/>} title="Modelo de Documento" description="Crie modelos de documentos e tenha controle de caixa separado entre clínica e profissional." />
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-800 text-slate-300">
        <div className="container mx-auto px-6 py-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <PawIcon className="h-7 w-7 text-blue-400" />
            <span className="text-xl font-bold text-white">Pet Shop Gestão</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Pet Shop Gestão. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
