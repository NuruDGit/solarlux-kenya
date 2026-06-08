import { NotFoundPage } from "@payloadcms/next/views";

import config from "@payload-config";

import { importMap } from "../importMap";

interface NotFoundProps {
  params?: Promise<{ segments?: string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const normalizeSearchParams = async (
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | undefined,
): Promise<{ [key: string]: string | string[] }> => {
  const resolved = await (searchParams ?? Promise.resolve({}));

  return Object.fromEntries(
    Object.entries(resolved ?? {}).filter(([, value]) => value !== undefined),
  ) as { [key: string]: string | string[] };
};

export default function NotFound({ params, searchParams }: NotFoundProps = {}) {
  const resolvedParams = (params ?? Promise.resolve({ segments: [] })).then(
    ({ segments = [] }) => ({ segments }),
  );

  return NotFoundPage({
    config,
    importMap,
    params: resolvedParams,
    searchParams: normalizeSearchParams(searchParams),
  });
}
