import dynamic from "next/dynamic";

import PageWrapper from "@/common/components/PageWrapper";

const DynamicContent = dynamic(() => import("@/modules/homepage"), {
  loading: () => <p>Loading...</p>,
});

export default function HomePage() {
  return (
    <PageWrapper>
      <DynamicContent />
    </PageWrapper>
  );
}
