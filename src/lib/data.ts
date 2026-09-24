export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  tagline: string;
  slogan: string;
  experienceYears: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  address: string;
  addressShort: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Pinheiro & Martins Advocacia e Assessoria Jurídica",
  shortName: "Pinheiro & Martins Advocacia",
  lawyer: "Pinheiro & Martins Advocacia",
  role: "Advocacia e Assessoria Jurídica Especializada",
  tagline: "Atendimento Jurídico Especializado, Estratégico e Humanizado",
  slogan: "Conciliando atuação consultiva e contenciosa para entregar soluções ágeis, eficazes e juridicamente seguras.",
  experienceYears: "desde 2022",
  phone: "(41) 99123-4567",
  whatsapp: "5541991234567",
  whatsappNumber: "5541991234567",
  whatsappFormatted: "(41) 99123-4567",
  whatsappUrl:
    "https://wa.me/5541991234567?text=Ol%C3%A1%2C%20Pinheiro%20%26%20Martins%20Advocacia!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  instagramUrl: "https://www.instagram.com/pinheiroemartins_advocacia/",
  instagramHandle: "@pinheiroemartins_advocacia",
  linkedinUrl: "https://www.linkedin.com/company/gpm-advocacia-assessoria-jur%C3%ADdica/about/",
  linkedinHandle: "gpm-advocacia-assessoria-jurídica",
  address: "R. Dep. Estefano Mikilita, 125 - Sl 604 - Portão, Curitiba - PR, 81070-430",
  addressShort: "R. Dep. Estefano Mikilita, 125 - Sala 604 - Portão, Curitiba/PR",
  neighborhood: "Portão",
  city: "Curitiba",
  state: "PR",
  zipCode: "81070-430",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=R.+Dep.+Estefano+Mikilita,+125+-+Port%C3%A3o,+Curitiba+-+PR,+81070-430&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Dep.+Estefano+Mikilita,+125+-+Sl+604+-+Port%C3%A3o,+Curitiba+-+PR,+81070-430",
  schedule: {
    weekdays: "Segunda a Sexta: 08:00 às 19:00",
    saturday: "Sábado: 09:00 às 16:00",
    sunday: "Plantão Online e Consultas sob agendamento prévio",
  },
};

export interface InstitutionalProfile {
  name: string;
  role: string;
  founding: string;
  location: string;
  bio: string[];
  differentials: string[];
  pillars: {
    title: string;
    description: string;
  }[];
}

export const INSTITUTIONAL_PROFILE: InstitutionalProfile = {
  name: "Pinheiro & Martins Advocacia e Assessoria Jurídica",
  role: "Sociedade de Advocacia e Assessoria Jurídica Consultiva e Contenciosa",
  founding: "Fundada em 2022 em Curitiba/PR",
  location: "Bairro Portão, Curitiba/PR • Atendimento Presencial e Digital em Todo o Brasil",
  bio: [
    "A Pinheiro & Martins Advocacia e Assessoria Jurídica é uma banca paranaense moderna, fundada em 2022 com a missão de oferecer atendimento jurídico integral, ágil e humanizado a pessoas físicas e jurídicas.",
    "Com sede física estabelecida no bairro Portão, em Curitiba/PR, o escritório atua estrategicamente nas esferas Cível, Família, Sucessões, Trabalhista, Previdenciária, do Consumidor, Bancária, Imobiliária e Tributária, combinando rigor técnico com tecnologia jurídica de ponta.",
    "Conciliamos a atuação consultiva preventiva — essencial para mitigar riscos contratuais e patrimoniais — e a atuação contenciosa combativa em todas as instâncias judiciais e administrativas, alcançando clientes em Curitiba, região metropolitana e em todo o território nacional de forma presencial e digital.",
  ],
  differentials: [
    "Atendimento Humanizado e Estratégico: análise aprofundada de cada caso com escuta empática e soluções personalizadas.",
    "Estrutura Híbrida Completa: sede física confortável no bairro Portão em Curitiba e plataforma digital segura para clientes em todo o Brasil.",
    "Atuação Multidisciplinar Integrada: sinergia entre áreas cíveis, empresariais, trabalhistas e previdenciárias para proteção patrimonial ampla.",
    "Conformidade Ética Absoluta: rigorosa observância ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do CFOAB.",
  ],
  pillars: [
    {
      title: "Missão",
      description:
        "Entregar soluções jurídicas eficazes, seguras e céleres, restabelecendo direitos e preservando o patrimônio e a harmonia de nossos clientes.",
    },
    {
      title: "Visão",
      description:
        "Ser referência em advocacia humanizada e estratégica no Paraná e em âmbito nacional, reconhecida pela excelência técnica e transparência irrestrita.",
    },
    {
      title: "Valores",
      description:
        "Ética inegociável, rigor técnico processual, transparência na comunicação, celeridade resolutiva e compromisso incondicional com a justiça.",
    },
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  category: "civil-familia" | "patrimonial-negocial" | "social-trabalhista";
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "familia",
    title: "Direito de Família & Divórcio",
    shortDesc:
      "Atuação humanizada em divórcios, partilha de bens, pensão alimentícia, guarda de filhos e dissolução de união estável.",
    iconName: "HeartHandshake",
    featured: true,
    highlightText: "Soluções consensuais céleres e defesa firme dos direitos familiares.",
    category: "civil-familia",
    coverageList: [
      "Divórcio Consensual em Cartório (Extrajudicial) e Litigioso Judicial",
      "Pensão Alimentícia: Fixação, Revisão (Aumento/Redução) e Execução por Prisão",
      "Guarda Compartilhada, Regime de Convivência e Guarda Unilateral Protetiva",
      "Dissolução de União Estável e Partilha de Bens Móveis e Imóveis",
      "Ação de Reconhecimento de Paternidade e Investigação Genética (DNA)",
      "Medidas Protetivas de Urgência e Prevenção contra Alienação Parental",
    ],
    casesSummary:
      "Priorizamos a mediação e acordos equilibrados que protejam os interesses de menores e o patrimônio do casal, atuando com discrição e sigilo processual obrigatório.",
  },
  {
    id: "sucessoes",
    title: "Direito Sucessório & Inventário",
    shortDesc:
      "Abertura de inventários judiciais e em cartório, planejamento sucessório e partilha justa de bens sem desgastes familiares.",
    iconName: "FileCheck2",
    featured: true,
    highlightText: "Transmissão patrimonial segura e desfecho ágil em partilhas de herança.",
    category: "civil-familia",
    coverageList: [
      "Inventário Extrajudicial em Cartório de Notas (Rápido, sem litígio)",
      "Inventário Judicial Contencioso com Múltiplos Herdeiros e Conflitos",
      "Planejamento Sucessório, Elaboração de Testamentos e Doações em Vida",
      "Defesa do Patrimônio Pessoal dos Herdeiros contra Dívidas do Espólio",
      "Alvará Judicial para Levantamento de Contas e Resgate de Valores de Falecidos",
      "Cálculo e Otimização do Imposto de Transmissão Causa Mortis (ITCMD)",
    ],
    casesSummary:
      "Orientamos toda a documentação cartorária e certidões necessárias para conclusão célere da herança sob o princípio da saisine, evitando a incidência de multas fiscais.",
  },
  {
    id: "civel",
    title: "Direito Civil & Contratos",
    shortDesc:
      "Segurança jurídica para relações civis, elaboração de contratos blindados, recuperação de crédito e ações indenizatórias.",
    iconName: "Scale",
    featured: true,
    highlightText: "Proteção contratual, responsabilidade civil e equilíbrio nas relações privadas.",
    category: "civil-familia",
    coverageList: [
      "Elaboração, Revisão Técnica e Blindagem de Contratos Civis e Comerciais",
      "Ações de Cobrança, Monitórias e Execução de Títulos Extrajudiciais",
      "Ações Indenizatórias por Danos Morais, Materiais e Lucros Cessantes",
      "Rescisão Contratual por Inadimplemento e Cobrança de Multas Convencionadas",
      "Notificações Extrajudiciais Preventivas e Notificação para Interrupção de Prescrição",
      "Ações de Obrigação de Fazer e Cumprimento Forçado de Contratos",
    ],
    casesSummary:
      "Estruturamos contratos claros e cláusulas protetivas personalizadas, resguardando direitos econômicos e solucionando controvérsias com sólida técnica forense.",
  },
  {
    id: "bancario",
    title: "Direito Bancário & Financeiro",
    shortDesc:
      "Defesa contra juros abusivos, cédulas de crédito bancário (CCB), busca e apreensão de veículos e leilões de imóveis.",
    iconName: "Landmark",
    featured: true,
    highlightText: "Reequilíbrio de contratos financeiros e proteção patrimonial contra abusos.",
    category: "patrimonial-negocial",
    coverageList: [
      "Ação Revisional de Cédula de Crédito Bancário (CCB), Empréstimos e Capital de Giro",
      "Expurgo de Taxas Ilícitas, Juros Abusivos e Capitalização Diária Ilegal",
      "Defesa e Reversão em Ações de Busca e Apreensão de Veículos e Frotas",
      "Sustação Liminar de Leilões Extrajudiciais de Imóveis (Alienação Fiduciária)",
      "Fraudes Financeiras, Empréstimos Não Contratados e Golpes Bancários via Pix",
      "Desbloqueio de Contas e Salários Bloqueados Indevidamente pelo Sisbajud",
    ],
    casesSummary:
      "Analisamos minuciosamente planilhas de evolução de dívidas e contratos de financiamento para restabelecer o equilíbrio contratual frente às instituições do SFN.",
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário (INSS)",
    shortDesc:
      "Concessão e restabelecimento de aposentadorias, auxílios por incapacidade e planejamento previdenciário completo.",
    iconName: "ShieldCheck",
    featured: true,
    highlightText: "Combate às negativas indevidas do INSS e garantia do melhor benefício.",
    category: "social-trabalhista",
    coverageList: [
      "Concessão e Restabelecimento de Auxílio por Incapacidade Temporária (Auxílio-Doença)",
      "Aposentadoria por Idade e Tempo de Contribuição com Aplicação das Melhores Regras",
      "Aposentadoria Especial para Atividades Insalubres e Perigosas (PPP e LTCAT)",
      "Benefício Assistencial de Prestação Continuada (BPC/LOAS) para Idosos e PCD",
      "Pensão por Morte: Habilitação de Dependentes e Revisão de Valores",
      "Planejamento Previdenciário Estratégico com Simulação de Cálculos de RMI",
    ],
    casesSummary:
      "Avaliamos o histórico contributivo no CNIS, retificamos inconsistências e ajuizamos ações previdenciárias com pedidos de perícias médicas especializadas.",
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário & Propriedade",
    shortDesc:
      "Assessoria em compra e venda de imóveis, regularização registral, usucapião, rescisão de contratos na planta e locações.",
    iconName: "Home",
    featured: true,
    highlightText: "Segurança patrimonial em transações imobiliárias e regularização de imóveis.",
    category: "patrimonial-negocial",
    coverageList: [
      "Regularização Fundiária e Ação de Usucapião Judicial e Extrajudicial em Cartório",
      "Rescisão de Contrato de Imóvel na Planta (Distrato com Restituição de Valores)",
      "Ações de Despejo por Falta de Pagamento, Revisional de Aluguel e Execuções Locatícias",
      "Due Diligence Imobiliária Completa para Prevenção de Fraudes na Compra",
      "Ações Possessórias: Reintegração, Manutenção de Posse e Interdito Proibitório",
      "Assessoria em Escrituras Públicas, Registro de Imóveis e Baixa de Hipotecas",
    ],
    casesSummary:
      "Blindamos transações imobiliárias residenciais e comerciais através de auditoria documental rigorosa, garantindo a higidez jurídica da posse e propriedade.",
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    shortDesc:
      "Reparação por negativações indevidas no SPC/Serasa, fraudes bancárias, defeitos em produtos e problemas em voos.",
    iconName: "BadgePercent",
    featured: false,
    highlightText: "Defesa enérgica contra abusos de fornecedores e reparação integral de danos.",
    category: "social-trabalhista",
    coverageList: [
      "Indenização e Cancelamento Liminar de Negativação Indevida no SPC/Serasa",
      "Fraudes Bancárias: Golpes do Pix, Clonagem de Cartão e Empréstimos Fraudulentos",
      "Problemas com Companhias Aéreas: Atrasos Graves de Voo, Cancelamento e Extravio de Bagagem",
      "Ações contra Planos de Saúde: Reversão de Negativa de Cobertura de Cirurgias e Remédios",
      "Troca ou Restituição de Valores por Vício Oculto ou Defeito em Veículos e Eletrônicos",
      "Práticas Abusivas, Venda Casada e Cobranças Indevidas de Tarifas de Serviços",
    ],
    casesSummary:
      "Aplicamos os preceitos do Código de Defesa do Consumidor com pedido de inversão do ônus da prova e busca de indenizações morais e materiais proporcionais.",
  },
  {
    id: "tributario",
    title: "Direito Tributário & Fiscal",
    shortDesc:
      "Defesa técnica em execuções fiscais, transações tributárias perante o fisco, recuperação de créditos e planejamento fiscal.",
    iconName: "Calculator",
    featured: false,
    highlightText: "Gestão do passivo tributário e proteção do patrimônio empresarial e pessoal.",
    category: "patrimonial-negocial",
    coverageList: [
      "Defesa em Execução Fiscal (PGFN, PGE e PGM) contra Penhoras e Bloqueio Sisbajud",
      "Adesão a Transações Tributárias com Redução Substancial de Multas e Juros",
      "Ações Anulatórias de Débitos Fiscais e Embargos à Execução com Suspensão de Cobrança",
      "Recuperação de Tributos Pagos Indevidamente ou a Maior (Teses Tributárias)",
      "Consultoria de Enquadramento Fiscal e Planejamento Tributário Preventivo",
      "Acompanhamento Estratégico da Transição para o Novo Sistema Tributário (Reforma Tributária)",
    ],
    casesSummary:
      "Atuamos para resguardar a saúde financeira das empresas, estancando bloqueios coativos de contas e aplicando teses tributárias consagradas nos tribunais superiores.",
  },
  {
    id: "trabalhista",
    title: "Direito do Trabalho & Emprego",
    shortDesc:
      "Atuação combativa na cobrança de horas extras, reconhecimento de vínculo de PJ fraudulento, verbas rescisórias e acidentes.",
    iconName: "Briefcase",
    featured: false,
    highlightText: "Rigor técnico e cálculos precisos para o resguardo dos direitos trabalhistas.",
    category: "social-trabalhista",
    coverageList: [
      "Cobrança de Horas Extras, Intervalos Intrajornada e Trabalho em Sobreaviso",
      "Reconhecimento de Vínculo de Emprego (Fraude de Contratação PJ / 'Pejotização')",
      "Reversão de Demissão por Justa Causa Abusiva e Rescisão Indireta do Contrato",
      "Indenizações por Assédio Moral, Perseguições e Discriminação no Trabalho",
      "Acidentes de Trabalho, Doenças Ocupacionais (Burnout, LER/DORT) e Estabilidade",
      "Cobrança de Adicional de Insalubridade e Periculosidade por Exposição a Riscos",
    ],
    casesSummary:
      "Auditamos folhas de ponto, demonstrativos de pagamento e rotinas laborais para elaborar petições com fundamentação probatória sólida e cálculos apurados.",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  takeaways: string[];
  oabDisclaimer: string;
}

export const EDUCATIONAL_TOPICS: EducationalArticle[] = [
  {
    id: "inventario-cartorio",
    number: "01",
    title: "Inventário em Cartório: Como Funciona a Partilha Extrajudicial de Bens",
    category: "Direito Sucessório",
    readTime: "4 min de leitura",
    summary:
      "Com a Lei 11.441/2007 e a jurisprudência moderna, herdeiros capazes e em consenso podem realizar a partilha em cartório de notas por escritura pública em poucos dias úteis, evitando desgastes e longos anos de litígio judicial.",
    content: [
      "O inventário extrajudicial é uma via ágil e econômica para a transmissão patrimonial após o falecimento. Para sua realização, a lei exige que todos os herdeiros sejam maiores, capazes e estejam plenamente de acordo quanto à divisão dos bens deixados pelo falecido.",
      "A presença de um advogado é obrigatória por lei e essencial para conferir certidões negativas de débitos, avaliar o valor venal dos bens e apurar corretamente o recolhimento do imposto estadual (ITCMD), prevenindo autuações fiscais.",
      "Respeitar o prazo legal de 60 dias a contar da abertura da sucessão (óbito) evita a incidência de multas pecuniárias pesadas sobre o imposto de transmissão, permitindo que os herdeiros obtenham a propriedade definitiva de forma rápida.",
    ],
    takeaways: [
      "Exige consenso unânime entre todos os herdeiros sobre a divisão dos bens.",
      "Necessária a presença obrigatória de advogado para lavratura da escritura pública.",
      "Evita multas fiscais de ITCMD ao respeitar o prazo de 60 dias da abertura da sucessão.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de esclarecimento público, em estrita observância ao Provimento 205/2021 do CFOAB.",
  },
  {
    id: "planejamento-inss",
    number: "02",
    title: "Regras de Transição da Aposentadoria: Como Escolher o Melhor Momento",
    category: "Direito Previdenciário",
    readTime: "5 min de leitura",
    summary:
      "A Reforma da Previdência (EC 103/2019) criou cinco regras de transição — incluindo pedágios de 50% e 100%, pontos e idade mínima. Cada fórmula altera radicalmente o valor da Renda Mensal Inicial.",
    content: [
      "Requerer a aposentadoria no primeiro instante sem simulação detalhada pode causar prejuízos financeiros permanentes. Em muitos casos, aguardar alguns meses sob outra regra de transição proporciona um benefício substancialmente maior por toda a vida.",
      "Períodos de atividade exercidos em condições insalubres ou perigosas (como agentes químicos, ruído ou biológicos) podem ser convertidos em tempo especial, antecipando significativamente a data da concessão.",
      "O planejamento previdenciário analisa o extrato CNIS, corrige vínculos inconsistentes e calcula a Renda Mensal Inicial exata para garantir que o segurado conquiste o melhor benefício legal a que tem direito.",
    ],
    takeaways: [
      "Aposentar-se prematuramente sem cálculo pode gerar redução definitiva do benefício.",
      "Períodos insalubres e rurais comprovados antecipam a concessão da aposentadoria.",
      "Auditoria prévia no CNIS evita concessões automáticas com prejuízo financeiro.",
    ],
    oabDisclaimer:
      "Artigo informativo e de interesse social, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "negativacao-indevida",
    number: "03",
    title: "Nome Sujo no SPC/Serasa por Cobrança Indevida ou Golpe: Quais os Direitos?",
    category: "Direito do Consumidor",
    readTime: "3 min de leitura",
    summary:
      "A inscrição indevida do nome do cidadão em órgãos de proteção ao crédito por dívidas inexistentes, contas já quitadas ou fraudes bancárias configura dano moral presumido, gerando direito à indenização.",
    content: [
      "A inclusão de dados do consumidor em cadastros de inadimplentes sem causa jurídica legítima é ilícita. A jurisprudência pacífica do Superior Tribunal de Justiça (STJ) estabelece que o dano moral, nesses casos, é presumido ('in re ipsa'), dispensando a prova do abalo psicológico.",
      "O consumidor lesado tem direito ao ajuizamento de ação com pedido de tutela de urgência (liminar) para que o juiz ordene a exclusão imediata do apontamento restritivo em até 5 dias úteis, sob pena de multa diária.",
      "Em casos de golpes do Pix ou compras não reconhecidas no cartão, as instituições bancárias respondem objetivamente pela falha na segurança do sistema (Súmula 479 do STJ), sendo compelidas à devolução dos valores debitados indevidamente.",
    ],
    takeaways: [
      "O consumidor tem direito a liminar judicial para exclusão do cadastro em até 5 dias.",
      "Os bancos respondem objetivamente por falhas de segurança em fraudes e transações via Pix.",
      "Manter comprovantes de pagamento e boletim de ocorrência acelera a reparação judicial.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "execucao-fiscal-defesa",
    number: "04",
    title: "Bloqueio de Contas em Execução Fiscal: Medidas de Defesa e Desbloqueio",
    category: "Direito Tributário",
    readTime: "5 min de leitura",
    summary:
      "Quando uma empresa ou empresário é surpreendido por bloqueios judiciais Sisbajud de contas em execuções fiscais, existem ferramentas processuais céleres para resguardar o capital de giro e estancar prejuízos.",
    content: [
      "A penhora de dinheiro via sistema eletrônico Sisbajud pode paralisar as atividades de uma empresa. Contudo, valores destinados à folha de pagamento de empregados e à subsistência pessoal possuem impenhorabilidade assegurada por lei.",
      "A defesa técnica por Exceção de Pré-Executividade permite questionar nulidades formais da Certidão de Dívida Ativa (CDA) e arguir a ocorrência de prescrição tributária ou prescrição intercorrente sem necessidade de penhora prévia de bens.",
      "Além da via contenciosa, a adesão estratégica a programas de Transação Tributária perante a PGFN ou órgãos fiscais estaduais permite repactuar o passivo com descontos de até 70% em juros e multas e parcelamentos facilitados.",
    ],
    takeaways: [
      "Valores destinados ao pagamento de salários e verbas alimentares são impenhoráveis.",
      "Dívidas fiscais paralisadas há mais de 5 anos podem sofrer prescrição intercorrente.",
      "A transação tributária permite negociar passivos fiscais com expressiva redução de juros e multas.",
    ],
    oabDisclaimer:
      "Conteúdo com finalidade estritamente pedagógica e informativa, em cumprimento às regras da OAB.",
  },
  {
    id: "divorcio-guarda",
    number: "05",
    title: "Divórcio, Guarda Compartilhada e Pensão: Entenda as Regras Fundamentais",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary:
      "As demandas de família exigem equilíbrio técnico e sensibilidade humana para preservar a dignidade das partes e garantir o superior interesse dos filhos menores.",
    content: [
      "A Emenda Constitucional 66/2010 eliminou prazos prévios de separação e a discussão de culpa para a decretação do divórcio. Hoje, qualquer dos cônjuges pode requerer a dissolução conjugal a qualquer momento.",
      "A guarda compartilhada é a regra geral da legislação civil brasileira, salvo em hipóteses justificadas de risco ou incapacidade parental. Ela assegura que ambos os genitores participem conjuntamente de decisões cruciais sobre educação, saúde e desenvolvimento dos filhos.",
      "A pensão alimentícia é fixada pelo juiz com base na necessidade concreta da criança e na capacidade econômica comprovada de quem paga, devendo ser revista sempre que houver alteração significativa na renda ou nos custos de vida.",
    ],
    takeaways: [
      "O divórcio é direito potestativo e pode ser decretado sem necessidade de consentimento do outro cônjuge.",
      "A guarda compartilhada divide responsabilidades decisórias entre ambos os pais.",
      "A pensão alimentícia pode ser revista a qualquer tempo diante de alteração das condições financeiras.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Provimento 205/2021 da OAB.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "familia-sucessoes",
    label: "Família & Sucessões",
    items: [
      {
        id: "faq-fam-1",
        question: "Qual é o prazo legal para abrir o inventário e o que acontece se passar de 60 dias?",
        answer:
          "O Código de Processo Civil estipula o prazo de 60 dias a contar do falecimento para abertura do inventário. Ultrapassado esse prazo, incide multa fiscal sobre o imposto de transmissão (ITCMD), estipulada pelas Secretarias da Fazenda estaduais. No entanto, mesmo com o prazo vencido, o inventário pode e deve ser realizado para regularizar e transferir o patrimônio aos herdeiros.",
      },
      {
        id: "faq-fam-2",
        question: "A pensão alimentícia é fixada obrigatoriamente em 30% do salário do pai ou da mãe?",
        answer:
          "Não. A legislação brasileira não prevê qualquer percentual fixo em lei. A fixação da pensão alimentícia obedece rigorosamente ao trinômio 'Necessidade (de quem recebe) - Possibilidade financeira (de quem paga) - Proporcionalidade'. O valor pode variar para mais ou para menos, considerando custos escolares, médicos, de moradia e a renda comprovada dos genitores.",
      },
      {
        id: "faq-fam-3",
        question: "Como funciona o divórcio em cartório (extrajudicial) e quanto tempo demora?",
        answer:
          "O divórcio extrajudicial é realizado perante tabelião de notas mediante escritura pública. Os requisitos fundamentais são: mútuo acordo entre os cônjuges sobre a partilha de bens e pensão, além de ausência de filhos menores ou incapazes (salvo se as questões de guarda e pensão dos filhos já tiverem sido resolvidas previamente em juízo). O procedimento é célere, costumando ser formalizado em poucos dias úteis com a assessoria do advogado.",
      },
      {
        id: "faq-fam-4",
        question: "Vou herdar as dívidas do meu pai ou familiar falecido com meu próprio dinheiro?",
        answer:
          "Não. O artigo 1.792 do Código Civil estabelece o princípio de que o herdeiro não responde por encargos superiores às forças da herança. Ou seja, as dívidas do falecido são pagas exclusivamente com o patrimônio do espólio (os bens deixados por ele). Se as dívidas superarem o patrimônio deixado, o saldo remanescente é extinto e o patrimônio pessoal dos herdeiros jamais é atingido.",
      },
    ],
  },
  {
    id: "bancario-tributario",
    label: "Bancário & Tributário",
    items: [
      {
        id: "faq-banc-1",
        question: "Como saber se o banco está cobrando juros abusivos no meu contrato ou financiamento?",
        answer:
          "A abusividade é configurada quando a taxa de juros remuneratórios contratada pelo banco supera expressivamente a taxa média de mercado divulgada pelo Banco Central do Brasil (BACEN) para a mesma modalidade e época da contratação, ou quando há cobrança de tarifas vedadas (como comissão de permanência cumulada e taxas de serviço não prestado). Uma perícia contábil identifica esses desvios e fundamenta a ação revisional.",
      },
      {
        id: "faq-banc-2",
        question: "Minha empresa recebeu notificação de Execução Fiscal com bloqueio de contas. O que fazer?",
        answer:
          "É imperativo agir de imediato com auxílio de advogado tributarista. O prazo para apresentar Exceção de Pré-Executividade ou Embargos à Execução é exíguo. É possível comprovar a impenhorabilidade de recursos essenciais para a folha de pagamento de funcionários, verificar eventuais prescrições do crédito tributário ou negociar a suspensão do bloqueio por meio de Transação Tributária ou substituição de garantia.",
      },
      {
        id: "faq-banc-3",
        question: "Uma dívida de imposto realmente caduca após 5 anos? Como funciona a prescrição?",
        answer:
          "Sim, o Fisco tem o prazo decadencial de 5 anos para lançar o tributo e o prazo prescricional de 5 anos para cobrar judicialmente a dívida ativa. Além disso, se o processo de execução fiscal permanecer paralisado sem localização de bens penhoráveis por mais de 5 anos (art. 40 da Lei 6.830/80), ocorre a prescrição intercorrente, extinguindo definitivamente a cobrança judicial do débito tributário.",
      },
    ],
  },
  {
    id: "imobiliario-consumidor",
    label: "Imobiliário & Consumidor",
    items: [
      {
        id: "faq-imob-1",
        question: "Comprei um imóvel com 'contrato de gaveta'. Como regularizar e obter a escritura definitiva?",
        answer:
          "O contrato de gaveta gera posse e direitos obrigacionais, mas não transfere a propriedade registral ('quem não registra não é dono'). Para regularizar, é possível notificar o vendedor para outorga de escritura pública ou, nos casos em que o vendedor não for localizado ou o imóvel não tiver desmembramento prévio, ingressar com Ação de Usucapião Extrajudicial em Cartório ou Ação de Adjudicação Compulsória.",
      },
      {
        id: "faq-imob-2",
        question: "Tive meu nome colocado indevidamente no SPC/Serasa por conta já paga ou fraude. Quais meus direitos?",
        answer:
          "A negativação indevida confere ao consumidor o direito ao ajuizamento imediato de ação com pedido de liminar para exclusão do apontamento restritivo em até 5 dias úteis, sob pena de multa diária, além de indenização por danos morais fixada judicialmente, cuja jurisprudência do Superior Tribunal de Justiça (STJ) considera presumida (dano in re ipsa).",
      },
      {
        id: "faq-imob-3",
        question: "Fui vítima de golpe do Pix ou compras não autorizadas no cartão. O banco é obrigado a estornar?",
        answer:
          "Conforme a Súmula 479 do STJ, as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias. Se o banco falhou no dever de segurança, autorizando transações atípicas e fora do perfil do cliente sem validação biométrica rigorosa, pode ser condenado à restituição integral dos valores.",
      },
    ],
  },
  {
    id: "previdenciario-trabalhista",
    label: "Previdenciário & Trabalhista",
    items: [
      {
        id: "faq-prev-1",
        question: "O INSS negou meu pedido de auxílio-doença ou aposentadoria. O que devo fazer agora?",
        answer:
          "A negativa administrativa do INSS é comum e não encerra suas possibilidades. É possível ingressar com Ação Judicial contra o INSS perante a Justiça Federal, onde a perícia médica e técnica é realizada por perito judicial independente nomeado pelo juiz (e não por médicos vinculados ao INSS). Caso o direito seja reconhecido, você recebe todos os valores retroativos devidos desde a data do primeiro requerimento.",
      },
      {
        id: "faq-prev-2",
        question: "Fui contratado como 'PJ' mas tinha horário obrigatório e subordinação a chefes. Tenho direitos CLT?",
        answer:
          "Sim. O Direito do Trabalho é regido pelo Princípio da Primazia da Realidade: o que vale é a rotina prática e não o papel assinado. Se você trabalhava com habitualidade, subordinação a superiores, pessoalidade e mediante remuneração fixa mensal, configura-se fraude à legislação trabalhista ('pejotização ilícita'), permitindo a cobrança judicial de 13º salário, férias + 1/3, FGTS + 40%, horas extras e aviso prévio.",
      },
      {
        id: "faq-prev-3",
        question: "Fui demitido. Até quando posso ingressar com uma ação trabalhista na Justiça?",
        answer:
          "A Constituição Federal estipula o prazo prescricional bienal: o trabalhador tem exatamente até 2 anos após a data de rescisão do contrato de trabalho para propor a Reclamação Trabalhista. Uma vez ajuizada a ação no prazo, é possível cobrar os direitos e verbas inadimplidas dos últimos 5 anos contados retroativamente a partir do protocolo da petição inicial.",
      },
    ],
  },
];

export interface ReviewItem {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    author: "Carlos E. Mendes",
    rating: 5,
    timeAgo: "há 3 meses",
    text: "A assessoria da Pinheiro & Martins na renegociação de contratos e dívidas bancárias da minha empresa foi decisiva. Atendimento sério, transparente e muito ágil.",
    source: "Google Verificado",
    details: "Empresário • Curitiba/PR",
  },
  {
    author: "Juliana R. Fonseca",
    rating: 5,
    timeAgo: "há 2 meses",
    text: "Fizemos o inventário da família em cartório com o escritório. O que achávamos que levaria anos foi resolvido com clareza em poucas semanas, sem atrito entre os herdeiros.",
    source: "Google Verificado",
    details: "Direito Sucessório • Partilha",
  },
  {
    author: "Roberto Albuquerque",
    rating: 5,
    timeAgo: "há 4 meses",
    text: "O INSS havia negado meu benefício de forma arbitrária. A equipe da Pinheiro & Martins ingressou com o processo judicial e restabeleceu meu benefício com todos os atrasados.",
    source: "Google Verificado",
    details: "Aposentado • Curitiba/PR",
  },
  {
    author: "Mariana S. Valente",
    rating: 5,
    timeAgo: "há 1 mês",
    text: "Tive meu nome colocado indevidamente no Serasa por uma fraude bancária. Conseguiram a liminar para limpar meu nome em menos de uma semana. Excelente atendimento online!",
    source: "Google Verificado",
    details: "Direito do Consumidor",
  },
  {
    author: "Thiago P. Guimarães",
    rating: 5,
    timeAgo: "há 5 meses",
    text: "Profissionais excepcionais. Fizeram todos os cálculos das minhas verbas rescisórias e horas extras não quitadas. Transparência total em cada etapa do processo.",
    source: "Google Verificado",
    details: "Trabalhador CLT • Curitiba/PR",
  },
  {
    author: "Patrícia D. Becker",
    rating: 5,
    timeAgo: "há 2 semanas",
    text: "A regularização do imóvel herdado e os contratos de locação foram conduzidos com maestria. A sede física no bairro Portão é impecável e muito bem localizada.",
    source: "Google Verificado",
    details: "Direito Imobiliário • Portão",
  },
];

export interface WorkStep {
  number: string;
  subtitle: string;
  title: string;
  description: string;
}

export const WORK_STEPS: WorkStep[] = [
  {
    number: "01",
    subtitle: "Primeiro Contato",
    title: "Atendimento & Triagem",
    description:
      "Acolhimento da sua demanda via WhatsApp ou presencialmente na sede do Portão em Curitiba, com escuta atenta e sigilo absoluto.",
  },
  {
    number: "02",
    subtitle: "Rigor Técnico",
    title: "Auditoria & Diagnóstico",
    description:
      "Exame aprofundado de documentos, contratos e certidões para traçar o melhor enquadramento legal e viabilidade econômica.",
  },
  {
    number: "03",
    subtitle: "Plano de Ação",
    title: "Estratégia & Clareza",
    description:
      "Definição da conduta jurídica — priorizando soluções extrajudiciais em cartório ou ações judiciais com pedidos liminares enérgicos.",
  },
  {
    number: "04",
    subtitle: "Defesa Ativa",
    title: "Execução & Acompanhamento",
    description:
      "Atuação contínua em todas as instâncias judiciais e administrativas, com prestação de contas transparente a cada evolução do caso.",
  },
];