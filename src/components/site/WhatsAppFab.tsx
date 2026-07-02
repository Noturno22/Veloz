import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFab() {
  const { t } = useI18n();
  return (
    <a
      href="https://wa.me/447564155651"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("common.whatsappAria")}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-gold"
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
