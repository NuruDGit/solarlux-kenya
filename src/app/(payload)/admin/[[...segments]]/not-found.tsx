import { NotFoundPage } from "@payloadcms/next/views";

import config from "@payload-config";

import { importMap } from "../importMap";

interface NotFoundProps {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const normalizeSearchParams = async (
  searchParams: NotFoundProps["searchParams"],
): Promise<{ [key: string]: string | string[] }> => {
  const resolved = await searchParams;

  return Object.fromEntries(
    Object.entries(resolved ?? {}).filter(([, value]) => value !== undefined),
  ) as { [key: string]: string | string[] };
};

export default function NotFound({ params, searchParams }: NotFoundProps) {
  return NotFoundPage({
    config,
    importMap,
    params: params.then(({ segments = [] }) => ({ segments })),
    searchParams: normalizeSearchParams(searchParams),
  });
}