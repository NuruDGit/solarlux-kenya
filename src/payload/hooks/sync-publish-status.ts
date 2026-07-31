import type { CollectionBeforeChangeHook } from "payload";

interface Options {
  setPublishedAt?: boolean;
}

export const syncPublishStatus = ({
  setPublishedAt = false,
}: Options = {}): CollectionBeforeChangeHook =>
  ({ data }) => {
    const nativeStatus = data._status;

    if (nativeStatus === "published" || nativeStatus === "draft") {
      data.status = nativeStatus;
    }

    if (
      setPublishedAt &&
      nativeStatus === "published" &&
      !data.publishedAt
    ) {
      data.publishedAt = new Date().toISOString();
    }

    return data;
  };
