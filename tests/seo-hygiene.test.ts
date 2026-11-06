/**
 * Tests for SEO hygiene: sitemap apex domain and phone links
 */

import { readFileSync } from 'fs'
import { join } from 'path'

describe('SEO Hygiene', () => {
  describe('Sitemap uses apex domain', () => {
    test('sitemap.xml uses apex domain (not www)', () => {
      const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml')
      const sitemapContent = readFileSync(sitemapPath, 'utf-8')
      
      // Check that sitemap uses apex domain
      expect(sitemapContent).toContain('https://getinsuredtrucking.com/')
      
      // Check that sitemap does NOT use www
      expect(sitemapContent).not.toContain('https://www.getinsuredtrucking.com/')
      
      // Verify all 22 URLs are present with apex domain
      const urlMatches = sitemapContent.match(/<loc>https:\/\/getinsuredtrucking\.com\//g)
      expect(urlMatches).toHaveLength(22)
    })
    
    test('robots.txt references apex domain sitemap', () => {
      const robotsPath = join(process.cwd(), 'public', 'robots.txt')
      const robotsContent = readFileSync(robotsPath, 'utf-8')
      
      // Check that robots.txt uses apex domain for sitemap
      expect(robotsContent).toContain('Sitemap: https://getinsuredtrucking.com/sitemap.xml')
      
      // Check that robots.txt does NOT use www
      expect(robotsContent).not.toContain('https://www.getinsuredtrucking.com/')
    })
  })
  
  describe('Phone links present', () => {
    test('homepage has visible clickable phone link', () => {
      const homepagePath = join(process.cwd(), 'app', 'page.tsx')
      const homepageContent = readFileSync(homepagePath, 'utf-8')
      
      // Check for tel: link with correct phone number
      expect(homepageContent).toContain('tel:270-205-3002')
      expect(homepageContent).toContain('href="tel:270-205-3002"')
      
      // Verify styling matches existing SEO pages
      expect(homepageContent).toContain('hover:underline')
      expect(homepageContent).toContain('font-semibold')
      
      // Check display text shows phone number
      expect(homepageContent).toContain('>270-205-3002</a>')
    })
    
    test('readiness page has visible clickable phone link', () => {
      const readinessPath = join(process.cwd(), 'app', 'new-authority', 'readiness', 'page.tsx')
      const readinessContent = readFileSync(readinessPath, 'utf-8')
      
      // Check for tel: link with correct phone number
      expect(readinessContent).toContain('tel:270-205-3002')
      expect(readinessContent).toContain('href="tel:270-205-3002"')
      
      // Verify styling matches existing SEO pages
      expect(readinessContent).toContain('text-navy')
      expect(readinessContent).toContain('hover:underline')
      expect(readinessContent).toContain('font-semibold')
      
      // Check display text shows phone number
      expect(readinessContent).toContain('>270-205-3002</a>')
    })
    
    test('phone links use correct styling class', () => {
      const homepagePath = join(process.cwd(), 'app', 'page.tsx')
      const readinessPath = join(process.cwd(), 'app', 'new-authority', 'readiness', 'page.tsx')
      
      const homepageContent = readFileSync(homepagePath, 'utf-8')
      const readinessContent = readFileSync(readinessPath, 'utf-8')
      
      // Both should have hover:underline and font-semibold for accessibility and consistency
      expect(homepageContent).toMatch(/href="tel:270-205-3002".*hover:underline.*font-semibold/)
      expect(readinessContent).toMatch(/href="tel:270-205-3002".*hover:underline.*font-semibold/)
    })
  })
  
  describe('Content compliance', () => {
    test('sitemap does not contain banned terms', () => {
      const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml')
      const sitemapContent = readFileSync(sitemapPath, 'utf-8')
      
      const prohibitedTerms = ['BMC', 'Benton Insurance', 'intermodal', 'cheap', 'guarantee']
      
      prohibitedTerms.forEach(term => {
        expect(sitemapContent.toLowerCase()).not.toContain(term.toLowerCase())
      })
      
      // Check for em dashes
      expect(sitemapContent).not.toContain('—')
      expect(sitemapContent).not.toContain('–')
    })
    
    test('phone links do not contain wrong phone numbers', () => {
      const homepagePath = join(process.cwd(), 'app', 'page.tsx')
      const readinessPath = join(process.cwd(), 'app', 'new-authority', 'readiness', 'page.tsx')
      
      const homepageContent = readFileSync(homepagePath, 'utf-8')
      const readinessContent = readFileSync(readinessPath, 'utf-8')
      
      // Only correct phone number should be present
      const telLinks = [
        ...homepageContent.match(/tel:\d{3}-\d{3}-\d{4}/g) || [],
        ...readinessContent.match(/tel:\d{3}-\d{3}-\d{4}/g) || [],
      ]
      
      telLinks.forEach(link => {
        expect(link).toBe('tel:270-205-3002')
      })
    })
  })
  
  describe('Trailing slash consistency', () => {
    test('sitemap preserves trailing slashes for all routes', () => {
      const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml')
      const sitemapContent = readFileSync(sitemapPath, 'utf-8')
      
      // Extract all <loc> URLs
      const locUrls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || []
      
      // All URLs should end with trailing slash
      locUrls.forEach(locUrl => {
        const url = locUrl.replace(/<\/?loc>/g, '')
        expect(url).toMatch(/\/$/)
      })
    })
  })
})
