/**
 * Tests for Scout's five SEO tweaks
 */

import { readFileSync } from 'fs'
import { join } from 'path'

describe('Scout SEO Tweaks', () => {
  describe('Down payment contextual links', () => {
    test('owner-operator page has down payment link', () => {
      const pagePath = join(process.cwd(), 'app', 'owner-operator-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      // Check for link to /truck-insurance-down-payment/
      expect(pageContent).toContain('href="/truck-insurance-down-payment"')
      expect(pageContent).toContain('truck insurance down payments')
      
      // Verify it's in the down payment section
      expect(pageContent).toContain('Payment Options and Down Payments')
    })
    
    test('hot-shot page has down payment link', () => {
      const pagePath = join(process.cwd(), 'app', 'hot-shot-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      // Check for link to /truck-insurance-down-payment/
      expect(pageContent).toContain('href="/truck-insurance-down-payment"')
      expect(pageContent).toContain('truck insurance down payments')
      
      // Verify it's in the down payment section
      expect(pageContent).toContain('Down Payment Requirements')
    })
  })
  
  describe('New authority contextual links', () => {
    test('owner-operator page has new authority links', () => {
      const pagePath = join(process.cwd(), 'app', 'owner-operator-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      // Check for both links
      expect(pageContent).toContain('href="/new-authority-insurance"')
      expect(pageContent).toContain('href="/new-authority/readiness"')
      expect(pageContent).toContain('new authority insurance')
      expect(pageContent).toContain('readiness for new authority')
      
      // Verify it's in the new authority section
      expect(pageContent).toContain('New Authority vs. Established Authority')
    })
    
    test('box-truck page has new authority links', () => {
      const pagePath = join(process.cwd(), 'app', 'box-truck-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      // Check for both links
      expect(pageContent).toContain('href="/new-authority-insurance"')
      expect(pageContent).toContain('href="/new-authority/readiness"')
      expect(pageContent).toContain('new authority insurance')
      expect(pageContent).toContain('readiness for new authority')
      
      // Verify it's in the new authority section
      expect(pageContent).toContain('New Authority vs. Established Authority')
    })
  })
  
  describe('Title updates', () => {
    test('hot-shot title does not contain Texas & Florida Coverage', () => {
      const pagePath = join(process.cwd(), 'app', 'hot-shot-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      // Check that old title is removed
      expect(pageContent).not.toContain('Texas & Florida Coverage')
      
      // Verify new title exists and is natural (no dangling separators)
      expect(pageContent).toContain("title: 'Hot Shot Insurance Cost'")
      expect(pageContent).not.toContain("title: 'Hot Shot Insurance Cost |'")
      expect(pageContent).not.toContain("title: 'Hot Shot Insurance Cost | '")
      
      // Check metadata, openGraph, and twitter
      const titleMatches = pageContent.match(/title: '([^']+)'/g) || []
      titleMatches.forEach(match => {
        if (match.includes('Hot Shot Insurance Cost')) {
          expect(match).toBe("title: 'Hot Shot Insurance Cost'")
        }
      })
    })
    
    test('box-truck title does not contain Commercial Cargo Van Coverage', () => {
      const pagePath = join(process.cwd(), 'app', 'box-truck-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      // Check that old title is removed
      expect(pageContent).not.toContain('Commercial Cargo Van Coverage')
      
      // Verify new title exists and is natural (no dangling separators)
      expect(pageContent).toContain("title: 'Box Truck Insurance Cost'")
      expect(pageContent).not.toContain("title: 'Box Truck Insurance Cost |'")
      expect(pageContent).not.toContain("title: 'Box Truck Insurance Cost | '")
      
      // Check metadata, openGraph, and twitter
      const titleMatches = pageContent.match(/title: '([^']+)'/g) || []
      titleMatches.forEach(match => {
        if (match.includes('Box Truck Insurance Cost')) {
          expect(match).toBe("title: 'Box Truck Insurance Cost'")
        }
      })
    })
  })
  
  describe('Readiness page H1', () => {
    test('readiness H1 is in Title Case', () => {
      const pagePath = join(process.cwd(), 'app', 'new-authority', 'readiness', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      // Check for Title Case H1
      expect(pageContent).toContain('<h1 className="text-3xl font-bold text-navy mb-2">New Authority Readiness Checker</h1>')
      
      // Ensure lowercase version is not present
      expect(pageContent).not.toMatch(/<h1[^>]*>New authority readiness checker<\/h1>/)
    })
  })
  
  describe('Footer readiness link', () => {
    test('footer Resources section has Readiness Checker link', () => {
      const footerPath = join(process.cwd(), 'components', 'Footer.tsx')
      const footerContent = readFileSync(footerPath, 'utf-8')
      
      // Check for link
      expect(footerContent).toContain('href="/new-authority/readiness"')
      expect(footerContent).toContain('Readiness Checker')
      
      // Verify it's in Resources section
      expect(footerContent).toContain('Resources')
    })
    
    test('footer link appears before Down Payments', () => {
      const footerPath = join(process.cwd(), 'components', 'Footer.tsx')
      const footerContent = readFileSync(footerPath, 'utf-8')
      
      const readinessIndex = footerContent.indexOf('href="/new-authority/readiness"')
      const downPaymentIndex = footerContent.indexOf('href="/truck-insurance-down-payment"')
      
      expect(readinessIndex).toBeGreaterThan(-1)
      expect(downPaymentIndex).toBeGreaterThan(-1)
      expect(readinessIndex).toBeLessThan(downPaymentIndex)
    })
  })
  
  describe('Preserved elements', () => {
    test('owner-operator page still has quote links', () => {
      const pagePath = join(process.cwd(), 'app', 'owner-operator-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      expect(pageContent).toContain('href="/quote"')
    })
    
    test('owner-operator page still has phone link', () => {
      const pagePath = join(process.cwd(), 'app', 'owner-operator-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      expect(pageContent).toContain('tel:270-205-3002')
    })
    
    test('hot-shot page still has quote links', () => {
      const pagePath = join(process.cwd(), 'app', 'hot-shot-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      expect(pageContent).toContain('href="/quote"')
    })
    
    test('box-truck page still has quote links', () => {
      const pagePath = join(process.cwd(), 'app', 'box-truck-insurance-cost', 'page.tsx')
      const pageContent = readFileSync(pagePath, 'utf-8')
      
      expect(pageContent).toContain('href="/quote"')
    })
  })
  
  describe('Content compliance', () => {
    test('no banned terms in updated sections', () => {
      const pages = [
        join(process.cwd(), 'app', 'owner-operator-insurance-cost', 'page.tsx'),
        join(process.cwd(), 'app', 'hot-shot-insurance-cost', 'page.tsx'),
        join(process.cwd(), 'app', 'box-truck-insurance-cost', 'page.tsx'),
        join(process.cwd(), 'app', 'new-authority', 'readiness', 'page.tsx'),
        join(process.cwd(), 'components', 'Footer.tsx'),
      ]
      
      const prohibitedTerms = ['BMC', 'cheapest', 'guarantee', 'Benton Insurance', 'intermodal']
      
      pages.forEach(pagePath => {
        const pageContent = readFileSync(pagePath, 'utf-8')
        
        prohibitedTerms.forEach(term => {
          expect(pageContent.toLowerCase()).not.toContain(term.toLowerCase())
        })
        
        // Check for em dashes
        expect(pageContent).not.toContain('—')
        expect(pageContent).not.toContain('–')
      })
    })
  })
})
