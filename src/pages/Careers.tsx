
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

            await submitToAirtable(import.meta.env.VITE_AIRTABLE_TABLE_CAREERS, {
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
