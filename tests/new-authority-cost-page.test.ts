/**
 * Tests for new authority insurance cost page
 */

import { readFileSync } from 'fs'
import { join } from 'path'

describe('New Authority Insurance Cost Page', () => {
  const pagePath = join(process.cwd(), 'app', 'new-authority-insurance-cost', 'page.tsx')
  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml')
  const hubPath = join(process.cwd(), 'components', 'NewAuthorityContent.tsx')
  
  let pageContent: string
  let sitemapContent: string
  let hubContent: string
  
  beforeAll(() => {
    pageContent = readFileSync(pagePath, 'utf-8')
    sitemapContent = readFileSync(sitemapPath, 'utf-8')
    hubContent = readFileSync(hubPath, 'utf-8')
  })
  
  describe('Page metadata', () => {
    test('has unique title', () => {
      expect(pageContent).toContain("title: 'New Authority Insurance Cost | Affordable Truck Insurance'")
    })
    
    test('has proper canonical URL', () => {
      expect(pageContent).toContain("canonical: 'https://getinsuredtrucking.com/new-authority-insurance-cost/'")
    })
    
    test('has openGraph metadata', () => {
      expect(pageContent).toContain("openGraph: {")
      expect(pageContent).toContain("title: 'New Authority Insurance Cost | Affordable Truck Insurance'")
      expect(pageContent).toContain("url: 'https://getinsuredtrucking.com/new-authority-insurance-cost/'")
    })
    
    test('has twitter metadata', () => {
      expect(pageContent).toContain("twitter: {")
      expect(pageContent).toContain("card: 'summary_large_image'")
    })
    
    test('has descriptive H1', () => {
      expect(pageContent).toMatch(/<h1[^>]*>[\s]*New Authority Insurance Cost[\s]*<\/h1>/)
    })
  })
  
  describe('FAQ schema', () => {
    test('has FAQPage JSON-LD schema', () => {
      expect(pageContent).toContain("'@type': 'FAQPage'")
    })
    
    test('FAQ questions match visible FAQ', () => {
      // Check for key questions in both schema and visible content
      const keyQuestions = [
        'Is there a fixed average cost for new authority insurance?',
        'What is the federal minimum liability limit for trucking?',
        'Why does new authority insurance cost more',
        'When do insurance rates typically improve',
        'Do I need insurance before FMCSA grants my authority?'
      ]
      
      keyQuestions.forEach(question => {
        // Should appear in both JSON-LD and visible FAQ
        const matches = pageContent.match(new RegExp(question.replace(/\?/g, '\\?'), 'gi'))
        expect(matches?.length).toBeGreaterThanOrEqual(2) // Schema + visible
      })
    })
    
    test('FAQ answers in schema match visible answers', () => {
      // Verify that schema answers aren't just making claims not in visible content
      expect(pageContent).toContain('There is no single reliable national average for new authority insurance premiums')
      expect(pageContent).toContain('Federal minimum public liability for most for-hire property carriers')
      expect(pageContent).toContain('$750,000')
    })
  })
  
  describe('Required links', () => {
    test('has link to /quote/', () => {
      expect(pageContent).toContain('href="/quote"')
    })
    
    test('has phone link tel:270-205-3002', () => {
      expect(pageContent).toContain('tel:270-205-3002')
      expect(pageContent).toContain('270-205-3002')
    })
    
    test('has link to /new-authority/readiness/', () => {
      expect(pageContent).toContain('href="/new-authority/readiness"')
      expect(pageContent).toContain('readiness checker')
    })
    
    test('has link to /new-authority-insurance/', () => {
      expect(pageContent).toContain('href="/new-authority-insurance"')
      expect(pageContent).toContain('new authority insurance guide')
    })
    
    test('has link to /truck-insurance-down-payment/', () => {
      expect(pageContent).toContain('href="/truck-insurance-down-payment"')
      expect(pageContent).toContain('truck insurance down payments')
    })
  })
  
  describe('Sourced claims', () => {
    test('links to FMCSA insurance filing requirements', () => {
      expect(pageContent).toContain('fmcsa.dot.gov/registration/insurance-filing-requirements')
    })
    
    test('links to Progressive commercial truck cost page', () => {
      expect(pageContent).toContain('progressivecommercial.com/commercial-auto-insurance/truck-insurance/commercial-truck-insurance-cost')
    })
    
    test('links to Progressive startup business page', () => {
      expect(pageContent).toContain('progressivecommercial.com/business-insurance/startup-business-insurance')
    })
    
    test('caveats Progressive averages appropriately', () => {
      expect(pageContent).toContain('not specific to new authorities')
      expect(pageContent).toContain('general for-hire averages')
      expect(pageContent).toContain('Your quote can be higher or lower')
    })
    
    test('does not claim unsupported new-authority averages', () => {
      // Should NOT make definitive claims like "new authorities typically pay $X-$Y"
      expect(pageContent).not.toMatch(/new authorit(y|ies) (typically|usually|generally|often) (pay|cost|run) \$\d+/i)
    })
  })
  
  describe('Content compliance', () => {
    test('does not mention BMC form codes', () => {
      expect(pageContent.toLowerCase()).not.toContain('bmc')
    })
    
    test('does not use "cheapest"', () => {
      expect(pageContent.toLowerCase()).not.toContain('cheapest')
    })
    
    test('does not use promissory/guarantee language', () => {
      expect(pageContent.toLowerCase()).not.toContain('guarantee')
      expect(pageContent.toLowerCase()).not.toContain('guaranteed')
      expect(pageContent.toLowerCase()).not.toContain('we promise')
    })
    
    test('does not mention Benton Insurance', () => {
      expect(pageContent.toLowerCase()).not.toContain('benton insurance')
    })
    
    test('does not mention intermodal', () => {
      expect(pageContent.toLowerCase()).not.toContain('intermodal')
    })
    
    test('does not use em dashes', () => {
      expect(pageContent).not.toContain('—')
      expect(pageContent).not.toContain('–')
    })
    
    test('uses educational not promissory tone', () => {
      // Should use "can" not "will" for rate improvements
      expect(pageContent).toMatch(/rates can improve/i)
      expect(pageContent).not.toMatch(/rates will (improve|decrease|drop)/i)
    })
  })
  
  describe('Sitemap integration', () => {
    test('sitemap includes new page URL', () => {
      expect(sitemapContent).toContain('<loc>https://getinsuredtrucking.com/new-authority-insurance-cost/</loc>')
    })
    
    test('sitemap preserves all 22 existing URLs', () => {
      const existingUrls = [
        'https://getinsuredtrucking.com/',
        'https://getinsuredtrucking.com/quote/',
        'https://getinsuredtrucking.com/new-authority-insurance/',
        'https://getinsuredtrucking.com/new-authority/readiness/',
        'https://getinsuredtrucking.com/states/',
        'https://getinsuredtrucking.com/about/',
        'https://getinsuredtrucking.com/alabama-trucking-insurance/',
        'https://getinsuredtrucking.com/florida-trucking-insurance/',
        'https://getinsuredtrucking.com/georgia-trucking-insurance/',
        'https://getinsuredtrucking.com/indiana-trucking-insurance/',
        'https://getinsuredtrucking.com/kentucky-trucking-insurance/',
        'https://getinsuredtrucking.com/missouri-trucking-insurance/',
        'https://getinsuredtrucking.com/north-carolina-trucking-insurance/',
        'https://getinsuredtrucking.com/tennessee-trucking-insurance/',
        'https://getinsuredtrucking.com/texas-trucking-insurance/',
        'https://getinsuredtrucking.com/owner-operator-insurance-cost/',
        'https://getinsuredtrucking.com/small-fleet-insurance/',
        'https://getinsuredtrucking.com/hot-shot-insurance-cost/',
        'https://getinsuredtrucking.com/box-truck-insurance-cost/',
        'https://getinsuredtrucking.com/truck-insurance-down-payment/',
        'https://getinsuredtrucking.com/privacy/',
        'https://getinsuredtrucking.com/terms/',
      ]
      
      existingUrls.forEach(url => {
        expect(sitemapContent).toContain(`<loc>${url}</loc>`)
      })
    })
    
    test('sitemap has exactly 23 URLs now', () => {
      const urlMatches = sitemapContent.match(/<loc>https:\/\/getinsuredtrucking\.com\//g)
      expect(urlMatches).toHaveLength(23)
    })
    
    test('sitemap uses apex domain (not www)', () => {
      expect(sitemapContent).not.toContain('www.getinsuredtrucking.com')
    })
  })
  
  describe('Discoverability - incoming link', () => {
    test('hub page links to cost page', () => {
      expect(hubContent).toContain('href="/new-authority-insurance-cost"')
      expect(hubContent).toContain('what affects new authority insurance cost')
    })
    
    test('incoming link is contextual', () => {
      // Should be in a relevant context, not just a nav list
      expect(hubContent).toContain('Learn more about')
      expect(hubContent).toContain('why first-year pricing often differs')
    })
  })
  
  describe('Regulatory limits', () => {
    test('cites $750,000 federal minimum correctly', () => {
      expect(pageContent).toContain('$750,000')
      expect(pageContent).toContain('federal minimum')
    })
    
    test('qualifies that higher limits exist', () => {
      expect(pageContent).toContain('Higher limits apply')
      expect(pageContent).toContain('certain hazardous materials')
    })
    
    test('distinguishes federal minimum from contract requirements', () => {
      expect(pageContent).toContain('$1,000,000')
      expect(pageContent).toMatch(/brokers.*require/i)
    })
  })
  
  describe('Educational focus', () => {
    test('explains premium vs down payment', () => {
      expect(pageContent).toContain('annual premium')
      expect(pageContent).toContain('down payment')
      expect(pageContent).toContain('different numbers')
    })
    
    test('explains why new authority pricing differs', () => {
      expect(pageContent).toContain('lack operating history')
      expect(pageContent).toContain('no track record')
    })
    
    test('lists cost factors without specific dollar claims', () => {
      expect(pageContent).toContain('Driver Experience and Record')
      expect(pageContent).toContain('Type of Freight')
      expect(pageContent).toContain('Operating Radius')
      expect(pageContent).toContain('Equipment Type')
    })
  })
})
