"use client";

import { GitHubRepoCard } from "@/components/socials/github-repo-card";

export function GitHubRepoCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <GitHubRepoCard className="min-w-0 max-w-full" />
    </div>
  );
}