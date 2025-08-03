import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Business Automation Specialists in Johannesburg',
  description: 'Digital Penguin is a business automation specialist based in South Africa, helping companies streamline operations with custom software solutions tailored to their workflow.',
  keywords: ["business automation South Africa",
  "workflow automation South Africa",
  "custom software development South Africa",
  "business process automation",
  "digital transformation for businesses",
  "automation specialists South Africa",
  "South African tech solutions",
  "business efficiency software",
  "operational automation services",
  "process optimization software",
  "CRM system development",
  "task automation tools",
  "API integrations South Africa",
  "software for small businesses",
  "custom ERP solutions",
  "digital workflow systems",
  "business automation consultants",
  "automation for SMEs",
  "cloud-based automation tools",
  "system integration services",
  "Johannesburg automation specialists",
  "Cape Town custom software",
  "Durban workflow software",
  "Pretoria tech solutions"],
  authors: [{ name: 'Digital Penguin', url: 'https://digitalpenguin.co.za' }],
  creator: 'Digital Penguin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
