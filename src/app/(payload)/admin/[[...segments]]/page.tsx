import type { Metadata } from "next";

import { generatePageMetadata, RootPage } from "@payloadcms/next/views";

import config from "@payload-config";

import { importMap } from "../importMap";

interface PageProps {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const normalizeSearchParams = async (
  searchParams: PageProps["searchParams"],
): Promise<{ [key: string]: string | string[] }> => {
  const resolved = await searchParams;

  return Object.fromEntries(
    Object.entries(resolved ?? {}).filter(([, value]) => value !== undefined),
  ) as { [key: string]: string | string[] };
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  return generatePageMetadata({
    config,
    params: params.then(({ segments = [] }) => ({ segments })),
    searchParams: normalizeSearchParams(searchParams),
  });
}

export default function Page({ params, searchParams }: PageProps) {
  return RootPage({
    config,
    importMap,
    params: params.then(({ segments = [] }) => ({ segments })),
    searchParams: normalizeSearchParams(searchParams),
  });
}