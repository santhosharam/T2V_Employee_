
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy loading pages to reduce initial bundle size
const Home = lazy(() => import("@/pages/Home"));
const Platform = lazy(() => import("@/pages/Platform"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Industries = lazy(() => import("@/pages/Industries"));
const Partners = lazy(() => import("@/pages/Partners"));
const Resources = lazy(() => import("@/pages/Resources"));
const About = lazy(() => import("@/pages/About"));
const RequestDemo = lazy(() => import("@/pages/RequestDemo"));
const OutcomesROI = lazy(() => import("@/pages/OutcomesROI"));
const Placeholder = lazy(() => import("@/pages/Placeholder"));
const LetUsConnect = lazy(() => import("@/pages/LetUsConnect"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const WhoItsFor = lazy(() => import("@/pages/WhoItsFor"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex h-[50vh] w-full items-center justify-center">
    <Loader2 className="h-10 w-10 animate-spin text-primary/50" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/contact" element={<RequestDemo />} />
            <Route path="/let-us-connect" element={<LetUsConnect />} />
            <Route path="/outcomes-roi" element={<OutcomesROI />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/who-its-for" element={<WhoItsFor />} />
            <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
