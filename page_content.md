
# File: src/pages/About.tsx

```tsx
import { LeadershipTeam } from "@/components/LeadershipTeam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, ShieldCheck, Users } from "lucide-react";

export default function About() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">TrustGrid Employee.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Our mission is to empower every organization with the intelligence to unlock the full potential of their workforce.
                </p>
            </div>

            {/* Values Section */}
            <div className="bg-slate-50 py-20 mb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-600">The principles that guide our innovation and partnership.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Trust First</h3>
                            <p className="text-gray-600">
                                We believe that workforce data is a sacred asset. Security, privacy, and ethical AI are the foundations of everything we build.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Human-Centric AI</h3>
                            <p className="text-gray-600">
                                AI should augment human potential, not replace it. We design for the people behind the data—employees, managers, and leaders.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Global Mindset</h3>
                            <p className="text-gray-600">
                                Work is global, and so are we. Our platform is built to navigate the complexity of international regulations, cultures, and languages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-20">
                <LeadershipTeam />
            </div>

            {/* CTA */}
            <div className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us on our journey</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                        Whether you are looking to transform your workforce or join our team, we'd love to hear from you.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

```

# File: src/pages/Careers.tsx

```tsx

import React, { useState } from 'react';
import { Loader2, Upload, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    role: string;
    experience: string;
    resume: File | null;
    coverNote: string;
    linkedin: string;
    portfolio: string;
    noticePeriod: string;
    workMode: string;
}

const Careers = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        role: '',
        experience: '',
        resume: null,
        coverNote: '',
        linkedin: '',
        portfolio: '',
        noticePeriod: '',
        workMode: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const roles = [
        'Engineering',
        'Product',
        'Data & AI',
        'Sales',
        'Marketing',
        'Operations',
        'Compliance',
    ];

    const experienceLevels = ['0–2', '3–5', '6–10', '10+'];

    const validateField = (name: string, value: any) => {
        let error = '';
        switch (name) {
            case 'fullName':
                if (!value.trim()) error = 'Full Name is required';
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Invalid email format';
                }
                break;
            case 'phone':
                if (!value.trim()) error = 'Phone Number is required';
                else if (!/^\+?[\d\s-]{10,}$/.test(value)) error = 'Invalid phone number';
                break;
            case 'location':
                if (!value.trim()) error = 'Current Location is required';
                break;
            case 'role':
                if (!value) error = 'Please select a role';
                break;
            case 'experience':
                if (!value) error = 'Please select your experience';
                break;
            case 'resume':
                if (!value) error = 'Resume is required';
                else {
                    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                    if (!validTypes.includes(value.type)) error = 'Only PDF, DOC, and DOCX formats are allowed';
                    else if (value.size > 5 * 1024 * 1024) error = 'File size must be less than 5MB';
                }
                break;
            case 'coverNote':
                if (!value.trim()) error = 'Cover Note is required';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let val: string | File | null = value;

        if (e.target instanceof HTMLInputElement && e.target.type === 'file' && e.target.files) {
            val = e.target.files[0];
        }

        setFormData((prev) => ({ ...prev, [name]: val }));

        const error = validateField(name, val);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        Object.keys(formData).forEach((key) => {
            // Skip optional fields for validation
            if (['linkedin', 'portfolio', 'noticePeriod', 'workMode'].includes(key)) return;
            const val = formData[key as keyof FormData];
            const error = validateField(key, val);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Import dynamically to avoid top-level failures if file issues exist
            const { submitToAirtable } = await import('@/lib/airtable');

            await submitToAirtable('Job Applications', {
                "Full Name": formData.fullName,
                "Email Address": formData.email,
                "Phone Number": formData.phone,
                "Location": formData.location,
                "Role Interest": formData.role,
                "Experience": formData.experience,
                "Cover Note": formData.coverNote,
                "LinkedIn Profile": formData.linkedin,
                "Portfolio URL": formData.portfolio,
                "Notice Period": formData.noticePeriod,
                "Work Mode": formData.workMode,
                // Resume is explicitly skipped as per user request
            });

            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                location: '',
                role: '',
                experience: '',
                resume: null,
                coverNote: '',
                linkedin: '',
                portfolio: '',
                noticePeriod: '',
                workMode: '',
            });
            setErrors({});
        } catch (error) {
            console.error("Submission Error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-xl mx-auto p-6 text-center animate-fade-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Received</h2>
                <p className="text-gray-600 mb-8">
                    Thank you for your interest in joining our team. We have received your application and will review it shortly.
                </p>
                <Button onClick={() => setSubmitStatus(null)} variant="outline">
                    Submit Another Application
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-8 animate-fade-up">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Join Our Team</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Shape the future of enterprise intelligence.
                    </p>
                </div>

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <h3 className="text-sm font-medium text-red-800">Submission Error</h3>
                            <p className="text-sm text-red-700 mt-1">There was a problem submitting your application. Please try again later.</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                placeholder="Jane Doe"
                            />
                            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                placeholder="jane@example.com"
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                placeholder="+1 (555) 000-0000"
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                                Current Location <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors ${errors.location ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                placeholder="New York, NY"
                            />
                            {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
                        </div>
                    </div>

                    {/* Role Info */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                Role / Area of Interest <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary appearance-none bg-white transition-colors ${errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Select a role</option>
                                    {roles.map((r) => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role}</p>}
                        </div>

                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                                Years of Experience <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary appearance-none bg-white transition-colors ${errors.experience ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Select experience</option>
                                    {experienceLevels.map((l) => (
                                        <option key={l} value={l}>{l} years</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience}</p>}
                        </div>
                    </div>

                    {/* Optional Info */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                                LinkedIn Profile URL <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <input
                                type="url"
                                id="linkedin"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors"
                                placeholder="https://linkedin.com/in/..."
                            />
                        </div>
                        <div>
                            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                                Portfolio / GitHub URL <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <input
                                type="url"
                                id="portfolio"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors"
                                placeholder="https://github.com/..."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-1">
                                Notice Period <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                id="noticePeriod"
                                name="noticePeriod"
                                value={formData.noticePeriod}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors"
                                placeholder="e.g. 30 days, Immediate"
                            />
                        </div>
                        <div>
                            <label htmlFor="workMode" className="block text-sm font-medium text-gray-700 mb-1">
                                Preferred Work Mode <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="workMode"
                                    name="workMode"
                                    value={formData.workMode}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary appearance-none bg-white transition-colors"
                                >
                                    <option value="">Any</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Onsite">Onsite</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Resume Upload */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                            Resume/CV <span className="text-red-500">*</span>
                        </label>
                        <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors ${errors.resume ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-primary/50'
                            }`}>
                            <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600 justify-center">
                                    <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/90 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                                        <span>Upload a file</span>
                                        <input
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            className="sr-only"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PDF, DOC, DOCX up to 5MB
                                </p>
                                {formData.resume && (
                                    <p className="text-sm text-green-600 font-medium">
                                        Selected: {formData.resume.name}
                                    </p>
                                )}
                            </div>
                        </div>
                        {errors.resume && <p className="mt-1 text-xs text-red-500">{errors.resume}</p>}
                    </div>

                    {/* Cover Note */}
                    <div>
                        <label htmlFor="coverNote" className="block text-sm font-medium text-gray-700 mb-1">
                            Short Cover Note <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="coverNote"
                            name="coverNote"
                            rows={4}
                            value={formData.coverNote}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors ${errors.coverNote ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                            placeholder="Tell us why you're a fit..."
                        />
                        {errors.coverNote && <p className="mt-1 text-xs text-red-500">{errors.coverNote}</p>}
                    </div>

                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full btn-primary-gradient"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting Application...
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Careers;

```

# File: src/pages/Home.tsx

```tsx

import { HeroSection } from "@/components/HeroSection"
import { FinalCTA } from "@/components/FinalCTA"
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { homeSections } from "@/lib/home-sections-data"

export default function Home() {
    return (
        <>
            <HeroSection />

            {/* SECTION A: T2V CoreAI */}
            <PlatformModuleSection
                id="core-ai"
                {...homeSections.coreAI}
                variant="default"
            />

            {/* SECTION B: Knowledge & Learning */}
            <PlatformModuleSection
                id="knowledge-ai"
                {...homeSections.knowledgeAI}
                variant="compact"
            />

            {/* SECTION C: Recruitment Intelligence */}
            <PlatformModuleSection
                id="recruitment-ai"
                {...homeSections.recruitmentAI}
                variant="wide"
            />

            {/* SECTION D: Compliance & Legal */}
            <PlatformModuleSection
                id="compliance-ai"
                {...homeSections.complianceAI}
                variant="stacked"
            />

            {/* SECTION E: Solutions Overview */}
            <PlatformModuleSection
                id="solutions"
                {...homeSections.solutions}
                variant="default"
            />

            <FinalCTA />
        </>
    )
}

```

# File: src/pages/Industries.tsx

```tsx
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { industriesPageData } from "@/lib/industries-content"

export default function Industries() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Built for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Industry.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Deep vertical expertise and regulation-aware intelligence for healthcare, finance, manufacturing, and beyond.
                </p>
            </div>

            <div className="space-y-20">
                {industriesPageData.map((industry) => (
                    <PlatformModuleSection
                        key={industry.id}
                        {...industry}
                    />
                ))}
            </div>
        </div>
    )
}

```

# File: src/pages/LetUsConnect.tsx

```tsx

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Building2, User, Mail, Phone, Briefcase, Loader2, AlertCircle } from "lucide-react"
import Airtable from "airtable"

export default function LetUsConnect() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        phone: "",
        employees: "",
        challenge: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY
        const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID

        console.log("Debug - API Key exists?", !!apiKey, "First char:", apiKey?.charAt(0));
        console.log("Debug - Base ID exists?", !!baseId, "First char:", baseId?.charAt(0));

        if (!apiKey || !baseId) {
            setError("Configuration Error: Airtable credentials missing.")
            setIsLoading(false)
            return
        }

        const base = new Airtable({ apiKey: apiKey }).base(baseId)

        try {
            await base('Leads').create([
                {
                    fields: {
                        "First Name": formData.firstName,
                        "Last Name": formData.lastName,
                        "Work Email": formData.email,
                        "Company Name": formData.company,
                        "Job Title": formData.jobTitle,
                        "Phone Number": formData.phone,
                        "Company Size": formData.employees,
                        "Challenge": formData.challenge,
                        "Status": "New"
                    }
                }
            ])

            setIsSuccess(true)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                jobTitle: "",
                phone: "",
                employees: "",
                challenge: ""
            })
        } catch (err: any) {
            console.error(err)
            setError(err.message || "Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="pt-24 pb-16 min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg text-center space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Thank You!</h2>
                    <p className="text-gray-600 text-lg">
                        We've received your request. One of our specialist team members will review your details and reach out shortly.
                    </p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    >
                        Submit Another Request
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Content: Value Proposition for HRs */}
                    <div className="space-y-8 pt-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                            <Building2 className="w-4 h-4" />
                            <span>For HR Leaders & People Operations</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Workforce Experience?</span>
                        </h1>

                        <p className="text-xl text-gray-600">
                            Connect with our specialized HR transformation team. whether you're looking to automate compliance, accelerate recruiting, or unify your employee data.
                        </p>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                            <h3 className="font-bold text-gray-900 text-lg">What happens next?</h3>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Customized Walkthrough</h4>
                                    <p className="text-sm text-gray-600">We'll show you exactly how our platform solves your specific challenges.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-purple-100 p-2 rounded-full text-purple-600 shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">ROI Analysis</h4>
                                    <p className="text-sm text-gray-600">Get a clear projection of time and cost savings for your organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form: HR Details */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600" />

                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Let's Connect</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400" /> First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400" /> Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" /> Work Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    type="email"
                                    className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                    placeholder="jane.doe@company.com"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-gray-400" /> Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="Acme Inc."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-gray-400" /> Job Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="CHRO / HR Manager"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-gray-400" /> Phone Number
                                    </label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Company Size</label>
                                    <select
                                        name="employees"
                                        value={formData.employees}
                                        onChange={handleChange}
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                    >
                                        <option value="" disabled>Select employees</option>
                                        <option value="1-50">1 - 50</option>
                                        <option value="51-200">51 - 200</option>
                                        <option value="201-1000">201 - 1,000</option>
                                        <option value="1000+">1,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Primary Challenge / Interest</label>
                                <select
                                    name="challenge"
                                    value={formData.challenge}
                                    onChange={handleChange}
                                    className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                >
                                    <option value="" disabled>What can we help you with?</option>
                                    <option value="recruitment">Recruitment Intelligence</option>
                                    <option value="compliance">Compliance & Legal Risk</option>
                                    <option value="data-unification">Data Unification (CoreAI)</option>
                                    <option value="knowledge">Knowledge & Learning</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    size="lg"
                                    className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg shadow-purple-200"
                                >
                                    {isLoading ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Sending...</> : "Connect with our Team"}
                                </Button>
                            </div>

                            <p className="text-xs text-gray-500 text-center px-4">
                                By submitting this form, you agree to our privacy policy and to receive communications from our team. You can unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

```

# File: src/pages/OutcomesROI.tsx

```tsx
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { outcomesRoiContent } from "@/lib/outcomes-roi-content"

export default function OutcomesROI() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Business Impact.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Real-world results, quantified value, and defensible ROI for every part of your organization.
                </p>
            </div>

            <div className="space-y-20">
                {Object.values(outcomesRoiContent).map((outcome) => (
                    <PlatformModuleSection
                        key={outcome.id}
                        {...outcome}
                    />
                ))}
            </div>
        </div>
    )
}

```

# File: src/pages/Partners.tsx

```tsx
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { partnersPageData } from "@/lib/partners-content"
import { BecomePartnerForm } from "@/components/BecomePartnerForm"

export default function Partners() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Together.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A powerful ecosystem of technology, consulting, and industry partners to accelerate your workforce transformation.
                </p>
            </div>

            <div className="space-y-20">
                {partnersPageData.map((partner) => (
                    <PlatformModuleSection
                        key={partner.id}
                        {...partner}
                    />
                ))}

                <div className="container mx-auto px-4 max-w-5xl">
                    <BecomePartnerForm />
                </div>
            </div>
        </div>
    )
}

```

# File: src/pages/Placeholder.tsx

```tsx

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8">This page is under construction as we migrate to React.</p>
            <Link to="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}

```

# File: src/pages/Platform.tsx

```tsx
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { platformModulesConfig } from "@/lib/platform-modules-config"
import { platformModulesData } from "@/lib/platform-content"

export default function Platform() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Infinite Intelligence.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    The only AI-native workforce intelligence platform built to unify data, accelerate knowledge, and drive measurable outcomes across the entire employee lifecycle.
                </p>
            </div>

            <div className="space-y-20">
                {Object.entries(platformModulesConfig).map(([key, config]) => {
                    const moduleData = platformModulesData[key as keyof typeof platformModulesData];

                    // Fallback if moduleData is missing, though it should be there based on files
                    if (!moduleData) return null;

                    return (
                        <PlatformModuleSection
                            key={key}
                            id={key}
                            {...config}
                            moduleData={moduleData}
                        />
                    )
                })}
            </div>
        </div>
    )
}

```

# File: src/pages/PrivacyPolicy.tsx

```tsx



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
                                <p><strong>Address:</strong> WeWork, 13th floor, Tin Factory, Salarpuria Magnificia, Old Madras Rd, Bengaluru, Karnataka 560016</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

```

# File: src/pages/RequestDemo.tsx

```tsx

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitToAirtable } from "@/lib/airtable"

export default function RequestDemo() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Changed state structure to match required Airtable fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        interest: "" // "Anything specific you want to see?"
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            await submitToAirtable('Demo Requests', {
                "First Name": formData.firstName,
                "Last Name": formData.lastName,
                "Business Email": formData.email,
                "Company Name": formData.company,
                "Specific Interest": formData.interest
            })

            setIsSuccess(true)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                interest: ""
            })
        } catch (err: any) {
            console.error(err)
            setError(err.message || "Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="pt-24 pb-16 min-h-[60vh] flex items-center justify-center">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg text-center space-y-6 animate-fade-up">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Demo Requested!</h2>
                    <p className="text-gray-600 text-lg">
                        Thanks for your interest. Our team will contact you shortly to schedule your personalized walkthrough.
                    </p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    >
                        Request Another Demo
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                            See TrustGrid Employee in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Action.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg">
                            Schedule a personalized demo to see how our AI-native platform can transform your workforce operations.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Unified Intelligence</h3>
                                    <p className="text-gray-600">See how we connect your HRIS, ATS, and LMS data.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Compliance Automation</h3>
                                    <p className="text-gray-600">Watch our AI predict and prevent compliance risks.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-purple-100 p-2 rounded-full text-purple-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Productivity ROI</h3>
                                    <p className="text-gray-600">Get a custom business case for your organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Request a Demo</h2>

                        {error && (
                            <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Business Email <span className="text-red-500">*</span></label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="john@company.com"
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
                                <input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Acme Inc."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Anything specific you want to see?</label>
                                <textarea
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="I'm interested in..."
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                size="lg"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md"
                            >
                                {isLoading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Scheduling...</> : "Schedule Demo"}
                            </Button>
                            <p className="text-xs text-gray-500 text-center">
                                We respect your privacy. No spam, ever.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

```

# File: src/pages/Resources.tsx

```tsx
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { resourcesPageData } from "@/lib/resources-content"

export default function Resources() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Insights for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Future of Work.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Strategic perspectives, technical guides, and industry research to help you lead with intelligence.
                </p>
            </div>

            <div className="space-y-20">
                {resourcesPageData.map((resource) => (
                    <PlatformModuleSection
                        key={resource.id}
                        {...resource}
                    />
                ))}
            </div>
        </div>
    )
}

```

# File: src/pages/Solutions.tsx

```tsx
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { solutionsPageData } from "@/lib/solutions-content"

export default function Solutions() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Every Challenge.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Tailored AI-native solutions to solve your most critical workforce challenges—from talent acquisition to retention and compliance.
                </p>
            </div>

            <div className="space-y-20">
                {solutionsPageData.map((solution) => (
                    <PlatformModuleSection
                        key={solution.id}
                        {...solution}
                    />
                ))}
            </div>
        </div>
    )
}

```

# File: src/pages/WhoItsFor.tsx

```tsx

import { ICPSection } from "@/components/ICPSection"
import { whoItsForData } from "@/lib/who-its-for-data"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WhoItsFor() {
    const { hash } = useLocation();

    // Scroll to hash on load
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div className="pt-24 pb-16 bg-slate-50/50">
            <div className="container mx-auto px-4 mb-20 text-center">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6">
                    Who We Help
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                    Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Workforce.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Whether you lead HR, IT, Compliance, or the entire business—T2V CoreAI unifies your data to solve your specific challenges.
                </p>
            </div>

            <div className="space-y-8">
                {Object.entries(whoItsForData).map(([key, config]) => {
                    return (
                        <ICPSection
                            key={key}
                            id={key}
                            {...config}
                        />
                    )
                })}
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 py-24 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to see your specific use case?</h2>
                <div className="flex justify-center gap-4">
                    <a href="/request-demo" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                        Get Custom Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

```

# File: src/lib/airtable.ts

```ts

import Airtable from "airtable";

const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

const base = new Airtable({ apiKey: apiKey }).base(baseId);

export const submitToAirtable = async (table: string, fields: Record<string, any>) => {
    if (!apiKey || !baseId) {
        console.error("Airtable configuration missing");
        throw new Error("Configuration Error: Airtable credentials missing.");
    }

    try {
        // Attempt to fetch IP address
        let ipAddress = 'Unknown';
        try {
            const ipRes = await fetch('https://api.ipify.org?format=json');
            if (ipRes.ok) {
                const ipData = await ipRes.json();
                ipAddress = ipData.ip;
            }
        } catch (e) {
            console.warn("Could not fetch IP address", e);
        }

        console.log(`[Airtable Debug] IP Address resolved to: "${ipAddress}"`);
        const timestamp = new Date().toISOString();
        console.log(`[Airtable Debug] Timestamp generated: "${timestamp}"`);

        const payload = {
            ...fields,
            "IP Address": ipAddress,
            "Client Timestamp": timestamp,
        };

        // Explicitly check keys
        console.log(`[Airtable Debug] Payload Keys:`, Object.keys(payload));
        console.log(`[Airtable Debug] Submitting to ${table} (FULL OBJECT):`, JSON.stringify(payload)); // Stringify to ensure we see everything

        const records = await base(table).create([
            {
                fields: payload
            }
        ], { typecast: true });

        console.log(`[Airtable Debug] Success:`, records.map(r => r.id));
        return true;
    } catch (error: any) {
        console.error(`[Airtable Debug] Error submitting to ${table}:`, error);
        // Log detailed error if available from Airtable
        if (error.error) console.error("[Airtable Debug] Details:", error.error);
        throw new Error(error.message || "Something went wrong sending data to Airtable.");
    }
};

```

# File: src/lib/home-sections-data.ts

```ts

import {
    Database,
    BrainCircuit,
    Layers,
    ShieldCheck,
    Cpu,
    Search,
    Sparkles,
    FileText,
    Network,
    Briefcase,
    Users,
    MessageSquare,
    DollarSign,
    Globe,
    Scale,
    Bot,
    AlertOctagon,
    Zap,
    LayoutDashboard,
    EyeOff,
    Lock
} from "lucide-react"

export const homeSections = {
    coreAI: {
        badge: "Core Platform",
        badgeIcon: Database,
        title: "T2V CoreAI",
        tagline: "The Foundation of Workforce Intelligence",
        description: "Unify fragmented HR data into a single, dynamic employee golden record. T2V CoreAI acts as the intelligent nervous system for your enterprise, connecting isolated systems into one source of truth.",
        stats: [
            { value: "99.9%", label: "Data Accuracy", explanation: "Achieved through AI-driven deduplication and validation." },
            { value: "50+", label: "Integrations", explanation: "Seamless connectors for Workday, SAP, Oracle, and more." },
            { value: "100%", label: "Audit Ready", explanation: "Full historical traceability of every data change." }
        ],
        capabilities: [
            { title: "Intelligent Ingestion", desc: "Real-time sync with HRIS, ATS, and LMS platforms.", icon: Layers },
            { title: "Identity Resolution", desc: "Probabilistic matching to merge duplicate profiles.", icon: Cpu },
            { title: "Privacy Engine", desc: "Enterprise-grade PII masking and access controls.", icon: ShieldCheck },
            { title: "Graph Linking", desc: "Maps hidden relationships between people and skills.", icon: Network }
        ],
        moduleData: {
            challenges: [
                { title: "Data Silos", points: ["Isolated HR systems causing version conflicts", "No single source of truth for decision making", "Fragmented employee history"] },
                { title: "Poor Quality", points: ["Inaccurate and outdated employee records", "Duplicate entries across regions", "Missing critical skill metadata"] }
            ],
            features: [
                { title: "Unified Data Plane", desc: "Centralized repository creating a Single Employee Golden Record." },
                { title: "Automated Governance", desc: "Role-based access & PII masking at ingestion." }
            ],
            solutions: [
                { title: "Integration Fabric", desc: "Bi-directional sync with ERP, IT, and Finance systems." },
                { title: "Executive Command", desc: "AI Copilot for strategic workforce planning." }
            ],
            outcomes: {
                operational: ["Reduced manual data entry", "Real-time workforce visibility"],
                risk: ["Stronger data governance", "Reduced compliance violations"]
            }
        },
        ctaHeadline: "Build on a Solid Foundation",
        ctaDescription: "Stop making decisions based on fragmented data. Establish a single source of truth today."
    },
    knowledgeAI: {
        badge: "Knowledge AI",
        badgeIcon: BrainCircuit,
        title: "AI Knowledge & Learning",
        tagline: "Accelerating Workforce Capability",
        description: "Transform static documents into instant answers and personalized learning. Empower your workforce with just-in-time knowledge delivery and AI-generated skill building.",
        stats: [
            { value: "30%", label: "Productivity Gain", explanation: "Employees spend less time searching, more time doing." },
            { value: "50%", label: "Faster Onboarding", explanation: "New hires reach proficiency in record time." },
            { value: "0", label: "Hallucinations", explanation: "Answers grounded strictly in your enterprise data." }
        ],
        capabilities: [
            { title: "Semantic Search", desc: "Understands intent to find answers, not just links.", icon: Search },
            { title: "Auto-Course Gen", desc: "Creates micro-learning from PDFs instantly.", icon: Sparkles },
            { title: "Skill Simulation", desc: "AI role-play scenarios for soft skills practice.", icon: Bot },
            { title: "Expert Routing", desc: "Connects queries to subject matter experts.", icon: Users }
        ],
        moduleData: {
            challenges: [
                { title: "Info Overload", points: ["Critical knowledge buried in PDFs and emails", "20% of time wasted searching for info", "Version control nightmares"] },
                { title: "Passive Learning", points: ["LMS content is boring and disconnected", "Low completion and retention rates", "Generic courses don't fit roles"] }
            ],
            features: [
                { title: "Generative Answers", desc: "Synthesizes direct answers from multiple docs." },
                { title: "Adaptive Parsers", desc: "Adjusts learning difficulty based on progress." }
            ],
            solutions: [
                { title: "Just-in-Time Learning", desc: "Surfaces knowledge within Slack/Teams workflows." },
                { title: "Vector Database", desc: "Stores semantic embeddings for instant retrieval." }
            ],
            outcomes: {
                operational: ["Instant answers for employees", "Learning in the flow of work"],
                risk: ["Consistent policy interpretation", "Ensured policy comprehension"]
            }
        },
        ctaHeadline: "Accelerate Your Workforce",
        ctaDescription: "Equip your team with the knowledge they need, exactly when they need it."
    },
    recruitmentAI: {
        badge: "Talent Acquisition",
        badgeIcon: Users,
        title: "Recruitment Intelligence",
        tagline: "Predictive, Bias-Aware Hiring",
        description: "Move from reactive hiring to proactive talent pipeline engineering. Use AI to source, screen, and engage the best candidates faster while eliminating unconscious bias.",
        stats: [
            { value: "4x", label: "Faster Hiring", explanation: "Reduce time-to-fill from months to weeks." },
            { value: "40%", label: "Cost Reduction", explanation: "Lower agency spend and operational overhead." },
            { value: "2x", label: "Diversity", explanation: "Blind screening ensures equitable hiring." }
        ],
        capabilities: [
            { title: "Smart Sourcing", desc: "Finds candidates matching deep skill profiles.", icon: Search },
            { title: "Bias Elimination", desc: "Anonymizes profiles to focus on capability.", icon: EyeOff }, // Note: EyeOff might not be imported, I will use ShieldCheck or similar if needed. Wait, EyeOff is standard lucide. I'll stick to imports.
            { title: "Interview Copilot", desc: "Real-time prompts for structured interviews.", icon: MessageSquare },
            { title: "Market Intel", desc: "Real-time data on talent supply and compensation.", icon: Globe }
        ],
        moduleData: {
            challenges: [
                { title: "Slow Process", points: ["Good candidates lost due to delays", "Time-to-fill averaging 60+ days", "Revenue loss from vacant seats"] },
                { title: "Bias Barriers", points: ["Unconscious bias in screening", "Struggling to meet DEI targets", "Homogenous teams lacking innovation"] }
            ],
            features: [
                { title: "CV Ranking", desc: "Matches skills to job context, not keywords." },
                { title: "Scheduling Agent", desc: "Auto-books times with candidates 24/7." }
            ],
            solutions: [
                { title: "Funnel Automation", desc: "Nurtures candidates from click to offer." },
                { title: "Quality Loop", desc: "Feeds new hire performance back to model." }
            ],
            outcomes: {
                operational: ["Recruiters become talent advisors", "Better candidate experience"],
                risk: ["Fair hiring practices", "Data privacy in hiring"]
            }
        },
        ctaHeadline: "Win the War for Talent",
        ctaDescription: "Hire the best people, faster and fairer. Modernize your recruiting stack."
    },
    complianceAI: {
        badge: "Governance",
        badgeIcon: Scale,
        title: "Compliance & Legal",
        tagline: "Continuous Audit Readiness",
        description: "Automate policy governance and prevent costly regulatory violations. Stay ahead of thousands of global labor law changes with predictive risk intelligence.",
        stats: [
            { value: "100%", label: "Audit Ready", explanation: "Always-on logs and evidence collection." },
            { value: "$0", label: "Fines", explanation: "Proactive prevention of non-compliance." },
            { value: "100+", label: "Coverage", explanation: "Updates for 100+ jurisdictions automatically." }
        ],
        capabilities: [
            { title: "Reg Monitor", desc: "Scans legal databases for changes globally.", icon: Globe },
            { title: "Policy Updater", desc: "Drafts policy amendments automatically.", icon: FileText },
            { title: "Risk Thermometer", desc: "Predictive score of compliance health.", icon: AlertOctagon },
            { title: "Whistleblower", desc: "Secure, anonymous channel with AI triage.", icon: Lock }
        ],
        moduleData: {
            challenges: [
                { title: "Regulatory Tsunami", points: ["Thousands of law changes annually", "Impossible to manually track updates", "Increasing fines for non-compliance"] },
                { title: "Manual Audits", points: ["Scrambling to find docs during audits", "Sampling checks miss violations", "High stress and cost"] }
            ],
            features: [
                { title: "Audit Bot", desc: "Pre-fetches evidence and answers auditor Qs." },
                { title: "Violation Alert", desc: "Real-time flag for scheduling/pay breaches." }
            ],
            solutions: [
                { title: "Global Compliance Graph", desc: "Maps internal rules to external laws." },
                { title: "Incident Management", desc: "Workflow for investigation and remediation." }
            ],
            outcomes: {
                operational: ["Automated policy governance", "Less admin time"],
                risk: ["Systematic risk reduction", "Director liability protection"]
            }
        },
        ctaHeadline: "Protect Your Enterprise",
        ctaDescription: "Don't wait for an audit to find a problem. Ensure continuous compliance."
    },
    solutions: {
        badge: "Platform Suite",
        badgeIcon: LayoutDashboard,
        title: "Solutions Overview",
        tagline: "End-to-End Workforce Orchestration",
        description: "A comprehensive suite of agents and modules designed to solve complex challenges across the entire employee lifecycle. From onboarding to offboarding, we have you covered.",
        stats: [
            { value: "11", label: "Modules", explanation: "Covering every aspect of HR and Ops." },
            { value: "1", label: "Platform", explanation: "Unified data and user experience." },
            { value: "10x", label: "Maximized ROI", explanation: "Replace point solutions with one suite." }
        ],
        capabilities: [
            { title: "Total Rewards", desc: "Optimize compensation and benefits spending.", icon: DollarSign },
            { title: "Contingent Labor", desc: "Manage contractors with full compliance.", icon: Briefcase },
            { title: "Performance", desc: "Continuous feedback and goal alignment.", icon: Zap },
            { title: "Employee Portal", desc: "Unified self-service for all requests.", icon: LayoutDashboard }
        ],
        moduleData: {
            challenges: [
                { title: "Fragmentation", points: ["Employees use 10+ different apps", "Data scattered across systems", "Poor user experience"] },
                { title: "Inefficiency", points: ["Manual handoffs between departments", "High operational costs", "Slow reaction times"] }
            ],
            features: [
                { title: "Unified Service", desc: "One portal for HR, IT, and Finance requests." },
                { title: "Cross-Module Intelligence", desc: "Data from one module powers others." }
            ],
            solutions: [
                { title: "Workforce 360", desc: "Complete view of every employee." },
                { title: "Automation Engine", desc: "Streamline workflows across the enterprise." }
            ],
            outcomes: {
                operational: ["Streamlined employee experience", "Reduced license shelfware"],
                risk: ["Standardized process execution", "Secure access gateway"]
            }
        },
        ctaHeadline: "Explore All Solutions",
        ctaDescription: "See how our integrated platform can transform your specific business functions."
    }
};

```

# File: src/lib/industries-content.ts

```ts
import {
    Stethoscope,
    Landmark,
    Factory,
    Cpu,
    ShoppingCart,
    Briefcase,
    ShieldCheck,
    Clock,
    Users,
    TrendingUp,
    FileText,
    Target,
    BarChart3,
    Zap,
    Globe,
    BookOpen,
    Lock,
    CheckCircle2,
    Scale,
    Lightbulb,
    Network,
    RefreshCw,
    Search,
    BrainCircuit
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface IndustryStat {
    value: string
    label: string
    explanation: string
}

export interface IndustryCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface IndustryData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: IndustryStat[]
    capabilities: IndustryCapability[]
    moduleData: {
        challenges: { title: string, points: string[] }[]
        features: { title: string, desc: string, icon: LucideIcon }[]
        solutions: { title: string, desc: string }[]
        outcomes: {
            stats?: { value: string, label: string }[]
            operational: string[]
            risk?: string[]
        }
    }
    ctaHeadline: string
    ctaDescription: string
    ctaButtonText: string
    ctaButtonLink: string
    secondaryCtaButtonText: string
}

export const industriesPageData: IndustryData[] = [
    {
        id: "healthcare-life-sciences",
        badge: "Healthcare & Life Sciences",
        badgeIcon: Stethoscope,
        title: "AI-Driven Workforce Intelligence for Regulated Care Environments",
        tagline: "Compliance, safety, and workforce readiness.",
        description: "Navigate patient care demands, regulatory complexity, and clinical burnout with unified workforce intelligence built for healthcare's unique challenges.",
        stats: [
            {
                value: "92%",
                label: "Compliance Accuracy",
                explanation: "Automated credential tracking ensures regulatory adherence."
            },
            {
                value: "50%",
                label: "Faster Clinical Onboarding",
                explanation: "AI-driven training accelerates time-to-floor productivity."
            },
            {
                value: "Zero",
                label: "Critical Audit Findings",
                explanation: "Continuous compliance monitoring prevents violations."
            },
            {
                value: "35%",
                label: "Reduced Safety Incidents",
                explanation: "Real-time protocol access improves patient safety."
            }
        ],
        capabilities: [
            {
                title: "Clinical Workforce Credentialing",
                desc: "Automated license and certification tracking across all staff.",
                icon: ShieldCheck
            },
            {
                title: "HIPAA-Aware Knowledge Access",
                desc: "Secure, compliant access to medical protocols and guidelines.",
                icon: Lock
            },
            {
                title: "Compliance Training Acceleration",
                desc: "Rapid deployment of regulatory training updates.",
                icon: Zap
            },
            {
                title: "Incident & Audit Readiness",
                desc: "Always-ready documentation for regulatory inspections.",
                icon: FileText
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Complexity",
                    points: ["HIPAA, FDA, and Joint Commission requirements", "Multi-state license tracking", "Constant protocol updates"]
                },
                {
                    title: "Staffing Shortages",
                    points: ["Critical nursing shortages", "High clinical burnout rates", "Slow onboarding processes"]
                },
                {
                    title: "Audit Pressure",
                    points: ["Manual compliance tracking", "Expired credential risks", "Documentation gaps"]
                }
            ],
            features: [
                { title: "T2V Vertical KnowledgeAI", desc: "Medical knowledge base with protocol intelligence.", icon: BrainCircuit },
                { title: "T2V AccelerateAI", desc: "Clinical scenario training and microlearning.", icon: Zap },
                { title: "T2V ComplyAI", desc: "Automated credential and compliance monitoring.", icon: ShieldCheck }
            ],
            solutions: [
                { title: "Regulation-Aware Knowledge", desc: "AI that understands healthcare compliance requirements." },
                { title: "Rapid Clinical Onboarding", desc: "Accelerated training for traveling and new clinical staff." },
                { title: "Predictive Compliance", desc: "Proactive alerts for expiring credentials and training." }
            ],
            outcomes: {
                operational: ["Safer patient care", "Faster staff readiness", "Reduced administrative burden"],
                risk: ["Lower compliance risk", "Audit confidence"]
            }
        },
        ctaHeadline: "Transform healthcare workforce operations",
        ctaDescription: "Deliver better patient outcomes with a workforce that is always compliant, informed, and ready.",
        ctaButtonText: "Explore Healthcare Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "banking-financial-services",
        badge: "Banking & Financial Services",
        badgeIcon: Landmark,
        title: "Workforce Intelligence for Highly Regulated Financial Institutions",
        tagline: "Compliance, security, and agility.",
        description: "Navigate complex regulations, manage conduct risk, and upskill teams for digital transformation with AI-native workforce intelligence.",
        stats: [
            {
                value: "95%",
                label: "Regulatory Accuracy",
                explanation: "Pre-trained on global financial regulations."
            },
            {
                value: "75%",
                label: "Faster Audit Preparation",
                explanation: "Automated evidence collection streamlines audits."
            },
            {
                value: "90%",
                label: "Reduced AML/KYC Violations",
                explanation: "Real-time training updates prevent compliance gaps."
            },
            {
                value: "40%",
                label: "Lower Compliance Costs",
                explanation: "Automation reduces manual compliance overhead."
            }
        ],
        capabilities: [
            {
                title: "AML & KYC Knowledge Intelligence",
                desc: "Instant access to current anti-money laundering protocols.",
                icon: Search
            },
            {
                title: "Regulatory Change Management",
                desc: "Automated policy updates when regulations change.",
                icon: RefreshCw
            },
            {
                title: "Role-Based Compliance Training",
                desc: "Targeted training for specific regulatory requirements.",
                icon: Target
            },
            {
                title: "Audit-Ready Workforce Data",
                desc: "Complete documentation for regulatory examinations.",
                icon: FileText
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Overload",
                    points: ["SEC, FINRA, Basel III requirements", "Frequent regulation changes", "Multi-jurisdiction complexity"]
                },
                {
                    title: "Audit Risk",
                    points: ["Manual evidence collection", "Incomplete training records", "Conduct risk exposure"]
                },
                {
                    title: "Talent Scarcity",
                    points: ["Digital skills gap", "Fintech transformation needs", "Retention challenges"]
                }
            ],
            features: [
                { title: "T2V Vertical KnowledgeAI", desc: "Financial regulation expertise engine.", icon: Scale },
                { title: "T2V ComplyAI", desc: "Continuous compliance monitoring and alerts.", icon: ShieldCheck },
                { title: "T2V AssessAI", desc: "Performance tracking with bias detection.", icon: BarChart3 }
            ],
            solutions: [
                { title: "Predictive Compliance", desc: "Forecast and prevent regulatory violations." },
                { title: "Skill Readiness", desc: "Rapid upskilling for digital banking transformation." },
                { title: "Conduct Risk Intelligence", desc: "Early detection of potential compliance issues." }
            ],
            outcomes: {
                operational: ["Reduced fines and penalties", "Faster audit cycles", "Better regulatory relationships"],
                risk: ["Stronger governance", "Lower legal exposure"]
            }
        },
        ctaHeadline: "Secure your financial operations",
        ctaDescription: "Build a compliant, agile workforce ready for the future of finance.",
        ctaButtonText: "Explore Financial Services Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Industry Expert"
    },
    {
        id: "manufacturing-supply-chain",
        badge: "Manufacturing & Supply Chain",
        badgeIcon: Factory,
        title: "Operational Workforce Intelligence for Safety, Quality & Scale",
        tagline: "Safety, productivity, and operational excellence.",
        description: "Drive frontline performance, preserve tribal knowledge, and ensure safety compliance across distributed manufacturing operations.",
        stats: [
            {
                value: "70%",
                label: "Fewer Safety Incidents",
                explanation: "Real-time SOP access reduces procedural errors."
            },
            {
                value: "50%",
                label: "Faster Equipment Readiness",
                explanation: "Accelerated training on new machinery and processes."
            },
            {
                value: "Higher",
                label: "First-Time Quality",
                explanation: "Consistent training improves production quality."
            },
            {
                value: "30%",
                label: "Reduced Downtime",
                explanation: "Better-trained workforce resolves issues faster."
            }
        ],
        capabilities: [
            {
                title: "Safety & SOP Knowledge",
                desc: "Voice-activated access to safety procedures on the floor.",
                icon: ShieldCheck
            },
            {
                title: "Equipment Training Acceleration",
                desc: "AR/video microlearning for machinery operation.",
                icon: Zap
            },
            {
                title: "Multi-Site Workforce Visibility",
                desc: "Unified view of skills and certifications across plants.",
                icon: Globe
            },
            {
                title: "Compliance & Incident Tracking",
                desc: "Automated OSHA and ISO compliance monitoring.",
                icon: CheckCircle2
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Safety Risk",
                    points: ["OSHA compliance requirements", "Complex safety procedures", "Incident prevention needs"]
                },
                {
                    title: "Skill Gaps",
                    points: ["Retiring workforce knowledge loss", "New equipment training needs", "Quality consistency issues"]
                },
                {
                    title: "Distributed Workforce",
                    points: ["Multi-site coordination", "Deskless worker access", "Shift handover challenges"]
                }
            ],
            features: [
                { title: "T2V AccelerateAI", desc: "Mobile-first microlearning for frontline staff.", icon: Zap },
                { title: "T2V KnowledgeAI", desc: "Tribal knowledge capture and distribution.", icon: BookOpen },
                { title: "T2V PerformAI", desc: "Production metrics linked to skill profiles.", icon: TrendingUp }
            ],
            solutions: [
                { title: "Scenario Training", desc: "Realistic simulations for safety and quality." },
                { title: "Real-Time Guidance", desc: "Instant access to SOPs and troubleshooting." },
                { title: "Knowledge Preservation", desc: "Capture expertise before it walks out the door." }
            ],
            outcomes: {
                operational: ["Safer operations", "Higher productivity", "Better quality consistency"],
                risk: ["Reduced safety incidents", "Compliance confidence"]
            }
        },
        ctaHeadline: "Empower your frontline workforce",
        ctaDescription: "Build operational excellence with intelligence that reaches every worker, on every shift.",
        ctaButtonText: "Explore Manufacturing Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "technology-software",
        badge: "Technology & Software",
        badgeIcon: Cpu,
        title: "AI-Native Workforce Intelligence for High-Velocity Tech Teams",
        tagline: "Innovation, agility, and talent retention.",
        description: "Scale engineering teams, accelerate skill development, and manage global operations in hyper-growth environments.",
        stats: [
            {
                value: "60%",
                label: "Faster Skill Ramp-Up",
                explanation: "AI-curated learning paths accelerate developer productivity."
            },
            {
                value: "Higher",
                label: "Retention Rates",
                explanation: "Career pathing and development reduce attrition."
            },
            {
                value: "Faster",
                label: "Product Delivery",
                explanation: "Better-skilled teams ship features more quickly."
            },
            {
                value: "Lower",
                label: "Hiring Dependency",
                explanation: "Internal mobility reduces external recruitment needs."
            }
        ],
        capabilities: [
            {
                title: "Skills & Capability Intelligence",
                desc: "Real-time skill graphs from code commits and projects.",
                icon: Network
            },
            {
                title: "Knowledge Acceleration",
                desc: "Automated documentation and learning from codebases.",
                icon: BookOpen
            },
            {
                title: "AI-Driven Hiring",
                desc: "Automated technical screening and candidate matching.",
                icon: Users
            },
            {
                title: "Performance Intelligence",
                desc: "Data-driven performance insights and burnout detection.",
                icon: BarChart3
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Skill Obsolescence",
                    points: ["Rapid technology changes", "Continuous learning needs", "Knowledge gaps in new tech"]
                },
                {
                    title: "Hiring Pressure",
                    points: ["Competitive talent market", "Slow recruitment processes", "High cost per hire"]
                },
                {
                    title: "Burnout Risk",
                    points: ["High-performance culture stress", "Work-life balance challenges", "Unexpected attrition"]
                }
            ],
            features: [
                { title: "T2V TalentAI", desc: "Skills inference from work artifacts.", icon: Lightbulb },
                { title: "T2V RecruitAI", desc: "Automated sourcing and technical screening.", icon: Search },
                { title: "T2V AccelerateAI", desc: "Custom learning paths for tech stack migration.", icon: Zap }
            ],
            solutions: [
                { title: "Rapid Reskilling", desc: "AI-generated courses for new technologies." },
                { title: "Internal Mobility", desc: "Match engineers to projects based on skills and interests." },
                { title: "Burnout Prevention", desc: "Early warning system for at-risk talent." }
            ],
            outcomes: {
                operational: ["Faster innovation cycles", "Agile workforce adaptation", "Better talent utilization"],
                risk: ["Reduced turnover", "Stronger culture"]
            }
        },
        ctaHeadline: "Build the team that builds the future",
        ctaDescription: "Empower your tech workforce with intelligence that scales with your ambition.",
        ctaButtonText: "Explore Tech Industry Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to a Specialist"
    },
    {
        id: "retail-consumer-goods",
        badge: "Retail & Consumer Goods",
        badgeIcon: ShoppingCart,
        title: "Scalable Workforce Intelligence for Seasonal & Distributed Teams",
        tagline: "Scale, consistency, and customer experience.",
        description: "Manage high-volume hiring, deliver consistent brand experiences, and optimize frontline performance across all locations.",
        stats: [
            {
                value: "Faster",
                label: "Seasonal Onboarding",
                explanation: "Automated hiring and training for peak periods."
            },
            {
                value: "40%",
                label: "Reduced Turnover",
                explanation: "Better engagement and career pathing retain talent."
            },
            {
                value: "Better",
                label: "Store Consistency",
                explanation: "Standardized training ensures brand alignment."
            },
            {
                value: "Lower",
                label: "Training Costs",
                explanation: "Mobile microlearning reduces training overhead."
            }
        ],
        capabilities: [
            {
                title: "High-Volume Hiring Intelligence",
                desc: "Text-based applications and automated screening.",
                icon: Users
            },
            {
                title: "Microlearning for Frontline Staff",
                desc: "Daily 2-minute lessons on products and promotions.",
                icon: Zap
            },
            {
                title: "Multi-Location Compliance",
                desc: "Wage, hour, and safety compliance across all stores.",
                icon: ShieldCheck
            },
            {
                title: "Workforce Performance Visibility",
                desc: "Sales correlation with training completion.",
                icon: BarChart3
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Seasonal Churn",
                    points: ["High turnover rates", "Rapid hiring needs", "Inconsistent service quality"]
                },
                {
                    title: "Training Scale",
                    points: ["Thousands of distributed workers", "Product knowledge updates", "Engaging Gen Z workforce"]
                },
                {
                    title: "Compliance Complexity",
                    points: ["Multi-state wage laws", "Minor employment rules", "Safety requirements"]
                }
            ],
            features: [
                { title: "T2V RecruitAI", desc: "24/7 automated hiring for seasonal peaks.", icon: Clock },
                { title: "T2V AccelerateAI", desc: "Mobile-first gamified product training.", icon: Target },
                { title: "T2V PortalAI", desc: "Instant answers for frontline questions.", icon: Search }
            ],
            solutions: [
                { title: "Rapid Enablement", desc: "Get seasonal staff productive in days, not weeks." },
                { title: "Compliance at Scale", desc: "Automated monitoring across all locations." },
                { title: "Brand Consistency", desc: "Ensure every customer gets the same great experience." }
            ],
            outcomes: {
                operational: ["Consistent customer experience", "Lower operational costs", "Higher sales per employee"],
                risk: ["Compliance confidence", "Reduced shrinkage"]
            }
        },
        ctaHeadline: "Deliver exceptional customer experiences",
        ctaDescription: "Empower your frontline teams with the knowledge and tools to represent your brand perfectly.",
        ctaButtonText: "Explore Retail Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "professional-services",
        badge: "Professional Services",
        badgeIcon: Briefcase,
        title: "Knowledge-Driven Workforce Intelligence for Client-Facing Teams",
        tagline: "Utilization, expertise, and client outcomes.",
        description: "Maximize billable hours, optimize resource allocation, and leverage collective knowledge across your professional services firm.",
        stats: [
            {
                value: "Faster",
                label: "Consultant Ramp-Up",
                explanation: "AI-generated learning from past engagements."
            },
            {
                value: "10%",
                label: "Higher Utilization",
                explanation: "Better project staffing and resource allocation."
            },
            {
                value: "Reduced",
                label: "Knowledge Loss",
                explanation: "Capture and share expertise across the firm."
            },
            {
                value: "Better",
                label: "Client Outcomes",
                explanation: "Access to firm-wide best practices and insights."
            }
        ],
        capabilities: [
            {
                title: "Expertise Capture & Sharing",
                desc: "Index all deliverables for firm-wide knowledge access.",
                icon: BookOpen
            },
            {
                title: "Utilization Intelligence",
                desc: "Project-based performance and billability tracking.",
                icon: BarChart3
            },
            {
                title: "Role-Based Knowledge Access",
                desc: "Instant access to relevant case studies and precedents.",
                icon: Search
            },
            {
                title: "Performance & Engagement Tracking",
                desc: "Continuous feedback at project milestones.",
                icon: TrendingUp
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Knowledge Silos",
                    points: ["Expertise locked in individual minds", "Reinventing solutions", "Lost institutional knowledge"]
                },
                {
                    title: "Utilization Pressure",
                    points: ["Balancing billability and development", "Resource allocation inefficiency", "Burnout risks"]
                },
                {
                    title: "Talent Retention",
                    points: ["Competing with industry for talent", "Limited career visibility", "Work-life balance challenges"]
                }
            ],
            features: [
                { title: "T2V KnowledgeAI", desc: "Semantic search across all firm deliverables.", icon: Search },
                { title: "T2V PerformAI", desc: "Project-based performance analytics.", icon: BarChart3 },
                { title: "T2V AssessAI", desc: "Continuous feedback and development tracking.", icon: Target }
            ],
            solutions: [
                { title: "Knowledge Acceleration", desc: "Make every consultant as smart as the whole firm." },
                { title: "Performance Insight", desc: "Data-driven staffing and development decisions." },
                { title: "Expertise Location", desc: "Find the right person for every client need." }
            ],
            outcomes: {
                operational: ["Higher margins", "Better delivery quality", "Faster proposal development"],
                risk: ["Reduced knowledge loss", "Improved retention"]
            }
        },
        ctaHeadline: "Unlock your firm's collective intelligence",
        ctaDescription: "Transform how your firm captures, shares, and leverages expertise for client success.",
        ctaButtonText: "Explore Professional Services Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Advisor"
    }
]

```

# File: src/lib/industry-data.ts

```ts

export const industriesData = {
    "healthcare-life-sciences": {
        slug: "healthcare-life-sciences",
        name: "Healthcare & Life Sciences",
        hero: {
            title: "AI-Native Workforce Intelligence for Healthcare & Life Sciences",
            subtitle: "Navigate patient care demands, regulatory complexity, and clinical burnout with a unified workforce intelligence platform that traditional HR systems cannot match."
        },
        landscape: {
            title: "The Workforce Challenges Facing Healthcare Today",
            description: "From hospital floors to pharmaceutical labs, the healthcare sector is under immense pressure.",
            items: [
                { title: "Clinical Burnout & Shortages", text: "Critical shortages in nursing and specialized roles are compounded by high burnout rates and turnover." },
                { title: "Strict Regulatory Burden", text: "HIPAA, FDA, GDPR, and local accreditation bodies like The Joint Commission require constant, verified compliance." },
                { title: "Rapid Knowledge Decay", text: "Medical protocols and drug interaction data change daily. Static LMS courses cannot keep up with the pace of medical science." },
                { title: "Credentialing Chaos", text: "Managing licenses, certifications, and CMEs across a large, distributed medical workforce is often manual and error-prone." }
            ]
        },
        traditionalFails: {
            title: "Why Traditional Workforce Systems Break Down in Healthcare",
            points: [
                { title: "Siloed Certifications", text: "HRIS and LMS often don't talk to credentialing systems, creating compliance gaps." },
                { title: "Static Learning", text: "Annual compliance training doesn't ensure that a nurse knows the *current* protocol for a specific procedure." },
                { title: "Reactive Governance", text: "Audits are manual and panic-driven, often discovering expired licenses too late." }
            ]
        },
        solution: {
            title: "T2V-Employee: An AI-Native Intelligence Platform for Healthcare",
            description: "T2V connects licensure data, clinical knowledge, and patient outcomes into a single intelligence loop.",
            modules: [
                { name: "CoreAI", text: "Creates a single source of truth for all clinical and non-clinical staff records across facilities." },
                { name: "KnowledgeAI", text: "Ingests medical journals, internal protocols, and FDA updates to create a living medical knowledge base." },
                { name: "ComplyAI", text: "Autonomously tracks license expirations, CME credits, and changing regulations to ensure 100% audit readiness." }
            ]
        },
        useCases: {
            title: "High-Impact Use Cases in Healthcare",
            cases: [
                { title: "Rapid Clinical Onboarding", problem: "Traveling nurses take weeks to learn facility-specific protocols.", solution: "AccelerateAI generates facility-specific microlearning from SOPs.", outcome: "60% faster time-to-floor productivity." },
                { title: "Automated Credential Monitoring", problem: "Manual tracking of thousands of licenses leads to lapses.", solution: "ComplyAI predicts expirations and auto-enrolls staff in renewed training.", outcome: "Zero lapse-related fines or suspensions." },
                { title: "Protocol Compliance Support", problem: "Staff struggle to recall complex, changing drug interactions.", solution: "PortalAI answers clinical questions in real-time at the point of care.", outcome: "40% reduction in procedural errors." },
                { title: "Biosafety Training", problem: "Lab safety protocols are dense and often ignored.", solution: "Generative simulations test safety knowledge in realistic virtual scenarios.", outcome: "95% safety audit pass rate." }
            ]
        },
        acceleration: {
            title: "Accelerating Clinical Knowledge & Capability",
            description: "In healthcare, what you don't know can hurt patients. T2V replaces 'click-through' compliance slides with AI-generated simulations and just-in-time answers.",
            points: [
                "AI-generated clinical scenarios for decision practice",
                "Instant access to drug interaction protocols via voice or text",
                "Continuous micro-assessments to verify competency, not just attendance"
            ]
        },
        compliance: {
            title: "Proactive Compliance & Clinical Safety",
            description: "Move from reactive audits to predictive compliance health.",
            points: [
                "Real-time tracking of license statuses across 50+ states/nations",
                "Automated audit trail generation for Joint Commission/FDA visits",
                "Predictive risk scoring for units with high churn or low training completion"
            ]
        },
        talent: {
            title: "Building a Future-Ready Clinical Workforce",
            description: "Predict patient volume and match it with the right skills at the right time.",
            points: [
                "Skill-based scheduling to ensure shifts have the right mix of certifications",
                "Predictive hiring based on seasonal patient census data",
                "Internal mobility paths for nurses to upskill into specialized roles"
            ]
        },
        impact: {
            title: "Quantified Business Impact for Healthcare Organizations",
            metrics: [
                { value: "3x", label: "Faster Deployment of Temporary Staff" },
                { value: "100%", label: "Audit Readiness for Licensure" },
                { value: "25%", label: "Reduction in Agency Spend via Better Retention" }
            ]
        },
        whyT2V: {
            title: "Why Leading Medical Systems Choose T2V-Employee",
            points: [
                "HIPAA & GDPR Compliant Architecture",
                "Interoperable with Epic, Cerner, and Workday",
                "Deep understanding of clinical taxonomy and workflows"
            ]
        },
        cta: {
            title: "Transform Healthcare Workforce Operations",
            text: "Deliver better patient care with a workforce that is always compliant, informed, and supported."
        }
    },

    "banking-financial-services": {
        slug: "banking-financial-services",
        name: "Banking & Financial Services",
        hero: {
            title: "AI-Native Workforce Intelligence for Banking & Finance",
            subtitle: "Secure, compliant, and agile workforce management for a sector facing rapid digital transformation and strict regulatory scrutiny."
        },
        landscape: {
            title: "The Workforce Challenges Facing Finance Today",
            description: "Financial institutions must balance extreme innovation pressure with zero-tolerance compliance.",
            items: [
                { title: "Regulatory Complexity", text: "SEC, FINRA, Basel III, and AML rules impose massive training and monitoring burdens." },
                { title: "Digital Skills Gap", text: "Traditional banks struggle to upskill staff in fintech, blockchain, and AI technologies." },
                { title: "Data Security & Insider Risk", text: "The workforce is the biggest attack vector. Managing access and behavior is a security imperative." },
                { title: "M&A Integration", text: "Frequent mergers leave banks with fragmented systems, duplicates, and cultural clashes." }
            ]
        },
        traditionalFails: {
            title: "Why Traditional Workforce Systems Break Down in Finance",
            points: [
                { title: "Check-the-Box Compliance", text: "Generic LMS training doesn't prevent behavioral breaches or insider trading." },
                { title: "Slow Policy Rollouts", text: "Updating thousands of employees on a new fed regulation takes weeks via email and webinars." },
                { title: "Opaque Risk", text: "HR data is disconnected from trading and access logs, hiding potential conduct risks." }
            ]
        },
        solution: {
            title: "T2V-Employee: An AI-Native Intelligence Platform for Finance",
            description: "T2V integrates conduct risk, learning, and performance into a unified governance fabric.",
            modules: [
                { name: "Vertical KnowledgeAI", text: "Specialized models trained on financial regulations (KYC, AML, SOX) to provide accurate guidance." },
                { name: "ComplyAI", text: "Monitors employee trade certifications and provides continuous conduct risk scoring." },
                { name: "TalentAI", text: "Identifies legacy skill sets and maps them to new digital banking roles." }
            ]
        },
        useCases: {
            title: "High-Impact Use Cases in Banking",
            cases: [
                { title: "Automated KYC Training", problem: "KYC rules change frequently; staff struggle to keep up.", solution: "KnowledgeAI pushes micro-updates to Relationship Managers immediately.", outcome: "90% reduction in KYC processing errors." },
                { title: "Insider Threat Detection", problem: "Behavioral anomalies are often missed by standard HR reviews.", solution: "AssessAI correlates performance pressure with compliance flags.", outcome: "Early intervention in 100% of high-risk cases." },
                { title: "M&A Workforce Harmonization", problem: "Merging two bank workforces is chaotic and data-heavy.", solution: "CoreAI automates role mapping and deduplication across entities.", outcome: "Integration completed in 3 months vs 12 months." },
                { title: "Branch Transformation Upskilling", problem: "Tellers need to become Universal Bankers.", solution: "AccelerateAI creates role-play simulations for advisory conversations.", outcome: "50% increase in cross-sell revenue." }
            ]
        },
        acceleration: {
            title: "Accelerating Financial Knowledge & Capability",
            description: "From wealth management to retail banking, product knowledge is the competitive edge.",
            points: [
                "Real-time 'battle cards' for new financial products generated by AI",
                "Simulated client interactions for advisory training",
                "Continuous regulatory updates delivered into the flow of work"
            ]
        },
        compliance: {
            title: "Proactive Compliance & Conduct Risk",
            description: "Compliance that is embedded, not bolted on.",
            points: [
                "Automated certification management for Series 7/63 and other licenses",
                "Predictive risk scoring based on learning behaviors and access patterns",
                "Audit-ready evidence generation for regulator inquiries"
            ]
        },
        talent: {
            title: "Building a Future-Ready Financial Workforce",
            description: "Transition from legacy banking to digital-first agility.",
            points: [
                "Identify 'Fintech-ready' talent within your existing legacy workforce",
                "Plan succession for critical risk and compliance roles",
                "Manage contractors and consultants securely with ContractAI"
            ]
        },
        impact: {
            title: "Quantified Business Impact for Financial Institutions",
            metrics: [
                { value: "40%", label: "Reduction in Compliance Training Costs" },
                { value: "Zero", label: "Regulatory Fines for Training Lapses" },
                { value: "2x", label: "Speed of New Product Rollouts" }
            ]
        },
        whyT2V: {
            title: "Why Leading Banks Choose T2V-Employee",
            points: [
                "Bank-grade security and encryption",
                "Pre-trained on global financial regulations",
                "Seamless integration with core banking and HR systems"
            ]
        },
        cta: {
            title: "Transform Financial Workforce Operations",
            text: "Build a workforce that is secure, compliant, and ready for the future of finance."
        }
    },

    "manufacturing-supply-chain": {
        slug: "manufacturing-supply-chain",
        name: "Manufacturing & Supply Chain",
        hero: {
            title: "AI-Native Workforce Intelligence for Manufacturing",
            subtitle: "Drive productivity, safety, and operational continuity with a platform built for the frontline and the factory floor."
        },
        landscape: {
            title: "The Workforce Challenges Facing Manufacturing Today",
            description: "Manufacturing faces a perfect storm of retiring experts, skill gaps, and complex safety needs.",
            items: [
                { title: "The 'Silver Tsunami'", text: "Deep tribal knowledge is walking out the door as baby boomers retire." },
                { title: "Frontline Disconnect", text: "Deskless workers often lack access to company systems, HR, and knowledge." },
                { title: "Safety & Compliance", text: "OSHA regulations and ISO standards require rigorous, constant validation." },
                { title: "Skill Variance", text: "Inconsistent training across plants leads to quality variability." }
            ]
        },
        traditionalFails: {
            title: "Why Traditional Workforce Systems Break Down in Manufacturing",
            points: [
                { title: "Not Mobile First", text: "Legacy HR tools are designed for desktops, not for the shop floor." },
                { title: "Lost Knowledge", text: "Valuable troubleshooting tips exist only in the heads of senior foremen." },
                { title: "Static Manuals", text: "Nobody reads the 500-page PDF safety manual until an accident happens." }
            ]
        },
        solution: {
            title: "T2V-Employee: An AI-Native Intelligence Platform for Manufacturing",
            description: "T2V bridges the gap between the shop floor and the top floor.",
            modules: [
                { name: "KnowledgeAI", text: "Captures tribal knowledge via voice notes and video, turning it into searchable SOPs." },
                { name: "CoreAI", text: "Unifies data across plants, shifts, and geographies." },
                { name: "AssessAI", text: "Connects production metrics to individual skill profiles to identify training needs." }
            ]
        },
        useCases: {
            title: "High-Impact Use Cases in Manufacturing",
            cases: [
                { title: "Preserving Tribal Knowledge", problem: "Senior technicians retiring with critical machine knowledge.", solution: "KnowledgeAI interviews experts and creates troubleshooting guides.", outcome: "80% reduction in knowledge loss." },
                { title: "Instant Safety Guidance", problem: "Accidents happen when procedures aren't remembered.", solution: "PortalAI enables voice-query for safety SOPs on the floor.", outcome: "35% reduction in reportable incidents." },
                { title: "Shift Handovers", problem: "Information is lost between shift changes.", solution: "T2V summarizes shift logs and highlights critical issues automatically.", outcome: "Seamless operational continuity." },
                { title: "Upskilling Operators", problem: "New machines require new skills quickly.", solution: "AccelerateAI generates AR/video microlearning from vendor manuals.", outcome: "Ramp-up time reduced by 50%." }
            ]
        },
        acceleration: {
            title: "Accelerating Frontline Knowledge & Capability",
            description: "Put the power of AI in the hands of every worker, on every device.",
            points: [
                "Mobile-first microlearning for downtime moments",
                "Video-based SOP creation and consumption",
                "Language translation for diverse global plant workforces"
            ]
        },
        compliance: {
            title: "Proactive Safety & EHS Compliance",
            description: "Safety is not a checklist; it's a culture driven by intelligence.",
            points: [
                "Automated tracking of safety certifications and refresher needs",
                "Predictive accident risk analysis based on fatigue and training data",
                "Instant incident reporting and workflow resolution"
            ]
        },
        talent: {
            title: "Building a Future-Ready Manufacturing Workforce",
            description: "Close the skills gap before it stops the line.",
            points: [
                "Map skills required for Industry 4.0 automation",
                "identify and train high-potential operators for leadership",
                "Manage contingent labor for peak seasons effectively"
            ]
        },
        impact: {
            title: "Quantified Business Impact for Manufacturers",
            metrics: [
                { value: "15%", label: "Increase in Overall Equipment Effectiveness (OEE)" },
                { value: "30%", label: "Reduction in Onboarding Time" },
                { value: "50%", label: "Reduction in Safety Incident Costs" }
            ]
        },
        whyT2V: {
            title: "Why Leading Manufacturers Choose T2V-Employee",
            points: [
                "Works offline and on mobile devices",
                "Handles complex union and shift rules",
                "Scales from single plant to global supply chain"
            ]
        },
        cta: {
            title: "Transform Manufacturing Workforce Operations",
            text: " empower your frontline with the intelligence they need to build the future."
        }
    },

    "technology-software": {
        slug: "technology-software",
        name: "Technology & Software",
        hero: {
            title: "AI-Native Workforce Intelligence for Tech Companies",
            subtitle: "Scale engineering teams, retain top talent, and manage global compliance in a hyper-growth environment."
        },
        landscape: {
            title: "The Workforce Challenges Facing Tech Today",
            description: "The tech sector moves fast, and its workforce challenges are centered on speed, skills, and retention.",
            items: [
                { title: "Hyper-Competition for Talent", text: "Attracting and retaining elite engineering and product talent is a constant war." },
                { title: "Skill Obsolescence", text: "The half-life of a technical skill is less than 2.5 years. Continuous learning is survival." },
                { title: "Remote & Global Teams", text: "Managing culture, compliance, and payroll across 20+ countries is the norm." },
                { title: "Burnout Risk", text: "High-performance cultures often lead to burnout and attrition if not monitored." }
            ]
        },
        traditionalFails: {
            title: "Why Traditional Workforce Systems Break Down in Tech",
            points: [
                { title: "Clunky UX", text: "Tech employees expect consumer-grade software. Legacy HR tools frustrate them." },
                { title: "Generic L&D", text: "Standard learning libraries don't have the bleeding-edge tech courses engineers need." },
                { title: "Slow Hiring", text: "Manual recruitment processes lose candidates to faster competitors." }
            ]
        },
        solution: {
            title: "T2V-Employee: An AI-Native Intelligence Platform for Tech",
            description: "A platform as advanced as the products you build.",
            modules: [
                { name: "TalentAI", text: "Infers skills from GitHub commits and Jira tickets to create real-time skill graphs." },
                { name: "RecruitAI", text: "Automates sourcing and technical screening to hire the best, faster." },
                { name: "PortalAI", text: "Provides a frictionless, chat-based employee experience for IT and HR requests." }
            ]
        },
        useCases: {
            title: "High-Impact Use Cases in Tech",
            cases: [
                { title: "Developer Onboarding", problem: "It takes months for new devs to understand the codebase.", solution: "KnowledgeAI ingests docs and repo history to answer 'how does this service work?'", outcome: "Time-to-first-commit reduced by 40%." },
                { title: "Tech Stack Migration", problem: "Moving from Java to Go requires massive reskilling.", solution: "AccelerateAI creates custom coding paths and challenges.", outcome: "Successful migration with 90% internal talent." },
                { title: "Global Contractor Management", problem: "Paying and managing contractors in 50 countries is a legal nightmare.", solution: "ContractAI handles contracts, tax forms, and payments compliantly.", outcome: "Risk-free global expansion." },
                { title: "Burnout Prediction", problem: "Key engineers leave unexpectedly due to stress.", solution: "AssessAI analyzes work patterns to flag burnout risk early.", outcome: "20% improvement in top-talent retention." }
            ]
        },
        acceleration: {
            title: "Accelerating Technical Knowledge & Capability",
            description: "Keep your engineering team on the bleeding edge.",
            points: [
                "AI-curated learning paths for new languages and frameworks",
                "Automated documentation generation from code",
                "Peer-to-peer knowledge sharing marketplace"
            ]
        },
        compliance: {
            title: "Proactive Compliance for Global Teams",
            description: "Scale globally without breaking local laws.",
            points: [
                "Automated IP assignment tracking",
                "Global employment law monitoring",
                "SOC2 and ISO 27001 training compliance automation"
            ]
        },
        talent: {
            title: "Building a Future-Ready Tech Workforce",
            description: "Align your talent strategy with your product roadmap.",
            points: [
                "Predictive hiring needs based on product timeline",
                "Internal gig marketplace for short-term projects",
                "Bias-free performance reviews based on data, not opinion"
            ]
        },
        impact: {
            title: "Quantified Business Impact for Tech Companies",
            metrics: [
                { value: "50%", label: "Faster Hiring Cycle Time" },
                { value: "$20k", label: "Saved per Hire vs Agency Fees" },
                { value: "15pts", label: "Increase in Employee NPS" }
            ]
        },
        whyT2V: {
            title: "Why Leading Tech Companies Choose T2V-Employee",
            points: [
                "API-first architecture for custom integrations",
                "Developer-friendly user experience",
                "Supports rapid, agile organizational changes"
            ]
        },
        cta: {
            title: "Transform Tech Workforce Operations",
            text: "Build the team that builds the future, with intelligence at the core."
        }
    },

    "retail-consumer-goods": {
        slug: "retail-consumer-goods",
        name: "Retail & Consumer Goods",
        hero: {
            title: "AI-Native Workforce Intelligence for Retail",
            subtitle: "Optimize store performance, manage high-volume hiring, and deliver exceptional customer experiences."
        },
        landscape: {
            title: "The Workforce Challenges Facing Retail Today",
            description: "Retail runs on thin margins and high turnover. Efficiency and experience are everything.",
            items: [
                { title: "High Turnover", text: "Constant hiring and training cycles drain resources and impact service quality." },
                { title: "Seasonal Volatility", text: "Scaling the workforce up and down for holidays requires massive agility." },
                { title: "Brand Consistency", text: "Ensuring every associate in every store knows the latest product details." },
                { title: "Distributed Operations", text: "Managing thousands of decentralized locations effectively." }
            ]
        },
        traditionalFails: {
            title: "Why Traditional Workforce Systems Break Down in Retail",
            points: [
                { title: "Slow Hiring", text: "Lengthy applications turn away Gen Z candidates." },
                { title: "Boring Training", text: "Long videos don't engage young associates or help them sell." },
                { title: "Disconnected Data", text: "POS sales data isn't linked to scheduling or training." }
            ]
        },
        solution: {
            title: "T2V-Employee: An AI-Native Intelligence Platform for Retail",
            description: "Turn every store associate into a top performer.",
            modules: [
                { name: "RecruitAI", text: "Text-based applying and automated scheduling for high-volume hiring." },
                { name: "AccelerateAI", text: "Daily 2-minute microlearning on new products and promotions." },
                { name: "PerformAI", text: "Correlates training completion with sales per hour." }
            ]
        },
        useCases: {
            title: "High-Impact Use Cases in Retail",
            cases: [
                { title: "Seasonal Ramp-Up", problem: "Hiring 5,000 temp staff for the holidays.", solution: "RecruitAI automates screening and scheduling 24/7.", outcome: "Staffed up 2 weeks faster than competition." },
                { title: "Product Launch Training", problem: "New collection drops Friday; staff don't know the features.", solution: "Mobile-first video quizzes pushed to everyone Thursday night.", outcome: "Record-breaking launch weekend sales." },
                { title: "Loss Prevention", problem: "Shrinkage is increasing due to process errors.", solution: "Targeted microlearning on cash handling for high-risk stores.", outcome: "15% reduction in shrinkage." },
                { title: "Manager Assessment", problem: "Promoting great sellers to bad managers.", solution: "AssessAI evaluates leadership potential, not just sales numbers.", outcome: "Lower manager turnover and better store morale." }
            ]
        },
        acceleration: {
            title: "Accelerating Retail Knowledge & Capability",
            description: "Training that fits on a phone and happens on the floor.",
            points: [
                "Gamified product knowledge quizzes",
                "Role-play scenarios for handling difficult customers",
                "Instant access to inventory and policy answers"
            ]
        },
        compliance: {
            title: "Proactive Compliance for Distributed Teams",
            description: "Protect the brand across every location.",
            points: [
                "Wage and hour compliance monitoring",
                "Minor employment law checks",
                "Standardized harassment and safety training"
            ]
        },
        talent: {
            title: "Building a Future-Ready Retail Workforce",
            description: "Create career paths that retain your best people.",
            points: [
                "Map paths from store associate to corporate roles",
                "Identify regional talent pools for expansion",
                "Flexible scheduling optimization"
            ]
        },
        impact: {
            title: "Quantified Business Impact for Retailers",
            metrics: [
                { value: "20%", label: "Increase in Sales Per Employee" },
                { value: "40%", label: "Reduction in 90-Day Turnover" },
                { value: "90%", label: "Faster Time-to-Productivity" }
            ]
        },
        whyT2V: {
            title: "Why Leading Retailers Choose T2V-Employee",
            points: [
                "Mobile-first design for deskless workers",
                "Volume-tested for thousands of concurrent users",
                "Engaging, consumer-like user interface"
            ]
        },
        cta: {
            title: "Transform Retail Workforce Operations",
            text: "Deliver the customer experience your brand promises, starting with your people."
        }
    },

    "professional-services": {
        slug: "professional-services",
        name: "Professional Services",
        hero: {
            title: "AI-Native Workforce Intelligence for Professional Services",
            subtitle: "Maximize billability, optimize resource allocation, and retain top talent in a knowledge-driven economy."
        },
        landscape: {
            title: "The Workforce Challenges Facing Services Today",
            description: "In consulting, legal, and accounting, your people are your product. Optimization is key to margin.",
            items: [
                { title: "Utilization Pressure", text: "Balancing high billable hours with training and burnout prevention." },
                { title: "Skill Visibility", text: "Knowing exactly who has the niche skill needed for a new client project." },
                { title: "Knowledge Management", text: "Stopping the wheel from being reinvented on every engagement." },
                { title: "Talent War", text: "Competing with tech and industry for the same pool of experts." }
            ]
        },
        traditionalFails: {
            title: "Why Traditional Workforce Systems Break Down in Services",
            points: [
                { title: "Resume Black Holes", text: "Internal skills data is locked in old resumes, not searchable live data." },
                { title: "Disconnected Resource Planning", text: "Staffing happens on spreadsheets, disconnected from actual skills or availability." },
                { title: "Lost IP", text: "Project deliverables are filed away and never leveraged again." }
            ]
        },
        solution: {
            title: "T2V-Employee: An AI-Native Intelligence Platform for Services",
            description: "Optimize your most valuable asset: your people's time and minds.",
            modules: [
                { name: "TalentAI", text: "Dynamic skills ontology that updates based on project work." },
                { name: "KnowledgeAI", text: "Indexes every deliverable to make the firm's collective brain searchable." },
                { name: "PerformAI", text: "Project-based performance feedback and utilization analytics." }
            ]
        },
        useCases: {
            title: "High-Impact Use Cases in Professional Services",
            cases: [
                { title: "Intelligent Staffing", problem: "Finding the right expert for a bid takes days.", solution: "TalentAI matches consultants to projects based on skills and availability instantly.", outcome: "30% faster proposal turnaround." },
                { title: "Just-in-Time Upskilling", problem: "Consultants need to learn a new regulation before a project starts.", solution: "AccelerateAI generates a crash course from the firm's best past work.", outcome: "Billable immediately on day 1." },
                { title: "Alumni Network Engagement", problem: "Losing touch with former employees who become clients.", solution: "RecruitAI maintains an active alumni community talent pool.", outcome: "15% of new business from alumni referrals." },
                { title: "Feedback Culture", problem: "Annual reviews don't capture project nuances.", solution: "AssessAI prompts for micro-feedback at project milestones.", outcome: "Continuous growth and higher retention." }
            ]
        },
        acceleration: {
            title: "Accelerating Consultant Knowledge & Capability",
            description: "Make every consultant as smart as the whole firm.",
            points: [
                "Semantic search across all past proposals and deliverables",
                "Automated case study generation",
                "Expertise location—find the person who knows X"
            ]
        },
        compliance: {
            title: "Proactive Compliance & Independence",
            description: "Manage conflicts of interest and regulatory requirements effortlessly.",
            points: [
                "Automated independence checking for audit firms",
                "CPE/CLE credit tracking and reporting",
                "Client data confidentiality training and monitoring"
            ]
        },
        talent: {
            title: "Building a Future-Ready Services Workforce",
            description: "Attract, develop, and retain the best minds.",
            points: [
                "Transparent career pathing based on skill acquisition",
                "Flexible work models to retain top parents and seniors",
                "Meritocratic advancement based on unbiased performance data"
            ]
        },
        impact: {
            title: "Quantified Business Impact for Service Firms",
            metrics: [
                { value: "10%", label: "Increase in Billable Utilization" },
                { value: "25%", label: "Reduction in Research Time" },
                { value: "50%", label: "Faster Skill Deployment" }
            ]
        },
        whyT2V: {
            title: "Why Leading Firms Choose T2V-Employee",
            points: [
                "Respect for complex matrix organizational structures",
                "Integration with PSA (Professional Services Automation) tools",
                "High-end user experience for premium talent"
            ]
        },
        cta: {
            title: "Transform Professional Services Operations",
            text: "Unlock the full potential of your firm's expertise and talent."
        }
    }
};

```

# File: src/lib/outcomes-roi-content.ts

```ts
import {
    Zap,
    Search,
    Timer,
    TrendingUp,
    Users,
    BrainCircuit,
    DollarSign,
    Briefcase,
    FileText,
    Target,
    ShieldCheck,
    Scale,
    Gavel,
    LineChart,
    PieChart,
    BarChart3,
    ArrowRight,
    Globe,
    Rocket,
    Layers
} from "lucide-react";

export const outcomesRoiContent = {
    "productivity": {
        id: "productivity",
        badge: "Productivity Impact",
        badgeIcon: Zap,
        title: "Measurable Workforce Productivity Gains",
        tagline: "Unlocking hidden capacity across the enterprise.",
        description: "Productivity is no longer just about working harder—it’s about eliminating friction. T2V-Employee serves as a force multiplier, automating routine information retrieval and workflow tasks to return thousands of hours to the business.",
        ctaHeadline: "Stop losing time to information chaos",
        ctaDescription: "See exactly how much productivity your organization can reclaim with a personalized ROI assessment.",
        ctaButtonText: "Calculate Productivity ROI",
        ctaButtonLink: "/contact?type=roi-calculator",
        variant: "compact" as const,
        stats: [
            {
                value: "40-50%",
                label: "Productivity Improvement",
                explanation: "Measured increase in output per employee through automation and AI assistance."
            },
            {
                value: "60%",
                label: "Search Reduction",
                explanation: "Reduction in time spent searching for internal information and documents."
            },
            {
                value: "50%",
                label: "Faster Onboarding",
                explanation: "New hires reach full productivity in half the time with AI-guided ramping."
            }
        ],
        capabilities: [
            {
                title: "Knowledge Access Speed",
                desc: "Instant answers to complex questions replace hours of document hunting.",
                icon: Search
            },
            {
                title: "Workforce Readiness",
                desc: "Continuous, embedded learning ensures teams are always up-to-skill.",
                icon: Timer
            },
            {
                title: "Manager Effectiveness",
                desc: "AI insights help managers identify bottlenecks and support team needs.",
                icon: Users
            },
            {
                title: "Cross-Team Collaboration",
                desc: "Unified data breaks down silos that slow down decision making.",
                icon: BrainCircuit
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Productivity Drain",
                    points: ["Employees spend 20% of their time looking for information", "New hires take 6-9 months to become fully productive", "Fragmented knowledge silos slow down execution"]
                }
            ],
            features: [
                {
                    title: "T2V KnowledgeAI",
                    desc: "Instant, cited answers from your enterprise data.",
                    icon: BrainCircuit
                },
                {
                    title: "T2V AccelerateAI",
                    desc: "Embedded micro-learning in the flow of work.",
                    icon: Zap
                },
                {
                    title: "T2V PortalAI",
                    desc: "Unified interface for all employee requests.",
                    icon: Search
                }
            ],
            solutions: [
                {
                    title: "Knowledge Acceleration",
                    desc: "Turning static documents into an interactive knowledge base."
                },
                {
                    title: "Embedded Learning",
                    desc: "Delivering training exactly when it's needed in the workflow."
                },
                {
                    title: "AI Copilots",
                    desc: "Assisting with complex tasks to reduce error and time."
                }
            ],
            outcomes: {
                stats: [
                    { value: "3-5x", label: "Decision Speed" },
                    { value: "40%", label: "Output Increase" }
                ],
                operational: ["Faster project delivery", "Reduced onboarding ramp time"],
                risk: ["Reduced error rates in complex processes"]
            }
        }
    },
    "cost-reduction": {
        id: "cost-reduction",
        badge: "Cost Efficiency",
        badgeIcon: DollarSign,
        title: "Operational Cost Reduction at Enterprise Scale",
        tagline: "Doing more with optimized resources.",
        description: "In an era of efficiency, T2V-Employee delivers hard dollar savings by consolidating tools, automating expensive manual processes, and reducing the administrative overhead of managing a global workforce.",
        ctaHeadline: "Identify your potential savings",
        ctaDescription: "Our team can model your specific cost structures to identify immediate savings opportunities.",
        ctaButtonText: "Explore Cost Savings",
        ctaButtonLink: "/contact?type=cost-savings",
        variant: "wide" as const,
        stats: [
            {
                value: "30-60%",
                label: "HR Ops Cost Reduction",
                explanation: "Savings from automating manual ticketing and admin workflows."
            },
            {
                value: "70%",
                label: "Admin Workload Drop",
                explanation: "Reduction in routine administrative tasks for HR and IT teams."
            },
            {
                value: "30%",
                label: "Overhead Reduction",
                explanation: "Lower management overhead for contract and contingent workforces."
            }
        ],
        capabilities: [
            {
                title: "HR Operations",
                desc: "Automate higher volumes of employee requests with fewer resources.",
                icon: Briefcase
            },
            {
                title: "L&D Spend",
                desc: "Replace expensive external training with AI-generated internal content.",
                icon: FileText
            },
            {
                title: "Recruitment Costs",
                desc: "Lower agency spend and cost-per-hire with intelligent sourcing.",
                icon: Users
            },
            {
                title: "Vendor Spend",
                desc: "Identify unused licenses and optimize vendor performance.",
                icon: DollarSign
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Hidden Inefficiencies",
                    points: ["Manual processes consume expensive human hours", "Tool sprawl creates redundant licensing costs", "Contractor management overhead is often untracked"]
                }
            ],
            features: [
                {
                    title: "Process Automation",
                    desc: "End-to-end automation of onboarding, offboarding, and changes.",
                    icon: Zap
                },
                {
                    title: "AI Agents",
                    desc: "Autonomous handling of routine support tickets.",
                    icon: BrainCircuit
                },
                {
                    title: "Spend Analytics",
                    desc: "Deep visibility into vendor and workforce spend.",
                    icon: BarChart3
                }
            ],
            solutions: [
                {
                    title: "Unified Platform",
                    desc: "Consolidating multiple point solutions into one suite."
                },
                {
                    title: "Workflow Intelligence",
                    desc: "Optimizing processes to remove waste and wait times."
                },
                {
                    title: "Auto-Governance",
                    desc: "Preventing costly compliance leaks and fines."
                }
            ],
            outcomes: {
                stats: [
                    { value: "$2.5M+", label: "Annual Savings (Mid-Ent)" },
                    { value: "12mo", label: "Break-even Timeline" }
                ],
                operational: ["Lower SG&A expense ratio", "Reduced IT support costs"],
                risk: ["Elimination of duplicate payments"]
            }
        }
    },
    "talent-impact": {
        id: "talent-impact",
        badge: "Talent Outcomes",
        badgeIcon: Target,
        title: "Stronger Talent Outcomes with Measurable Impact",
        tagline: "Retain, develop, and mobilize your best people.",
        description: "The war for talent is won by retention and development. T2V-Employee uses AI to create personalized career paths, match internal talent to opportunities, and predict retention risks before people leave.",
        ctaHeadline: "Transform your talent strategy",
        ctaDescription: "See how skills intelligence can reduce attrition and boost internal mobility.",
        ctaButtonText: "Explore Talent Impact",
        ctaButtonLink: "/contact?type=talent",
        variant: "default" as const,
        stats: [
            {
                value: "40%",
                label: "Retention Improvement",
                explanation: "Reduction in voluntary turnover among first-year employees."
            },
            {
                value: "65%",
                label: "Faster Mobility",
                explanation: "Acceleration in time-to-fill for internal role transfers."
            },
            {
                value: "35%",
                label: "Engagement Lift",
                explanation: "Increase in employee engagement scores through better career pathing."
            }
        ],
        capabilities: [
            {
                title: "Retention",
                desc: "Predict flight risk and intervene with personalized retention plans.",
                icon: Users
            },
            {
                title: "Internal Mobility",
                desc: "Match employees to open roles based on inferred skills.",
                icon: ArrowRight
            },
            {
                title: "Skills Readiness",
                desc: "Identify and close skill gaps for future business needs.",
                icon: Target
            },
            {
                title: "Leadership Pipeline",
                desc: "Spot high-potential employees for succession planning.",
                icon: TrendingUp
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Talent Stagnation",
                    points: ["High attrition due to lack of career visibility", "Skills gaps widening without clear development paths", "Slow transition times for internal moves"]
                }
            ],
            features: [
                {
                    title: "T2V TalentAI",
                    desc: "Skills inference and career pathing engine.",
                    icon: BrainCircuit
                },
                {
                    title: "T2V AssessAI",
                    desc: "Continuous, objective performance measurement.",
                    icon: BarChart3
                }
            ],
            solutions: [
                {
                    title: "Skills Intelligence",
                    desc: "Real-time mapping of organizational capabilities."
                },
                {
                    title: "Career Pathways",
                    desc: "AI-generated growth plans for every employee."
                },
                {
                    title: "Opportunity Matching",
                    desc: "Automated connection of talent to gigs and roles."
                }
            ],
            outcomes: {
                stats: [
                    { value: "40%", label: "Lower External Hiring" },
                    { value: "2x", label: "Talent Pool Usage" }
                ],
                operational: ["Reduced recruiting dependency", "Higher workforce agility"],
                risk: ["Mitigated key person risk"]
            }
        }
    },
    "risk-compliance": {
        id: "risk-compliance",
        badge: "Risk & Compliance",
        badgeIcon: ShieldCheck,
        title: "Quantified Reduction in Compliance & Legal Risk",
        tagline: "Protecting the enterprise with predictive intelligence.",
        description: "In a complex global regulatory environment, T2V-Employee provides a defensive shield, using AI to monitor changes, update policies, and predict compliance failures before they result in fines.",
        ctaHeadline: "Proof-proof your compliance",
        ctaDescription: "Assess your current risk exposure and see how AI can close the gaps.",
        ctaButtonText: "Explore Compliance ROI",
        ctaButtonLink: "/contact?type=compliance",
        variant: "stacked" as const,
        stats: [
            {
                value: "85-92%",
                label: "Violation Reduction",
                explanation: "Decrease in compliance violations through predictive alerts."
            },
            {
                value: "95%",
                label: "Fine Avoidance",
                explanation: "Reduction in potential fine exposure from regulatory breaches."
            },
            {
                value: "70%",
                label: "Faster Audits",
                explanation: "Reduction in time required to complete compliance audits."
            }
        ],
        capabilities: [
            {
                title: "Regulatory Compliance",
                desc: "Automated monitoring of global labor laws and changes.",
                icon: Globe
            },
            {
                title: "Audit Readiness",
                desc: "Always-on evidence collection for instant audit response.",
                icon: FileText
            },
            {
                title: "Labor Disputes",
                desc: "prevention of disputes through accurate classification and policy.",
                icon: Gavel
            },
            {
                title: "Legal Cost Avoidance",
                desc: "Reduction in external counsel spend for routine queries.",
                icon: Scale
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Compliance Blindspots",
                    points: ["Multi-jurisdiction complexity makes manual tracking impossible", "Reactive audits scramble resources and risk fines", "Policy updates lag behind legal changes"]
                }
            ],
            features: [
                {
                    title: "T2V ComplyAI",
                    desc: "Automated policy updates and risk monitoring.",
                    icon: ShieldCheck
                },
                {
                    title: "DisputeAI",
                    desc: "Predictive analytics for labor dispute prevention.",
                    icon: Gavel
                }
            ],
            solutions: [
                {
                    title: "Predictive Intelligence",
                    desc: "Forecasting compliance risks before they occur."
                },
                {
                    title: "Automated Governance",
                    desc: "Self-correcting policy enforcement."
                },
                {
                    title: "Global Monitor",
                    desc: "24/7 scanning of international regulatory changes."
                }
            ],
            outcomes: {
                stats: [
                    { value: "75-80%", label: "Fewer Disputes" },
                    { value: "100%", label: "Audit Confidence" }
                ],
                operational: ["Streamlined legal operations", "Confident market expansion"],
                risk: ["Zero-tolerance compliance assurance"]
            }
        }
    },
    "financial-justification": {
        id: "financial-justification",
        badge: "ROI & Payback",
        badgeIcon: LineChart,
        title: "Fast Time-to-Value with Defensible ROI",
        tagline: "A business case your CFO will approve.",
        description: "We don't just promise value—we expedite it. With rapid modular deployment and high adoption rates, T2V-Employee is designed to deliver measurable financial returns within the first fiscal year.",
        ctaHeadline: "Build your business case",
        ctaDescription: "Get the tools and data you need to present a winning investment case to your board.",
        ctaButtonText: "Calculate Your ROI",
        ctaButtonLink: "/contact?type=roi-model",
        variant: "wide" as const,
        stats: [
            {
                value: "6-12mo",
                label: "ROI Realization",
                explanation: "Typical timeline to achieve positive return on investment."
            },
            {
                value: "750%+",
                label: "ROI Potential",
                explanation: "Projected 3-year ROI for large enterprise deployments."
            },
            {
                value: "1-3mo",
                label: "Payback Period",
                explanation: "Time significantly faster than industry average."
            }
        ],
        capabilities: [
            {
                title: "Implementation Speed",
                desc: "Rapid deployment methodology gets you live in weeks.",
                icon: Rocket
            },
            {
                title: "Adoption Rates",
                desc: "Intuitive, consumer-grade interfaces drive high user uptake.",
                icon: Users
            },
            {
                title: "Value Realization",
                desc: "Clear metrics track value from day one.",
                icon: PieChart
            },
            {
                title: "Scalability",
                desc: "Grow from one module to the full suite effortlessly.",
                icon: TrendingUp
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Investment Risk",
                    points: ["Long payback periods for traditional HR tech", "Unclear ROI definitions make approval, difficult", "Low adoption kills value realization"]
                }
            ],
            features: [
                {
                    title: "Modular Deployment",
                    desc: "Start small and expand based on proven value.",
                    icon: Layers
                },
                {
                    title: "Fast Adoption",
                    desc: "Embedded in tools employees already use.",
                    icon: Zap
                }
            ],
            solutions: [
                {
                    title: "Incremental Rollout",
                    desc: "Deploying value in sprints to show quick wins."
                },
                {
                    title: "Compounding Value",
                    desc: "Data network effects increase ROI over time."
                },
                {
                    title: "Transparent Metrics",
                    desc: "Real-time dashboards showing system value."
                }
            ],
            outcomes: {
                stats: [
                    { value: "10k+", label: "Scale Impact" },
                    { value: "90 Days", label: "Measurable Returns" }
                ],
                operational: ["Predictable budget planning", "High internal rate of return"],
                risk: ["Low implementation risk profile"]
            }
        }
    }
}

```

# File: src/lib/partners-content.ts

```ts
import {
    Network,
    Building2,
    Globe,
    ShieldCheck,
    TrendingUp,
    Zap,
    Users,
    Lock,
    FileText,
    BarChart3,
    Target,
    CheckCircle2,
    Layers,
    Cloud,
    Database,
    Scale,
    BookOpen,
    Briefcase,
    RefreshCw,
    BrainCircuit,
    Lightbulb
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface PartnerStat {
    value: string
    label: string
    explanation: string
}

export interface PartnerCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface PartnerData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: PartnerStat[]
    capabilities: PartnerCapability[]
    moduleData: {
        challenges: { title: string, points: string[] }[]
        features: { title: string, desc: string, icon: LucideIcon }[]
        solutions: { title: string, desc: string }[]
        outcomes: {
            stats?: { value: string, label: string }[]
            operational: string[]
            risk?: string[]
        }
    }
    ctaHeadline: string
    ctaDescription: string
    ctaButtonText: string
    ctaButtonLink: string
    secondaryCtaButtonText: string
}

export const partnersPageData: PartnerData[] = [
    {
        id: "technology-partners",
        badge: "Technology Partners",
        badgeIcon: Network,
        title: "A Composable Technology Ecosystem Built for Scale",
        tagline: "Integration, extensibility, and enterprise readiness.",
        description: "Built on an API-first, modular architecture that integrates seamlessly with your existing enterprise technology stack.",
        stats: [
            {
                value: "50+",
                label: "Technology Integrations",
                explanation: "Pre-built connectors for major enterprise platforms."
            },
            {
                value: "100%",
                label: "Enterprise Security",
                explanation: "SOC2, ISO 27001, and bank-grade encryption."
            },
            {
                value: "100%",
                label: "API-First Architecture",
                explanation: "Extensible platform for custom integrations."
            },
            {
                value: "20+",
                label: "Cloud Providers",
                explanation: "Multi-cloud deployment across all major providers."
            }
        ],
        capabilities: [
            {
                title: "Cloud Infrastructure Partners",
                desc: "AWS, Azure, GCP deployment and optimization.",
                icon: Cloud
            },
            {
                title: "AI & LLM Providers",
                desc: "Integration with leading AI and language models.",
                icon: BrainCircuit
            },
            {
                title: "Identity & Security Platforms",
                desc: "SSO, MFA, and enterprise identity management.",
                icon: Lock
            },
            {
                title: "Data & Analytics Tools",
                desc: "BI, data warehouse, and analytics integrations.",
                icon: Database
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Fragmented Tech Stacks",
                    points: ["Disconnected HR, payroll, and talent systems", "Manual data synchronization", "Integration complexity"]
                },
                {
                    title: "Integration Risk",
                    points: ["Long deployment timelines", "Custom integration costs", "Vendor lock-in concerns"]
                }
            ],
            features: [
                { title: "API-First Design", desc: "RESTful APIs for all platform capabilities.", icon: Network },
                { title: "Modular Architecture", desc: "Deploy only what you need, when you need it.", icon: Layers },
                { title: "Pre-Built Connectors", desc: "50+ enterprise platform integrations.", icon: Zap }
            ],
            solutions: [
                { title: "Seamless Integration", desc: "Connect to existing systems without disruption." },
                { title: "Extensibility", desc: "Build custom workflows and integrations." },
                { title: "Future-Proof", desc: "Platform evolves with your technology needs." }
            ],
            outcomes: {
                operational: ["Faster deployment", "Lower integration costs", "Reduced technical debt"],
                risk: ["Lower vendor lock-in", "Better data security"]
            }
        },
        ctaHeadline: "Build with us",
        ctaDescription: "Join our technology partner ecosystem and extend the power of T2V-Employee.",
        ctaButtonText: "Become a Technology Partner",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "View Platform Architecture"
    },
    {
        id: "si-consulting-partners",
        badge: "SI & Consulting Partners",
        badgeIcon: Building2,
        title: "Accelerate Enterprise Transformation with Trusted Partners",
        tagline: "Implementation excellence and change management.",
        description: "Partner with leading system integrators and consulting firms to ensure successful enterprise rollouts and adoption.",
        stats: [
            {
                value: "3x",
                label: "Faster Rollouts",
                explanation: "Partner-led implementations reduce time-to-value."
            },
            {
                value: "80%",
                label: "Risk Reduction",
                explanation: "Proven methodologies and best practices."
            },
            {
                value: "50+",
                label: "Countries Covered",
                explanation: "Partners in every major market worldwide."
            },
            {
                value: "100%",
                label: "Proven Models",
                explanation: "Battle-tested change management frameworks."
            }
        ],
        capabilities: [
            {
                title: "Global System Integrators",
                desc: "Large-scale enterprise transformation expertise.",
                icon: Globe
            },
            {
                title: "Regional Consulting Firms",
                desc: "Local market knowledge and implementation support.",
                icon: Building2
            },
            {
                title: "HR & Transformation Specialists",
                desc: "Deep HR technology and change management expertise.",
                icon: Users
            },
            {
                title: "Change Management Experts",
                desc: "Adoption strategies and organizational readiness.",
                icon: Target
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Complex Rollouts",
                    points: ["Multi-region deployments", "Legacy system migration", "Stakeholder alignment"]
                },
                {
                    title: "Change Resistance",
                    points: ["User adoption challenges", "Process change management", "Training at scale"]
                }
            ],
            features: [
                { title: "Modular Deployment", desc: "Phase implementations to reduce risk.", icon: Layers },
                { title: "Guided Adoption", desc: "Partner-led change management programs.", icon: Target },
                { title: "Best Practices", desc: "Proven implementation methodologies.", icon: CheckCircle2 }
            ],
            solutions: [
                { title: "Partner-Led Implementations", desc: "Expert guidance from planning to go-live." },
                { title: "Change Enablement", desc: "Comprehensive training and adoption support." },
                { title: "Continuous Optimization", desc: "Post-deployment support and enhancement." }
            ],
            outcomes: {
                operational: ["Faster time-to-value", "Higher user adoption", "Better ROI realization"],
                risk: ["Lower implementation risk", "Smoother change management"]
            }
        },
        ctaHeadline: "Partner with us",
        ctaDescription: "Join our SI and consulting partner network to deliver enterprise transformation.",
        ctaButtonText: "Partner with Us",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Talk to Partner Team"
    },
    {
        id: "industry-partners",
        badge: "Industry Partners",
        badgeIcon: Briefcase,
        title: "Vertical Expertise Embedded into the Platform",
        tagline: "Industry-specific intelligence and domain knowledge.",
        description: "Collaborate with industry experts to deliver regulation-aware, domain-specific workforce intelligence.",
        stats: [
            {
                value: "100%",
                label: "Regulation Aware",
                explanation: "Pre-trained on industry-specific regulations."
            },
            {
                value: "25+",
                label: "Knowledge Graphs",
                explanation: "Deep domain expertise built into the platform."
            },
            {
                value: "2x",
                label: "Faster Adoption",
                explanation: "Pre-configured for industry requirements."
            },
            {
                value: "40%",
                label: "Lower Risk",
                explanation: "Industry-tuned compliance monitoring."
            }
        ],
        capabilities: [
            {
                title: "Healthcare & Life Sciences Experts",
                desc: "HIPAA, FDA, and clinical compliance expertise.",
                icon: ShieldCheck
            },
            {
                title: "Financial Services Specialists",
                desc: "Banking regulations and compliance intelligence.",
                icon: Scale
            },
            {
                title: "Manufacturing & Safety Authorities",
                desc: "OSHA, ISO, and operational safety knowledge.",
                icon: CheckCircle2
            },
            {
                title: "Retail & Workforce Advisors",
                desc: "Multi-location compliance and operations expertise.",
                icon: Users
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Generic Tools",
                    points: ["Lack of industry-specific features", "Generic compliance frameworks", "No domain expertise"]
                },
                {
                    title: "Regulatory Complexity",
                    points: ["Industry-specific regulations", "Multi-jurisdiction requirements", "Constant regulatory changes"]
                }
            ],
            features: [
                { title: "T2V Vertical KnowledgeAI", desc: "Industry-specific knowledge graphs and intelligence.", icon: BrainCircuit },
                { title: "Domain Expertise", desc: "Pre-trained on industry regulations and best practices.", icon: BookOpen },
                { title: "Compliance Intelligence", desc: "Industry-aware compliance monitoring.", icon: ShieldCheck }
            ],
            solutions: [
                { title: "Industry-Tuned Intelligence", desc: "AI that understands your industry's unique requirements." },
                { title: "Regulatory Expertise", desc: "Built-in knowledge of industry regulations." },
                { title: "Best Practice Frameworks", desc: "Industry-proven workflows and processes." }
            ],
            outcomes: {
                operational: ["Higher accuracy", "Faster trust and adoption", "Better compliance"],
                risk: ["Industry-specific risk mitigation", "Regulatory confidence"]
            }
        },
        ctaHeadline: "Bring your industry expertise",
        ctaDescription: "Partner with us to embed deep industry knowledge into the platform.",
        ctaButtonText: "Explore Industry Partnerships",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Request Partner Briefing"
    },
    {
        id: "compliance-legal-partners",
        badge: "Compliance & Legal Partners",
        badgeIcon: ShieldCheck,
        title: "Trusted Compliance & Legal Intelligence Ecosystem",
        tagline: "Regulatory expertise and legal intelligence.",
        description: "Collaborate with compliance and legal experts to deliver predictive, regulation-aware workforce intelligence.",
        stats: [
            {
                value: "50+",
                label: "Jurisdictions",
                explanation: "Global labor law and compliance expertise."
            },
            {
                value: "50%",
                label: "Faster Updates",
                explanation: "Real-time monitoring of regulatory changes."
            },
            {
                value: "24/7",
                label: "Audit Readiness",
                explanation: "Always-ready documentation and evidence."
            },
            {
                value: "90%",
                label: "Risk Reduction",
                explanation: "Proactive risk identification and mitigation."
            }
        ],
        capabilities: [
            {
                title: "Labor Law Specialists",
                desc: "Global employment law expertise and monitoring.",
                icon: Scale
            },
            {
                title: "Regulatory Advisory Firms",
                desc: "Compliance strategy and regulatory guidance.",
                icon: FileText
            },
            {
                title: "Audit & Risk Consultants",
                desc: "Risk assessment and audit preparation support.",
                icon: BarChart3
            },
            {
                title: "Data Privacy Experts",
                desc: "GDPR, CCPA, and data protection compliance.",
                icon: Lock
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Change",
                    points: ["Constant law updates", "Multi-jurisdiction complexity", "Compliance tracking burden"]
                },
                {
                    title: "Legal Risk",
                    points: ["Potential violations", "Audit exposure", "Litigation threats"]
                }
            ],
            features: [
                { title: "T2V ComplyAI", desc: "Automated compliance monitoring and alerts.", icon: ShieldCheck },
                { title: "DisputeAI", desc: "Employee relations and case management.", icon: Scale },
                { title: "Regulatory Intelligence", desc: "Real-time tracking of legal changes.", icon: RefreshCw }
            ],
            solutions: [
                { title: "Predictive Compliance", desc: "Forecast and prevent regulatory violations." },
                { title: "Legal Intelligence", desc: "AI-powered legal research and guidance." },
                { title: "Audit Automation", desc: "Continuous evidence collection and readiness." }
            ],
            outcomes: {
                operational: ["Lower fines and penalties", "Faster audits", "Reduced legal spend"],
                risk: ["Stronger governance", "Better regulatory relationships"]
            }
        },
        ctaHeadline: "Strengthen compliance together",
        ctaDescription: "Partner with us to deliver world-class compliance and legal intelligence.",
        ctaButtonText: "Partner on Compliance Solutions",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Talk to Legal AI Team"
    },
    {
        id: "channel-partners",
        badge: "Channel Partners",
        badgeIcon: TrendingUp,
        title: "Scaling Market Reach Through Strategic Alliances",
        tagline: "Growth, enablement, and market expansion.",
        description: "Join our channel partner program to expand market reach, drive co-selling opportunities, and accelerate growth.",
        stats: [
            {
                value: "2x",
                label: "Market Expansion",
                explanation: "Accelerated go-to-market with partner networks."
            },
            {
                value: "2x",
                label: "Co-Sell Programs",
                explanation: "Joint sales and marketing initiatives."
            },
            {
                value: "500+",
                label: "Enablement Tools",
                explanation: "Training, resources, and sales support."
            },
            {
                value: "150+",
                label: "Global Reach",
                explanation: "Partners in every major market worldwide."
            }
        ],
        capabilities: [
            {
                title: "Regional Resellers",
                desc: "Local market expertise and customer relationships.",
                icon: Globe
            },
            {
                title: "Industry Channels",
                desc: "Vertical-specific distribution and expertise.",
                icon: Briefcase
            },
            {
                title: "Enterprise Alliances",
                desc: "Strategic partnerships with major enterprises.",
                icon: Building2
            },
            {
                title: "Marketplace Partners",
                desc: "Cloud marketplace and app store presence.",
                icon: Network
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Scaling Reach",
                    points: ["Limited market coverage", "Geographic expansion needs", "Resource constraints"]
                },
                {
                    title: "Local Expertise",
                    points: ["Market-specific knowledge gaps", "Cultural and language barriers", "Regulatory differences"]
                }
            ],
            features: [
                { title: "Partner Enablement", desc: "Comprehensive training and certification programs.", icon: Target },
                { title: "Shared Intelligence", desc: "Joint customer insights and market data.", icon: Lightbulb },
                { title: "Co-Selling Tools", desc: "Sales resources and deal registration.", icon: Users }
            ],
            solutions: [
                { title: "Co-Selling Programs", desc: "Joint sales motions and revenue sharing." },
                { title: "Joint GTM Strategies", desc: "Coordinated marketing and sales campaigns." },
                { title: "Partner Success", desc: "Dedicated support and enablement resources." }
            ],
            outcomes: {
                operational: ["Faster growth", "Lower customer acquisition cost", "Better market coverage"],
                risk: ["Diversified revenue streams", "Reduced market risk"]
            }
        },
        ctaHeadline: "Grow with us",
        ctaDescription: "Join our channel partner program and unlock new revenue opportunities.",
        ctaButtonText: "Join Partner Program",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Download Partner Guide"
    }
]

```

# File: src/lib/platform-content.tsx

```tsx
import {
    Database,
    BrainCircuit,
    MessageSquare,
    BarChart3,
    ShieldCheck,
    ShieldAlert,
    Search,
    Users,
    TrendingUp,
    Layers,
    Cpu,
    Lock,
    Globe,
    FileText,
    Zap,
    Target,
    LayoutDashboard,
    Network,
    Gavel,
    UserCheck,
    Scale,
    PieChart,
    RefreshCw,
    Map as MapIcon,
    AlertTriangle,
    Puzzle,
    Mic,
    Activity,
    AlertOctagon,
    ArrowUpDown,
    CalendarCheck,
    DollarSign,
    Key,
    Bell,
    CheckSquare,
    Sparkles,
    Bot,
    FileCode2,
    Lightbulb
} from "lucide-react";


export const platformModulesData = {
    "core-ai": {
        challenges: [
            {
                title: "Data Silos & Fragmentation",
                points: ["Isolated HR systems (HRIS, Payroll, LMS, ATS)", "Manual reconciliation and version conflicts", "No single source of truth for decision making"]
            },
            {
                title: "Poor Data Quality",
                points: ["Inaccurate and outdated employee records", "Duplicate workforce entries across regions", "Missing skills and role metadata"]
            },
            {
                title: "Compliance & Security Risks",
                points: ["GDPR/CCPA exposure from scattered PII", "Audit failures due to incomplete history", "Inconsistent access controls"]
            }
        ],
        features: [
            { title: "Intelligent Ingestion", desc: "Connectors for 50+ HRIS/ATS platforms with real-time sync.", icon: Layers },
            { title: "AI Deduplication", desc: "Probabilistic matching to merge duplicate profiles.", icon: Cpu },
            { title: "Cognitive Enrichment", desc: "Infers skills and metadata from unstructured docs.", icon: BrainCircuit },
            { title: "Workforce Assistant", desc: "Natural language interface for querying data.", icon: MessageSquare },
            { title: "Automated Governance", desc: "Role-based access & PII masking at ingestion.", icon: ShieldCheck },
            { title: "Advanced Analytics", desc: "Pre-built dashboards for headcount & attrition.", icon: BarChart3 }
        ],
        solutions: [
            { title: "Unified Data Plane", desc: "Centralized repository creating a Single Employee Golden Record." },
            { title: "Data Quality Framework", desc: "Continuous validation rules ensuring 99.9% accuracy." },
            { title: "Integration Fabric", desc: "Bi-directional sync with ERP, IT, and Finance systems." },
            { title: "Privacy Engine", desc: "Enterprise-grade encryption and compliance controls." },
            { title: "Executive Command", desc: "AI Copilot for strategic workforce planning." }
        ],
        outcomes: {
            stats: [
                { value: "99.9%", label: "Data Accuracy" },
                { value: "40%", label: "Lower Ops Cost" },
                { value: "10x", label: "Faster Reporting" },
                { value: "100%", label: "Audit Ready" }
            ],
            operational: ["Reduced manual data entry", "Real-time workforce visibility"],
            risk: ["Reduced compliance violations", "Stronger data governance"]
        }
    },
    "knowledge-ai": {
        challenges: [
            {
                title: "Information Overload",
                points: ["Critical knowledge buried in PDFs, emails, and SharePoint", "Employees spend 20% of time searching for info", "Version control nightmares for policies"]
            },
            {
                title: "Tribal Knowledge Loss",
                points: ["Key expertise leaves with departing employees", "Onboarding slows down due to lack of documentation", "Inconsistent answers from different managers"]
            },
            {
                title: "Static Documentation",
                points: ["Manuals are obsolete the moment they are written", "No feedback loop to update content based on queries", "Search returns links, not answers"]
            }
        ],
        features: [
            { title: "Semantic Search", desc: "Understands intent, not just keywords.", icon: Search },
            { title: "Generative Answers", desc: "Synthesizes direct answers from multiple docs.", icon: Sparkles },
            { title: "Auto-Tagging", desc: "AI classifies and organizes content automatically.", icon: FileText },
            { title: "Knowledge Graph", desc: "Maps relationships between concepts and people.", icon: Network },
            { title: "Smart Ingestion", desc: "Reads Sharepoint, GDrive, Slack, and Wikis.", icon: Database },
            { title: "Feedback Loop", desc: "Learns from user queries to improve accuracy.", icon: RefreshCw }
        ],
        solutions: [
            { title: "Content Ingestion Layer", desc: "Connectors crawl and index enterprise repositories." },
            { title: "Vector Database", desc: "Stores semantic embeddings for instant retrieval." },
            { title: "LLM Orchestration", desc: "RAG pipeline ensures answers are grounded in facts." },
            { title: "Citation Engine", desc: "Answers always link back to source documents." },
            { title: "Analytics Dashboard", desc: "Tracks what employees are asking and missing." }
        ],
        outcomes: {
            stats: [
                { value: "30%", label: "Productivity Gain" },
                { value: "90%", label: "Deflection Rate" },
                { value: "24/7", label: "Instant Support" },
                { value: "0", label: "Hallucinations" }
            ],
            operational: ["Instant answers for employees", "Reduced burden on HR/IT support"],
            risk: ["Consistent policy interpretation", "Secure access to knowledge"]
        }
    },
    "vertical-knowledge-ai": {
        challenges: [
            {
                title: "Regulatory Complexity",
                points: ["Generic AI hallucinates on specific laws (e.g. labor codes)", "Subtle jurisdictional differences are missed", "High risk of legal liability from wrong advice"]
            },
            {
                title: "Domain Specificity",
                points: ["General models don't understand industry jargon", "Nuanced compliance rules require expert tuning", "One-size-fits-all approach fails in banking/pharma"]
            },
            {
                title: "Audit & Explainability",
                points: ["Black-box AI is unacceptable for legal decisions", "Need full traceability of why an answer was given", "Strict data residency requirements"]
            }
        ],
        features: [
            { title: "Jurisdiction Aware", desc: "Knows laws differ by country and state.", icon: Globe },
            { title: "Legal Ontology", desc: "Pre-trained on legal/compliance knowledge graphs.", icon: Scale },
            { title: "Verified RAG", desc: "Cites specific statutes and internal policies.", icon: ShieldCheck },
            { title: "Role-Based Answers", desc: "Adapts complexity for managers vs employees.", icon: UserCheck },
            { title: "Change Monitoring", desc: "Alerts when laws change affecting answers.", icon: Gavel },
            { title: "Audit Trail", desc: "Logs every query and citation for review.", icon: History }
        ],
        solutions: [
            { title: "Domain Knowledge Graph", desc: "Structured map of industry regulations & internal policies." },
            { title: "Multi-Model Router", desc: "Selects the best specialized model for the query." },
            { title: "Safety Guardrails", desc: "Prevents advice on prohibited or sensitive topics." },
            { title: "Expert in the Loop", desc: "Workflow for legal teams to verify complex answers." },
            { title: "Continuous Compliance", desc: "Auto-updates knowledge base with regulatory feeds." }
        ],
        outcomes: {
            stats: [
                { value: "60%", label: "Legal Cost Savings" },
                { value: "100%", label: "Traceability" },
                { value: "95%", label: "Accuracy in QA" },
                { value: "Global", label: "Coverage" }
            ],
            operational: ["Faster compliance checks", "Self-service for complex queries"],
            risk: ["Mitigated legal exposure", "Consistent global interpretation"]
        }
    },
    "accelerate-ai": {
        challenges: [
            {
                title: "Passive Learning",
                points: ["LMS content is boring and disconnected from work", "Low completion rates and even lower retention", "Generic courses don't address specific skill gaps"]
            },
            {
                title: "Slow Content Creation",
                points: ["Weeks to build a single training module", "Content is outdated by the time it launches", "Expensive reliance on external instructional designers"]
            },
            {
                title: "One-Size-Fits-None",
                points: ["Every employee gets the same onboarding path", "High performers are bored, others are overwhelmed", "No personalization based on actual role needs"]
            }
        ],
        features: [
            { title: "Auto-Course Gen", desc: "Creates micro-learning from PDFs/Docs instantly.", icon: Zap },
            { title: "Adaptive Parsers", desc: "Adjusts difficulty based on learner progress.", icon: Target },
            { title: "Just-in-Time", desc: "Surfaces learning within Slack/Teams workflows.", icon: MessageSquare },
            { title: "Skill Simulation", desc: "AI role-play scenarios for soft skills practice.", icon: Bot },
            { title: "Knowledge Quiz", desc: "Auto-generates assessments to verify understanding.", icon: FileCode2 },
            { title: "Gap Analysis", desc: "Recommends content based on performance data.", icon: TrendingUp }
        ],
        solutions: [
            { title: "Content Transformation Engine", desc: "Ingests SOPs and outputs interactive SCORM modules." },
            { title: "Personalization Matrix", desc: "Maps role requirements to individual learning paths." },
            { title: "Workflow Embedder", desc: "Delivers nuggets of learning via API to any app." },
            { title: "Gamification Layer", desc: "Adds points/badges to drive engagement automatically." },
            { title: "Impact Analytics", desc: "Correlates learning completion with job performance." }
        ],
        outcomes: {
            stats: [
                { value: "50%", label: "Faster Onboarding" },
                { value: "80%", label: "Content Cost Cut" },
                { value: "3x", label: "Engagement" },
                { value: "Real-time", label: "Skill Updates" }
            ],
            operational: ["Instant training deployment", "Learning in the flow of work"],
            risk: ["Ensured policy comprehension", "Documented training evidence"]
        }
    },
    "talent-ai": {
        challenges: [
            {
                title: "Skills Blindspots",
                points: ["Leaders don't know what skills their teams actually have", "Reliance on self-reported, outdated CVs", "Invisible internal talent leads to unnecessary hiring"]
            },
            {
                title: "Static Career Paths",
                points: ["Career ladders are rigid and unclear", "Employees leave because they don't see growth", "Succession planning is a manual spreadsheet exercise"]
            },
            {
                title: "Misaligned Resourcing",
                points: ["Right people are not on the right projects", "Burnout due to poor workload distribution", "Critical skill gaps discovered too late"]
            }
        ],
        features: [
            { title: "Skill Inference", desc: "Deduced skills from code, emails, and projects.", icon: Lightbulb },
            { title: "Talent Marketplace", desc: "Internal gig matching for short-term projects.", icon: Users },
            { title: "Succession AI", desc: "Identifies and preps future leaders automatically.", icon: TrendingUp },
            { title: "Career Copilot", desc: "Guides employees on how to reach their next role.", icon: MapIcon },
            { title: "Flight Risk Risk", desc: "Predicts attrition based on engagement signals.", icon: AlertTriangle },
            { title: "Team Builder", desc: "Optimizes squad formation based on complementary skills.", icon: Puzzle }
        ],
        solutions: [
            { title: "Dynamic Skills Ontology", desc: "Self-updating map of skills across the org." },
            { title: "Project Matching Engine", desc: "Aligns employee aspirations with business needs." },
            { title: "Career Path Visualizer", desc: "Interactive roadmap for every employee." },
            { title: "Reskill Recommendation", desc: "Suggests AccelerateAI courses for gap closure." },
            { title: "Workforce Planner", desc: "Scenario planning for future headcount needs." }
        ],
        outcomes: {
            stats: [
                { value: "25%", label: "Less External Hiring" },
                { value: "40%", label: "Higher Retention" },
                { value: "90%", label: "Skill Visibility" },
                { value: "Auto", label: "Succession" }
            ],
            operational: ["Optimized resource allocation", "Internal mobility first"],
            risk: ["Reduced key-person dependency", "Proactive retention action"]
        }
    },
    "portal-ai": {
        challenges: [
            {
                title: "Portal Fatigue",
                points: ["Employees log into 10+ systems (Workday, ServiceNow, Jira)", "Fragmented experience causes frustration", "Simple tasks take too many clicks"]
            },
            {
                title: "Support Bottlenecks",
                points: ["HR and IT flooded with repetitive 'how-to' tickets", "Slow turnaround times for simple requests", "High cost of service delivery"]
            },
            {
                title: "Poor Adoption",
                points: ["Complex tools are ignored by employees", "Process compliance drops due to friction", "Mobile experience is often broken"]
            }
        ],
        features: [
            { title: "Unified Chat", desc: "One conversational interface for all enterprise sys.", icon: MessageSquare },
            { title: "Action Agents", desc: "Executes tasks like 'Approve Leave' directly in chat.", icon: Zap },
            { title: "Universal Search", desc: "Finds people, policies, and apps instantly.", icon: Search },
            { title: "Personalized Feed", desc: "Relevant updates and tasks, no noise.", icon: LayoutDashboard },
            { title: "Multi-Channel", desc: "Works on Web, Mobile, Slack, Teams, WhatsApp.", icon: Globe },
            { title: "Voice Command", desc: "Talk to your enterprise apps naturally.", icon: Mic }
        ],
        solutions: [
            { title: "Conversational Middleware", desc: "Translates natural language to API calls." },
            { title: "Integration Hub", desc: "Connects to ITSM, HCM, and ERP backends." },
            { title: "Context Engine", desc: "Remembers past interactions for continuity." },
            { title: "Forms-to-Chat", desc: "Converts complex forms into simple Q&A flows." },
            { title: "Notification Orchestrator", desc: "Smartly routes alerts to the right channel." }
        ],
        outcomes: {
            stats: [
                { value: "70%", label: "Ticket Deflection" },
                { value: "5x", label: "Faster Resolution" },
                { value: "90%", label: "User Satisfaction" },
                { value: "1", label: "App to Rule All" }
            ],
            operational: ["Streamlined employee experience", "Reduced license shelfware"],
            risk: ["Standardized process execution", "Secure access gateway"]
        }
    },
    "assess-ai": {
        challenges: [
            {
                title: "Biased Reviews",
                points: ["Recency bias skews annual performance ratings", "Subjective opinions over objective data", "Inconsistent standards across managers"]
            },
            {
                title: "Lagging Indicators",
                points: ["Feedback comes too late (once a year) to assist", "No chance to correct course mid-cycle", "Blind to daily achievements and blockers"]
            },
            {
                title: "Effort Focus",
                points: ["Measuring hours worked instead of outcomes delivered", "High performers get burnt out covers, low get hidden", "Hard to quantify soft skills impact"]
            }
        ],
        features: [
            { title: "Continuous Listening", desc: "Real-time feedback collection from peers/tools.", icon: Activity },
            { title: "Bias Detection", desc: "Flags gender/bias in written feedback.", icon: Scale },
            { title: "Outcome Tracking", desc: "Links goals (OKRs) directly to work artifacts.", icon: Target },
            { title: "Nudge Coach", desc: "Prompts managers to give timely praise/critique.", icon: MessageSquare },
            { title: "360 Sentiment", desc: "Analyzes collaboration patterns and mood.", icon: Users },
            { title: "Performance Pred", desc: "Forecasts goal attainment risk early.", icon: TrendingUp }
        ],
        solutions: [
            { title: "Data-Driven Review", desc: "Aggregates Jira, Git, CRM data for objective view." },
            { title: "Sentiment Analysis Engine", desc: "Evaluates team morale and friction points." },
            { title: "Coaching Bot", desc: "Provides script suggestions for difficult talks." },
            { title: "Calibration Tool", desc: "Visualizes rating distribution to ensure fairness." },
            { title: "Goal Alignment", desc: "Cascades strategic objectives to individual tasks." }
        ],
        outcomes: {
            stats: [
                { value: "100%", label: "Bias Check" },
                { value: "4x", label: "Feedback Freq" },
                { value: "20%", label: "Perf Uplift" },
                { value: "Real", label: "Fairness" }
            ],
            operational: ["Culture of continuous improvement", "Clearer goal clarity"],
            risk: ["Defensible employment decisions", "Reduced discrimination risk"]
        }
    },
    "comply-ai": {
        challenges: [
            {
                title: "Regulatory Tsunami",
                points: ["Thousands of labor law changes globally per year", "Impossible to manually track and update policies", "Fines for non-compliance are increasing"]
            },
            {
                title: "Manual Audits",
                points: ["Scrambling to find documents when auditors arrive", "Sampling-based checks miss violations", "High stress and cost during audit season"]
            },
            {
                title: "Shadow Policy",
                points: ["Managers making side-deals (leaves, OT) unknowingly", "Unwritten rules creating liability", "Inconsistent application of rules"]
            }
        ],
        features: [
            { title: "Reg Monitor", desc: "Scans legal databases for changes globally.", icon: Globe },
            { title: "Policy Updater", desc: "Drafts policy amendments automatically.", icon: FileText },
            { title: "Risk Thermometer", desc: "Predictive score of compliance health.", icon: ShieldAlert },
            { title: "Audit Bot", desc: "Pre-fetches evidence and answers auditor Qs.", icon: Bot },
            { title: "Violation Alert", desc: "Real-time flag for scheduling/pay breaches.", icon: AlertOctagon },
            { title: "Whistleblower", desc: "Secure, anonymous channel with AI triage.", icon: Lock }
        ],
        solutions: [
            { title: "Global Compliance Graph", desc: "Maps internal rules to external laws." },
            { title: "Automated Evidence Collection", desc: "Snapshots proof of compliance daily." },
            { title: "Incident Management", desc: "Workflow for investigation and remediation." },
            { title: "Policy Distribution", desc: "Ensures and tracks employee acknowledgement." },
            { title: "Labor Law Engine", desc: "Calculates complex OT/Leave rules per locale." }
        ],
        outcomes: {
            stats: [
                { value: "0", label: "Audit Surprises" },
                { value: "90%", label: "Less Admin Time" },
                { value: "100%", label: "Reg Coverage" },
                { value: "$Ms", label: "Fines Avoided" }
            ],
            operational: ["Always-on survey readiness", "Automated policy governance"],
            risk: ["Systematic risk reduction", "Director liability protection"]
        }
    },
    "recruit-ai": {
        challenges: [
            {
                title: "Slow Hiring",
                points: ["Time-to-fill averaging 60+ days for key roles", "Good candidates lost due to slow process", "Revenue loss from vacant seats"]
            },
            {
                title: "Bias & Diversity",
                points: ["Unconscious bias in screening and interviewing", "Struggling to meet DEI targets", "Homogenous teams lacking innovation"]
            },
            {
                title: "Recruiter Burnout",
                points: ["Sifting through thousands of irrelevant CVs", "Endless scheduling ping-pong", "Little time for relationship building"]
            }
        ],
        features: [
            { title: "Smart Sourcing", desc: "Finds candidates on open web matching profile.", icon: Search },
            { title: "CV Ranking", desc: "Matches skills to job context, not keywords.", icon: ArrowUpDown },
            { title: "Interview Pilot", desc: "Real-time prompts for interviewers.", icon: MessageSquare },
            { title: "Scheduling Agent", desc: "Auto-books times with candidates.", icon: CalendarCheck },
            { title: "Diversity Mask", desc: "Anonymizes profiles during screen.", icon: UserCheck },
            { title: "Offer AI", desc: "Optimizes salary offer based on market data.", icon: DollarSign }
        ],
        solutions: [
            { title: "Funnel Automation", desc: "Nurtures candidates from click to offer." },
            { title: "Assessment Integration", desc: "Seamlessly triggers code/skill tests." },
            { title: "Candidate Experience", desc: "Instant updates and feedback via chat." },
            { title: "Market Intelligence", desc: "Real-time salary and talent supply data." },
            { title: "Quality of Hire Loop", desc: "Feeds new hire performance back to model." }
        ],
        outcomes: {
            stats: [
                { value: "50%", label: "Faster Hiring" },
                { value: "30%", label: "Lower Cost" },
                { value: "2x", label: "Diversity" },
                { value: "90%", label: "Offer Accept" }
            ],
            operational: ["Recruiters become talent advisors", "Better candidate experience"],
            risk: ["Fair hiring practices", "Data privacy in hiring"]
        }
    },
    "contract-ai": {
        challenges: [
            {
                title: "Misclassification",
                points: ["Risk of treating contractors like employees", "Huge legal penalties for classification errors", "Inconsistent onboarding processes"]
            },
            {
                title: "Fragmented Management",
                points: ["Contractors managed in spreadsheets, not HRIS", "Lack of visibility into spend and access", "Security risks from unrevoked access"]
            },
            {
                title: "Payment Friction",
                points: ["Complex multi-currency invoicing", "Delayed payments causing talent churn", "Manual tax form collection"]
            }
        ],
        features: [
            { title: "SOW Generator", desc: "Auto-creates compliant Statements of Work.", icon: FileText },
            { title: "Risk Classifier", desc: "Questionnaire to determine worker status.", icon: ShieldCheck },
            { title: "Instant Pay", desc: "Global payments in local currency.", icon: Globe },
            { title: "Access Lifecycle", desc: "Auto-provisions and de-provisions IT access.", icon: Key },
            { title: "Budget Track", desc: "Real-time burn rate monitoring.", icon: BarChart3 },
            { title: "Vendor Vetting", desc: "Background checks and compliance verify.", icon: UserCheck }
        ],
        solutions: [
            { title: "Contingent Workforce Hub", desc: "Single pane for all non-employee labor." },
            { title: "Compliance Guard", desc: "Enforces tenure limits and break rules." },
            { title: "Invoice Automation", desc: "Matches hours logs to invoices auto." },
            { title: "Talent Pool", desc: "Re-engage past contractors easily." },
            { title: "Legal localized", desc: "Contracts adapted to worker's country." }
        ],
        outcomes: {
            stats: [
                { value: "100%", label: "Compliant" },
                { value: "0", label: "Co-employ Risk" },
                { value: "Global", label: "Reach" },
                { value: "Fast", label: "Onboarding" }
            ],
            operational: ["Flexible workforce scaling", "Reduced admin overhead"],
            risk: ["Tax and legal safety", "IP protection"]
        }
    },
    "perform-ai": {
        challenges: [
            {
                title: "Vendor Black Box",
                points: ["No visibility into vendor deliverable quality", "Paying for services not rendered completely", "Contracts auto-renew without value check"]
            },
            {
                title: "SLA Breaches",
                points: ["Manual tracking of service level agreements", "Missed penalty claims for downtime", "Reactive rather than proactive management"]
            },
            {
                title: "Spend Leakage",
                points: ["Redundant subscriptions and services", "Overpaying compared to market rates", "Maverick spend outside of procurement"]
            }
        ],
        features: [
            { title: "SLA Monitor", desc: "Real-time tracking of vendor uptime/output.", icon: Activity },
            { title: "Spend Analyzer", desc: "Identifies duplicate or wasted spend.", icon: PieChart },
            { title: "Renewal Alert", desc: "Notify before contracts auto-renew.", icon: Bell },
            { title: "Market Compare", desc: "Benchmarks vendor rates vs market.", icon: Scale },
            { title: "Scorecarding", desc: "Auto-generates QBR decks for vendors.", icon: LayoutDashboard },
            { title: "Deliverable Verify", desc: "Checks if SOW items were actually done.", icon: CheckSquare }
        ],
        solutions: [
            { title: "Vendor Intelligence", desc: "Aggregates performance data across vendors." },
            { title: "Contract Digitization", desc: "Extracts SLAs and terms from PDF contracts." },
            { title: "Procurement Copilot", desc: "Assists in negotiation with data." },
            { title: "Risk Radar", desc: "Monitors vendor financial health/news." },
            { title: "Value Manager", desc: "Calculates ROI for each vendor." }
        ],
        outcomes: {
            stats: [
                { value: "15%", label: "Spend Saved" },
                { value: "95%", label: "SLA Compliance" },
                { value: "Auto", label: "Renewals" },
                { value: "High", label: "Vendor Quality" }
            ],
            operational: ["Data-driven negotiations", "Optimized vendor portfolio"],
            risk: ["Supply chain resilience", "No surprise renewals"]
        }
    }
};

```

# File: src/lib/platform-modules-config.ts

```ts
import {
    Database,
    BrainCircuit,
    Building2,
    Rocket,
    GraduationCap,
    MessageSquare,
    BarChart3,
    ShieldCheck,
    Search,
    Users,
    TrendingUp,
    Lock,
    RefreshCw,
    Zap,
    Globe,
    FileText,
    Scale,
    Target,
    UserCheck,
    Bell,
    Smartphone,
    AlertTriangle,
    DollarSign,
    Star,
    Layers,
    Cpu
} from "lucide-react"

export const platformModulesConfig = {
    "core-ai": {
        badge: "Foundation Layer",
        badgeIcon: Database,
        title: "T2V CoreAI",
        tagline: "The intelligent data foundation that unifies, governs, and activates your workforce information.",
        description: "T2V CoreAI eliminates data silos and creates a single, trusted source of truth across all HR, payroll, talent, and enterprise systems—enabling faster decisions, stronger compliance, and measurable operational efficiency.",
        stats: [
            {
                value: "99.9%",
                label: "Data Accuracy",
                explanation: "Automated validation and deduplication ensure decision-ready workforce data across all systems."
            },
            {
                value: "40%",
                label: "Operational Cost Reduction",
                explanation: "Eliminate manual reconciliation, reduce IT overhead, and free HR teams for strategic work."
            },
            {
                value: "10x",
                label: "Faster Reporting",
                explanation: "Real-time dashboards and pre-built analytics replace weeks of manual data gathering."
            }
        ],
        capabilities: [
            {
                title: "Unified Data Integration",
                desc: "Connects HRIS, ATS, payroll, ERP, and vendor platforms into one centralized workforce repository.",
                icon: Database
            },
            {
                title: "Intelligent Data Quality",
                desc: "Automatically detects, flags, and resolves duplicates, inconsistencies, and missing records.",
                icon: ShieldCheck
            },
            {
                title: "Governance & Compliance",
                desc: "Enforces role-based access, PII masking, audit trails, and regulatory compliance at the data layer.",
                icon: Lock
            },
            {
                title: "Real-Time Synchronization",
                desc: "Bi-directional sync ensures all systems reflect the same accurate, up-to-date employee information.",
                icon: RefreshCw
            },
            {
                title: "Cognitive Enrichment",
                desc: "AI infers skills, roles, and metadata from unstructured documents and communications.",
                icon: Cpu
            },
            {
                title: "Workforce Assistant",
                desc: "Natural language interface for querying workforce data and generating insights instantly.",
                icon: Layers
            },
            {
                title: "Advanced Analytics",
                desc: "Pre-built dashboards for headcount, attrition, diversity, and workforce planning metrics.",
                icon: BarChart3
            },
            {
                title: "Predictive Intelligence",
                desc: "Machine learning models forecast workforce trends and identify potential risks proactively.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Build your workforce strategy on a foundation of trusted data",
        ctaDescription: "T2V CoreAI eliminates data chaos and gives your organization the clarity, compliance, and confidence to execute on strategic HR initiatives."
    },
    "knowledge-ai": {
        badge: "Knowledge Layer",
        badgeIcon: BrainCircuit,
        title: "T2V KnowledgeAI",
        tagline: "Transform scattered information into instant, intelligent answers.",
        description: "KnowledgeAI creates a living knowledge fabric that connects all your organizational information—from policies to procedures—making it instantly accessible and actionable for every employee.",
        stats: [
            {
                value: "90%",
                label: "Faster Retrieval",
                explanation: "Employees find answers in seconds instead of hours of searching through documents."
            },
            {
                value: "40%",
                label: "Deflected Questions",
                explanation: "Self-service AI answers reduce dependency on subject matter experts and support teams."
            },
            {
                value: "100%",
                label: "Knowledge Coverage",
                explanation: "Every document, policy, and procedure indexed and made searchable with AI."
            }
        ],
        capabilities: [
            {
                title: "Semantic Knowledge Fabric",
                desc: "Ingests and tags content from SharePoint, Slack, Drive, and Jira automatically.",
                icon: BrainCircuit
            },
            {
                title: "Instant Answer Engine",
                desc: "Generative AI provides direct answers with citations, not just search links.",
                icon: Zap
            },
            {
                title: "Auto-Maintenance",
                desc: "Flags conflicting or outdated info and prompts experts for updates.",
                icon: RefreshCw
            },
            {
                title: "Expertise Locator",
                desc: "Identifies who knows what based on their contribution history.",
                icon: Users
            },
            {
                title: "Multi-Source Integration",
                desc: "Connects to enterprise repositories including wikis, databases, and collaboration tools.",
                icon: Database
            },
            {
                title: "Context-Aware Search",
                desc: "Understands user intent and role to deliver personalized, relevant results.",
                icon: Search
            },
            {
                title: "Knowledge Graph Mapping",
                desc: "Visualizes relationships between concepts, documents, and subject matter experts.",
                icon: Layers
            },
            {
                title: "Continuous Learning",
                desc: "Improves accuracy over time by learning from user feedback and query patterns.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Turn your knowledge into a competitive advantage",
        ctaDescription: "Stop losing productivity to information search. Make every piece of organizational knowledge instantly accessible and actionable."
    },
    "vertical-knowledge-ai": {
        badge: "Industry Intelligence",
        badgeIcon: Building2,
        title: "T2V Vertical KnowledgeAI",
        tagline: "Industry-specific and regulation-aware intelligence for complex environments.",
        description: "Vertical KnowledgeAI provides deep domain expertise tailored for regulated industries, understanding the nuances of specific laws, compliance codes, and jurisdictional requirements.",
        stats: [
            {
                value: "99%",
                label: "Regulatory Accuracy",
                explanation: "Pre-trained on millions of pages of legal and industry-specific texts."
            },
            {
                value: "60%",
                label: "Legal Spend Savings",
                explanation: "Reduce dependency on external legal counsel for routine compliance questions."
            },
            {
                value: "24/7",
                label: "Compliance Support",
                explanation: "Always-on access to jurisdiction-specific regulatory guidance."
            }
        ],
        capabilities: [
            {
                title: "Jurisdiction Awareness",
                desc: "Understands and applies laws specific to region, state, or city automatically.",
                icon: Globe
            },
            {
                title: "Industry Graph",
                desc: "Pre-loaded with deep knowledge for Manufacturing, Pharma, Finance, and more.",
                icon: Building2
            },
            {
                title: "Citation Engine",
                desc: "Every answer links directly to the specific legal code or clause for verification.",
                icon: FileText
            },
            {
                title: "Policy Comparator",
                desc: "Highlights differences between internal policy and external law requirements.",
                icon: Scale
            },
            {
                title: "Regulatory Monitoring",
                desc: "Tracks changes in labor laws and compliance requirements across all jurisdictions.",
                icon: ShieldCheck
            },
            {
                title: "Expert Validation",
                desc: "Routes complex queries to legal teams for review before providing final guidance.",
                icon: UserCheck
            },
            {
                title: "Audit Trail System",
                desc: "Maintains complete logs of all queries and responses for compliance verification.",
                icon: Lock
            },
            {
                title: "Multi-Language Support",
                desc: "Provides accurate legal guidance in local languages for global operations.",
                icon: MessageSquare
            }
        ],
        ctaHeadline: "Navigate regulatory complexity with confidence",
        ctaDescription: "Ensure compliance across jurisdictions and industries with AI that understands the specific rules that govern your business."
    },
    "accelerate-ai": {
        badge: "Learning Engine",
        badgeIcon: Rocket,
        title: "T2V AccelerateAI",
        tagline: "Convert knowledge into skills at the speed of business.",
        description: "AccelerateAI transforms static content into dynamic, personalized learning experiences that embed directly into daily workflows, accelerating time-to-productivity and knowledge retention.",
        stats: [
            {
                value: "3x",
                label: "Higher Engagement",
                explanation: "Workflow-embedded learning drives significantly higher completion and engagement rates."
            },
            {
                value: "50%",
                label: "Faster Competency",
                explanation: "Employees reach full productivity faster with AI-personalized learning paths."
            },
            {
                value: "75%",
                label: "Better Retention",
                explanation: "Spaced repetition and contextual learning improve long-term knowledge retention."
            }
        ],
        capabilities: [
            {
                title: "Workflow Learning",
                desc: "Delivers micro-learning nuggets directly in Slack, Teams, and daily tools.",
                icon: Rocket
            },
            {
                title: "Content Generator",
                desc: "Auto-creates quizzes and summaries from docs and meetings using AI.",
                icon: FileText
            },
            {
                title: "Skill Simulations",
                desc: "AI role-plays for sales, support, and leadership scenario practice.",
                icon: Target
            },
            {
                title: "Adaptive Pathways",
                desc: "Personalizes curriculum based on performance and role-specific gaps.",
                icon: TrendingUp
            },
            {
                title: "Gamification Engine",
                desc: "Adds points, badges, and leaderboards to drive engagement and completion.",
                icon: Star
            },
            {
                title: "Just-in-Time Learning",
                desc: "Surfaces relevant training content exactly when employees need it in their workflow.",
                icon: Zap
            },
            {
                title: "Knowledge Assessments",
                desc: "Auto-generates tests to verify understanding and track skill development.",
                icon: BarChart3
            },
            {
                title: "Learning Analytics",
                desc: "Correlates training completion with job performance and business outcomes.",
                icon: Layers
            }
        ],
        ctaHeadline: "Accelerate your workforce capability at scale",
        ctaDescription: "Transform onboarding and upskilling with AI-powered learning that adapts to each employee's needs and embeds into their workflow."
    },
    "talent-ai": {
        badge: "Skills Intelligence",
        badgeIcon: GraduationCap,
        title: "T2V TalentAI",
        tagline: "Predictive visibility into workforce skills, gaps, and future readiness.",
        description: "TalentAI provides real-time intelligence on your organization's skill inventory, automatically identifying capability gaps and connecting talent to opportunities for growth and internal mobility.",
        stats: [
            {
                value: "30%",
                label: "Higher Internal Fill Rate",
                explanation: "Improved visibility into internal talent increases promotion from within."
            },
            {
                value: "20%",
                label: "Lower Attrition",
                explanation: "Career pathing and development opportunities improve retention."
            },
            {
                value: "100%",
                label: "Skills Visibility",
                explanation: "Complete, real-time view of organizational capabilities and gaps."
            }
        ],
        capabilities: [
            {
                title: "Inferred Skills",
                desc: "Deduced from code commits, project docs, and closed tickets automatically.",
                icon: BrainCircuit
            },
            {
                title: "Gap Analysis",
                desc: "Visualizes team strengths versus strategic goals and future needs.",
                icon: BarChart3
            },
            {
                title: "Succession Planning",
                desc: "Identifies readiness of internal candidates for key leadership roles.",
                icon: Users
            },
            {
                title: "Career Pathfinder",
                desc: "Shows employees the exact skills needed for their next promotion.",
                icon: Target
            },
            {
                title: "Internal Talent Marketplace",
                desc: "Matches employees with internal projects and gig opportunities based on skills.",
                icon: Search
            },
            {
                title: "Flight Risk Prediction",
                desc: "Identifies employees at risk of leaving based on engagement and activity patterns.",
                icon: AlertTriangle
            },
            {
                title: "Team Optimization",
                desc: "Recommends optimal team compositions based on complementary skills and experience.",
                icon: Layers
            },
            {
                title: "Skills Ontology",
                desc: "Maintains a dynamic, self-updating map of all skills across the organization.",
                icon: Database
            }
        ],
        ctaHeadline: "Build a future-ready workforce from within",
        ctaDescription: "Maximize internal talent mobility and reduce hiring costs with AI-powered skills intelligence and career development."
    },
    "portal-ai": {
        badge: "Employee Experience",
        badgeIcon: MessageSquare,
        title: "T2V PortalAI",
        tagline: "One conversational interface for every employee need.",
        description: "PortalAI replaces multiple disconnected portals with a single, intelligent conversational interface that understands requests, executes workflows, and provides 24/7 support across HR, IT, and operations.",
        stats: [
            {
                value: "60%",
                label: "Ticket Deflection",
                explanation: "Self-service AI resolves most common requests without human intervention."
            },
            {
                value: "24/7",
                label: "Support Availability",
                explanation: "Always-on assistance in multiple languages for global teams."
            },
            {
                value: "90%",
                label: "Employee Satisfaction",
                explanation: "Instant, accurate responses drive high satisfaction scores."
            }
        ],
        capabilities: [
            {
                title: "Unified Interface",
                desc: "One chat window for HR, IT, Finance, and Ops requests across all systems.",
                icon: MessageSquare
            },
            {
                title: "Action Agents",
                desc: "Bots that don't just answer, but execute transactions like booking leave.",
                icon: Zap
            },
            {
                title: "Proactive Notifications",
                desc: "Alerts only when action is needed, reducing notification noise.",
                icon: Bell
            },
            {
                title: "Multi-modal Support",
                desc: "Interacts via text, voice, or mobile app for maximum flexibility.",
                icon: Smartphone
            },
            {
                title: "Universal Search",
                desc: "Finds people, policies, documents, and applications instantly across all systems.",
                icon: Search
            },
            {
                title: "Personalized Dashboard",
                desc: "Displays relevant tasks, updates, and information tailored to each employee's role.",
                icon: BarChart3
            },
            {
                title: "Workflow Automation",
                desc: "Streamlines complex multi-step processes into simple conversational interactions.",
                icon: Layers
            },
            {
                title: "Multi-Language AI",
                desc: "Supports global teams with natural language understanding in 50+ languages.",
                icon: Globe
            }
        ],
        ctaHeadline: "Deliver exceptional employee experiences at scale",
        ctaDescription: "Reduce support costs and improve satisfaction with an AI assistant that handles every employee request intelligently."
    },
    "assess-ai": {
        badge: "Performance Intelligence",
        badgeIcon: BarChart3,
        title: "T2V AssessAI",
        tagline: "Continuous, objective performance intelligence that drives growth.",
        description: "AssessAI moves beyond annual reviews to provide continuous, data-driven performance insights with real-time feedback, coaching recommendations, and bias-aware analytics.",
        stats: [
            {
                value: "4x",
                label: "More Frequent Feedback",
                explanation: "Continuous feedback loops replace infrequent annual reviews."
            },
            {
                value: "15%",
                label: "Performance Lift",
                explanation: "Real-time coaching and interventions improve team performance."
            },
            {
                value: "80%",
                label: "Reduced Bias",
                explanation: "Objective metrics and bias detection ensure fairer evaluations."
            }
        ],
        capabilities: [
            {
                title: "Continuous Feedback Loop",
                desc: "Real-time praise and constructive tips integrated in work tools.",
                icon: RefreshCw
            },
            {
                title: "Objective Metrics",
                desc: "Performance data pulled from Jira, CRM, and Git for unbiased assessment.",
                icon: BarChart3
            },
            {
                title: "Bias Detector",
                desc: "Flags language in reviews that suggests unconscious bias patterns.",
                icon: ShieldCheck
            },
            {
                title: "Coaching Nudges",
                desc: "Prompts managers to have check-ins when metrics indicate issues.",
                icon: MessageSquare
            },
            {
                title: "Goal Alignment",
                desc: "Cascades organizational objectives to individual OKRs and tracks progress.",
                icon: Target
            },
            {
                title: "Sentiment Analysis",
                desc: "Analyzes team collaboration patterns and morale from communication data.",
                icon: Users
            },
            {
                title: "Performance Prediction",
                desc: "Forecasts goal attainment risk early to enable proactive interventions.",
                icon: TrendingUp
            },
            {
                title: "Calibration Tools",
                desc: "Ensures fair rating distribution across teams and departments.",
                icon: Scale
            }
        ],
        ctaHeadline: "Transform performance management with continuous intelligence",
        ctaDescription: "Replace subjective annual reviews with objective, continuous feedback that drives real performance improvement."
    },
    "comply-ai": {
        badge: "Compliance Intelligence",
        badgeIcon: ShieldCheck,
        title: "T2V ComplyAI",
        tagline: "Autonomous protection against global compliance risks.",
        description: "ComplyAI monitors regulatory changes globally, updates policies automatically, and provides predictive risk scoring to prevent violations before they occur—ensuring continuous compliance across all jurisdictions.",
        stats: [
            {
                value: "0",
                label: "Missed Regulations",
                explanation: "24/7 monitoring ensures no regulatory change goes unnoticed."
            },
            {
                value: "100%",
                label: "Audit Pass Rate",
                explanation: "Automated evidence collection and policy updates ensure audit readiness."
            },
            {
                value: "90%",
                label: "Faster Policy Updates",
                explanation: "AI drafts policy revisions instantly when laws change."
            }
        ],
        capabilities: [
            {
                title: "Auto-Policy Update",
                desc: "Drafts policy revisions instantly when laws change anywhere in the world.",
                icon: FileText
            },
            {
                title: "Predictive Risk Scoring",
                desc: "Prioritizes compliance gaps based on potential impact and likelihood.",
                icon: AlertTriangle
            },
            {
                title: "Evidence Locker",
                desc: "Auto-collects proof of compliance for potential audits continuously.",
                icon: Lock
            },
            {
                title: "Whistleblower Guard",
                desc: "Secure, anonymous channels for reporting violations safely.",
                icon: ShieldCheck
            },
            {
                title: "Regulatory Monitoring",
                desc: "Scans global legal databases 24/7 for changes affecting your organization.",
                icon: Globe
            },
            {
                title: "Violation Detection",
                desc: "Real-time alerts for scheduling, pay, or policy breaches before they escalate.",
                icon: Bell
            },
            {
                title: "Audit Automation",
                desc: "Pre-fetches evidence and generates responses to auditor questions instantly.",
                icon: BarChart3
            },
            {
                title: "Policy Distribution",
                desc: "Ensures employees acknowledge and understand updated policies with tracking.",
                icon: Users
            }
        ],
        ctaHeadline: "Stay ahead of compliance risks globally",
        ctaDescription: "Protect your organization from fines and legal exposure with AI that monitors, predicts, and prevents compliance violations."
    },
    "recruit-ai": {
        badge: "Recruitment Intelligence",
        badgeIcon: Search,
        title: "T2V RecruitAI",
        tagline: "AI-native recruitment that accelerates quality hiring.",
        description: "RecruitAI transforms hiring with intelligent automation—from sourcing and screening to scheduling and ranking—delivering faster time-to-hire, better candidate quality, and reduced bias.",
        stats: [
            {
                value: "50%",
                label: "Faster Hiring",
                explanation: "Automated sourcing and screening dramatically reduce time-to-hire."
            },
            {
                value: "30%",
                label: "Lower Cost per Hire",
                explanation: "Efficiency gains and better targeting reduce overall recruitment costs."
            },
            {
                value: "40%",
                label: "Improved Diversity",
                explanation: "Bias-aware algorithms ensure merit-based, diverse candidate selection."
            }
        ],
        capabilities: [
            {
                title: "Smart Sourcing",
                desc: "Scours public profiles to find passive candidates matching your needs.",
                icon: Search
            },
            {
                title: "Resume Parser",
                desc: "Extracts skills and experience with human-level understanding using AI.",
                icon: FileText
            },
            {
                title: "Interview Copilot",
                desc: "Suggests questions dynamically based on candidate answers in real-time.",
                icon: MessageSquare
            },
            {
                title: "Diversity Guard",
                desc: "Anonymizes profiles to ensure merit-based selection and reduce bias.",
                icon: UserCheck
            },
            {
                title: "Automated Scheduling",
                desc: "Coordinates interview times across multiple stakeholders automatically.",
                icon: RefreshCw
            },
            {
                title: "Candidate Engagement",
                desc: "Keeps candidates informed with instant updates and personalized communication.",
                icon: Bell
            },
            {
                title: "Market Intelligence",
                desc: "Provides real-time salary benchmarks and talent supply data for better offers.",
                icon: BarChart3
            },
            {
                title: "Quality of Hire Tracking",
                desc: "Measures new hire performance to continuously improve recruitment models.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Hire better talent, faster and fairer",
        ctaDescription: "Transform your recruitment process with AI that finds, screens, and ranks the best candidates while reducing bias and cost."
    },
    "contract-ai": {
        badge: "Contingent Workforce",
        badgeIcon: Users,
        title: "T2V ContractAI",
        tagline: "Seamless management of your contingent workforce.",
        description: "ContractAI handles the complexity of contractor and gig worker management—from compliant contract generation to payment processing and access governance—reducing risk and administrative overhead.",
        stats: [
            {
                value: "100%",
                label: "Compliant Contracts",
                explanation: "AI-generated agreements ensure compliance with local labor laws."
            },
            {
                value: "0",
                label: "Misclassification Incidents",
                explanation: "Automated classification checks prevent costly co-employment risks."
            },
            {
                value: "70%",
                label: "Faster Onboarding",
                explanation: "Automated workflows accelerate contractor onboarding and activation."
            }
        ],
        capabilities: [
            {
                title: "Contract Generator",
                desc: "Creates compliant agreements for any jurisdiction instantly using AI.",
                icon: FileText
            },
            {
                title: "Classification Check",
                desc: "Tests role scope against local laws to ensure proper contractor status.",
                icon: Scale
            },
            {
                title: "Payment Rails",
                desc: "Automates multi-currency invoices and tax documentation globally.",
                icon: DollarSign
            },
            {
                title: "Access Governance",
                desc: "Auto-provisions and de-provisions system access based on contract dates.",
                icon: Lock
            },
            {
                title: "Budget Monitoring",
                desc: "Tracks contractor spend in real-time against departmental budgets.",
                icon: BarChart3
            },
            {
                title: "Vendor Vetting",
                desc: "Conducts background checks and compliance verification automatically.",
                icon: ShieldCheck
            },
            {
                title: "Talent Pool Management",
                desc: "Maintains database of past contractors for quick re-engagement.",
                icon: Users
            },
            {
                title: "Invoice Automation",
                desc: "Matches timesheets to invoices and processes payments automatically.",
                icon: RefreshCw
            }
        ],
        ctaHeadline: "Manage contingent workers without the risk",
        ctaDescription: "Ensure compliance and reduce administrative burden with AI-powered contractor lifecycle management."
    },
    "perform-ai": {
        badge: "Vendor Intelligence",
        badgeIcon: TrendingUp,
        title: "T2V PerformAI",
        tagline: "Ensure value and accountability from every vendor.",
        description: "PerformAI provides real-time visibility into vendor performance, SLA compliance, and contract value—enabling data-driven renewal decisions and ensuring you get what you pay for.",
        stats: [
            {
                value: "15%",
                label: "Spend Reduction",
                explanation: "Identify unused licenses and duplicate tools to optimize vendor spend."
            },
            {
                value: "20%",
                label: "Higher Vendor Performance",
                explanation: "Continuous monitoring and scorecarding drive better vendor accountability."
            },
            {
                value: "100%",
                label: "SLA Visibility",
                explanation: "Real-time tracking of all vendor commitments and deliverables."
            }
        ],
        capabilities: [
            {
                title: "SLA Tracker",
                desc: "Monitors vendor uptime and deliverables in real-time against commitments.",
                icon: BarChart3
            },
            {
                title: "Spend Intelligence",
                desc: "Identifies duplicate tools and unused licenses across the organization.",
                icon: DollarSign
            },
            {
                title: "Renewal Alert",
                desc: "Notifies stakeholders 90 days before lock-in dates to enable renegotiation.",
                icon: Bell
            },
            {
                title: "Scorecarding",
                desc: "Rates vendors based on internal user feedback and performance data.",
                icon: Star
            },
            {
                title: "Contract Intelligence",
                desc: "Extracts key terms, SLAs, and obligations from vendor agreements automatically.",
                icon: FileText
            },
            {
                title: "Risk Monitoring",
                desc: "Tracks vendor financial health and news for early warning of issues.",
                icon: AlertTriangle
            },
            {
                title: "Benchmark Analysis",
                desc: "Compares vendor pricing and performance against market standards.",
                icon: Scale
            },
            {
                title: "ROI Calculator",
                desc: "Measures actual value delivered versus contracted commitments.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Maximize ROI on every vendor relationship",
        ctaDescription: "Stop overpaying for underperforming vendors. Get full visibility and control over your external spend with AI-powered vendor intelligence."
    }
}

```

# File: src/lib/resources-content.ts

```ts
import {
    BookOpen,
    Lightbulb,
    FileText,
    ShieldCheck,
    Target,
    BarChart3,
    Users,
    TrendingUp,
    Layers,
    Network,
    Search,
    BrainCircuit,
    Zap,
    CheckCircle2,
    Scale,
    RefreshCw,
    Briefcase,
    Database
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ResourceStat {
    value: string
    label: string
    explanation: string
}

export interface ResourceCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface ResourceData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: ResourceStat[]
    capabilities: ResourceCapability[]
    moduleData: {
        challenges: { title: string, points: string[] }[]
        features: { title: string, desc: string, icon: LucideIcon }[]
        solutions: { title: string, desc: string }[]
        outcomes: {
            stats?: { value: string, label: string }[]
            operational: string[]
            risk?: string[]
        }
    }
    ctaHeadline: string
    ctaDescription: string
    ctaButtonText: string
    ctaButtonLink: string
    secondaryCtaButtonText: string
}

export const resourcesPageData: ResourceData[] = [
    {
        id: "executive-insights",
        badge: "Executive Insights",
        badgeIcon: Lightbulb,
        title: "Strategic Perspectives on the Future of Work",
        tagline: "AI, workforce intelligence, and leadership.",
        description: "Board-level insights on AI-native workforce transformation, strategic HR evolution, and the future of enterprise talent management.",
        stats: [
            {
                value: "50+",
                label: "Enterprise Insights",
                explanation: "In-depth articles and strategic perspectives."
            },
            {
                value: "150+",
                label: "Industry Coverage",
                explanation: "Insights spanning all major industries and markets."
            },
            {
                value: "100%",
                label: "Board Perspectives",
                explanation: "Strategic content for C-suite decision-makers."
            },
            {
                value: "4x",
                label: "Quarterly Updates",
                explanation: "Regular publication of new insights and research."
            }
        ],
        capabilities: [
            {
                title: "Executive Articles",
                desc: "Strategic perspectives on workforce transformation.",
                icon: FileText
            },
            {
                title: "AI Workforce Trends",
                desc: "Latest developments in AI-native workforce intelligence.",
                icon: TrendingUp
            },
            {
                title: "Future of HR & Work",
                desc: "Thought leadership on the evolving workplace.",
                icon: Lightbulb
            },
            {
                title: "Enterprise AI Strategy Briefs",
                desc: "Practical guidance for AI adoption and governance.",
                icon: Target
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Rapid Change",
                    points: ["AI disruption in HR", "Evolving workforce models", "Technology adoption pressure"]
                },
                {
                    title: "Unclear AI Strategy",
                    points: ["Lack of AI roadmap", "Uncertain ROI", "Implementation complexity"]
                }
            ],
            features: [
                { title: "Workforce Intelligence", desc: "Strategic frameworks for AI-native HR.", icon: BrainCircuit },
                { title: "AI-Native Models", desc: "Operating models for the AI era.", icon: Network },
                { title: "Executive Guidance", desc: "Board-ready insights and recommendations.", icon: Target }
            ],
            solutions: [
                { title: "Strategic Frameworks", desc: "Proven models for workforce transformation." },
                { title: "Operating Models", desc: "AI-native organizational structures." },
                { title: "Change Leadership", desc: "Guidance for leading transformation." }
            ],
            outcomes: {
                operational: ["Better executive decisions", "Clearer AI strategy", "Faster transformation"],
                risk: ["Reduced transformation risk", "Better stakeholder alignment"]
            }
        },
        ctaHeadline: "Stay ahead of the curve",
        ctaDescription: "Access the latest strategic insights on workforce intelligence and AI transformation.",
        ctaButtonText: "View All Insights",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Subscribe for Updates"
    },
    {
        id: "platform-resources",
        badge: "Platform Resources",
        badgeIcon: Layers,
        title: "Deep Dives into the T2V-Employee Platform",
        tagline: "Architecture, capabilities, and integration.",
        description: "Comprehensive technical documentation, architecture guides, and platform deep-dives for evaluators and implementers.",
        stats: [
            {
                value: "100%",
                label: "Platform Coverage",
                explanation: "Documentation for all platform modules and capabilities."
            },
            {
                value: "50+",
                label: "Architecture Guides",
                explanation: "Detailed technical architecture documentation."
            },
            {
                value: "100%",
                label: "API & Integration",
                explanation: "Complete API reference and integration guides."
            },
            {
                value: "24/7",
                label: "Regular Updates",
                explanation: "Continuously updated with platform enhancements."
            }
        ],
        capabilities: [
            {
                title: "Platform Overviews",
                desc: "High-level architecture and capability summaries.",
                icon: Layers
            },
            {
                title: "Architecture Diagrams",
                desc: "Technical architecture and data flow documentation.",
                icon: Network
            },
            {
                title: "Feature Deep Dives",
                desc: "Detailed exploration of platform capabilities.",
                icon: Search
            },
            {
                title: "Integration Guides",
                desc: "Step-by-step integration and deployment guides.",
                icon: Database
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Understanding Platform Depth",
                    points: ["Complex capabilities", "Multiple modules", "Integration requirements"]
                },
                {
                    title: "Evaluation Complexity",
                    points: ["Technical assessment needs", "Architecture validation", "Security review"]
                }
            ],
            features: [
                { title: "T2V CoreAI", desc: "Unified data foundation and intelligence layer.", icon: Database },
                { title: "T2V KnowledgeAI", desc: "AI-powered knowledge management and access.", icon: BookOpen },
                { title: "T2V RecruitAI", desc: "Intelligent talent acquisition and screening.", icon: Users },
                { title: "T2V ComplyAI", desc: "Predictive compliance and risk intelligence.", icon: ShieldCheck }
            ],
            solutions: [
                { title: "How Modules Work Together", desc: "Understanding the integrated platform architecture." },
                { title: "Deployment Models", desc: "Cloud, hybrid, and on-premise options." },
                { title: "Integration Patterns", desc: "Best practices for enterprise integration." }
            ],
            outcomes: {
                operational: ["Faster evaluation", "Better technical understanding", "Smoother adoption"],
                risk: ["Reduced implementation risk", "Better architecture decisions"]
            }
        },
        ctaHeadline: "Explore the platform in depth",
        ctaDescription: "Access comprehensive technical documentation and architecture guides.",
        ctaButtonText: "Explore Platform Docs",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to a Solution Architect"
    },
    {
        id: "industry-research",
        badge: "Industry Research",
        badgeIcon: Briefcase,
        title: "Industry-Specific Workforce Intelligence Insights",
        tagline: "Vertical expertise and domain knowledge.",
        description: "Regulation-aware, industry-specific research, case studies, and benchmarks for healthcare, finance, manufacturing, and more.",
        stats: [
            {
                value: "20+",
                label: "Industry Coverage",
                explanation: "Research across all major industry verticals."
            },
            {
                value: "100%",
                label: "Regulation Aware",
                explanation: "Industry-specific compliance and regulatory insights."
            },
            {
                value: "100%",
                label: "Real World Use",
                explanation: "Practical examples from enterprise deployments."
            },
            {
                value: "100%",
                label: "Quantified Outcomes",
                explanation: "Measurable business impact and ROI data."
            }
        ],
        capabilities: [
            {
                title: "Healthcare Case Studies",
                desc: "Clinical compliance, credentialing, and patient safety.",
                icon: ShieldCheck
            },
            {
                title: "Financial Services Reports",
                desc: "Regulatory compliance and conduct risk intelligence.",
                icon: Scale
            },
            {
                title: "Manufacturing Use Cases",
                desc: "Safety, quality, and operational excellence.",
                icon: CheckCircle2
            },
            {
                title: "Retail Workforce Playbooks",
                desc: "High-volume hiring and seasonal workforce management.",
                icon: Users
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Industry-Specific Problems",
                    points: ["Unique regulatory requirements", "Vertical-specific challenges", "Domain expertise needs"]
                },
                {
                    title: "Generic Solutions",
                    points: ["Lack of industry customization", "Missing domain knowledge", "Compliance gaps"]
                }
            ],
            features: [
                { title: "Domain-Aware AI", desc: "Industry-specific intelligence and knowledge.", icon: BrainCircuit },
                { title: "T2V Vertical KnowledgeAI", desc: "Pre-trained on industry regulations and best practices.", icon: BookOpen },
                { title: "Industry Benchmarks", desc: "Comparative metrics and performance data.", icon: BarChart3 }
            ],
            solutions: [
                { title: "Industry-Tuned Platform", desc: "Customized for vertical requirements." },
                { title: "Regulatory Intelligence", desc: "Built-in compliance and legal knowledge." },
                { title: "Best Practice Frameworks", desc: "Industry-proven workflows and processes." }
            ],
            outcomes: {
                operational: ["Measurable business impact", "Industry-specific ROI", "Faster adoption"],
                risk: ["Better compliance", "Reduced industry-specific risks"]
            }
        },
        ctaHeadline: "Explore industry-specific insights",
        ctaDescription: "Access research, case studies, and benchmarks for your industry.",
        ctaButtonText: "Explore Industry Resources",
        ctaButtonLink: "/industries",
        secondaryCtaButtonText: "Download Case Studies"
    },
    {
        id: "compliance-legal",
        badge: "Compliance & Legal Intelligence",
        badgeIcon: ShieldCheck,
        title: "AI-Powered Compliance & Legal Knowledge Hub",
        tagline: "Regulatory intelligence and risk mitigation.",
        description: "Comprehensive compliance resources, regulatory updates, and legal intelligence for enterprise workforce management.",
        stats: [
            {
                value: "50+",
                label: "Jurisdictions",
                explanation: "Global labor law and compliance expertise."
            },
            {
                value: "24/7",
                label: "Regulatory Updates",
                explanation: "Real-time monitoring of regulatory changes."
            },
            {
                value: "100%",
                label: "Audit Ready",
                explanation: "Documentation and frameworks for compliance audits."
            },
            {
                value: "90%",
                label: "Risk Reduction",
                explanation: "Proactive risk identification and mitigation strategies."
            }
        ],
        capabilities: [
            {
                title: "Labor Law Updates",
                desc: "Latest changes in employment law and regulations.",
                icon: Scale
            },
            {
                title: "Regulatory Briefs",
                desc: "Summaries of new compliance requirements.",
                icon: FileText
            },
            {
                title: "Compliance Playbooks",
                desc: "Step-by-step compliance implementation guides.",
                icon: CheckCircle2
            },
            {
                title: "Dispute Prevention Guides",
                desc: "Best practices for employee relations and risk mitigation.",
                icon: ShieldCheck
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Complexity",
                    points: ["Multi-jurisdiction requirements", "Frequent regulation changes", "Compliance tracking burden"]
                },
                {
                    title: "Legal Risk",
                    points: ["Potential violations", "Audit exposure", "Litigation threats"]
                }
            ],
            features: [
                { title: "Predictive Compliance", desc: "AI-powered risk forecasting and prevention.", icon: TrendingUp },
                { title: "T2V ComplyAI", desc: "Automated compliance monitoring and alerts.", icon: ShieldCheck },
                { title: "Legal AI Frameworks", desc: "AI-powered legal research and guidance.", icon: Scale }
            ],
            solutions: [
                { title: "Compliance Intelligence", desc: "Proactive monitoring and risk detection." },
                { title: "Regulatory Automation", desc: "Automated policy updates and training." },
                { title: "Audit Readiness", desc: "Continuous evidence collection and documentation." }
            ],
            outcomes: {
                operational: ["Reduced legal spend", "Faster audits", "Better compliance"],
                risk: ["Lower fines and penalties", "Reduced litigation exposure"]
            }
        },
        ctaHeadline: "Stay compliant and protected",
        ctaDescription: "Access the latest compliance resources and legal intelligence.",
        ctaButtonText: "Explore Compliance Resources",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Talk to a Compliance Expert"
    },
    {
        id: "learning-enablement",
        badge: "Learning & Enablement",
        badgeIcon: BookOpen,
        title: "Practical Guides to Accelerate Workforce Capability",
        tagline: "Implementation, adoption, and enablement.",
        description: "Comprehensive guides, playbooks, and frameworks to accelerate platform adoption and workforce transformation.",
        stats: [
            {
                value: "15+",
                label: "Role-Based Paths",
                explanation: "Tailored content for different user personas."
            },
            {
                value: "100%",
                label: "AI Generated",
                explanation: "Dynamic, personalized learning experiences."
            },
            {
                value: "3x",
                label: "Faster Readiness",
                explanation: "Accelerated time-to-competency for users."
            },
            {
                value: "100%",
                label: "Enterprise Ready",
                explanation: "Comprehensive organizational change support."
            }
        ],
        capabilities: [
            {
                title: "Implementation Guides",
                desc: "Step-by-step deployment and configuration guides.",
                icon: Target
            },
            {
                title: "Change Management Playbooks",
                desc: "Frameworks for organizational adoption and change.",
                icon: RefreshCw
            },
            {
                title: "Learning & Upskilling Frameworks",
                desc: "Structured approaches to capability development.",
                icon: Lightbulb
            },
            {
                title: "Best Practice Toolkits",
                desc: "Templates, checklists, and proven methodologies.",
                icon: CheckCircle2
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Adoption Resistance",
                    points: ["User reluctance", "Change fatigue", "Training overhead"]
                },
                {
                    title: "Slow Enablement",
                    points: ["Long ramp-up times", "Knowledge gaps", "Support needs"]
                }
            ],
            features: [
                { title: "T2V AccelerateAI", desc: "AI-powered learning and capability acceleration.", icon: Zap },
                { title: "T2V KnowledgeAI", desc: "Just-in-time knowledge access and guidance.", icon: BookOpen },
                { title: "Guided Adoption", desc: "Structured onboarding and enablement programs.", icon: Target }
            ],
            solutions: [
                { title: "Guided Learning", desc: "Structured, role-based learning paths." },
                { title: "Enablement Programs", desc: "Comprehensive organizational change support." },
                { title: "Best Practices", desc: "Proven frameworks and methodologies." }
            ],
            outcomes: {
                operational: ["Faster time-to-value", "Higher user adoption", "Better capability development"],
                risk: ["Reduced implementation risk", "Smoother change management"]
            }
        },
        ctaHeadline: "Accelerate your transformation",
        ctaDescription: "Access practical guides and enablement resources to drive adoption and success.",
        ctaButtonText: "Explore Learning Resources",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Request Enablement Session"
    }
]


```

# File: src/lib/solutions-content.ts

```ts
import {
    LayoutDashboard,
    PieChart,
    Users,
    ShieldCheck,
    TrendingUp,
    Briefcase,
    Globe,
    Zap,
    FileText,
    BrainCircuit,
    Search,
    Gavel,
    Scale,
    BarChart3,
    Target,
    BookOpen,
    Lightbulb,
    CheckCircle2,
    Lock,
    RefreshCw,
    Network
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface SolutionStat {
    value: string
    label: string
    explanation: string
}

export interface SolutionCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface SolutionTabContent {
    title?: string // Optional title for the list
    points?: string[] // For challenges
    desc?: string // For features/solutions
}

export interface SolutionData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: SolutionStat[]
    capabilities: SolutionCapability[]
    moduleData: {
        challenges: { title: string, points: string[] }[]
        features: { title: string, desc: string, icon: LucideIcon }[]
        solutions: { title: string, desc: string }[]
        outcomes: {
            stats?: { value: string, label: string }[]
            operational: string[]
            risk?: string[]
        }
    }
    ctaHeadline: string
    ctaDescription: string
    ctaButtonText: string
    ctaButtonLink: string
    secondaryCtaButtonText: string
}

export const solutionsPageData: SolutionData[] = [
    {
        id: "workforce-intelligence",
        badge: "Workforce Intelligence",
        badgeIcon: LayoutDashboard,
        title: "Real-Time Workforce Intelligence for Better Decisions",
        tagline: "Unified data visibility.",
        description: "Gain unified visibility and trusted data across your global workforce to drive strategic decisions with confidence.",
        stats: [
            {
                value: "99.7%",
                label: "Workforce Data Accuracy",
                explanation: "Unified system of record ensures single source of truth."
            },
            {
                value: "75%",
                label: "Faster Executive Reporting",
                explanation: "Real-time dashboards replace manual report generation."
            },
            {
                value: "90%",
                label: "Reduction in Data Errors",
                explanation: "Automated validation and cleansing of workforce data."
            },
            {
                value: "100%",
                label: "Audit-Ready",
                explanation: "Complete traceability and history for compliance."
            }
        ],
        capabilities: [
            {
                title: "Unified Workforce Data",
                desc: "Connects HRIS, ATS, and ERP into one clean data layer.",
                icon: DatabaseIcon()
            },
            {
                title: "Predictive Workforce Insights",
                desc: "Forecasts attrition, costs, and headcount trends.",
                icon: TrendingUp
            },
            {
                title: "Role-Based Dashboards",
                desc: "Personalized views for C-Suite, HR, and Managers.",
                icon: LayoutDashboard
            },
            {
                title: "AI Workforce Copilot",
                desc: "Ask questions about your data in plain language.",
                icon: Zap
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Fragmented Visibility",
                    points: ["Data silos across HRIS, ATS, and Payroll", "Manual reconciliation of spreadsheets", "Delayed reporting to leadership"]
                },
                {
                    title: "Data Distrust",
                    points: ["Inconsistent metrics across regions", "High error rates in manual data entry", "Lack of audit trail"]
                }
            ],
            features: [
                { title: "T2V CoreAI Engine", desc: "Centralized data ingestion and cleaning pipeline.", icon: BrainCircuit },
                { title: "T2V PortalAI Interface", desc: "Natural language access to workforce insights.", icon: Search },
                { title: "Smart Connectors", desc: "Pre-built integrations for major HR systems.", icon: Network }
            ],
            solutions: [
                { title: "Single Source of Truth", desc: "One unified record for every employee globally." },
                { title: "Predictive Intelligence", desc: "Machine learning models for future planning." },
                { title: "Automated Governance", desc: "Rules-based data quality and access control." }
            ],
            outcomes: {
                operational: ["Faster decision making", "Reduced IT overhead", "Eliminated manual reporting"],
                risk: ["Data privacy compliance", "Audit readiness"]
            }
        },
        ctaHeadline: "See your workforce clearly",
        ctaDescription: "Eliminate blind spots and drive strategy with unified workforce intelligence.",
        ctaButtonText: "Explore Platform",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "knowledge-acceleration",
        badge: "Knowledge Acceleration",
        badgeIcon: BookOpen,
        title: "Turn Knowledge into Capability — Faster",
        tagline: "Accelerate learning and adoption.",
        description: "Transform static documents into active, just-in-time intelligence that empowers employees to learn in the flow of work.",
        stats: [
            {
                value: "50–60%",
                label: "Faster Onboarding",
                explanation: "Reduce ramp-up time for new hires significantly."
            },
            {
                value: "85%",
                label: "Knowledge Retention",
                explanation: "Interactive, micro-learning improves recall."
            },
            {
                value: "70%",
                label: "Training Cost Reduction",
                explanation: "AI-generated content lowers development costs."
            },
            {
                value: "2x",
                label: "Faster Change Adoption",
                explanation: "Quickly roll out new processes and tools."
            }
        ],
        capabilities: [
            {
                title: "AI Microlearning",
                desc: "Generates bite-sized lessons from long docs instantly.",
                icon: SparklesIcon()
            },
            {
                title: "Adaptive Learning Paths",
                desc: "Personalizes curriculum based on role and gaps.",
                icon: Target
            },
            {
                title: "Scenario Simulations",
                desc: "Role-play practice for soft skills and sales.",
                icon: Users
            },
            {
                title: "Embedded Learning",
                desc: "Delivers training directly within Slack/Teams.",
                icon: Zap
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Slow Ramp-Up",
                    points: ["New hires take months to become productive", "Generic training doesn't stick", "Knowledge is hard to find"]
                },
                {
                    title: "Low ROI",
                    points: ["Expensive content creation", "Low engagement with LMS", "No link to performance"]
                }
            ],
            features: [
                { title: "T2V KnowledgeAI", desc: "Semantic search for instant answers.", icon: Search },
                { title: "T2V AccelerateAI", desc: "Workflow-embedded learning engine.", icon: RocketIcon() }
            ],
            solutions: [
                { title: "AI-Generated Learning", desc: "Create courses from docs in seconds." },
                { title: "Adaptive Journeys", desc: "Dynamic paths that evolve with the learner." },
                { title: "Just-in-Time Delivery", desc: "Content surfaced exactly when needed." }
            ],
            outcomes: {
                operational: ["Faster productivity", "Higher employee engagement", "Reduced support tickets"],
                risk: ["Consistent policy understanding"]
            }
        },
        ctaHeadline: "Build a learning organization",
        ctaDescription: "Empower your team with AI-driven knowledge and capability acceleration.",
        ctaButtonText: "View Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "talent-acquisition",
        badge: "Talent Acquisition",
        badgeIcon: Users,
        title: "AI-Native Talent Acquisition at Enterprise Scale",
        tagline: "Hire faster, better, fairer.",
        description: "Modernize your recruiting with AI that automates sourcing, screening, and scheduling while reducing bias.",
        stats: [
            {
                value: "50–65%",
                label: "Faster Time-to-Hire",
                explanation: "Automate manual steps to secure top talent quickly."
            },
            {
                value: "40–55%",
                label: "Lower Cost per Hire",
                explanation: "Reduce agency spend and administrative overhead."
            },
            {
                value: "45%",
                label: "Increase in Diverse Hiring",
                explanation: "Bias-aware screening ensures fair evaluation."
            },
            {
                value: "90%",
                label: "Higher Offer Acceptance",
                explanation: "Better candidate experience drives conversion."
            }
        ],
        capabilities: [
            {
                title: "Predictive Talent Sourcing",
                desc: "Finds passive candidates that match your exact needs.",
                icon: Search
            },
            {
                title: "Skill-Based Screening",
                desc: "Validates capabilities beyond resume keywords.",
                icon: CheckCircle2
            },
            {
                title: "Bias-Aware Evaluation",
                desc: "Anonymizes data to focus on merit.",
                icon: Scale
            },
            {
                title: "Hiring Intelligence Analytics",
                desc: "Optimizes the funnel with real-time funnel metrics.",
                icon: BarChart3
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Inefficient Process",
                    points: ["Slow manual screening", "Scheduling bottlenecks", "High agency costs"]
                },
                {
                    title: "Quality & Bias",
                    points: ["Unconscious bias in selection", "Poor candidate experience", "Missed top talent"]
                }
            ],
            features: [
                { title: "T2V RecruitAI", desc: "End-to-end hiring automation suite.", icon: Users },
                { title: "T2V TalentAI", desc: "Internal mobility and skills matching.", icon: Briefcase }
            ],
            solutions: [
                { title: "Predictive Hiring", desc: "Identify best-fit candidates automatically." },
                { title: "Skills-First Approach", desc: "Match on potential, not just pedigree." }
            ],
            outcomes: {
                operational: ["Faster hiring cycles", "Lower recruiting costs", "Better quality of hire"],
                risk: ["Fair hiring compliance"]
            }
        },
        ctaHeadline: "Win the war for talent",
        ctaDescription: "Transform your recruiting into a strategic advantage with AI intelligence.",
        ctaButtonText: "Explore Talent Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Expert"
    },
    {
        id: "compliance-risk",
        badge: "Compliance & Risk",
        badgeIcon: ShieldCheck,
        title: "Predictive Compliance & Legal Intelligence",
        tagline: "Proactive risk protection.",
        description: "Stay ahead of global regulations with AI that monitors changes, updates policies, and predicts risk exposure.",
        stats: [
            {
                value: "85–92%",
                label: "Fewer Violations",
                explanation: "Proactive alerts prevent compliance breaches."
            },
            {
                value: "90–95%",
                label: "Fine Exposure Reduction",
                explanation: "Minimize financial risk from non-compliance."
            },
            {
                value: "70%",
                label: "Faster Audits",
                explanation: "Automated evidence collection streamlines audits."
            },
            {
                value: "75–80%",
                label: "Fewer Labor Disputes",
                explanation: "Consistent policy application reduces friction."
            }
        ],
        capabilities: [
            {
                title: "Predictive Compliance Scoring",
                desc: "Identifies high-risk areas before issues occur.",
                icon: BarChart3
            },
            {
                title: "Regulation-Aware Policies",
                desc: "Auto-adjusts policies to match local laws.",
                icon: Globe
            },
            {
                title: "Continuous Audit Readiness",
                desc: "Always prepared for external or internal audits.",
                icon: FileText
            },
            {
                title: "Dispute Prevention",
                desc: "Standardizes responses to employee grievances.",
                icon: Gavel
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Global Complexity",
                    points: ["Navigating multi-jurisdiction labor laws", "Keeping policies up to date", "Manual audit preparation"]
                },
                {
                    title: "Reactive Risk",
                    points: ["Discovering violations after the fact", "Inconsistent enforcement", "High legal costs"]
                }
            ],
            features: [
                { title: "T2V ComplyAI", desc: "Global regulatory monitoring engine.", icon: ShieldCheck },
                { title: "DisputeAI", desc: "Employee relations and case management.", icon: Gavel }
            ],
            solutions: [
                { title: "Predictive Intelligence", desc: "Forecast and mitigate legal risks." },
                { title: "Automated Governance", desc: "Ensure policy adherence globally." }
            ],
            outcomes: {
                operational: ["Reduced legal spend", "Faster audit cycles"],
                risk: ["Lower litigation risk", "Brand protection"]
            }
        },
        ctaHeadline: "Protect your organization",
        ctaDescription: "Navigate the complex landscape of global compliance with confidence.",
        ctaButtonText: "Explore Compliance Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to Risk Advisor"
    },
    {
        id: "performance-intelligence",
        badge: "Performance Intelligence",
        badgeIcon: TrendingUp,
        title: "Continuous Performance Intelligence, Not Annual Reviews",
        tagline: "Drive real-time growth.",
        description: "Move from backward-looking reviews to continuous, data-driven performance management that fosters growth and alignment.",
        stats: [
            {
                value: "50%",
                label: "Faster Review Cycles",
                explanation: "Streamlined process saves management time."
            },
            {
                value: "25%",
                label: "Productivity Increase",
                explanation: "Continuous feedback drives output."
            },
            {
                value: "40%",
                label: "Retention Rates",
                explanation: "Clear growth paths keep talent engaged."
            },
            {
                value: "100%",
                label: "Bias-Aware Evaluation",
                explanation: "Data checks reduce subjective bias."
            }
        ],
        capabilities: [
            {
                title: "Continuous Feedback",
                desc: "Real-time recognition and coaching moments.",
                icon: RefreshCw
            },
            {
                title: "Performance Analytics",
                desc: "Objective data on goals and deliverables.",
                icon: PieChart
            },
            {
                title: "AI Coaching",
                desc: "Prompts managers with personalized coaching tips.",
                icon: Lightbulb
            },
            {
                title: "Outcome Tracking",
                desc: "Connects individual goals to company strategy.",
                icon: Target
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Broken Process",
                    points: ["Annual reviews are too slow and subjective", "Feedback is forgotten", "Goals are misaligned"]
                },
                {
                    title: "Low Engagement",
                    points: ["Employees feel undervalued", "Lack of clear development paths", "Manager bias"]
                }
            ],
            features: [
                { title: "T2V AssessAI", desc: "Continuous performance management suite.", icon: TrendingUp }
            ],
            solutions: [
                { title: "Data-Driven Performance", desc: "Base decisions on outcomes, not opinions." },
                { title: "Continuous Coaching", desc: "Develop talent in real-time." }
            ],
            outcomes: {
                operational: ["Higher productivity", "Better goal alignment"],
                risk: ["Fairness and inclusion"]
            }
        },
        ctaHeadline: "Elevate team performance",
        ctaDescription: "Unlock the full potential of your workforce with continuous intelligence.",
        ctaButtonText: "Explore Performance Intelligence",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "hybrid-workforce",
        badge: "Hybrid Workforce",
        badgeIcon: Globe,
        title: "Optimize Hybrid & Contract Workforce Performance",
        tagline: "Manage the future of work.",
        description: "Seamlessly manage your hybrid and contingent workforce with full visibility into utilization, compliance, and performance.",
        stats: [
            {
                value: "30%",
                label: "Lower Overhead",
                explanation: "Reduce costs of managing contract labor."
            },
            {
                value: "90%",
                label: "Utilization Rate",
                explanation: "Ensure contractors are deployed effectively."
            },
            {
                value: "85%",
                label: "Risk Reduction",
                explanation: "Automated checks for worker status."
            },
            {
                value: "99%",
                label: "SLA Compliance",
                explanation: "Track vendor performance in real-time."
            }
        ],
        capabilities: [
            {
                title: "Contract Management",
                desc: "End-to-end lifecycle for contingent workers.",
                icon: FileText
            },
            {
                title: "Utilization Forecasting",
                desc: "Predict demand and optimize staffing levels.",
                icon: TrendingUp
            },
            {
                title: "Vendor Performance",
                desc: "Track SLAs and deliverables automatically.",
                icon: BarChart3
            },
            {
                title: "Compliance Controls",
                desc: "Ensure adherence to labor laws and security.",
                icon: ShieldCheck
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Visibility Gaps",
                    points: ["Who are our contractors?", "What are they working on?", "Are we overpaying?"]
                },
                {
                    title: "Hidden Risks",
                    points: ["Co-employment liability", "Security access creep", "Poor vendor performance"]
                }
            ],
            features: [
                { title: "T2V ContractAI", desc: "Contingent workforce management.", icon: FileText },
                { title: "T2V PerformAI", desc: "Vendor and SLA performance tracking.", icon: ActivityIcon() }
            ],
            solutions: [
                { title: "AI-Managed Workforce", desc: "Automate heavy lifting of contractor ops." },
                { title: "Total Talent View", desc: "Integrate contingent and permanent data." }
            ],
            outcomes: {
                operational: ["Optimized spend", "Flexible scaling"],
                risk: ["Compliance safety"]
            }
        },
        ctaHeadline: "Master the hybrid workforce",
        ctaDescription: "Gain control and visibility over your extended talent ecosystem.",
        ctaButtonText: "Explore Hybrid Workforce Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Expert"
    }
]

// Helper icons functions to avoid cluttering imports if needed, 
// using generic ones from above import list.
function DatabaseIcon() { return Lock } // Temporary placeholder replacement
function SparklesIcon() { return Zap }
function RocketIcon() { return Zap }
function ActivityIcon() { return CheckCircle2 }

```

# File: src/lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

```

# File: src/lib/who-its-for-data.ts

```ts

import {
    Users,
    ShieldCheck,
    TrendingUp,
    BrainCircuit,
    Database,
    Bot,
    Target,
    Zap,
    Globe,
    Briefcase,
    FileText,
    PieChart,
    Layers,
    Search
} from "lucide-react";

export const whoItsForData = {
    "hr-leaders": {
        badge: "Enterprise HR & People Leaders",
        badgeIcon: Users,
        title: "Strategic Workforce Architects",
        tagline: "Move from administrative processing to strategic intelligence.",
        description: "For CHROs and People Leaders who need a single source of truth to drive workforce strategy, operational efficiency, and employee experience transformation.",
        challenges: [
            "Fragmented employee data across HRIS, ATS, and Payroll systems.",
            "Inability to answer basic headcount or skills questions in real-time.",
            "Manual, error-prone reporting cycles that slow down decision making.",
            "Disconnect between talent strategy and business outcomes."
        ],
        capabilities: [
            { title: "Unified Golden Record", desc: "One reliable view of every employee across all systems.", icon: Database },
            { title: "Predictive Analytics", desc: "Forecast attrition and headcount needs before they happen.", icon: TrendingUp },
            { title: "Process Automation", desc: "Eliminate manual data entry and reconciliation.", icon: Zap },
            { title: "Experience Hub", desc: "Deliver consumer-grade employee experiences.", icon: Users }
        ],
        outcomes: [
            { value: "99.9%", label: "Data Accuracy", explanation: "Across all HR systems" },
            { value: "40%", label: "OpEx Reduction", explanation: "Through automation" },
            { value: "10x", label: "Faster Insights", explanation: "Real-time vs Monthly" },
            { value: "360°", label: "Visibility", explanation: "Full workforce view" }
        ],
        activeModule: "core-ai", // Mapping to existing module data if needed for deep dives
        ctaHeadline: "Transform HR into a Strategic Powerhouse",
        ctaDescription: "Stop wrangling spreadsheets and start driving business strategy with AI-native intelligence.",
        ctaButtonText: "Request HR Strategy Demo"
    },
    "talent-learning": {
        badge: "Talent & Learning Organizations",
        badgeIcon: BrainCircuit,
        title: "Architects of Future Skills",
        tagline: "Build a resilient, adaptable workforce ready for tomorrow.",
        description: "For CLOs and Talent VPs struggling to identify skill gaps, personalize learning at scale, and retain top performers through meaningful growth paths.",
        challenges: [
            "Lack of visibility into existing skills and capabilities.",
            "LMS content that is static, generic, and largely ignored.",
            "High reliance on external hiring due to poor internal mobility.",
            "Difficulty proving the ROI of learning and development programs."
        ],
        capabilities: [
            { title: "AI Skill Inference", desc: "Automatically map skills from work, not just CVs.", icon: Search },
            { title: "Insta-Course Gen", desc: "Turn docs into interactive learning in seconds.", icon: Zap },
            { title: "Career Copilot", desc: "Personalized growth paths for every employee.", icon: Target },
            { title: "Talent Marketplace", desc: "Match internal talent to projects instantly.", icon: Users }
        ],
        outcomes: [
            { value: "50%", label: "Faster Onboarding", explanation: "Time to productivity" },
            { value: "30%", label: "Hiring Cost Cut", explanation: "Via internal mobility" },
            { value: "3x", label: "Engagement", explanation: "In learning content" },
            { value: "Auto", label: "Skill Mapping", explanation: "Zero manual tagging" }
        ],
        activeModule: "accelerate-ai",
        ctaHeadline: "Unleash Your Workforce Potential",
        ctaDescription: "Close skill gaps faster and keep your best people growing with T2V TalentAI and AccelerateAI.",
        ctaButtonText: "Explore Talent Solutions"
    },
    "compliance-legal": {
        badge: "Compliance & Legal Teams",
        badgeIcon: ShieldCheck,
        title: "Guardians of Enterprise Risk",
        tagline: "Automate compliance globally. Eliminate risk locally.",
        description: "For General Counsel and Compliance Officers facing a tsunami of changing labor laws, rigorous audit requirements, and the risk of costly variations.",
        challenges: [
            "Keeping up with thousands of changing labor laws globally.",
            "Scrambling for evidence and documentation during audits.",
            "Inconsistent application of policies by managers.",
            "High legal costs for basic inquiries and policy updates."
        ],
        capabilities: [
            { title: "Regulatory Monitor", desc: "Real-time alerts on law changes affecting you.", icon: Globe },
            { title: "Automated Audits", desc: "Always-on evidence collection and verification.", icon: CheckSquare }, // Fixed icon import later if needed, assuming usage
            { title: "Policy Engine", desc: "Auto-update policies and track acknowledgement.", icon: FileText },
            { title: "Risk Radar", desc: "Predictive identification of non-compliance.", icon: ShieldCheck }
        ],
        outcomes: [
            { value: "100%", label: "Audit / Ready", explanation: "24/7/365 Coverage" },
            { value: "0", label: "Fines", explanation: "Compliance assurance" },
            { value: "60%", label: "Legal Savings", explanation: "Reduced outside counsel" },
            { value: "Global", label: "Reach", explanation: "Local laws masked" }
        ],
        activeModule: "comply-ai",
        ctaHeadline: "Compliance Without the Chaos",
        ctaDescription: "Protect your organization with the only AI that understands local labor laws and global enterprise risk.",
        ctaButtonText: "See Compliance Demo"
    },
    "exec-leaders": {
        badge: "Executive & Business Leaders",
        badgeIcon: TrendingUp,
        title: "Drivers of Business Performance",
        tagline: "Link workforce investment directly to P&L outcomes.",
        description: "For CEOs, CFOs, and COOs who need to understand the financial and operational impact of their workforce and ensure alignment with strategic goals.",
        challenges: [
            "Workforce represents 70% of cost but has the least visibility.",
            "Slow execution of strategic pivots due to rigid org structures.",
            "Unclear ROI on headcount and technology investments.",
            "Inability to model future workforce scenarios accurately."
        ],
        capabilities: [
            { title: "Exec Command Center", desc: "Real-time KPIs on productivity and cost.", icon: PieChart },
            { title: "Scenario Planning", desc: "Simulate org changes and budget impacts.", icon: Layers },
            { title: "Vendor Spend AI", desc: "Optimize contingent and service spend.", icon: Briefcase },
            { title: "Outcome Alignment", desc: "Connect OKRs to individual work streams.", icon: Target }
        ],
        outcomes: [
            { value: "20%", label: "Productivity", explanation: "Efficiency gain" },
            { value: "Real-Time", label: "P&L View", explanation: "Workforce cost impact" },
            { value: "15%", label: "Spend Saved", explanation: "Vendor optimization" },
            { value: "Agile", label: "Org Design", explanation: "Rapid restructuring" }
        ],
        activeModule: "perform-ai", // Approximate mapping
        ctaHeadline: "Lead with Data, Not Guesswork",
        ctaDescription: "Gain the visibility you need to optimize your largest investment—your people.",
        ctaButtonText: "Schedule Executive Briefing"
    },
    "data-teams": {
        badge: "Data & Analytics Teams",
        badgeIcon: Database,
        title: "Enablers of Intelligence",
        tagline: "The clean, unified data layer you've always promised.",
        description: "For CIOs and CDOs tired of building custom ETL pipelines, wrestling with dirty data, and explaining why reports don't match across systems.",
        challenges: [
            "Endless backlog of custom integration requests.",
            "Dirty, duplicate, and inconsistent data quality issues.",
            "Security risks from scattered PII in data lakes.",
            "Shadow IT creating data silos outside of control."
        ],
        capabilities: [
            { title: "Integration Fabric", desc: "Pre-built connectors for 50+ enterprise apps.", icon: Layers },
            { title: "AI Data Steward", desc: "Auto-cleans and de-duplicates records.", icon: Bot },
            { title: "Governance Layer", desc: "Baked-in PII masking and access controls.", icon: ShieldCheck },
            { title: "Knowledge Graph", desc: "Semantic mapping of all enterprise data.", icon: BrainCircuit }
        ],
        outcomes: [
            { value: "90%", label: "Less ETL", explanation: "Pre-built connectors" },
            { value: "Sub-Second", label: "Latency", explanation: "Real-time sync" },
            { value: "Unified", label: "Data Model", explanation: "Standard schema" },
            { value: "Secure", label: "By Design", explanation: "PII protection" }
        ],
        activeModule: "core-ai",
        ctaHeadline: "Solve the People Data Problem",
        ctaDescription: "Give your business a pristine, governable Golden Record without the multi-year data project.",
        ctaButtonText: "View Technical Specs"
    },
    "tech-leaders": {
        badge: "Technology & Platform Leaders",
        badgeIcon: Bot,
        title: "Builders of the Digital Workplace",
        tagline: "Simplifying the employee stack. Securing the enterprise.",
        description: "For IT Leaders focused on user adoption, system consolidation, and providing a seamless, secure digital experience for the modern workforce.",
        challenges: [
            "Sprawl of disconnected apps causing user fatigue.",
            "High volume of repetitive support tickets (L1/L2).",
            "Security vulnerabilities from poor identity management.",
            "Low adoption of expensive enterprise software tools."
        ],
        capabilities: [
            { title: "Unified Portal", desc: "Single entry point for all employee services.", icon: Globe },
            { title: "IT Service Bot", desc: "Auto-resolve tickets with conversational AI.", icon: MessageSquare }, // Fixed icon import if needed
            { title: "Identity Mgmt", desc: "Seamless SSO and role-based provisioning.", icon: ShieldCheck }, // Fixed icon import if needed
            { title: "App Orchestration", desc: "Trigger actions across apps from one chat.", icon: Zap }
        ],
        outcomes: [
            { value: "70%", label: "Ticket Deflection", explanation: "Via self-service" },
            { value: "1", label: "Interface", explanation: "For all apps" },
            { value: "90%", label: "Adoption", explanation: "User satisfaction" },
            { value: "Zero", label: "Trust", explanation: "Security framework" }
        ],
        activeModule: "portal-ai",
        ctaHeadline: "Modernize Employee IT",
        ctaDescription: "Deliver the consumer-grade experience employees expect with the enterprise-grade security you need.",
        ctaButtonText: "Explore Platform Architecture"
    }
};

// Import helper for icon resolution if needed, or ensuring icons match
import { CheckSquare, MessageSquare } from "lucide-react";

```
