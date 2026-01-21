
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Platform from "@/pages/Platform";
import Solutions from "@/pages/Solutions";
import Industries from "@/pages/Industries";
import Partners from "@/pages/Partners";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import RequestDemo from "@/pages/RequestDemo";
import OutcomesROI from "@/pages/OutcomesROI";
import Placeholder from "@/pages/Placeholder";
import LetUsConnect from "@/pages/LetUsConnect";
import { ContentProtection } from "@/components/ContentProtection";

import PrivacyPolicy from "@/pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <ContentProtection />
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
          <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

