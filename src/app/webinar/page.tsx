import { NavBar, Footer } from '@/components/layout';
import {
  HeroSection,
  DeploymentsSection,
  IntegrationsSection,
  SocialProofSection,
  RegistrationFormSection,
  ProblemStatementSection,
  TabbedContentSection,
  FeatureCardsSection,
  HostSection,
  DividerSection,
  CtaSection,
} from '@/components/sections';

/* ─── NavBar ─── */

const navLinks = [
  { label: 'Platform', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Pricing', href: '#' },
];

const navActions = [
  { label: 'Login', href: '#', variant: 'ghost' as const },
  { label: 'Free Trial', href: '#', variant: 'tertiary' as const },
  { label: 'Reserve My Seat', href: '#registration', variant: 'primary' as const },
];

/* ─── Section 2: Platform & Integration Ecosystem ─── */

const deploymentLogos = [
  { src: '/images/logos/aws.svg', alt: 'AWS', width: 52, height: 31 },
  { src: '/images/logos/azure.svg', alt: 'Azure', width: 96, height: 28 },
  { src: '/images/logos/databricks.svg', alt: 'Databricks', width: 122, height: 18 },
  { src: '/images/logos/docker.svg', alt: 'Docker', width: 100, height: 21 },
  { src: '/images/logos/snowflake.svg', alt: 'Snowflake', width: 142, height: 34 },
];

const integrationLogos = [
  { src: '/images/integrations/redshift.svg', alt: 'Amazon Redshift', width: 124, height: 48 },
  { src: '/images/integrations/bigquery-icon.svg', alt: 'Google BigQuery', width: 125, height: 42 },
  { src: '/images/integrations/google-cloud.svg', alt: 'Google Cloud', width: 203, height: 32 },
  { src: '/images/integrations/google-workspace.svg', alt: 'Google Workspace', width: 243, height: 32 },
  { src: '/images/integrations/dbt.svg', alt: 'dbt', width: 97, height: 37 },
  { src: '/images/integrations/github.svg', alt: 'GitHub', width: 129, height: 33 },
  { src: '/images/integrations/jira.svg', alt: 'Jira', width: 92, height: 32 },
  { src: '/images/integrations/mysql.svg', alt: 'MySQL', width: 82, height: 56 },
  { src: '/images/integrations/sqlite.svg', alt: 'SQLite', width: 96, height: 42 },
  { src: '/images/integrations/postgresql.svg', alt: 'PostgreSQL', width: 82, height: 80 },
  { src: '/images/integrations/openai.svg', alt: 'OpenAI', width: 135, height: 38 },
  { src: '/images/integrations/anthropic.svg', alt: 'Anthropic', width: 161, height: 18 },
  { src: '/images/integrations/grok.svg', alt: 'Grok', width: 112, height: 42 },
  { src: '/images/integrations/slack.svg', alt: 'Slack', width: 118, height: 30 },
  { src: '/images/integrations/teams.svg', alt: 'Microsoft Teams', width: 165, height: 40 },
];

/* ─── Section 3: Social Proof ─── */

const socialProofLogos = [
  { src: '/images/social-proof/growthzone.svg', alt: 'GrowthZone', width: 140, height: 32 },
  { src: '/images/social-proof/globe.svg', alt: 'Globe', width: 80, height: 32 },
  { src: '/images/social-proof/gxs-bank.svg', alt: 'GXS Bank', width: 120, height: 32 },
];

/* ─── Section 6: What You'll See ─── */

const tabs = [
  {
    title: 'A Full Engineering Team—Powered by AI',
    description:
      'Watch four specialized agents—PM, Research, Engineering, and QA—divide the work, coordinate in real time, and deliver a production-ready pipeline without a single line of manual code.',
  },
  {
    title: 'From Requirements to Monitoring, Hands-Free',
    description:
      'See every stage of pipeline development happen autonomously: source discovery, schema mapping, transformation logic, testing, deployment, and ongoing health monitoring.',
  },
  {
    title: 'One Workflow. Every Environment.',
    description:
      'Genesis agents run natively on Snowflake, Databricks, AWS, Azure, and Docker. Watch a single pipeline deploy across multiple platforms—no reconfiguration, no vendor lock-in.',
  },
  {
    title: 'No Toy Demos. Production-Grade Output.',
    description:
      "This isn't a mock-up. You'll see a real pipeline built from scratch—complete with error handling, data quality checks, documentation, and alerting—ready to run in production.",
  },
];

/* ─── Section 7: Who Should Attend ─── */

const audienceCards = [
  {
    icon: 'Users' as const,
    title: 'Data Engineering Leaders',
    description:
      'Your backlog is growing faster than your headcount. See the force multiplier.',
  },
  {
    icon: 'Server' as const,
    title: 'Platform & Infra Engineers',
    description:
      'Evaluating whether AI automation is ready for production data infrastructure. It is.',
  },
  {
    icon: 'Chart' as const,
    title: 'Analytics & BI Teams',
    description:
      'Tired of waiting weeks for a pipeline someone promised you last quarter.',
  },
  {
    icon: 'Search' as const,
    title: 'Healthy Skeptics',
    description:
      "You've heard \"production-ready AI agents\" before. Come see it happen live.",
  },
];

/* ─── Section 8: Your Host ─── */

const hostBio = `John will build a real pipeline live—while showing how Genesis agents integrate with the tools your team already uses: Slack, Jira, Google Sheets, and more.

Before Genesis, John spent years at Snowflake architecting data platform implementations for Fortune 500 clients. At AutoNation, he led the company's cloud data transformation from the ground up—deploying their first Snowflake environment, scaling enterprise analytics, and engineering Customer 360 capabilities that drove millions in measurable marketing ROI.

With 20+ years across SQL Server, Qlik, Tableau, and modern cloud platforms, John doesn't just demo software—he speaks the language of teams who've been burned by tools that overpromise and underdeliver.`;

/* ─── Page ─── */

export default function WebinarPage() {
  return (
    <>
      <NavBar links={navLinks} actions={navActions} />

      {/* Section 1: Hero */}
      <HeroSection
        highlight="FREE LUNCH on Us for All Attendees!"
        tag="Lunch & Learn | April 8th · 11:00 AM PT / 2:00 PM ET · 30 Min"
        headline="From Months to Hours: Enterprise Data Acceleration with AI Agents"
        subline="See autonomous AI agents build, test, deploy, and monitor a production data pipeline—live, in 30 minutes, on the platform you already use."
        supportingText="Pre-trained. Production-ready. Zero custom coding."
        primaryCta={{ label: 'Reserve My Seat', href: '#registration' }}
        secondaryCta={{ label: 'Start Your 30-Day Free Trial', href: '#' }}
        videoId="T4OISVrFKAI"
        videoStart={5}
      />

      {/* Section 2: Platform & Integration Ecosystem */}
      <DeploymentsSection
        tag="Deployments"
        headline="Your Platform. Your Stack. Our Agents."
        description="Genesis deploys wherever your data engineering happens—and connects to the tools your team already relies on."
        logos={deploymentLogos}
      />
      <IntegrationsSection
        tag="Integrates natively with your existing data stack"
        logos={integrationLogos}
      />

      {/* Section 3: Social Proof */}
      <SocialProofSection
        label="Trusted by enterprises accelerating critical data initiatives"
        logos={socialProofLogos}
      />

      <DividerSection />

      {/* Section 4: Registration Form */}
      <RegistrationFormSection
        headline="Save Your Spot"
        anchorId="registration"
        fields={['First Name', 'Last Name', 'Job Title', 'Company Name', 'Work Email']}
        legalText="By registering you agree to Genesis Computing's Terms of Use and acknowledge our Privacy Policy."
      />

      <DividerSection />

      {/* Section 5: Problem Statement */}
      <ProblemStatementSection
        headline="The Data Engineering Bottleneck"
        quotes={[
          'Every day a pipeline sits in your backlog costs real money. Reporting stalls. Product launches slip. Strategic initiatives lose momentum—while your team drowns in manual work.',
          "Traditional pipelines take weeks or months: researching sources, hand-coding transformations, validating outputs, firefighting failures. It's a cycle that doesn't scale.",
        ]}
        callout="What if that entire cycle collapsed to hours?"
      />

      <DividerSection />

      {/* Section 6: What You'll See */}
      <TabbedContentSection
        headline="What You'll See in 30 Minutes"
        tabs={tabs}
      />

      <DividerSection />

      {/* Section 7: Who Should Attend */}
      <FeatureCardsSection
        tag="Audience"
        headline={"Built for the People Who\nFeel the Bottleneck Most"}
        description=""
        bgSrc="/images/security/bg.png"
        cards={audienceCards}
      />

      <DividerSection />

      {/* Section 8: Your Host */}
      <HostSection
        eyebrow="Your Host"
        headline="Meet Your Demo Engineer"
        name="John DaCosta"
        title="Senior Solutions Engineer, Genesis Computing"
        bio={hostBio}
      />

      <DividerSection />

      {/* Section 9: Final CTA */}
      <CtaSection
        eyebrow="Lunch & Learn Event"
        headline="See It to Believe It"
        description="30 minutes. A real pipeline. No slides, no hand-waving—just autonomous AI agents building production infrastructure in real time. Plus, lunch is on us."
        eventDetails="April 8th · 11:00 AM PT / 2:00 PM ET"
        bgSrc="/images/cta/bg.png"
        actions={[
          { label: 'Reserve My Seat', href: '#registration', variant: 'primary' },
          { label: 'Or Start Your Free Trial Today', href: '#', variant: 'tertiary' },
        ]}
        footerNote="Every attendee gets a free lunch delivered—on us."
      />

      <Footer
        address={'Nomad Malin, 387 Park Ave S,\nNew York, NY'}
        socials={[
          { icon: '/images/footer/linkedin.svg', alt: 'LinkedIn', href: '#' },
          { icon: '/images/footer/x.svg', alt: 'X', href: '#' },
          { icon: '/images/footer/youtube.svg', alt: 'YouTube', href: '#' },
          { icon: '/images/footer/github.svg', alt: 'GitHub', href: '#' },
        ]}
        copyright="Copyright ©2026 Genesis Computing"
        legalLinks={[
          { label: 'Privacy Policy', href: 'https://www.genesiscomputing.ai/privacy' },
          { label: 'Terms of Use', href: 'https://www.genesiscomputing.ai/termsofuse' },
        ]}
      />
    </>
  );
}
