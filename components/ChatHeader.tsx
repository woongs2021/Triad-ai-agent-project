import { agentOrder, agents } from "@/lib/agents";
import { AgentAvatar } from "@/components/AgentAvatar";

export function ChatHeader() {
  return (
    <header className="rounded-[24px] border border-white/45 bg-canvas/55 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[9px] font-semibold tracking-[0.18em] text-ink/50 uppercase">
            Triad Mentor Room
          </p>
          <h1 className="mt-1 text-[18px] font-medium tracking-[-0.02em] text-ink">
            Live UX Mentor Chat
          </h1>
        </div>
        <div className="flex -space-x-2">
          {agentOrder.map((agentId) => (
            <AgentAvatar key={agentId} agent={agents[agentId]} size={36} />
          ))}
        </div>
      </div>
    </header>
  );
}
