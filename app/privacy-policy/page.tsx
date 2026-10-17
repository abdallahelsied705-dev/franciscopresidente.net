import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidade — IPTV Portugal | Proteção de Dados" },
  description: "Saiba como o IPTV Portugal recolhe, usa e protege os seus dados pessoais. Damos prioridade à sua privacidade e segurança, com total transparência no tratamento de dados.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Política de Privacidade — IPTV Portugal",
    description: "Como protegemos e usamos os seus dados pessoais.",
    url: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      badge="Legal"
      path="/privacy-policy"
      title="Política de Privacidade"
      subtitle="Como recolhemos, usamos e protegemos as suas informações pessoais."
      lastUpdated="17 de outubro de 2026"
      sections={[
        {
          heading: "1. Informações Que Recolhemos",
          body: [
            "Informações de contacto: o seu nome, email e número de WhatsApp quando pede um teste, subscreve ou contacta o suporte.",
            "Informações de pagamento: processadas de forma segura pelos nossos fornecedores de pagamento. Não guardamos dados de cartão.",
            "Informações de aparelho e ligação: endereço IP, tipo de aparelho e versão da app para resolução de problemas.",
            "Dados de utilização: canais vistos e registos de ligação, usados para melhorar a qualidade do serviço.",
          ],
        },
        {
          heading: "2. Como Usamos as Suas Informações",
          body: [
            "Para fornecer e manter a sua subscrição de IPTV.",
            "Para lhe enviar comunicações relacionadas com o serviço (ativação de conta, renovações).",
            "Para resolver problemas técnicos e melhorar o nosso serviço.",
            "Para cumprir obrigações legais.",
          ],
        },
        {
          heading: "3. Partilha de Dados",
          body: "Não vendemos, trocamos nem alugamos as suas informações pessoais a terceiros. Podemos partilhar dados com prestadores de confiança que ajudam a operar o serviço (por exemplo, processadores de pagamento e fornecedores de alojamento), ao abrigo de rigorosos acordos de confidencialidade. Quando nos envia mensagem no WhatsApp, as suas mensagens são também processadas pelo WhatsApp (Meta) ao abrigo da própria política de privacidade.",
        },
        {
          heading: "4. Conservação de Dados",
          body: "Conservamos os seus dados pessoais enquanto a sua conta estiver ativa ou conforme necessário para prestar os serviços. Pode pedir a eliminação dos seus dados a qualquer momento contactando-nos.",
        },
        {
          heading: "5. Cookies",
          body: "O nosso site não usa cookies de publicidade ou de análise e não o segue noutros sites. O nosso fornecedor de alojamento regista informação técnica básica, como endereços IP, nos registos do servidor, para manter o site seguro e funcional.",
        },
        {
          heading: "6. Os Seus Direitos (RGPD)",
          body: [
            "Direito de acesso: pedir uma cópia dos dados pessoais que detemos sobre si.",
            "Direito de retificação: pedir a correção de dados incorretos.",
            "Direito ao apagamento: pedir a eliminação dos seus dados.",
            "Direito à limitação do tratamento: pedir que limitemos a forma como usamos os seus dados.",
            "Direito à portabilidade: receber os seus dados num formato portável.",
            "Direito de oposição: opor-se ao tratamento baseado nos nossos interesses legítimos.",
          ],
        },
        {
          heading: "7. Segurança",
          body: "Aplicamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso, alteração, divulgação ou destruição não autorizados. Todas as ligações ao nosso serviço são encriptadas via SSL/TLS.",
        },
        {
          heading: "8. Contacto",
          body: "Para qualquer questão de privacidade ou para exercer os seus direitos, contacte-nos em goldengateiptv@gmail.com. Responderemos no prazo de 30 dias.",
        },
      ]}
    />
  );
}
