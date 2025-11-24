import React, { useState } from 'react';
import FadeInScale from '../../components/animations/FadeInScale.js';

const TERMS_DATA = [
    {
        id: 'general',
        title: 'General Information',
        content: (
            <FadeInScale className="px-8">
                <p>Grace provides professional beauty and aesthetic services, including but not limited to permanent makeup, paramedical tattooing, facials, injectable treatments, and other beauty procedures. All treatments are carried out by trained professionals and require consultation and consent prior to the appointment.</p>
                <p>No Food, Guests, Children, or Pets Only the client receiving treatment is allowed in the studio. If you have a medical alert service dog, please let us know in advance. Emotional support animals and pets are not allowed.</p>

                <h4 className="font-semibold mt-4">Restrictions</h4>
                <p>Service may be refused if you show visible signs of illness.</p>

                <h4 className="font-semibold mt-4">Additional Sessions</h4>
                <p>Cosmetic tattooing usually requires multiple sessions. Results vary based on factors like skin type, age, lifestyle, and pre/post-care adherence.</p>

                <h4 className="font-semibold mt-4">Previous Permanent Makeup or Cover-Ups</h4>
                <p>If you've had work done by another artist, email photos for approval before booking (<a href="mailto:info@ellehive.com" className="text-blue-600 hover:underline">info@ellehive.com</a>). Bookings without prior approval will be canceled, and the cancellation policy will apply.</p>

                <h4 className="font-semibold mt-4">Appointment Duration</h4>
                <p>Appointments are scheduled in blocks. Check your booking for the estimated time, and plan accordingly. Treatments cannot be interrupted.</p>

                <h4 className="font-semibold mt-4">Appointment Changes</h4>
                <p>Grace may adjust your appointment date or time. You'll be notified via email if changes are needed.</p>
            </FadeInScale>
        ),
        defaultOpen: true
    },
    { id: 'age', title: 'Age Requirement', content: <FadeInScale className='mx-8'>Clients must be 18 years of age or older to receive the majority of the treatments. We reserve the right to request valid photo identification at the time of consultation or treatment.</FadeInScale> },
    {
        id: 'consultation', title: 'Consultations and Deposit', content: <FadeInScale>
            <ul className='mx-8 list-disc'>
            <li><span className='font-semibold'>A non-refundable deposit is required in advance to secure your booking appointment. This deposit will remain on your account for a period of 3 months from the date of the initial consultation.</span></li>
            <li>If you decide to proceed with a procedure within the 3-month period, the deposit will be applied towards the cost of the procedure.</li>
            <li>If the deposit is not redeemed within 3 months, it will be considered a fee for the time allocated during the initial consultation and will no longer be refundable or applicable to future procedures.</li>
            <li>If you need to reschedule your appointment, you may do so within the 3-month period, subject to availability. Failure to attend or provide adequate notice for rescheduling may forfeit the deposit.</li>
            <li>All deposits are <span className='font-semibold'>non-refundable</span>, regardless of cancellation reason.</li>
            <li>The remaining balance is due on the day of your appointment.</li>
            <li><span className='font-semibold'>In certain circumstances, we reserve the right to request full upfront payment for an appointment. In this case, if the patient reschedules, cancels or does not attend the appointment, the money will not be refunded.</span></li>
        </ul>
        </FadeInScale>
    },
    {
        id: 'cancellation', title: 'Cancellation/Rescheduling Policy', content:
            <FadeInScale>
                <ul className='mx-8 list-disc'>
                <li>The cancellation fee will be the deposit you paid upon booking your appointment or 50% of the treatment price.</li>
                <li>Appointments must be <span className='font-semibold'>cancelled or rescheduled with at least 48 hours’ notice.</span></li>
                <li>Late cancellations or no-shows will result in a forfeited deposit.</li>
                <li>Repeated cancellations may affect your ability to book future appointments.</li>
                <li>Not receiving an appointment reminder via text/email is not considered a valid reason for not attending an appointment.</li>
            </ul>
            </FadeInScale>
    },
    {
        id: 'howtocancel', title: 'How to Cancel/Reschedule an Appointment', content: <FadeInScale className='mx-8'>
            <p> Appointments may be rescheduled or cancelled by the following methods:</p>
            <p>Telephone- 07828385888</p>
            <p>Email- info@ellehive.com</p>

            <p>Appointments <span className='font-semibold'>CANNOT</span> be rescheduled or cancelled by the following methods:</p>
            <p>Any social media platform (such as Facebook or Instagram)</p>
        </FadeInScale>
    },
    { id: 'refund', title: 'Refund Policy', content: <FadeInScale className='mx-8'>We do not offer refunds on any services, deposits, or completed treatments. Results may vary depending on individual skin types, health conditions, and aftercare adherence.</FadeInScale> },
    {
        id: 'price', title: 'Price Adjustment', content: <FadeInScale className='mx-8'>
            <p>        At Grace, we are committed to offering high-quality treatments, premium products, and continued education to deliver the best possible service. As with most businesses, periodic price increases may occur, typically on an annual basis.
            </p>
            <p>We do our best to give advance notice of any upcoming changes, but please understand that pricing is subject to change without prior announcement.</p>

            <p>This is a normal and necessary part of maintaining the standard of care and ensuring we continue to use only top-grade materials and techniques.</p>
        </FadeInScale>
    },
    {
        id: 'medical', title: 'Medical Disclaimer', content: <FadeInScale className='mx-8'>
            <p> All services provided by Grace are cosmetic and non-medical in nature. They are not intended to diagnose, treat, or prevent any medical condition or disease.</p>
            <p> You are responsible for disclosing:</p>

            <ul className='list-disc mx-8'>
                <li> Any allergies, medical conditions, or current medications.</li>
                <li> If you are pregnant or nursing.</li>
                <li> Any previous aesthetic procedures or complications.</li>
            </ul>
            <p>We may refuse treatment if we believe it is unsafe or unsuitable.</p>
        </FadeInScale>
    },
    {
        id: 'consent', title: 'Client Consent and Responsibility', content: <FadeInScale className='mx-8'>
            <p>All clients must complete a consultation and consent form prior to treatment. By booking with Grace, you confirm:
            </p>
            <ul className='list-disc mx-8'>
                <li>You are sober and not under the influence of drugs or alcohol.</li>
                <li>You’ve disclosed all relevant health information.</li>
                <li>You understand that results are not guaranteed and may vary.</li>
            </ul>
        </FadeInScale>
    },
    { id: 'images', title: 'Use of Client Images', content: <FadeInScale>With <span className='font-semibold'>your consent</span>, Grace may use before-and-after photos of your treatment for marketing or educational purposes, such as social media or our website. If you do not consent, your images will not be used.</FadeInScale> },
    { id: 'privacy', title: 'Privacy and Data Protection', content: <FadeInScale>We respect your privacy and comply with UK GDPR regulations. Your personal and health information will only be used to provide services and will never be shared without your permission.</FadeInScale> },
    { id: 'ip', title: 'Intellectual Property', content: <FadeInScale>All images, content, logos, and branding on this site belong to Grace. You may not copy or use our materials without written consent.</FadeInScale> },
    { id: 'liability', title: 'Limitation of Liability', content: <FadeInScale>Grace is not liable for adverse reactions, dissatisfaction, or complications arising from any treatment—especially if aftercare guidelines are not followed.</FadeInScale> },
    { id: 'governing', title: 'Governing Law', content: <FadeInScale>These Terms are governed by the laws of England and Wales. Any disputes shall be handled by the courts of England and Wales.</FadeInScale> },
    {
        id: 'giftcard', title: 'Gift Card and Voucher Policy', content: <FadeInScale className='mx-8'>
            <div className='font-semibold'>Validity Period</div>

            <ul className='px-8 list-disc'>
                <li>Gift cards and vouchers are valid for 3 months from the date of purchase.</li>
                <li>The treatment must be booked and completed within this 3-month window — not just scheduled.</li>
            </ul>

            <p className='italic mb-4'>Example: If purchased on 1 May, the treatment must be done by 1 August.</p>

            <div className='font-semibold'>Booking Responsibility</div>
            <ul className='mx-8 mb-4'>
                <li>All appointments must be <span className='font-semibold'>scheduled in advance</span></li>
                <li>Leaving it to the <span className='font-semibold'>last minute may result in limited availability</span>, especially during peak times.</li>
                <li>If we are fully booked near your expiry date, and you did not try to book earlier, unfortunately <span className='font-semibold'>we are not responsible</span>, and the voucher will be considered forfeited.</li>

            </ul>
            <div className='font-semibold'>No Refunds or Extensions</div>

            <ul className='mx-8 list-disc mb-4'>
                <li>Vouchers are non-refundable, non-exchangeable for cash, and cannot be extended past the expiry date.</li>
                <li>No-shows or late cancellations may result in loss of voucher value.</li>
            </ul>

            <div className='font-semibold'>Transfer Policy</div>
            <ul className='mx-8 list-disc mb-4'>
                <li> Vouchers can be transferred to another person if you're unable to use them — just let us know ahead of time.</li>
            </ul>

            <div className='font-semibold'>How to Redeem</div>

            <ul className='mx-8 list-disc mb-4'>
                <li>To book using your voucher, please contact us at <span className='font-semibold'>info@ellehive.com</span> or via phone +447828385888.</li>
                <li>Be sure to mention it’s a <span className='font-semibold'>gift voucher</span> when booking and bring proof of purchase to the appointment.</li>
            </ul>
        </FadeInScale>
    },
    {
        id: 'privacypolicy',
        title: 'Privacy Policy',
        content: (
            <FadeInScale className='mx-8'>
                <p>We may collect the following personal and medical details:</p>
                <ul className='mx-8 list-disc'>
                    <li>Name, email address, phone number</li>
                    <li>Medical history, allergies, medications</li>
                    <li>Booking/treatment details</li>
                    <li>Consent forms and photos (if permitted)</li>
                    <li>IP address and basic browser info (via website)</li>
                </ul>

                <p>We use your information to:</p>
                <ul className='mx-8 list-disc'>
                    <li>Book and manage appointments</li>
                    <li>Assess treatment suitability</li>
                    <li>Provide personalised care</li>
                    <li>Maintain records for safety and compliance</li>
                    <li>Share promotional photos (with your consent)</li>
                </ul>

                <p>We process your data based on:</p>
                <ul className='mx-8 list-disc'>
                    <li><strong>Consent</strong> (you allow us to use your info)</li>
                    <li><strong>Contract</strong> (to provide a service you've booked)</li>
                    <li><strong>Legal obligations</strong> (e.g. keeping medical records)</li>
                </ul>

                <p>You have the right to:</p>
                <ul className='mx-8 list-disc'>
                    <li>Request access to your data</li>
                    <li>Correct your information</li>
                </ul>

                <p>
                    Your information is stored securely via password-protected files or locked
                    cabinets. We only use GDPR-compliant booking or record systems.
                </p>

                <p>
                    Client records are kept for <strong>6 years</strong> from your last appointment,
                    in line with industry best practices and insurance requirements.
                </p>

                <p>
                    Our website may use cookies to help us understand user experience. You can disable
                    cookies in your browser settings.
                </p>
            </FadeInScale>
        )
    }
];

// --- ACCORDION ITEM COMPONENT ---
interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    setOpen: (id: string) => void;
    id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, setOpen, id }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 px-4 text-main hover:bg-primary transition-colors"
                onClick={() => setOpen(id)}
                aria-expanded={isOpen}
                aria-controls={`content-${id}`}
            >
                <span className="font-semibold text-start text-lg">{title}</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                id={`content-${id}`}
                className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[1000px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-2 text-sm lg:text-base">
                    {content}
                </div>
            </div>
        </div>
    );
};

const TermsConditions: React.FC = () => {
    const [openId, setOpenId] = useState<string>('');

    const handleToggle = (id: string) => {
        setOpenId(prevId => (prevId === id ? '' : id));
    };

    return (
        <div className="bg-secondary w-full py-20 px-4 sm:px-6 lg:px-8">
            <div className='mx-auto max-w-7xl gap-8 lg:gap-16 text-main'>
                <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                    <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                        Terms and Conditions
                    </h2>
                    <div className='w-full h-0.5 bg-main'></div>
                </FadeInScale>

                <FadeInScale delay={0.2} className='space-y-4 text-sm lg:text-lg mb-10'>
                    <p className='font-semibold italic'>Effective Date: 01 April 2025</p>
                    <p>Welcome to Grace. By accessing or using our website and booking any services, you agree to be bound by the following Terms & Conditions. These terms are designed to ensure transparency and mutual respect between our clients and our practitioners.</p>
                    <p>(We may update this policy as needed - changes will be reflected on this page with a new effective date.)</p>
                </FadeInScale>
                <FadeInScale delay={0.3} className='border border-gray-200 rounded-lg overflow-hidden'>
                    {TERMS_DATA.map(item => (
                        <AccordionItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            isOpen={openId === item.id}
                            setOpen={handleToggle}
                        />
                    ))}
                </FadeInScale>
            </div>

        </div>
    );
};

export default TermsConditions;