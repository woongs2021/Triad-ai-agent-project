import Image from "next/image";
import type { AgentProfile } from "@/lib/types";

type AgentAvatarProps = {
  agent: AgentProfile;
  size?: number;
};

export function AgentAvatar({ agent, size = 40 }: AgentAvatarProps) {
  return (
    <Image
      src={agent.avatarSrc}
      alt={`${agent.name} profile`}
      width={size}
      height={size}
      className="shrink-0 rounded-full border border-white/60 object-cover"
      priority={size > 40}
    />
  );
}
