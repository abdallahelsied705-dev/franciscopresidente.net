export type WhoIsItForItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  perMonth: string;
  period: string;
  badge?: string;
  highlight: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  whatsappMessage: string;
  whoIsItFor: WhoIsItForItem[];
  faq: FaqItem[];
  testimonials: Testimonial[];
};

export const products: Product[] = [
  {
    slug: "1-mes-iptv-portugal",
    name: "1 Mês IPTV Portugal",
    price: 12.99,
    perMonth: "12,99€/mês",
    period: "pagamento único",
    highlight: false,
    metaTitle: "Subscrição IPTV Portugal 1 Mês – 12,99€ | IPTV Portugal",
    metaDescription:
      "Um mês de IPTV Portugal por 12,99€: mais de 50.000 canais em direto, até 4K e gravação de 7 dias. Sem contrato, sem renovação automática, ativação imediata após um teste grátis.",
    h1: "1 Mês IPTV Portugal — 12,99€ Pagamento Único",
    heroSubtitle:
      "A forma mais simples de perceber se o IPTV é para si. Um mês completo de acesso — mais de 50.000 canais em direto, até 4K e gravação de 7 dias — por um único pagamento de 12,99€ que nunca se renova sozinho.",
    whatsappMessage: "IPTV Portugal - Quero subscrever o plano 1 Mês IPTV Portugal (12,99€)",
    whoIsItFor: [
      {
        title: "Quem corta o cabo pela primeira vez",
        description:
          "A pensar em deixar o cabo ou o satélite mas ainda sem querer comprometer-se? Um mês deixa-o pôr a grelha completa à prova na sua própria TV e internet — explorar os mais de 50.000 canais, testar as transmissões em 4K e comparar com a sua fatura atual, sem nada preso para além de 30 dias.",
      },
      {
        title: "Estadias curtas e instalações temporárias",
        description:
          "Num arrendamento, num quarto de estudante ou numa casa nova por umas semanas? Um único mês cobre TV em direto, desporto e conteúdo a pedido durante a sua estadia, para não ficar preso a um contrato de dois anos que não precisa.",
      },
      {
        title: "Quem só quer ver um evento",
        description:
          "Só quer TV para uma fase de playoffs específica, um final de temporada ou as festas? Um mês encaixa exatamente no que lhe interessa e depois simplesmente termina.",
      },
    ],
    faq: [
      {
        q: "O plano de 1 mês renova-se automaticamente?",
        a: "Não. Paga 12,99€ uma vez por 30 dias de acesso — não há cobrança recorrente nem nada para cancelar. Quando os 30 dias terminam o serviço simplesmente para, e fica totalmente ao seu critério comprar outro mês.",
      },
      {
        q: "Posso mudar para um plano mais longo depois?",
        a: "Sim. Quando o mês terminar pode mudar para qualquer plano mais longo — 3, 6, 12 ou 24 meses. Envie-nos mensagem no WhatsApp e tratamos da mudança de imediato.",
      },
      {
        q: "Tenho menos canais no plano de 1 mês?",
        a: "Não — todos os planos trazem exatamente a mesma grelha: mais de 50.000 canais em direto, 200.000+ títulos a pedido, até 4K, gravação de 7 dias e o guia completo. A única coisa que muda entre planos é a duração e o preço por mês.",
      },
      {
        q: "Em quanto tempo posso começar a ver?",
        a: "Normalmente em cerca de 10 minutos. Assim que o pagamento é confirmado enviamos o seu acesso e um guia de instalação por WhatsApp, a qualquer hora do dia.",
      },
      {
        q: "E se não funcionar para mim?",
        a: "Fale connosco no WhatsApp e tratamos primeiro de resolver. Se o serviço não for como descrito, pode pedir reembolso nas 48 horas após a compra, e se uma falha técnica não for resolvida em 72 horas depois de a reportar, reembolsamos o tempo não usado proporcionalmente. Os detalhes completos estão na nossa página de política de reembolso.",
      },
    ],
    testimonials: [
      {
        name: "Nuno T.",
        city: "Lisboa",
        rating: 5,
        text: "Só queria testar antes de pagar algo mais longo, e um mês foi perfeito. O desporto até ficou mais nítido do que a minha box de cabo antiga. Já passei para o plano de 6 meses.",
      },
      {
        name: "Patrícia S.",
        city: "Porto",
        rating: 5,
        text: "Apanhei um mês enquanto estava em casa de família. Configurei em cinco minutos e tinha centenas de canais a dar. Por 12,99€ é uma pechincha — vou buscar outra vez na próxima vez que lá estiver.",
      },
      {
        name: "Daniel H.",
        city: "Braga",
        rating: 5,
        text: "Usei um só mês para acompanhar os playoffs. Nem uma quebra, mesmo nos jogos tardios, e o suporte respondeu depressa quando tive uma dúvida no primeiro dia.",
      },
    ],
  },
  {
    slug: "3-meses-iptv-portugal",
    name: "3 Meses IPTV Portugal",
    price: 29.99,
    perMonth: "9,99€/mês",
    period: "pagamento único",
    highlight: false,
    metaTitle: "Subscrição IPTV Portugal 3 Meses – 29,99€ | IPTV Portugal",
    metaDescription:
      "Três meses de IPTV Portugal por 29,99€ (cerca de 9,99€/mês): mais de 50.000 canais, até 4K e gravação de 7 dias. Sem contrato, sem renovação automática, instalação rápida por WhatsApp.",
    h1: "3 Meses IPTV Portugal — 29,99€ Pagamento Único",
    heroSubtitle:
      "Três meses de IPTV Portugal por 29,99€ — cerca de 9€ menos do que pagar mês a mês. Uma escolha sensata se quer TV fiável durante uma temporada sem se prender por meio ano.",
    whatsappMessage: "IPTV Portugal - Quero subscrever o plano 3 Meses IPTV Portugal (29,99€)",
    whoIsItFor: [
      {
        title: "Quem vê de vez em quando mas é exigente",
        description:
          "Não tem a TV ligada todas as noites, mas quando tem quer que fique bem e nunca pare. Três meses dão-lhe toda a grelha de mais de 50.000 canais e 200.000+ títulos a pedido a um preço mensal mais baixo do que pagar à medida — sem compromisso longo.",
      },
      {
        title: "Estudantes a cobrir um semestre",
        description:
          "Um trimestre letivo é cerca de três meses, e este também. Mantenha desporto em direto, entretenimento e séries a pedido durante o período — prático numa casa partilhada onde todos querem TV a sério sem contrato de cabo.",
      },
      {
        title: "Quem está fora por uma temporada",
        description:
          "A trabalhar longe de casa por uns meses? Isto mantém-no ligado ao seu entretenimento, notícias e desporto habituais onde quer que esteja, e funciona em viagem sem VPN.",
      },
    ],
    faq: [
      {
        q: "Quanto mais barato são 3 meses face ao mensal?",
        a: "29,99€ por três meses dão cerca de 9,99€ por mês, contra 12,99€ por mês no plano de um mês — poupa cerca de 9€ no mesmo período. É o primeiro degrau real de poupança.",
      },
      {
        q: "Mais do que uma pessoa pode ver ao mesmo tempo?",
        a: "Sim. Os planos vão de 1 a 4 ligações simultâneas, por isso pode estar a ver na TV enquanto outra pessoa está num tablet e os miúdos no telemóvel — tudo numa só subscrição.",
      },
      {
        q: "Cobra automaticamente quando os 3 meses terminam?",
        a: "Nunca. Não há renovação automática — o acesso simplesmente expira no fim. Podemos enviar um lembrete simpático, mas só é cobrado novamente se nos pedir um novo plano.",
      },
      {
        q: "E se algo correr mal durante os 3 meses?",
        a: "O suporte por WhatsApp está disponível durante toda a subscrição e a maioria dos problemas resolve-se em minutos. Se o serviço não for como descrito, pode pedir reembolso nas 48 horas após a compra, ao abrigo da nossa política de reembolso.",
      },
    ],
    testimonials: [
      {
        name: "Sofia R.",
        city: "Coimbra",
        rating: 5,
        text: "Três meses foi ideal para um semestre de TV. Imensos canais, a cobertura de desporto é ótima e o guia de instalação era fácil de seguir. Valeu bem a pena.",
      },
      {
        name: "Marco K.",
        city: "Aveiro",
        rating: 5,
        text: "O teste convenceu-me, por isso fui aos três meses e não tive um único problema — entretenimento, notícias, todo o desporto, tudo estável. É provável que suba para seis meses a seguir.",
      },
      {
        name: "Clara W.",
        city: "Faro",
        rating: 4,
        text: "Boa relação qualidade-preço ao longo de três meses. Faço turnos, por isso a gravação de 7 dias é o que mais uso — poder recuar uma semana muda tudo. Fiável do início ao fim.",
      },
    ],
  },
  {
    slug: "6-meses-iptv-portugal",
    name: "6 Meses IPTV Portugal",
    price: 47.99,
    perMonth: "8,00€/mês",
    period: "pagamento único",
    badge: "Mais Popular",
    highlight: true,
    metaTitle: "Subscrição IPTV Portugal 6 Meses – 47,99€ | IPTV Portugal",
    metaDescription:
      "Seis meses de IPTV Portugal por 47,99€ (cerca de 8€/mês) — o nosso plano mais popular: mais de 50.000 canais, até 4K, gravação de 7 dias e instalação rápida. Sem contrato.",
    h1: "6 Meses IPTV Portugal — 47,99€ Pagamento Único",
    heroSubtitle:
      "O plano em que a maioria das pessoas acaba. Seis meses de IPTV Portugal por 47,99€ — cerca de 8€ por mês — o equilíbrio certo entre uma poupança real e ainda poder reavaliar antes de se comprometer com um ano inteiro.",
    whatsappMessage: "IPTV Portugal - Quero subscrever o plano 6 Meses IPTV Portugal (47,99€)",
    whoIsItFor: [
      {
        title: "Quem vê à noite e ao fim de semana",
        description:
          "Se a TV está ligada na maioria das noites e todo o fim de semana, este é o meio-termo confortável. Tem desporto em direto, séries, documentários e notícias sem preços de cabo, a cerca de 8€ por mês, e ainda pode fazer contas daqui a seis meses em vez de um ano.",
      },
      {
        title: "Quem segue meia temporada",
        description:
          "O futebol vai do outono ao inverno; o basquetebol segue do outono à primavera. Seis meses cobrem a fase mais intensa do que quer que acompanhe — e pode acrescentar mais seis meses para apanhar o resto.",
      },
      {
        title: "Famílias a testar a vida sem cabo",
        description:
          "A pensar cortar o cabo? Seis meses é tempo suficiente para ter a certeza de que a casa toda está coberta — canais infantis, desporto, canais generalistas e notícias — antes de passar a um plano mais longo.",
      },
    ],
    faq: [
      {
        q: "Porque é que a maioria escolhe o plano de 6 meses?",
        a: "É o melhor compromisso entre preço e flexibilidade. A cerca de 8€ por mês está a pagar bem menos do que a tarifa mensal, mas sem se comprometer com um ano inteiro de uma vez. Muitos clientes renovam depois por mais seis meses ou sobem para o plano de 12 meses.",
      },
      {
        q: "Continuo a ter 4K neste plano?",
        a: "Sim — todos os planos incluem toda a gama de qualidade. Onde um canal é emitido em 4K recebe 4K; onde é Full HD ou HD recebe isso. Nada é reservado para um plano mais caro.",
      },
      {
        q: "Posso usar em viagem durante os seis meses?",
        a: "Sim. O serviço viaja consigo — mantenha os seus canais habituais em viagem ou no estrangeiro, sem precisar de VPN.",
      },
      {
        q: "Como funciona a gravação de 7 dias?",
        a: "Nos canais compatíveis pode rever qualquer coisa dos sete dias anteriores. Abre o guia, encontra o programa que perdeu e vê-o a pedido, na TV, telemóvel, tablet ou portátil.",
      },
      {
        q: "Posso adicionar mais uma ligação de aparelho?",
        a: "Sim. Todos os planos suportam de 1 a 4 ligações simultâneas — basta dizer-nos de quantos ecrãs precisa ao subscrever e configuramos assim.",
      },
    ],
    testimonials: [
      {
        name: "Marco B.",
        city: "Lisboa",
        rating: 5,
        text: "Renovo o plano de 6 meses sempre que acaba. Desporto em direto em 4K, sem buffering, e os meus amigos não acreditam no pouco que pago. Devia ter mudado há muito tempo.",
      },
      {
        name: "Ema F.",
        city: "Setúbal",
        rating: 5,
        text: "Deixei o cabo ao fim de anos e sinceramente não tenho saudades. Tudo o que via antes está cá e muito mais, e a família toda usa em divisões e aparelhos diferentes sem problemas.",
      },
      {
        name: "Tariq M.",
        city: "Amadora",
        rating: 5,
        text: "A funcionar no meu Firestick em dez minutos. Só os canais internacionais já são um salto enorme face ao que tinha, e o preço de seis meses é difícil de contestar. As respostas no WhatsApp chegaram em minutos.",
      },
    ],
  },
  {
    slug: "12-meses-iptv-portugal",
    name: "12 Meses IPTV Portugal",
    price: 79.99,
    perMonth: "6,67€/mês",
    period: "pagamento único",
    highlight: false,
    metaTitle: "Subscrição IPTV Portugal 12 Meses – 6,67€/Mês | IPTV Portugal",
    metaDescription:
      "Um ano de IPTV Portugal por 79,99€ — cerca de 6,67€ por mês por mais de 50.000 canais, até 4K e gravação de 7 dias. Sem contrato, sem renovação automática, instalação rápida.",
    h1: "12 Meses IPTV Portugal — 79,99€ Pagamento Único",
    heroSubtitle:
      "Um ano completo de IPTV Portugal por 79,99€ — cerca de 6,67€ por mês. O plano para quem já sabe que o IPTV lhe serve e quer acesso garantido em todas as temporadas e horários do ano que aí vem.",
    whatsappMessage: "IPTV Portugal - Quero subscrever o plano 12 Meses IPTV Portugal (79,99€)",
    whoIsItFor: [
      {
        title: "Casas que veem todos os dias",
        description:
          "A TV está ligada diariamente e já provou que o IPTV funciona para si. Um ano de acesso ininterrupto por 79,99€ — menos do que um único mês da maioria dos pacotes de cabo — significa zero burocracia e nada em que pensar durante doze meses.",
      },
      {
        title: "Adeptos de desporto a sério",
        description:
          "Um ano completo abrange toda a época de futebol, basquetebol e andebol, mais as grandes noites de boxe, as corridas e o ténis. Subscreve uma vez e nunca anda a correr para renovar a meio da época.",
      },
      {
        title: "Famílias à procura da melhor relação de valor",
        description:
          "Para uma casa com crianças, um ano a cerca de 6,67€ por mês fica bem abaixo de qualquer oferta de cabo ou satélite. Canais infantis, filmes de família e desporto em direto estão todos cobertos para todos, o ano inteiro.",
      },
    ],
    faq: [
      {
        q: "79,99€ é mesmo o custo total de um ano?",
        a: "Sim. 79,99€ é tudo — um pagamento por 365 dias. Não há taxa de instalação, hardware para comprar, custo de instalação nem extras escondidos. O preço que vê é o preço que paga.",
      },
      {
        q: "O que acontece quando os 12 meses terminam?",
        a: "O acesso simplesmente termina — não há renovação automática nem cobrança-surpresa. Enviamos um lembrete à medida que o ano se aproxima do fim, para poder renovar no plano que lhe convier nessa altura, se quiser.",
      },
      {
        q: "Um ano cobre todo o desporto?",
        a: "Sim. Os seus 12 meses correm a partir do dia da ativação, abrangendo todos os eventos emitidos nos canais da nossa grelha durante esse período — futebol, basquetebol, andebol, corridas, ténis, golfe e boxe.",
      },
      {
        q: "A família toda pode partilhar?",
        a: "Sim — os planos suportam até 4 ligações simultâneas, por isso cada um pode ver no seu próprio aparelho ao mesmo tempo. Uma subscrição, vários ecrãs.",
      },
      {
        q: "De que velocidade de internet preciso ao longo do ano?",
        a: "Sugerimos pelo menos 10 Mbps para HD e 25 Mbps para 4K, que a maioria das ligações domésticas alcança com facilidade. Se estiver numa zona rural com velocidades mais baixas, as transmissões em SD correm com cerca de 5 Mbps.",
      },
    ],
    testimonials: [
      {
        name: "Gabriel P.",
        city: "Funchal",
        rating: 5,
        text: "Renovo o plano de 12 meses todos os anos. A cerca de seis euros por mês não vejo motivo para voltar ao cabo — a época de futebol inteira, o boxe, as corridas, está tudo lá. Facilmente a melhor decisão que tomei em TV.",
      },
      {
        name: "Noa A.",
        city: "Viseu",
        rating: 5,
        text: "Inscrevi a família e não olhámos para trás. Os miúdos têm os canais de desenhos, o meu marido tem os jogos e eu ponho as séries em dia — tudo em aparelhos diferentes ao mesmo tempo. Notável pelo preço.",
      },
      {
        name: "Roberto C.",
        city: "Leiria",
        rating: 5,
        text: "Pagava mais de 50€ por mês de cabo. Agora é 79,99€ uma vez por ano pelos mesmos canais, melhor imagem 4K e mais para ver. O guia de instalação pôs tudo a dar na minha TV Samsung em minutos.",
      },
    ],
  },
  {
    slug: "24-meses-iptv-portugal",
    name: "24 Meses IPTV Portugal",
    price: 129,
    perMonth: "5,38€/mês",
    period: "pagamento único",
    badge: "Melhor Valor",
    highlight: false,
    metaTitle: "Subscrição IPTV Portugal 24 Meses – 129€ | IPTV Portugal",
    metaDescription:
      "Dois anos de IPTV Portugal por 129€ — cerca de 5,38€ por mês. Mais de 50.000 canais, até 4K e gravação de 7 dias num único pagamento. Sem contrato, sem renovação automática.",
    h1: "24 Meses IPTV Portugal — 129€ Pagamento Único",
    heroSubtitle:
      "A tarifa mensal mais baixa que oferecemos. Dois anos completos de IPTV Portugal por 129€ — cerca de 5,38€ por mês — num só pagamento, com os mesmos mais de 50.000 canais e até 4K, e nada para renovar durante dois anos.",
    whatsappMessage: "IPTV Portugal - Quero subscrever o plano 24 Meses IPTV Portugal (129€)",
    whoIsItFor: [
      {
        title: "Quem já sabe que o IPTV é para si",
        description:
          "Se já está num plano de 6 ou 12 meses e trata o IPTV como a sua forma principal de ver TV, dois anos é o passo natural seguinte: paga uma vez, ignora renovações até 2028 e fica com o mês mais barato que oferecemos.",
      },
      {
        title: "Casas grandes e de várias gerações",
        description:
          "Lares onde avós, pais e filhos veem coisas diferentes são os que mais aproveitam dois anos. Repartido por até quatro ligações ao longo de 24 meses, o custo por espetador torna-se muito pequeno.",
      },
      {
        title: "Quem está de olho no orçamento",
        description:
          "Se o objetivo é o custo mais baixo possível sem perder qualidade, é este. A cerca de 5,38€ por mês continua a ter os mesmos canais 4K, a mesma gravação de 7 dias e o mesmo suporte por WhatsApp — por menos do que um café por semana.",
      },
    ],
    faq: [
      {
        q: "O que torna dois anos o melhor valor?",
        a: "A cerca de 5,38€ por mês é o preço mensal mais baixo que oferecemos. Face ao plano de um mês a 12,99€, poupa cerca de 182€ ao longo desses dois anos — e não mexe numa renovação durante dois anos inteiros.",
      },
      {
        q: "E se houver um problema técnico durante os dois anos?",
        a: "A sua subscrição tem suporte total durante todos os 24 meses. Se algo deixar de funcionar, o suporte por WhatsApp resolve-o consigo — manter os clientes de longo prazo satisfeitos é o objetivo de todo este plano.",
      },
      {
        q: "São adicionados novos canais durante os meus 24 meses?",
        a: "Sim. A grelha é atualizada com novos canais e conteúdos sem custo adicional, e os clientes existentes recebem-nos automaticamente — nunca há uma atualização a pagar.",
      },
      {
        q: "Vai continuar a funcionar em novos aparelhos e apps?",
        a: "Sim. O serviço usa o formato padrão M3U / Xtream Codes que todos os grandes leitores de IPTV leem, por isso à medida que surgem novos aparelhos e apps ao longo dos seus dois anos, o mesmo acesso continua a funcionar com eles.",
      },
      {
        q: "Posso comprar como presente para alguém?",
        a: "Sim. Dois anos dá um bom presente — sobretudo para familiares mais velhos que só querem TV fiável. Configuramos a subscrição e enviamos um guia simples escrito para o aparelho específico deles.",
      },
    ],
    testimonials: [
      {
        name: "Kevin O.",
        city: "Cascais",
        rating: 5,
        text: "Dois anos significam que nem penso em renovar, e a menos de cinco euros por mês é decisão fácil. A cobertura de desporto é tudo o que queria. A melhor coisa que comprei há algum tempo.",
      },
      {
        name: "Linda M.",
        city: "Évora",
        rating: 5,
        text: "Comprei isto para a minha mãe, que pagava 45€ por mês de cabo. Instalei na Smart TV dela e não nota diferença na qualidade — só que agora tem muito mais canais. Está a poupar uma pequena fortuna ao longo dos dois anos.",
      },
      {
        name: "Hassan B.",
        city: "Sintra",
        rating: 5,
        text: "Volto sempre ao plano de 24 meses — mal acaba, renovo. A variedade de canais internacionais é a melhor que encontrei e a família toda vê em conjunto. Sem quebras até agora.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
