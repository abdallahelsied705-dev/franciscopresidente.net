import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Política DMCA — IPTV Portugal | Avisos de Direitos de Autor" },
  description:
    "O IPTV Portugal respeita os direitos de propriedade intelectual. Leia a nossa política DMCA para saber como submeter um aviso de violação de direitos de autor ou uma contranotificação.",
  alternates: { canonical: `${SITE_URL}/dmca` },
  openGraph: {
    title: "Política DMCA — IPTV Portugal",
    description: "Como submeter um aviso de violação de direitos de autor ou uma contranotificação.",
    url: `${SITE_URL}/dmca`,
  },
};

export default function DmcaPolicy() {
  return (
    <LegalPage
      badge="Legal"
      path="/dmca"
      title="Política DMCA"
      subtitle="Respeitamos os direitos de propriedade intelectual de terceiros e respondemos prontamente a avisos de direitos de autor válidos."
      lastUpdated="17 de outubro de 2026"
      sections={[
        {
          heading: "O Nosso Compromisso",
          body: "O IPTV Portugal respeita os direitos de propriedade intelectual de terceiros e espera que os seus utilizadores façam o mesmo. Em conformidade com o Digital Millennium Copyright Act (DMCA) e outras leis aplicáveis, respondemos a avisos claros de alegada violação de direitos de autor e removeremos ou desativaremos o acesso a material que se verifique estar em infração.",
        },
        {
          heading: "Apresentar um Aviso de Violação de Direitos de Autor",
          body: [
            "A sua assinatura física ou eletrónica, enquanto titular dos direitos de autor ou pessoa autorizada a agir em seu nome.",
            "Identificação da obra protegida por direitos de autor que alega estar a ser violada.",
            "Identificação do material que alega estar em infração, com detalhe suficiente (como um URL) para o localizarmos.",
            "Os seus dados de contacto: nome completo, morada, número de telefone e endereço de email.",
            "Uma declaração de que acredita de boa-fé que a utilização do material não está autorizada pelo titular dos direitos, pelo seu agente ou pela lei.",
            "Uma declaração de que a informação no seu aviso é exata e, sob pena de falsas declarações, de que é o titular dos direitos ou está autorizado a agir em seu nome.",
          ],
        },
        {
          heading: "O Que Acontece a Seguir",
          body: "Assim que recebermos um aviso completo e válido, iremos analisá-lo e, quando apropriado, remover ou desativar o acesso ao material identificado. Procuramos confirmar a receção dos avisos em 48 horas. Avisos incompletos podem atrasar a nossa resposta, por isso inclua todos os itens listados acima.",
        },
        {
          heading: "Apresentar uma Contranotificação",
          body: [
            "Se acredita que o material foi removido por engano ou identificação incorreta, pode enviar-nos uma contranotificação contendo:",
            "A sua assinatura física ou eletrónica.",
            "Identificação do material que foi removido e onde aparecia antes da remoção.",
            "Uma declaração, sob pena de falsas declarações, de que acredita de boa-fé que o material foi removido em resultado de engano ou identificação incorreta.",
            "O seu nome, morada e número de telefone, e uma declaração de que aceita a jurisdição do tribunal competente e a notificação judicial da pessoa que apresentou o aviso original.",
          ],
        },
        {
          heading: "Infratores Reincidentes",
          body: "Podemos suspender ou terminar as contas de utilizadores que se verifique serem infratores reincidentes dos direitos de propriedade intelectual de terceiros.",
        },
        {
          heading: "Falsas Declarações",
          body: "Tenha em conta que declarar deliberadamente de forma falsa que um material está em infração, ou que foi removido por engano, pode torná-lo responsável por danos, incluindo custos e despesas legais. Se tiver dúvidas sobre se um material viola os seus direitos, recomendamos que procure aconselhamento jurídico antes de submeter um aviso.",
        },
        {
          heading: "Para Onde Enviar os Avisos",
          body: "Envie avisos de direitos de autor e contranotificações por email para goldengateiptv@gmail.com com o assunto \"Aviso DMCA\" ou \"Contranotificação DMCA\". Pode também contactar a nossa equipa por WhatsApp em +212 707 711 512.",
        },
      ]}
    />
  );
}
