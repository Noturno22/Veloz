import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFab() {
  const { t } = useI18n();
  return (
    <a
      href="https://wa.me/244926599991"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("common.whatsappAria")}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-gold transition-transform hover:scale-110"
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25" />
    </a>
  );
}
