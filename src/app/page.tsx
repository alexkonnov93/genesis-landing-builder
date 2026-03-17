import { NavBar } from '@/components/layout';
import { HeroSection, DeploymentsSection, IntegrationsSection } from '@/components/sections';

const navLinks = [
  { label: 'Menu Item', href: '#' },
  { label: 'Menu Item', href: '#' },
  { label: 'Menu Item', href: '#' },
  { label: 'Menu Item', href: '#' },
];

const navActions = [
  { label: 'Ghost Button', href: '#', variant: 'ghost' as const },
  { label: 'Secondary Button', href: '#', variant: 'tertiary' as const },
  { label: 'Primary Button', href: '#', variant: 'primary' as const },
];

const deploymentLogos = [
  { src: '/images/logos/aws.svg', alt: 'AWS', width: 52, height: 31 },
  { src: '/images/logos/snowflake.svg', alt: 'Snowflake', width: 142, height: 34 },
  { src: '/images/logos/databricks.svg', alt: 'Databricks', width: 122, height: 18 },
  { src: '/images/logos/azure.svg', alt: 'Azure', width: 96, height: 28 },
  { src: '/images/logos/docker.svg', alt: 'Docker', width: 100, height: 21 },
];

const integrationLogos = [
  { src: '/images/integrations/postgresql.svg', alt: 'PostgreSQL', width: 82, height: 80 },
  { src: '/images/integrations/bigquery-icon.svg', alt: 'BigQuery', width: 125, height: 42 },
  { src: '/images/integrations/google-cloud.svg', alt: 'Google Cloud', width: 203, height: 32 },
  { src: '/images/integrations/aws.svg', alt: 'AWS', width: 67, height: 40 },
  { src: '/images/integrations/github.svg', alt: 'GitHub', width: 129, height: 33 },
  { src: '/images/integrations/gemini.svg', alt: 'Gemini', width: 96, height: 35 },
  { src: '/images/integrations/anthropic.svg', alt: 'Anthropic', width: 161, height: 18 },
  { src: '/images/integrations/grok.svg', alt: 'Grok', width: 112, height: 42, opacity: 'faded' as const },
  { src: '/images/integrations/databricks.svg', alt: 'Databricks', width: 185, height: 28, opacity: 'dim' as const },
  { src: '/images/integrations/openai.svg', alt: 'OpenAI', width: 135, height: 38 },
  { src: '/images/integrations/jira.svg', alt: 'Jira', width: 92, height: 32 },
  { src: '/images/integrations/teams.svg', alt: 'Microsoft Teams', width: 165, height: 40 },
  { src: '/images/integrations/slack.svg', alt: 'Slack', width: 118, height: 30 },
  { src: '/images/integrations/dbt.svg', alt: 'dbt', width: 97, height: 37, opacity: 'dim' as const },
  { src: '/images/integrations/azure.svg', alt: 'Microsoft Azure', width: 129, height: 38, opacity: 'faded' as const },
  { src: '/images/integrations/snowflake.svg', alt: 'Snowflake', width: 166, height: 40 },
  { src: '/images/integrations/redshift.svg', alt: 'Amazon Redshift', width: 124, height: 48 },
  { src: '/images/integrations/dagster.svg', alt: 'Dagster', width: 147, height: 32 },
  { src: '/images/integrations/sqlite.svg', alt: 'SQLite', width: 96, height: 42 },
  { src: '/images/integrations/google-workspace.svg', alt: 'Google Workspace', width: 243, height: 32 },
  { src: '/images/integrations/mysql.svg', alt: 'MySQL', width: 82, height: 56 },
];

export default function HomePage() {
  return (
    <>
      <NavBar links={navLinks} actions={navActions} />
      <HeroSection
        tag="Tag"
        headline="Generate More Alpha From Alternative Data"
        subline="Accelerate your alternative data pipeline with AI agents that automate discovery, mapping, and engineering."
        imageSrc="/images/hero-image.jpg"
        imageAlt="Skyscrapers viewed from below"
      />
      <DeploymentsSection
        tag="Deployments"
        headline="Platform-Agnostic AI Data Engineering"
        description="Choose environment and deploy our autonomous AI Agents wherever your data engineering happens. Genesis integrates natively with your existing data stack."
        logos={deploymentLogos}
      />
      <IntegrationsSection
        tag="Integrates natively with your existing data stack"
        bgSrc="/images/integrations/bg.png"
        logos={integrationLogos}
      />
    </>
  );
}
