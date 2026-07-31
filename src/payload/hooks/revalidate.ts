import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
  PayloadRequest,
} from "payload";

interface RevalidationTarget {
  path: string;
  type?: "layout" | "page";
}

const shouldSkipRevalidation = (context: Record<string, unknown>) =>
  context.skipRevalidation === true;

async function revalidateTargets(
  targets: RevalidationTarget[],
  req: PayloadRequest,
) {
  try {
    const { revalidatePath } = await import("next/cache");

    for (const target of targets) {
      revalidatePath(target.path, target.type);
    }
  } catch (error) {
    req.payload.logger.error({
      err: error,
      msg: `Unable to refresh public pages: ${targets.map(({ path }) => path).join(", ")}`,
    });
  }
}

export const refreshBlog: RevalidationTarget[] = [
  { path: "/blog", type: "page" },
  { path: "/blog/[slug]", type: "page" },
  { path: "/", type: "page" },
  { path: "/sitemap.xml", type: "page" },
];

export const refreshProducts: RevalidationTarget[] = [
  { path: "/products", type: "page" },
  { path: "/products/[category]", type: "page" },
  { path: "/products/[category]/[slug]", type: "page" },
  { path: "/", type: "page" },
  { path: "/sitemap.xml", type: "page" },
];

export const refreshProjects: RevalidationTarget[] = [
  { path: "/projects", type: "page" },
  { path: "/projects/[slug]", type: "page" },
  { path: "/", type: "page" },
  { path: "/sitemap.xml", type: "page" },
];

export const refreshHome: RevalidationTarget[] = [{ path: "/", type: "page" }];

export const refreshAbout: RevalidationTarget[] = [{ path: "/about", type: "page" }];

export const refreshEntireSite: RevalidationTarget[] = [
  { path: "/", type: "layout" },
  { path: "/sitemap.xml", type: "page" },
  { path: "/robots.txt", type: "page" },
];

export const createCollectionRevalidationHooks = (
  targets: RevalidationTarget[],
): {
  afterChange: CollectionAfterChangeHook[];
  afterDelete: CollectionAfterDeleteHook[];
} => ({
  afterChange: [
    async ({ context, doc, req }) => {
      if (!shouldSkipRevalidation(context)) {
        await revalidateTargets(targets, req);
      }

      return doc;
    },
  ],
  afterDelete: [
    async ({ context, doc, req }) => {
      if (!shouldSkipRevalidation(context)) {
        await revalidateTargets(targets, req);
      }

      return doc;
    },
  ],
});

export const createGlobalRevalidationHook = (
  targets: RevalidationTarget[],
): GlobalAfterChangeHook =>
  async ({ context, doc, req }) => {
    if (!shouldSkipRevalidation(context)) {
      await revalidateTargets(targets, req);
    }

    return doc;
  };
