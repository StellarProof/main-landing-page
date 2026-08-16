import { DocLayout } from "@/components/docs/doc-layout";

export default function DocsRouteLayout({ children }: { children: React.ReactNode }) {
  return <DocLayout>{children}</DocLayout>;
}
