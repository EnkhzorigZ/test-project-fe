import { Spinner } from "@/components/ui/spinner";
import HomeScreen from "@/screens/HomeScreen";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-100 flex items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <HomeScreen />
    </Suspense>
  );
}
