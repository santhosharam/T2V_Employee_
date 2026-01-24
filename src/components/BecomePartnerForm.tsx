
import React, { useState } from 'react';
import { Loader2, CheckCircle, XCircle, Building2, User, Mail, Phone, Briefcase, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PartnerFormData {
    companyName: string;
    website: string;
    contactName: string;
    email: string;
    phone: string;
    jobTitle: string;
    partnershipType: string;
    message: string;
}

export const BecomePartnerForm = () => {
    const [formData, setFormData] = useState<PartnerFormData>({
        companyName: '',
        website: '',
        contactName: '',
        email: '',
        phone: '',
        jobTitle: '',
        partnershipType: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const partnershipTypes = [
        'Technology Partner',
        'Solution Partner',
        'Consulting Partner',
        'Reseller / Distributor',
        'System Integrator',
        'Other',
    ];

    const validateField = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'companyName':
                if (!value.trim()) error = 'Company Name is required';
                break;
            case 'contactName':
                if (!value.trim()) error = 'Contact Name is required';
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Business Email is required';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Invalid email format';
                }
                break;
            case 'phone':
                if (!value.trim()) error = 'Phone Number is required';
                break;
            case 'jobTitle':
                if (!value.trim()) error = 'Job Title is required';
                break;
            case 'partnershipType':
                if (!value) error = 'Please select a partnership type';
                break;
            case 'message':
                if (!value.trim()) error = 'Please tell us about your partnership interest';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        Object.keys(formData).forEach((key) => {
            if (key === 'website') return; // Optional
            const val = formData[key as keyof PartnerFormData];
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
            // Import dynamically
            const { submitToAirtable } = await import('@/lib/airtable');

            await submitToAirtable('Partnership Inquiries', {
                "Company Name": formData.companyName,
                "Website": formData.website,
                "Contact Name": formData.contactName,
                "Business Email": formData.email,
                "Phone Number": formData.phone,
                "Job Title": formData.jobTitle,
                "Partnership Type": formData.partnershipType,
                "Message": formData.message,
            });

            setSubmitStatus('success');
            setFormData({
                companyName: '',
                website: '',
                contactName: '',
                email: '',
                phone: '',
                jobTitle: '',
                partnershipType: '',
                message: '',
            });
            setErrors({});
        } catch (error) {
            console.error("Submission error", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center animate-fade-up border border-gray-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Inquiry Sent</h3>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                    Thank you for your interest in partnering with TrustGrid. Our partnerships team will review your information and get back to you within 2-3 business days.
                </p>
                <Button onClick={() => setSubmitStatus(null)} variant="outline" className="min-w-[200px]">
                    Submit Another Inquiry
                </Button>
            </div>
        );
    }

    return (
        <section id="become-partner" className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-gray-100 bg-white/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Become a Partner</h2>
                <p className="text-gray-600">
                    Join our ecosystem and help organizations transform their workforce intelligence.
                </p>
            </div>

            <div className="p-8 md:p-12">
                {submitStatus === 'error' && (
                    <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <h3 className="text-sm font-medium text-red-800">Submission Error</h3>
                            <p className="text-sm text-red-700 mt-1">There was a problem submitting your inquiry. Please try again later.</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Company Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-primary" />
                            Company Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    placeholder="Acme Corp"
                                />
                                {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>}
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                                    Website URL
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Globe className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="url"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300"
                                        placeholder="https://acme.com"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-primary" />
                            Contact Person
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="contactName"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.contactName ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    placeholder="John Smith"
                                />
                                {errors.contactName && <p className="mt-1 text-xs text-red-500">{errors.contactName}</p>}
                            </div>
                            <div>
                                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Title <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Briefcase className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.jobTitle ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        placeholder="VP of Sales"
                                    />
                                </div>
                                {errors.jobTitle && <p className="mt-1 text-xs text-red-500">{errors.jobTitle}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Business Email <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        placeholder="john@acme.com"
                                    />
                                </div>
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Partnership Interest */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            Partnership Interest
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
                                    Type of Partnership Interested In <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="partnershipType"
                                    name="partnershipType"
                                    value={formData.partnershipType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white ${errors.partnershipType ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <option value="">Select a partnership type</option>
                                    {partnershipTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.partnershipType && <p className="mt-1 text-xs text-red-500">{errors.partnershipType}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    How would you like to partner with us? <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    placeholder="Please describe your company and proposal briefly..."
                                />
                                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end">
                        <Button
                            type="submit"
                            className="w-full md:w-auto btn-primary-gradient px-8 py-6 text-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sending Inquiry...
                                </>
                            ) : (
                                'Submit Partnership Inquiry'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};
