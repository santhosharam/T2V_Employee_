


const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col w-full">

            {/* PANEL 1 - PAGE HEADER */}
            <section className="w-full py-20 bg-background border-b border-border/40">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            How we collect, use, and protect your information
                        </p>
                        <p className="text-sm text-foreground/60">
                            Last Updated: January 21, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* PANEL 2 - POLICY OVERVIEW & SCOPE */}
            <section className="w-full py-16 bg-white/50 dark:bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview & Scope</h2>
                            <p className="text-foreground/80 leading-relaxed mb-4">
                                At TrustGrid ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access our enterprise SaaS platform and related services.
                            </p>
                            <p className="text-foreground/80 leading-relaxed mb-4">
                                This policy applies to all users of the TrustGrid Employee platform, including enterprise clients, their employees, and administrative users. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
                            </p>
                            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20 mt-6">
                                <h3 className="font-semibold text-foreground mb-2">Data Controller vs. Data Processor</h3>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                    For the data you provide to us as an enterprise customer for processing (such as employee records), TrustGrid acts as the <strong>Data Processor</strong>. You, the enterprise client, are the <strong>Data Controller</strong>. We process this data solely on your instructions and in accordance with our Data Processing Agreement (DPA). For account registration and billing information where we determine the purpose and means of processing, TrustGrid acts as the <strong>Data Controller</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PANEL 3 - DATA COLLECTION & USAGE */}
            <section className="w-full py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border">2. Data Collection & Usage</h2>

                        <div className="space-y-12">
                            {/* Information We Collect */}
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h3>
                                <ul className="list-disc pl-6 space-y-3 text-foreground/80">
                                    <li>
                                        <strong>Personal Information:</strong> Includes names, email addresses, job titles, and contact details provided during account creation or user onboarding.
                                    </li>
                                    <li>
                                        <strong>Business & Enterprise Data:</strong> Employee performance metrics, workflow logs, and other operational data ingested into the TrustGrid platform for analysis.
                                    </li>
                                    <li>
                                        <strong>Non-Personal & Technical Information:</strong> IP addresses, browser types, device information, and usage statistics collected automatically through log files and cookies.
                                    </li>
                                </ul>
                            </div>

                            {/* How We Use Your Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h3>
                                <p className="text-foreground/80 mb-4">We use the collected information for the following purposes:</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-medium text-foreground mb-2">Service Delivery</h4>
                                        <p className="text-sm text-foreground/70">To provide, operate, and maintain the TrustGrid Employee platform and its AI-driven features.</p>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-medium text-foreground mb-2">Support & Communication</h4>
                                        <p className="text-sm text-foreground/70">To respond to your inquiries, provide technical support, and send administrative updates.</p>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-medium text-foreground mb-2">Security & Fraud Prevention</h4>
                                        <p className="text-sm text-foreground/70">To detect and prevent unauthorized access, fraudulent activities, and security breaches.</p>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-medium text-foreground mb-2">Analytics & Improvement</h4>
                                        <p className="text-sm text-foreground/70">To analyze usage patterns and improve the functionality and performance of our services.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Basis */}
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">Legal Basis for Processing</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    We process your personal data based on one or more of the following legal grounds:
                                    <br />
                                    • <strong>Consent:</strong> When you have explicitly authorized us to process your data.
                                    <br />
                                    • <strong>Contractual Necessity:</strong> To fulfill our obligations under our service agreement with you.
                                    <br />
                                    • <strong>Legal Obligation:</strong> When we are required to comply with applicable laws.
                                    <br />
                                    • <strong>Legitimate Interests:</strong> For our business purposes, such as improving our services, provided these do not override your rights.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">Cookies & Tracking Technologies</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies help us analyze web traffic and improve your user experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PANEL 4 - RIGHTS, SECURITY & COMPLIANCE */}
            <section className="w-full py-16 bg-white/50 dark:bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border">3. Rights, Security & Compliance</h2>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">Data Protection & Security Measures</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security audits.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">Information Sharing & Disclosure</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    We do not sell your personal data. We may share information with:
                                    <br />
                                    • <strong>Service Providers:</strong> Third-party vendors who assist us in operating our platform (e.g., cloud hosting, analytics).
                                    <br />
                                    • <strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.
                                    <br />
                                    • <strong>Business Transfers:</strong> In connection with a merger, sale, or asset transfer.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">User Rights (GDPR / CCPA)</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    Depending on your location, you may have rights regarding your data, including:
                                    <br />
                                    • The right to access and receive a copy of your personal data.
                                    <br />
                                    • The right to rectify or update inaccurate information.
                                    <br />
                                    • The right to request deletion of your personal data ("Right to be Forgotten").
                                    <br />
                                    • The right to object to or restrict processing.
                                    <br />
                                    To exercise these rights, please contact our compliance team.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">Data Retention</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    We retain your personal information only for as long as necessary to fulfill the purposes set out in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">International Data Transfers</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. We take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PANEL 5 - CONTACT & ACCEPTANCE */}
            <section className="w-full py-16 bg-background border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-foreground mb-6">4. Contact & Acceptance</h2>
                        <p className="text-foreground/80 leading-relaxed mb-8">
                            By using the TrustGrid Employee platform, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our services. Your continued use of the platform following the posting of changes to this policy will be deemed your acceptance of those changes.
                        </p>

                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
                            <p className="text-foreground/80 mb-6">
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                            </p>
                            <div className="space-y-2 text-foreground">
                                <p><strong>Email:</strong> <a href="mailto:compliance@trustgrid.com" className="text-primary hover:underline">compliance@trustgrid.com</a></p>
                                <p><strong>Address:</strong> [Insert Registered Office Address], Tech Park, Silicon Valley, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
