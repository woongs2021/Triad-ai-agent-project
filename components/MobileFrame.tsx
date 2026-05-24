import { ChatWindow } from "@/components/ChatWindow";

export function MobileFrame() {
  return (
    <div className="h-dvh w-full overflow-hidden bg-canvas sm:h-[844px] sm:max-h-[calc(100dvh-48px)] sm:w-[430px] sm:rounded-[24px] sm:border sm:border-white/20">
      <ChatWindow />
    </div>
  );
}
