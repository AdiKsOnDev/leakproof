import { ArrowLeft, ArrowRight, FileText, Mail, Plus } from 'lucide-react'
import { LeakCheckButton } from '../components/ui/LeakCheckButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { LeakCheckForm } from '../components/LeakCheckForm'

const questions = [
  ['Is the leak check free?', 'Yes. We’ll email you the report and invite you to a meeting to discuss it. You don’t have to book a meeting or hire us.'],
  ['What will the report cover?', 'The biggest issue or issues we find while using your website as a customer. We explain what happens, why it gets in the way and what we recommend changing. It isn’t a list of every problem on the site.'],
  ['When will I receive it?', 'We’ll email your PDF report within 1–2 days, along with an invitation to meet.'],
  ['Do you need access to my website?', 'Not for the initial check. Send us the public website link and tell us what you want it to do better. Please don’t send passwords.'],
  ['Will you fix the issues as part of the check?', 'The free check includes the report, not implementation. If you’d like us to make the changes, we can discuss the work and cost at the meeting.'],
  ['Is this a security scan?', 'No. We look for things that get in the way of bookings, enquiries or orders. We don’t test for security vulnerabilities.'],
]

export function WebsiteLeakCheckPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <div className="leak-check-page">
      <section className="leak-check-hero">
        <div className="container" data-reveal="rise">
          <Link className="back-link" to="/services"><ArrowLeft size={17} /> All services</Link>
          <h1>Website leak check</h1>
          <p>Send us your website. Within 1–2 days, we’ll email a PDF report on the biggest issues we find, with an invitation to meet and discuss them.</p>
          <LeakCheckButton to="#request-leak-check" />
          <small>No obligation to book a meeting.</small>
        </div>
      </section>

      <section className="leak-report-section section" aria-labelledby="leak-report-title">
        <div className="container leak-report-layout">
          <div className="leak-report-intro" data-reveal="left">
            <FileText size={28} aria-hidden="true" />
            <h2 id="leak-report-title">Sample report</h2>
            <p>A report you can read, share and act on. We focus on the problems worth fixing first, not a long list of minor faults.</p>
            <p>This sample uses a fictional salon whose services and booking details are buried under long blocks of text.</p>
            <a href="#request-leak-check">Have us check your site <ArrowRight size={17} aria-hidden="true" /></a>
          </div>

          <article className="leak-report" aria-label="Sample leak check report for a fictional salon" data-reveal="fade" data-reveal-delay="120">
            <header className="leak-report__header">
              <img src={logo} alt="Leakproof" />
              <span>Sample report</span>
            </header>
            <div className="leak-report__title">
              <span>Website leak check</span>
              <h3>Willow Salon</h3>
              <p>willow.example · Mobile booking review</p>
            </div>
            <div className="leak-report__finding">
              <span>Priority finding / 01</span>
              <h4>Too much text hides what you offer and how to book.</h4>
              <p>On a phone, we had to scroll past several paragraphs about the salon before finding its treatments. The number to message was at the bottom of the page, and the enquiry form was on a separate page with no link beside the treatments.</p>
            </div>
            <ol className="leak-report__steps" aria-label="Steps checked">
              <li><span>01</span>Read through long text</li>
              <li><span>02</span>Find the treatments</li>
              <li><span>03</span>Search for contact details</li>
            </ol>
            <div className="leak-report__detail">
              <h4>Why we’d fix this first</h4>
              <p>A new visitor has two basic questions: “Do you offer what I need?” and “How do I book?” Neither has a quick answer here. Even someone ready to book has to keep looking for a phone number or form.</p>
            </div>
            <div className="leak-report__recommendation">
              <h4>Our recommendation</h4>
              <p>Start with a short description of the salon’s services and location, then show the treatments in a scannable list. Move the longer background information further down. Put a clear “Message to book” link or a short enquiry form beside the treatments, not just at the bottom of the page.</p>
            </div>
            <div className="leak-report__detail">
              <h4>How to check the fix</h4>
              <p>Ask someone unfamiliar with the salon to open the site on a phone, explain what it offers and find how to book a treatment. Check that they can do this without reading every paragraph or searching the footer. Then test that the message link opens the correct number or the form sends successfully.</p>
            </div>
            <footer><span>Leakproof · Website leak check</span><span>01 / 01</span></footer>
          </article>
        </div>
      </section>

      <section className="section leak-check-request" id="request-leak-check" aria-labelledby="leak-check-request-title">
        <div className="container contact-page__grid">
          <div data-reveal="left">
            <Mail size={27} aria-hidden="true" />
            <h2 id="leak-check-request-title">Send us your website.</h2>
            <p>Tell us what you want it to do better. We’ll send the report and meeting invitation to the email address you provide within 1–2 days.</p>
            <p>Questions first? <a href="mailto:hello@leakproof.me">hello@leakproof.me</a></p>
          </div>
          <LeakCheckForm emailOnly />
        </div>
      </section>

      <section className="section local-search-faq-section" aria-labelledby="leak-check-faq-title">
        <div className="container local-search-faq">
          <h2 id="leak-check-faq-title" data-reveal="left">Frequently asked questions</h2>
          <div data-reveal="right">
            {questions.map(([question, answer], index) => (
              <div className="local-search-faq__item" key={question}>
                <button type="button" aria-expanded={openQuestion === index} aria-controls={`leak-check-answer-${index}`} onClick={() => setOpenQuestion(openQuestion === index ? null : index)}>
                  {question}<Plus size={20} aria-hidden="true" />
                </button>
                <div className={`local-search-faq__answer ${openQuestion === index ? 'local-search-faq__answer--open' : ''}`} id={`leak-check-answer-${index}`} aria-hidden={openQuestion !== index}>
                  <div><p>{answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
