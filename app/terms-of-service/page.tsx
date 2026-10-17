import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Termos de Serviço — IPTV Portugal | Condições de Subscrição" },
  description: "Leia os termos e condições do IPTV Portugal. Perceba os seus direitos, responsabilidades e a política de utilização aceitável do nosso serviço de streaming IPTV.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    title: "Termos de Serviço — IPTV Portugal",
    description: "Termos e condições do serviço IPTV Portugal.",
    url: `${SITE_URL}/terms-of-service`,
  },
};

export default function TermsOfService() {
  return (
    <LegalPage
      badge="Legal"
      path="/terms-of-service"
      title="Termos de Serviço"
      subtitle="Leia estes termos com atenção antes de usar o nosso serviço."
      lastUpdated="17 de outubro de 2026"
      sections={[
        {
          heading: "1. Aceitação dos Termos",
          body: "Ao subscrever ou usar o serviço IPTV Portugal, concorda em ficar vinculado a estes Termos de Serviço. Se não concordar, não use o serviço.",
        },
        {
          heading: "2. Descrição do Serviço",
          body: "O IPTV Portugal fornece um serviço de streaming de televisão por protocolo de internet (IPTV) que dá acesso a canais de TV em direto, conteúdo de vídeo a pedido e televisão em diferido pela internet. O serviço é prestado por subscrição.",
        },
        {
          heading: "3. Utilização Aceitável",
          body: [
            "O serviço destina-se apenas a uso pessoal e não comercial.",
            "Não pode revender, redistribuir nem sublicenciar o acesso ao serviço sem autorização por escrito.",
            "Não pode usar o serviço para gravar, copiar ou distribuir conteúdo protegido por direitos de autor.",
            "Não pode partilhar os seus dados de acesso com utilizadores fora do seu agregado familiar.",
            "As transmissões em simultâneo estão limitadas ao número de ligações adquiridas (1 a 4).",
            "Não pode tentar contornar quaisquer medidas de proteção técnica.",
          ],
        },
        {
          heading: "4. Subscrições e Pagamento",
          body: "As subscrições são pagas antecipadamente pelo período escolhido (1, 3, 6, 12 ou 24 meses) e pelo número de ligações (1 a 4). Não existe contrato mínimo. Todos os pagamentos são não reembolsáveis, exceto conforme descrito na nossa Política de Reembolso. Reservamo-nos o direito de alterar os preços com 30 dias de aviso.",
        },
        {
          heading: "5. Disponibilidade do Serviço",
          body: "Procuramos manter 99,9% de disponibilidade, mas não garantimos um serviço ininterrupto. Manutenções programadas, casos de força maior ou circunstâncias fora do nosso controlo podem causar interrupções temporárias. Não somos responsáveis por falhas de serviço fora do nosso controlo razoável.",
        },
        {
          heading: "6. Segurança da Conta",
          body: "É responsável por manter a confidencialidade dos seus dados de acesso. Avise-nos de imediato se suspeitar de uso não autorizado da sua conta. Não somos responsáveis por perdas resultantes de acesso não autorizado à conta.",
        },
        {
          heading: "7. Propriedade Intelectual",
          body: "Todo o conteúdo transmitido através do serviço pertence às respetivas emissoras e titulares de direitos. O IPTV Portugal não reivindica a propriedade de conteúdo de terceiros. A marca, o logótipo e o conteúdo do site IPTV Portugal são propriedade intelectual nossa. Os titulares de direitos podem reportar questões de direitos de autor ao abrigo da nossa Política DMCA.",
        },
        {
          heading: "8. Limitação de Responsabilidade",
          body: "Na máxima medida permitida por lei, o IPTV Portugal não será responsável por quaisquer danos indiretos, acidentais, especiais ou consequenciais resultantes da sua utilização do serviço. A nossa responsabilidade total perante si não excederá o valor pago nos 30 dias anteriores a qualquer reclamação.",
        },
        {
          heading: "9. Cessação",
          body: "Reservamo-nos o direito de suspender ou terminar a sua conta sem aviso se violar estes termos. Pode cancelar a sua subscrição a qualquer momento através dos nossos canais de suporte.",
        },
        {
          heading: "10. Lei Aplicável",
          body: "Estes termos são regidos e interpretados de acordo com a lei portuguesa. Quaisquer litígios ficam sujeitos à jurisdição exclusiva dos tribunais de Portugal.",
        },
      ]}
    />
  );
}
