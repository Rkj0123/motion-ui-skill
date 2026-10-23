"use client";

import { GithubContributionCard } from "@/components/socials/github-contribution";

export function GithubContributionCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <GithubContributionCard className="min-w-0 max-w-full" />
    </div>
  );
}