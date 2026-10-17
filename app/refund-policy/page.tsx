import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Política de Reembolso — IPTV Portugal | Reembolsos em 48 Horas" },
  description: "Política de reembolso do IPTV Portugal: peça reembolso em 48 horas se o serviço não funcionar como descrito, além de reembolsos proporcionais para falhas não resolvidas.",
  alternates: { canonical: `${SITE_URL}/refund-policy` },
  openGraph: {
    title: "Política de Reembolso — IPTV Portugal",
    description: "Garantia de reembolso em 48 horas se não ficar satisfeito com o serviço.",
    url: `${SITE_URL}/refund-policy`,
  },
};

export default function RefundPolicy() {
  return (
    <LegalPage
      badge="Legal"
      path="/refund-policy"
      title="Política de Reembolso"
      subtitle="Queremos que fique totalmente satisfeito. Eis como funciona o nosso processo de reembolso."
      lastUpdated="17 de outubro de 2026"
      sections={[
        {
          heading: "Primeiro o Teste Grátis",
          body: "Incentivamos fortemente todos os novos clientes a usar o nosso teste grátis de 24 horas antes de comprar uma subscrição. Isto permite-lhe testar a qualidade da transmissão, a compatibilidade do aparelho e a disponibilidade de canais antes de se comprometer. Não é preciso cartão de crédito para o teste.",
        },
        {
          heading: "Elegibilidade para Reembolso",
          body: [
            "O reembolso pode ser pedido nas 48 horas após a compra se o serviço não estiver a funcionar como descrito.",
            "Não há reembolso por mudança de ideias depois de o serviço ter sido ativado e usado.",
            "Não há reembolso se o problema for causado pela sua ligação de internet, incompatibilidade do aparelho ou não seguir as instruções de instalação.",
            "As compras de renovação são não reembolsáveis depois de ativadas.",
          ],
        },
        {
          heading: "Problemas de Serviço",
          body: "Se tiver problemas técnicos persistentes que a nossa equipa de suporte não consiga resolver em 72 horas após o reporte, tem direito a um reembolso proporcional à parte não usada da sua subscrição. Levamos a qualidade do serviço a sério e esforçar-nos-emos por resolver qualquer problema antes de um reembolso ser necessário.",
        },
        {
          heading: "Como Pedir um Reembolso",
          body: [
            "Contacte-nos em goldengateiptv@gmail.com ou por WhatsApp.",
            "Indique os dados da sua conta e uma descrição do problema.",
            "A nossa equipa analisará o seu pedido em 24 horas.",
            "Os reembolsos aprovados são processados em 5 a 10 dias úteis para o seu método de pagamento original.",
          ],
        },
        {
          heading: "Estornos (Chargebacks)",
          body: "Incentivamo-lo a contactar-nos diretamente antes de iniciar um estorno junto do seu banco ou fornecedor de pagamento. Trabalharemos para resolver qualquer problema de forma rápida e justa. Estornos fraudulentos podem resultar na suspensão permanente da conta.",
        },
        {
          heading: "Contacte-nos",
          body: "Para pedidos de reembolso ou questões de pagamento, contacte a nossa equipa de suporte em goldengateiptv@gmail.com ou por WhatsApp em +212 707 711 512. Procuramos responder em 24 horas.",
        },
      ]}
    />
  );
}
