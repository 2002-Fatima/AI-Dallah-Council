import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  redirect(`/ar/insights/${slug}`);
}